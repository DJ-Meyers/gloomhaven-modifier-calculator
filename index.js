const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Base Modifier Deck
    const deck = [
        { 'type': '+0', 'rolling': false },
        { 'type': '+0', 'rolling': false },
        { 'type': '+0', 'rolling': false },
        { 'type': '+0', 'rolling': false },
        { 'type': '+0', 'rolling': false },
        { 'type': '+0', 'rolling': false },
        { 'type': '+1', 'rolling': false },
        { 'type': '+1', 'rolling': false },
        { 'type': '+1', 'rolling': false },
        { 'type': '+1', 'rolling': false },
        { 'type': '+1', 'rolling': false },
        { 'type': '-1', 'rolling': false },
        { 'type': '-1', 'rolling': false },
        { 'type': '-1', 'rolling': false },
        { 'type': '-1', 'rolling': false },
        { 'type': '-1', 'rolling': false },
        { 'type': '+2', 'rolling': false },
        { 'type': '-2', 'rolling': false },
        { 'type': '*2', 'rolling': false },
        { 'type': '*0', 'rolling': false }
    ];

    const discard = []; 
    const advantage = false, disadvantage = false;

    const enemy = { 'hp': 5, 'shield': 1 };
    const attack = { 'damage': 4, 'pierce': 0 };

    const trials = 1000;

    let totalDamage = 0;

    shuffle(deck);
    for (let i = 0; i < trials; i++)
    {
        shuffle(deck);
        totalDamage += calculateDamage(deck, attack, enemy, advantage, disadvantage);
    }
    const response = { 'avg': totalDamage/trials };
    res.json(response);
    // for (let i = 0; i < trials; i++)
    // {
    //     deck.Shuffle();
    //     totalDamage += calculateDamage
    // }
});

app.listen(port, () => console.log(`Listening on Port ${port}`));

const shuffle = function(array) {
    let currIndex = array.length;
    let tempValue = {}, randIndex = 0;

    while (currIndex !== 0)
    {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        tempValue = array[currIndex];
        array[currIndex] = array[randIndex];
        array[randIndex] = tempValue;
    }

    return array;
}

const calculateDamage = function(deck, attack, enemy, advantage, disadvantage)
{
    // Choose the right modifier
    // if (advantage && disadvantage || !advantage && !disadvantage)
        return modify(deck, attack, enemy);
    // else if (advantage)
    //     return modifyAdv(deck, attack, enemy);
    // else if (disadvantage)
    //     return modifyDisadv(deck, attack, enemy);
    // else 
    //     return -1;
}

const modify = function (deck, attack, enemy)
{
    let cardIndex = 0;
    let damage = attack['damage'];
    do {
        let card = deck[cardIndex];
        if (card['type'] == '+0')
        {
            // Do nothing
        }
        else if (card['type'] == '+1')
        {
            damage += 1;
        }
        else if (card['type'] == '-1')
        {
            damage -= 1;
        }
        else if (card['type'] == '+2')
        {
            damage += 2;
        }
        else if (card['type'] == '-2')
        {
            damage -= 2;
        }
        else if (card['type'] == '*2')
        {
            damage *= 2;
        }
        else if (card['type'] == '*0')
        {
            damage = 0;
        }
        else 
        {
            console.log(`Unknown Card Type: ${card['type']}`);
        }
        cardIndex++;
    } while (deck[cardIndex]['rolling'] != false);

    let mitigation = Math.max(0, enemy['shield'] - attack['pierce']);
    return damage - mitigation;
}