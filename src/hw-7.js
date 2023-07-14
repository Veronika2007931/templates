import arr from './arr.js'
import listItems from "../template/list.handlebars"


const gallery = document.querySelector('.info')
const markup = listItems(arr)
gallery.innerHTML = markup

