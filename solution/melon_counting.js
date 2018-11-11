
// Learning how to write scripts in javascript.

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                     'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                     'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                     'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                     'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                     'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                     'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                     'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                     'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                     'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                     'Watermelon', 'Santa Claus', 'Casaba'];

// Take an array and return an object with the count for each melon.
function countMelons(melonsArray) {

    const melonCounts = {};

    for (let melon of melonsArray) {

        if (melonCounts[melon]) {
            melonCounts[melon] += 1;
        } else {
            melonCounts[melon] = 1;
        }

    }

    return melonCounts;

}

console.log(countMelons(melonsToAdd));
