"use strict";

const d = document.querySelector(".days");
const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const headline = document.querySelector(".headline");
const container = document.querySelector(".container");
const submit = document.querySelector(".submit");
const inpt = document.querySelector(".final-date");
const prompt=document.querySelector('.prompt');
let final_date = "26 nov 2021";
headline.classList.add("hidden");
container.classList.add("hidden");

submit.addEventListener("click", function () {
  final_date = inpt.value;
headline.classList.remove("hidden");
container.classList.remove("hidden");
prompt.classList.add('hidden');
const countdown = function () {
    const now = new Date();
    const future = new Date(final_date);
  
    let seconds = Math.floor((future - now) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  
    d.innerHTML = Number.parseInt(days);
    hrs.innerHTML = Number.parseInt(hours);
    mins.innerHTML = Number.parseInt(minutes);
    secs.innerHTML = Number.parseInt(seconds);
  };
  
  countdown();
  setInterval(countdown, 1000);
});


