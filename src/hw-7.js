import listItems from "../template/list.handlebars"

const arr = [
   { object: Chair,
    color: white,
    material: plastic
   },
   { object: Table,
    color: brown,
    material: wood
   },
   { object: Plates,
    color: cream,
    material: ceramics
   },
   { object: Vase,
    color: green,
    material: ceramics
   },
   { object: Cup,
    color: white,
    material: glass
   }

]

const gallery = document.querySelector('.gallery')
const markup = listItems(arr)
gallery.innerHTML = markup

