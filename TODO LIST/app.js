

var inputbox = document.getElementById('input-box');
var listcontainar = document.getElementById('list-containar');

function Add() {
  if(inputbox.value === ""){
alert("You must write something!")
  }
  else{
var li = document.createElement('li');
li.innerHTML =inputbox.value;
listcontainar.appendChild(li);
var delbtn = document.createElement('delete')
 delbtn.innerHTML = "/u00d7";
delbtn.appendChild(delbtn)


  }
  inputbox.value = "";
}
