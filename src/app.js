/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let whoArr = [
    "My dog",
    "The neighbor",
    "My little brother",
    "A band of monkeys",
    "My cat"
  ];
  let actionArr = [
    "ate",
    "broke",
    "stole",
    "burned",
    "destroyed",
    "stained",
    "blow up"
  ];
  let whatArr = [
    "my homework",
    "my car",
    "my computer",
    "my keys",
    "the report",
    "the papers"
  ];
  let whenArr = [
    "last night",
    "this morning",
    "a while ago",
    "last week",
    "while I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuseBody = [whoArr, actionArr, whatArr, whenArr];

  function getValue(arr) {
    let option = Math.floor(Math.random() * arr.length);
    return arr[option];
  }

  function excuseMaker(arrOfArr) {
    // Actually this function will work with any desired output if you provide an ordered structure of words (like the body I made)
    let excuseArray = arrOfArr.map(getValue);
    return excuseArray.join(" ");
  }

  document.getElementById("excuse").innerHTML = excuseMaker(excuseBody);
  console.log(document.getElementById("excuse").innerHTML);
};
