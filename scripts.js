window.addEventListener('load', function(){



let whiteButton = document.getElementById('whiteButton');
let blueButton = document.getElementById('blueButton');
let redButton = document.getElementById('redButton');
let blackButton = document.getElementById('blackButton');
let greenButton = document.getElementById('greenButton');
let htmlFile = document.body
let finalQuestion = document.getElementById('finalQuestion');

whiteButton.addEventListener("click", function(){
    htmlFile.style.backgroundColor = 'rgb(239, 230, 183)';
    finalQuestion.innerHTML = 'Good Choice!'
});

blueButton.addEventListener("click", function(){
    htmlFile.style.backgroundColor = 'powderblue';
    finalQuestion.innerHTML = 'Good Choice!'
});

blackButton.addEventListener("click", function(){
    htmlFile.style.backgroundColor = 'rgb(63, 63, 63)';
    finalQuestion.innerHTML = 'Good Choice!'
});

redButton.addEventListener("click", function(){
    htmlFile.style.backgroundColor = 'rgb(245, 83, 83)';
    finalQuestion.innerHTML = 'Good Choice!'
});

greenButton.addEventListener("click", function(){
    htmlFile.style.backgroundColor = 'rgb(99, 245, 99)';
    finalQuestion.innerHTML = 'Good Choice!'
});


whiteButton.addEventListener('mouseover', function(){
    whiteButton.style.backgroundColor = 'goldenrod';
});
whiteButton.addEventListener('mouseleave', function(){
    whiteButton.style.backgroundColor = '';
});

blueButton.addEventListener('mouseover', function(){
    blueButton.style.backgroundColor = 'blue';
});
blueButton.addEventListener('mouseleave', function(){
    blueButton.style.backgroundColor = '';
});

blackButton.addEventListener('mouseover', function(){
    blackButton.style.backgroundColor = 'grey';
});
blackButton.addEventListener('mouseleave', function(){
    blackButton.style.backgroundColor = '';
});

redButton.addEventListener('mouseover', function(){
    redButton.style.backgroundColor = 'red';
});
redButton.addEventListener('mouseleave', function(){
    redButton.style.backgroundColor = '';
});

greenButton.addEventListener('mouseover', function(){
    greenButton.style.backgroundColor = 'green';
});
greenButton.addEventListener('mouseleave', function(){
    greenButton.style.backgroundColor = '';
});
});