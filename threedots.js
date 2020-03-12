const ages = [22, 23, 25, 26];
const ages2 = [12, 25, 13];
const ages3 = [44, 55, 93];


const allAges = ages.concat(ages2).concat([100]).concat(ages3);
console.log(allAges);


const allAges2 = [...ages, ...ages2, 100, ...ages3];
//console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 250;

const takaPoisha = [650, 450, 250];
const maximum = Math.max(...takaPoisha);

//const maximum = Math.max(business, minister, sochib);
console.log(maximum);


