import countries  from "./countries.json"
import galleryItemTpl from '../template/gallery-items.handlebars'



const gallery = document.querySelector('.js-gallery')
// function makeGaleryItem(countries){
//    return countries.map((countrie)=>{
//         return `
//         <li class="gallery__item">
//     <div class="gallery__thumb">
//       <img src="${countrie.flag}" alt="Прапор " width="320">
//     </div>
//     <h2>${countrie.name}</h2>
//     <p><b>Столиця:${countrie.capital} </b></p>
//     <p><b>Валюта: ${countrie.currency}</b></p>
//     <p><b>Офиційна мова:${countrie.language} </b> </p>
//     <p><b>Населення:</b>${countrie.population} людей</p> 
//   </li> `
//    })
// }

// gallery.innerHTML =  makeGaleryItem(countries)

const galleryList = document.querySelector('.js-gallery')
const markup = galleryItemTpl(countries)
galleryList.innerHTML = markup



