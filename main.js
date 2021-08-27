'use strict'

const mdO = document.getElementsByTagName('div')[3],
    mdT = document.getElementsByTagName('div')[5],
    mdTt = document.getElementsByTagName('div')[7],
    mdF = document.getElementsByTagName('div')[9],
    mdFf = document.getElementsByTagName('div')[11];

const dO = document.getElementsByTagName('div')[4],
    dT = document.getElementsByTagName('div')[6],
    dTt = document.getElementsByTagName('div')[8],
    dF = document.getElementsByTagName('div')[10],
    dFf = document.getElementsByTagName('div')[12];

const ar1 = document.getElementsByTagName('img')[3],
    ar2 = document.getElementsByTagName('img')[4],
    ar3 = document.getElementsByTagName('img')[5],
    ar4 = document.getElementsByTagName('img')[6],
    ar5 = document.getElementsByTagName('img')[7];

function clickF() {
    mdO.classList.toggle('activem');
    dO.classList.toggle('extra-text-d');
    dO.classList.toggle('extra-text-a');
    mdT.classList.toggle('d1-a');
    mdTt.classList.toggle('d2-a');
    mdF.classList.toggle('d3-a');
    mdFf.classList.toggle('d4-a');
    ar1.classList.toggle('rotate');
};

function clickF2() {
    mdT.classList.toggle('activem');
    dT.classList.toggle('extra-text-d');
    dT.classList.toggle('extra-text-a');
    dT.style = "margin-top: 35px;"
    mdTt.classList.toggle('d2-a');
    mdF.classList.toggle('d3-a');
    mdFf.classList.toggle('d4-a');
    ar2.classList.toggle('rotate');
};

function clickF3() {
    mdTt.classList.toggle('activem');
    dTt.classList.toggle('extra-text-d');
    dTt.classList.toggle('extra-text-a');
    dTt.style = "margin-top: 35px;"
    mdF.classList.toggle('d3-a');
    mdFf.classList.toggle('d4-a');
    ar3.classList.toggle('rotate');
};

function clickF4() {
    mdF.classList.toggle('activem');
    dF.classList.toggle('extra-text-d');
    dF.classList.toggle('extra-text-a');
    dF.style = "margin-top: 35px;"
    mdFf.classList.toggle('d4-a');
    ar4.classList.toggle('rotate');
};

function clickF5() {
    mdFf.classList.toggle('activem');
    dFf.classList.toggle('extra-text-d');
    dFf.classList.toggle('extra-text-a');
    dFf.style = "margin-top: 35px;"
    ar5.classList.toggle('rotate');
};

