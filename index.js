zad.1
const red = document.createElement("div")
red.textContent = "div"

const body = document.querySelector("body")
body.appendChild(div)

zad.2
const red = document.querySelector("h1")
czerwony.style.color = "red"

zad.3
const obrazek = document.querySelector("img")
obrazek.src = "https://loremflickr.com/566/320/dog"

zad.4
const paragraf = document.querySelector("main")
const paragrafRemove = paragraf.querySelector("p")
paragraf.removeChild(paragrafRemove)

zad.5
const div = document.createElement("div")
div.textContent = "div"
div.classList.add('nowak');

const body = document.querySelector("body")
body.appendChild(div)


zad.6
const li = document.createElement("li")
li.textContent = "li"
li.classList.add('active');

const activeListItem = document.querySelector('.active');
activeListItem.classList.remove('.active');


const body = document.querySelector("body")
body.appendChild(li)

zad.7
const button = document.querySelector("button")
button.textContent = "Przycisk!"

zad.8
const input = document.querySelector('input');
input.value = '___________________'

zad.9
const newListElement = document.createElement('li');
const unorderedList = document.querySelector('ul');
unorderedList.appendChild(newListElement);
newListElement.textContent = "div"

zad.10
const czerwony = document.querySelector("body")
czerwony.style.backgroundColor = "blue"

zad.11
const newDiv = document.querySelector('div');
newDiv.classList.add('new-div');
const header = document.querySelector('header');
header.appendChild(newDiv);

zad.12
const h1 = document.createElement("h1")
h1.textContent = "h1"

const body = document.querySelector("body")
body.appendChild(h1)

const headers = document.querySelectorAll('h1');
if (headers.length > 1) {
  headers[1].style.color = 'green';
}

zad.13
const obrazek = document.querySelector("img")
obrazek.dataset.src = "https://loremflickr.com/566/320/dog"
obrazek.removeAttribute('src');

zad.14
const paragraphs = document.querySelectorAll('p');
for (let i = 1; i < paragraphs.length; i += 2) {
  paragraphs[i].style.display = 'none';
}

zad.15
const listItems = document.querySelectorAll('li');
if (listItems.length >= 3) {
  const thirdListItem = listItems[2];
  thirdListItem.classList.add('selected');
}

zad.16
function addElement() {
  var list = document.querySelector('details ul');
  var newItem = document.createElement('li');
  newItem.textContent = 'Nowy element';
  list.insertBefore(newItem, list.firstChild);
}

zad.17
function removeElements() {
  var listItems = document.querySelectorAll('details > ul > li');
  for (var i = 1; i < listItems.length; i += 2) {
    listItems[i].remove()
  }
}

zad.18
function addParagraph(tekst) {
  event.preventDefault();
  var text = document.querySelector('#newParagraph').value;
  var newParagraph = document.querySelector('details > section > p');
  newParagraph.textContent = text;
  document.querySelector('section').appendChild(newParagraph);
  document.querySelector('#newParagraph').value = ' ';
}

  //Dróga storna

zad.19
const title = document.querySelector('.title')
title.textContent = 'DOM Training Arena'

zad.20
const navItem = document.querySelector('.nav-item a')
navItem.firstChild.textContent = 'Start'

zad.21
