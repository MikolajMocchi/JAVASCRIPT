//zad.1
const red = document.createElement("div")
red.textContent = "div"

const body = document.querySelector("body")
body.appendChild(div)

//zad.2
const kolor = document.querySelector("h1")
kolor.style.color = "red"

//zad.3
const obraz = document.querySelector("img")
obraz.src = "https://loremflickr.com/566/320/dog"

//zad.4
const paragraf = document.querySelector("main")
const paragrafRemove = paragraf.querySelector("p")
paragraf.removeChild(paragrafRemove)

//zad.5
const dev = document.createElement("div")
dev.textContent = "div"
dev.classList.add('nowak');

const body = document.querySelector("body")
body.appendChild(div)


//zad.6
const li = document.createElement("li")
li.textContent = "li"
li.classList.add('active');

const activeListItem = document.querySelector('.active');
activeListItem.classList.remove('.active');


const ciało = document.querySelector("body")
ciało.appendChild(li)

//zad.7
const button = document.querySelector("button")
button.textContent = "Przycisk!"

//zad.8
const input = document.querySelector('input');
input.value = '___________________'

//zad.9
const newListElement = document.createElement('li');
const unorderedList = document.querySelector('ul');
unorderedList.appendChild(newListElement);
newListElement.textContent = "div"

//zad.10
const czerwony = document.querySelector("body")
czerwony.style.backgroundColor = "blue"

//zad.11
const newDiv = document.querySelector('div');
newDiv.classList.add('new-div');
const header = document.querySelector('header');
header.appendChild(newDiv);

//zad.12
const h1 = document.createElement("h1")
h1.textContent = "h1"

const body = document.querySelector("body")
body.appendChild(h1)

const headers = document.querySelectorAll('h1');
if (headers.length > 1) {
  headers[1].style.color = 'green';
}

//zad.13
const obrazek = document.querySelector("img")
obrazek.dataset.src = "https://loremflickr.com/566/320/dog"
obrazek.removeAttribute('src');

///zad.14
const paragraphs = document.querySelectorAll('p');
for (let i = 1; i < paragraphs.length; i += 2) {
  paragraphs[i].style.display = 'none';
}

//zad.15
const listItems = document.querySelectorAll('li');
if (listItems.length >= 3) {
  const thirdListItem = listItems[2];
  thirdListItem.classList.add('selected');
}

//zad.16
function addElement() {
  var list = document.querySelector('details ul');
  var newItem = document.createElement('li');
  newItem.textContent = 'Nowy element';
  list.insertBefore(newItem, list.firstChild);
}

//zad.17
function removeElements() {
  var listItems = document.querySelectorAll('details > ul > li');
  for (var i = 1; i < listItems.length; i += 2) {
    listItems[i].remove()
  }
}

//zad.18
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

//zad.1
const title = document.querySelector('.title')
title.textContent = 'DOM Training Arena'

//zad.2 //20'ste zadanie
const navItem = document.querySelector('.nav-item a') 
navItem.firstChild.textContent = 'Start'

//zad.3
const menu = document.querySelector(".menu-list li")
const text = lista.textContent;
console.log(text);

//zad.4
const selector = document.querySelector('.card.highlight')
selector.classList.add('active')

//zad.5
const glowowy = document.querySelector('.card .card-header')
glowowy.textContent = 'Zmieniona karta'

//zad.6
const pozdro = document.querySelector("details .info-text")
pozdro.textContent = 'Zmień jego tekst'
  
//zad.7
const pawel = document.querySelector("label input")
pawel.setAttribute("value", 'Jan')
const jan = pawel.value
console.log(jan)
  
//zad.8
const german = document.querySelector('.select')
german.value = 'de'

//zad.9
const sprawdz = document.querySelector(".checkbox")
sprawdz.checked = true

//zad.10
const podklesl = document.createElement("class")
podklesl.classList.add('highlight');

const text2 = document.querySelector(".deep-text")
text2.appendChild(podklesl)

//zad.11
const master = document.createElement("li")
master.textContent = "Nowy Element"
const d4c = document.querySelector("#dynamic-list")
d4c.appendChild(master)

//zad.12
const masteryi = document.createElement("li")
master.textContent = "Nowy Element"
const master2 = document.createElement("li")
master2.textContent = "Nowy Element"
const master3 = document.createElement("li")
master3.textContent = "Nowy Element"
const menu = document.querySelector(".menu-list")
menu.appendChild(masteryi)
menu.appendChild(master2)
menu.appendChild(master3)

//zad.13
const create = document.createElement("div class ='card'")
const sekcja = document.querySelector(".cards-section")
sekcja.appendChild(create)

//zad.14
const box = document.createElement(".box")
box.textContent = "Nowy Element"
const stop = document.querySelector(".boxes-container")
stop.appendChild(box)

//zad.15
const power = document.createElement("p")
power.textContent = "Jan Paweł II Papież Polak"
const jon = document.querySelector(".dynamic-area")
jon.appendChild(power)

//zad.16
function addElement() {
  var lista = document.querySelector('#insertion-container');
  var nowyItem = document.createElement('.box');
  nowyItem.textContent = 'Nowy element';
  lista.insertBefore(nowyItem, lista.firstChild);
}

//zad.17
const list = document.createElement("li")
list.textContent = "Nowy Element"
const dynamic = document.querySelector("#dynamic-list")
dynamic.prepend(list)

//zad.18
const s = document.createElement("span")
const karta = document.querySelectorAll(".card-header")
karta.appendChild(s)

//zad.19
const papi = document.createElement("p")
papi.textContent = "Jan Paweł II Papież Polak"
const details = document.querySelector("details")
details.appendChild(papi)

///zad.20
const przycisk = document.createElement("button")
przycisk.textContent = "przycisk"
const button = document.querySelector(".playground")
button.append(przycisk)

//zad.21
const zniszcz = document.querySelectorAll(".removable")
for (let element of zniszcz ){
  element.remove()
}

//zad.22
const dynamito = document.querySelector("#dynamic-list > li:nth-last-child(1)")
const lisc = document.querySelector("#dynamic-list")
lisc.removeChild(dynamito)

//zad.23
const balatro = document.querySelector(".card[data-id='1']")
balatro.remove()

//zad.24
const box2 = document.querySelectorAll(".box")
const miku = document.querySelector("#insertion-container")
box2.forEach((elements)=>
miku.remove(box2))
  
//zad.25
const delta = document.querySelector("details")
delta.remove()
  
//zad.26
const bieg = document.querySelectorAll("input")
bieg.forEach(inputs => {
  console.log(inputs.name)
})
  
//zad.27
const mail = document.querySelector("input[name='email']")
mail.name = "user-email"
  
//zad.28
const light = document.querySelector(".card-highlight")
light.setAttribute('data-test', 123)
  
//zad.29
const lobby = document.querySelectorAll(".menu-list li")
lobby.forEach((elementy)=>
elementy.textContent = "Zmieniono")
  
///zad.30
const slay = document.querySelector(".card")
slay.classList.add('processed');
const spire = document.querySelector(".card")
spire(data.status) = "done"

//zad.31
const add_item_btn = document.querySelector('#add-item-btn')
add_item_btn.addEventListener('click', () => {
  const item_input = document.querySelector('#item-input').value

  const li = document.createElement('li')
  li.textContent = item_input

  document.querySelector('#dynamic-list').appendChild(li)
  document.querySelector('#item-input').value = ''
})

//zad 32
const item_input = document.querySelector('#item-input')

item_input.addEventListener('input', (event) => {
  console.log(event.target.value)
})

//zad 33
const insert_before_btn = document.querySelector('#insert-before-btn')

insert_before_btn.addEventListener('click', () => {
  const box = document.createElement('div')
  box.classList.add('box')
  const insertion_container = document.querySelector('#insertion-container')
  insertion_container.prepend(box)
})

//zad 35

const removable = document.querySelectorAll('.removable')

for(let element of removable){
  element.addEventListener('click', (event) => {
    event.target.remove();
  })
}

//zad 39

const cards = document.querySelectorAll('.card')

for (let card of cards){
  card.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red'
  })

  card.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'transparent'
  })
}

//zad 40
const input = document.querySelector("input[name='name']")

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter'){
    console.log(event.target.value)
  }
})


//Trzecia STRONA

//zad 1
const glowa = document.querySelector('#main-header')

//zad 2
const navigator = document.querySelector('nav > li')

//zad 3
const zdegraduj = document.querySelector('.delete-trigger')
const pierwsz =  zdegraduj.firstElementChild

//zad 4
