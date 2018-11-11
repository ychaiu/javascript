//create melonsToAdd list

const melonsToAdd = ["Ogen", "Horned Melon", "Watermelon", "Casaba",
                 "Sharlyn", "Xigua", "Ogen", "Christmas", "Christmas",
                 "Christmas", "Christmas", "Watermelon", "Sharlyn", "Xigua",
                 "Cantaloupe", "Christmas", "Watermelon", "Christmas",
                 "Sharlyn", "Christmas", "Cantaloupe", "Casaba", "Cantaloupe",
                 "Santa Claus", "Horned Melon", "Watermelon", "Ogen",
                 "Horned Melon", "Cantaloupe", "Xigua", "Horned Melon", "Sharlyn",
                 "Horned Melon", "Sharlyn", "Cantaloupe", "Christmas",
                 "Horned Melon", "Horned Melon", "Horned Melon", "Xigua", "Xigua",
                 "Watermelon", "Cantaloupe", "Casaba", "Cantaloupe", "Casaba",
                 "Watermelon", "Santa Claus", "Casaba"];

function countMelons(melonList) {
    //Takes in a list, return a dictionary with melon counts.//
    const melonCounts = {};
    for (let melon of melonList) {
        if (melonCounts[melon]) {
            melonCounts[melon] += 1;
        }
        else {
            melonCounts[melon] = 1;
        }
        }
    return melonCounts;
    }
countMelons(melonsToAdd);