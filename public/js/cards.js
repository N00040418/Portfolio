const card1 = document.querySelector('.c1');
const card2 = document.querySelector('.c2');
const card3 = document.querySelector('.c3');
const card4 = document.querySelector('.c4');
const card5 = document.querySelector('.c5');
const card6 = document.querySelector('.c6');

card1.addEventListener('click', e => {
    window.location.href ("https://www.jonathanschratter.com/music");
});
card2.addEventListener('click', e => {
    window.location.assign("https://www.jonathanschratter.com/cs");
});
card3.addEventListener('click', e => {
    window.location.assign("https://www.jonathanschratter.com/ee");
});
card4.addEventListener('click', e => {
    window.location.assign("https://www.jonathanschratter.com/auto");
});
card5.addEventListener('click', e => { 
    window.location.assign("https://www.jonathanschratter.com/phy");
});
card6.addEventListener('click', e => {
    window.location.assign("https://www.jonathanschratter.com/mat");
});

