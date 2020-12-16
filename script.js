/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1000
  });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 1,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });