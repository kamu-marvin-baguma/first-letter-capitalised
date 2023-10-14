const sentence = "kamu maRvin";

const capitalisedString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const capitaliseWords = (str) => str.split(' ').map(capitalisedString).join(' ');
console.log(capitaliseWords(sentence));