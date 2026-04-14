zad.1
const red = document.createElement("div")
red.textContent = "div"

const body = document.querySelector("body")
body.appendChild(div)

zad.2
const kolor = document.querySelector("h1")
kolor.style.color = "red"

zad.3
const obraz = document.querySelector("img")
obraz.src = "https://loremflickr.com/566/320/dog"

zad.4
const paragraf = document.querySelector("main")
const paragrafRemove = paragraf.querySelector("p")
paragraf.removeChild(paragrafRemove)

zad.5
const dev = document.createElement("div")
dev.textContent = "div"
dev.classList.add('nowak');

const body = document.querySelector("body")
body.appendChild(div)


zad.6
const li = document.createElement("li")
li.textContent = "li"
li.classList.add('active');

const activeListItem = document.querySelector('.active');
activeListItem.classList.remove('.active');


const ciało = document.querySelector("body")
ciało.appendChild(li)

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

  //Dróga storna (V2)
  //Dróga storna (V2)
  //Dróga storna (V2)
  //Dróga storna (V2)
  //Dróga storna (V2)

zad.1
const title = document.querySelector('.title')
title.textContent = 'DOM Training Arena'

zad.2 //20'ste zadanie
const navItem = document.querySelector('.nav-item a') 
navItem.firstChild.textContent = 'Start'

zad.3
const menu = document.querySelector(".menu-list li")
const text = lista.textContent;
console.log(text);

zad.4
const selector = document.querySelector('.card.highlight')
selector.classList.add('active')

zad.5
const glowowy = document.querySelector('.card .card-header')
glowowy.textContent = 'Zmieniona karta'

zad.6
const pozdro = document.querySelector("details .info-text")
pozdro.textContent = 'Zmień jego tekst'
  
zad.7
const pawel = document.querySelector("label input")
pawel.setAttribute("value", 'Jan')
const jan = pawel.value
console.log(jan)
  
zad.8
const german = document.querySelector('.select')
german.value = 'de'

zad.9
const sprawdz = document.querySelector(".checkbox")
sprawdz.checked = true

zad.10
const podkresl = document.querySelector('.deep-text')
podkresl.classList.add('highlight')

zad.11
