"use strict";

const d = document.querySelector(".days");
const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");


const countdown=function(){
const now = new Date();
const future=new Date('26 nov 2021');

let seconds=Math.floor((future-now)/1000);
let minutes=Math.floor(seconds/60);
let hours=Math.floor(minutes/60);
const days=Math.floor(hours/24);


hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

d.innerHTML= Number.parseInt(days);
hrs.innerHTML= Number.parseInt(hours);
mins.innerHTML= Number.parseInt(minutes);
secs.innerHTML= Number.parseInt(seconds);
}

countdown();
setInterval(countdown, 1000);