
const facts = [
    'Hard-boiled egg yolks turn green because of a chemical reaction.',
    'Sandwiches are a lazy man’s dish.',
    'The Yale culinary tablets are the oldest cookbooks in the world.',
    'You can’t mess up mushrooms.',
    'Black pepper was so valuable, it used to be a currency in the Middle Ages.',
    'In 16th Century England, pies were filled with surprises.',
    'Pufferfish is the most dangerous dish to prepare (or eat).',
    'Pastry chefs must master the flute.',
    'The American Fat Salvage Committee urged housewives to donate excess fat from cooking to the army in World War II.',
    'When cooking with alcohol, not all of the liquor “burns off”.',
    'Improper ventilation of cooking fumes causes 3.3% of worldwide deaths.',
    'Cooking recipes aren’t subject to copyright.',
    'Microwaving is the healthiest way to cook vegetables.',
    'The pound cake used to have a literal pound of each ingredient.',
    'The fear of cooking is called "mageirocophobia."',
    'Wooden cutting boards vs plastic cutting boards? Just clean them well.',
    'A certain variety of cassava turns into cyanide if not prepared correctly.',
    'There’s still no direct link between cancer and grilled food.',
    'Stuffed camel is the largest item ever found in a menu.',
    'France was really serious about their bread.',
    'The iconic chef’s hat is called a toque.',
    'Soup has been around a long, long time.',
    'American consumers spend more money on restaurant food than food they can cook at home.',
    'Saffron is more expensive than gold.',
    'Alba white Italian truffles come in at a close second.',
    'You’d cut yourself less with a sharp knife than a dull one.',
    'Bird’s nest soup is made of bird saliva.',
    'Edible gold is made from 24 karat gold.',
    'Food TV inspires viewers to eat more but not to cook more.',
    'Salted butter can be left out of the fridge longer than unsalted butter.',
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomFact() {
    const randomIndex = getRandomInt(29);
    return facts.slice(randomIndex, randomIndex + 1)
}

export default randomFact;