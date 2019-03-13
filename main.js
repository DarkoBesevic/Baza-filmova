/*
const prikaz = document.getElementById('prikaz')
const kriterijum = document.getElementById('kriterijum')

const godinaUp = document.getElementById('godina-gore')
const godinaDown = document.getElementById('godina-dole')
const naslovUp = document.getElementById('naslov-gore')
const naslovDown = document.getElementById('naslov-dole')


let sviFilmovi = []
let rezultati = []

function uporediGG(a, b) {
  if (a.godina < b.godina)
    return -1;
  if (a.godina > b.godina)
    return 1;
  return 0;
}

function uporediGD(b, a) {
  if (a.godina < b.godina)
    return -1;
  if (a.godina > b.godina)
    return 1;
  return 0;
}

function uporediNG(a, b) {
  if (a.naziv < b.naziv)
    return -1;
  if (a.naziv > b.naziv)
    return 1;
  return 0;
}

function uporediND(b, a) {
  if (a.naziv < b.naziv)
    return -1;
  if (a.naziv > b.naziv)
    return 1;
  return 0;
}

function prikazi(rezultati) {
  stringUpis = ""
  const limit = rezultati.length >= 14 ? 14 : rezultati.length
  for (let i = 0; i < limit; i++) {
    stringUpis += ` <div class= "filmski-div">
    <h3 class= "naslov-filma">${rezultati[i].naziv}</h3> 
    <p> Godina : ${rezultati[i].godina}</p> 
     <img src=${rezultati[i].slika} alt=""  class="slike">
        </div> `
  }
  prikaz.innerHTML = stringUpis
}


function render(niz) {
  let sablon = ''
  const limit = niz.length >= 14 ? 14 : niz.length
  for (var i = 0; i < limit; i++) {
    sablon += ` <div class= "filmski-div">
            <h3 class= "naslov-filma">${niz[i].naziv}</h3> 
            <p> Godina : ${niz[i].godina}</p> 
             <img src=${niz[i].slika} alt="" class="slike">
                </div> `
  }
  
  prikaz.innerHTML = sablon
}

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
      console.log(data)
    sviFilmovi = rezultati = data
    render(rezultati)
  })

  kriterijum.addEventListener('input', function() {
  rezultati = sviFilmovi.filter(film => film.naziv.includes(kriterijum.value))

  render(rezultati)
})


godinaUp.addEventListener("click", function() {
  rezultati.sort(uporediGG)
  prikazi(rezultati)
})

godinaDown.addEventListener("click", function() {
  rezultati.sort(uporediGD)
  prikazi(rezultati)
})

naslovUp.addEventListener("click", function () {
  rezultati.sort(uporediNG)
  prikazi(rezultati)
})

naslovDown.addEventListener("click", function () {
  rezultati.sort(uporediND)
  prikazi(rezultati)
})
*/

const url = 'https://baza-filmova.herokuapp.com/filmovi/';

let godina;
let naziv;
let slika;
let id;

fetch(url)
    .then( response => response.json() )
    .then( function(response) {
        console.log(response);

        let prostorUpisaFilma = document.getElementById('filmska_baza');
        let sablonUpisaFilma = ``;

        for (let i = 0; i < response.length; i++) {         

            godina = response[i].godina;
            naziv = response[i].naziv;
            slika = response[i].slika;
            id = response[i].id;

            sablonUpisaFilma += `
                <div class="movie">
                    <img src=${slika} alt="Movie poster" width="100px" height="150px" class="movie-img">
                    <div class="movie-body">
                        <h3>${naziv}</h3>
                        <p>${godina}</p>
                        <p>${id}</p>
                    </div>
                </div>
            `;

            console.log(sablonUpisaFilma);
        }
        prostorUpisaFilma.innerHTML = sablonUpisaFilma;
    } )