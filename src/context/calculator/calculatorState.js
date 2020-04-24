import React, { useReducer } from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import { UPDATE_RESULTS } from '../Types';
import {getKey} from '../deck/uniques';

const CalculatorState = props => {

  // Default values for enemy/attack/scenario level etc
  const initialState = {
    averageDamage: null,
    killPct: null,
    negativeDrawPct: null
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  const calculateDamage = (attack, deck) => {
    // Calculate the damage
    if (attack.advantage === true) {
      calculateAdvDis(attack, deck, true);
    }
    else if (attack.disadvantage === true) {
      calculateAdvDis(attack, deck, false);
    }
    else if (attack.advantage === false && attack.disadvantage === false) {
      calculateNormal(attack, deck);
    }
    else {
      console.log('How did you do that?');
    }
  }

  const calculateNextRolling = (deck, rollingCard, usedCards, attack, negativeDraws, kills) => {
    let newDeck = deck.slice();
    usedCards.forEach(usedCard => {
      newDeck.splice(newDeck.findIndex(deckCard => {
        return getKey(deckCard) === getKey(usedCard);
      }), 1);
    });

    let rollingModifier = ApplyModifier(rollingCard, attack) - attack.attackDamage;
    let rollingTotalDamage = 0;
    let rollingNegativeDraws = 0;
    let rollingKills = 0;
    let rollingDmg = attack.attackDamage;

    newDeck.forEach(card => {
      
      if (card.rolling !== true) rollingDmg = ApplyModifier(card, attack) + rollingModifier;
      else rollingDmg = calculateNextRolling(newDeck, card, [...usedCards, card], attack, rollingNegativeDraws, rollingKills) + rollingModifier;

      rollingTotalDamage += rollingDmg;

      if (rollingDmg >= attack.enemyHP) rollingKills++;
      if (rollingDmg <= Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) rollingNegativeDraws++;
    })

    negativeDraws += rollingNegativeDraws / newDeck.length;
    kills += rollingKills / newDeck.length;

    console.log(`rollingNegativeDraws: ${rollingNegativeDraws}`);
    console.log(`rollingKills: ${rollingKills}`);
    console.log(`rollingTotalDamage: ${rollingTotalDamage / newDeck.length}`);

    return rollingTotalDamage / newDeck.length;
  };

  const calculateNormal = (attack, deck) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let kills = 0;
    let dmg = attack.attackDamage;
    deck.forEach(card => {

      if (card.rolling !== true) dmg = ApplyModifier(card, attack);
      else dmg = calculateNextRolling(deck, card, [card], attack, negativeDraws, kills);

      totalDamage += dmg;
      if (dmg >= attack.enemyHP) kills++;
      if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;

    });
    const averageDamage = totalDamage / deck.length;
    const negativeDrawPct = 100 * negativeDraws / deck.length;
    const killPct = 100 * kills / deck.length;

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct
      }
    });
  };

  const calculateAdvDis = (attack, deck, isAdv) => {
    let totalDamage = 0;
    let negativeDraws = 0;
    let maxDamageHits = 0, minDamageHits = 0;
    let kills = 0;
    let dmg = -1;
    let newDeck = Array.from(deck);
    deck.forEach(card1 => { 
      let cardsDrawn = 2;
      let dmg1 = ApplyModifier(card1, attack);
      newDeck.shift();     

      newDeck.forEach(card2 => {
        let dmg2 = ApplyModifier(card2, attack);

        
        if (card1.rolling === true && card2.rolling === true) {
          let usedCards = [card1, card2];
          let chosenCard = isAdv ? (dmg1 > dmg2 ? card1 : card2) : (dmg1 > dmg2 ? card2 : card1); 
          dmg = calculateNextRolling(deck, chosenCard, usedCards, attack, negativeDraws, kills);
        }
        else if (card1.rolling === true) {
          if (isAdv) {
            if (dmg2 === 0) dmg = 0
            else dmg = Math.max(dmg1 + dmg2 - attack.attackDamage, 0);
          }
          else dmg = dmg2;
        }
        else if (card2.rolling === true) {
          if (isAdv) {
            if (dmg1 === 0) dmg = 0;
            else dmg = Math.max(dmg1 + dmg2 - attack.attackDamage, 0);
          }
          else {
            dmg = dmg1;
          }
        }
        else {
          dmg = isAdv ? Math.max(dmg1, dmg2) : Math.min(dmg1, dmg2);
        }

        totalDamage += dmg; 
        if (dmg === 0) minDamageHits++;
        if (dmg >= 6) maxDamageHits++;

        if (dmg >= attack.enemyHP) kills++;
        if (dmg < Math.max(attack.attackDamage - Math.max(attack.enemyShield - attack.attackPierce, 0), 0)) negativeDraws++;
      });
    });

    const combinations = deck.length * (deck.length - 1) / 2;
    const averageDamage = totalDamage / combinations;
    const negativeDrawPct = 100 * negativeDraws / combinations;
    const killPct = 100 * kills / combinations;
    console.log(`maxDmgHits: ${100*maxDamageHits/combinations}, minDmgHits: ${100*minDamageHits/combinations}`);

    dispatch({
      type: UPDATE_RESULTS,
      payload: {
        averageDamage: averageDamage,
        negativeDrawPct: negativeDrawPct,
        killPct: killPct
      }
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        averageDamage: state.averageDamage,
        killPct: state.killPct,
        negativeDrawPct: state.negativeDrawPct,
        calculateDamage
      }}>
        {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;

function ApplyModifier(card, attack) {
  let operation = card.modifier.charAt(0);
  let modifier = parseInt(card.modifier.charAt(1));
  
  switch (operation) {
    case '+':
      return Math.max(attack.attackDamage + modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '-':
      return Math.max(attack.attackDamage - modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    case '*':
      return Math.max(attack.attackDamage * modifier - Math.max(attack.enemyShield - attack.attackPierce, 0), 0);
    default:
      return -1;
  }
}
