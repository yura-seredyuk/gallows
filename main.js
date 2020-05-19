let words = ['Браузер','Сервер','Фреймворк', 'Бібліотека','Рефакторинг','Багтрекер','Валідатор','Семантика','Селектор','Скріпт','Модуль','Функція'];

let word;
let answer = [];
let countError;
let letterInp = document.getElementById('letterInp');
let answerBlock = document.getElementById("answerBlock");
let errorCount = document.getElementById("errorCount");
let errorList = document.getElementById("errorList");
let rezult = document.getElementById("rezult");
let gallowImg = document.getElementById("gallowImg");
let wrongLettersArr = [];

function start() {
    countError = 0;
    word = words[parseInt(Math.random()*words.length)];
    answer = [];
    wrongLettersArr = [];
    for(let i=1; i<word.length-1; i++){
            answer.push('_');
    }
    answer.unshift(word[0]);
    answer.push(word[word.length-1].toUpperCase());
    answerBlock.innerHTML =answer.join(' ');
    errorCount.innerHTML=countError;
    gallowImg.setAttribute("src","img/hangman-"+countError+".png");
    errorList.innerHTML="";
    rezult.innerHTML="";
    letterInp.value = "";
    document.getElementById('enter').removeAttribute('disabled');
    document.getElementById('letterInp').removeAttribute('disabled');
}

function enter() {
    let letter = letterInp.value.toLowerCase();
    letterInp.value = "";
    if(letter === ""){
        alert("Введіть літеру в текстове поле!");
    } 
    else if(wrongLettersArr.indexOf(letter) >= 0 || (answer.indexOf(letter,1) != -1  && answer.lastIndexOf(letter,answer.length - 1) != -1)){
        alert("Цю літеру вже вводили!");
    }
    else {
        for(let i=1; i<word.length-1; i++){
            if(word[i] == letter){
                answer[i] = letter;
            }
        }
        if(answer.indexOf(letter) === -1){
            countError++;
            errorCount.innerHTML=countError;
            gallowImg.setAttribute("src","img/hangman-"+countError+".png");
            wrongLettersArr.push(letter);
            errorList.innerHTML = wrongLettersArr.join(", ");
            if(countError == 6){
                rezult.innerHTML="Той хто відгадував програв — загадане слово <b>"+word+"</b>.";
                document.getElementById('enter').setAttribute('disabled','"disabled"');
                document.getElementById('letterInp').setAttribute('disabled','"disabled"');
            }
        }
        answerBlock.innerHTML = answer.join(' ');
    }
    if(answer.indexOf('_') === -1){
        rezult.innerHTML="Вітаємо! Ви перемогли!";
        document.getElementById('enter').setAttribute('disabled','"disabled"');
    document.getElementById('letterInp').setAttribute('disabled','"disabled"');
    }
}