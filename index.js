// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')
// const justmealimg = document.querySelector('.justmealimg')
// const covidimg = document.querySelector('.covidimg')


// next.addEventListener("click", () => {
//   justmealimg.src = "./images/covid-1.png"
// })

// prev.addEventListener("click", () => {
//   justmealimg.src = "./images/justmeal-1.png"
// })

// next.addEventListener("click", () => {
//   covidimg.src = "./images/covid-1.png"
// })

// prev.addEventListener("click", () => {
//   covidimg.src = "./images/justmeal-1.png"
// })
// const contentsDiv = document.querySelector('.contents')

// const contents = [
//   {
//     title: 'work 1',
//     name : 'Just',
//     description: 'desc',
//     image: './images/justmeal-1.png'
//   },
//   {
//     title: 'work 2',
//     name : 'Just',
//     description: 'desc',
//     image: './images/justmeal-1.png'
//   }
// ]

// const html = contents.map((content) => {
//   return `<div class="contents-container">
//     <div class="contents-container-title">
//       <p>${content.title}</p>
//       <h2>${content.description}</h2>
//       <p>blalaldklsadflakdjsgsdfmdbsdf sdlkgfns sdfklgjsdkfjgsdflg sdkj</p>
//     </div>
//     <div class="contents-container-image">
//       <p onClick="prevClick()" class="contents-container-image-slider prev"> < </p>
//       <img class="justmealimg" src="${content.image}" alt="justmeal">
//       <p onClick="nextClick()" class="contents-container-image-slider next"> > </p>
//     </div>
//   </div>`
// })
// contentsDiv.innerHTML = html

// const prevClick = () => {
//   document.querySelector('.justmealimg').src = "./images/justmeal-1.png"

// }

// const nextClick = () => {
//   document.querySelector('.justmealimg').src = "./images/covid-1.png"
// }

const covidimg = document.querySelector('.covidimg')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const covidimgArray = ['./images/covid-1.png','./images/covid-2.png','./images/covid-3.png','./images/covid-4.png']

const imageList = [
  {
    index: 0,
    name: 'covid',
    prev: document.querySelector('.covidPrev'),
    next: document.querySelector('.covidNext'),
    document: document.querySelector('.covidimg'),
    images: ['./images/covid-1.png','./images/covid-2.png','./images/covid-3.png','./images/covid-4.png']
  },
  {
    index: 0,
    name: 'justmeal',
    prev: document.querySelector('.justmealPrev'),
    next: document.querySelector('.justmealNext'),
    document: document.querySelector('.justmealimg'),
    images: ['./images/justmeal-1.png','./images/justmeal-2.png','./images/justmeal-3.png']
  },
  {
    index: 0,
    name: 'estate',
    prev: document.querySelector('.estatePrev'),
    next: document.querySelector('.estateNext'),
    document: document.querySelector('.estateimg'),
    images: ['./images/estate-1.png','./images/estate-2.png','./images/estate-3.png','./images/estate-4.png']
  },
  {
    index: 0,
    name: 'note',
    prev: document.querySelector('.notePrev'),
    next: document.querySelector('.noteNext'),
    document: document.querySelector('.noteimg'),
    images: ['./images/note-1.png','./images/note-2.png','./images/note-3.png','./images/note-4.png']
  },
  {
    index: 0,
    name: 'dt',
    prev: document.querySelector('.dtPrev'),
    next: document.querySelector('.dtNext'),
    document: document.querySelector('.dtimg'),
    images: ['./images/dt-1.png','./images/dt-2.png','./images/dt-3.png','./images/dt-4.png','./images/dt-5.png','./images/dt-6.png','./images/dt-7.png','./images/dt-8.png']
  }
]

const navigateClick = (navigate, who) => {
  const doc = imageList.find(element => element.name == who)

  if(navigate === 'prev') {
    doc.index--
  } else if(navigate === 'next') {
    doc.index++
  }
  if(doc.index === 0 ) {
    doc.prev.style.visibility = "hidden"
  }else {
    doc.prev.style.visibility = "visible"
  }
  if(doc.index === doc.images.length - 1) {
    doc.next.style.visibility = "hidden"
  } else {
    doc.next.style.visibility = "visible"
  }
  // const doc = imageList.find(element => element.name == who)
  doc.document.src = doc.images[doc.index]
  // covidimg.src=covidimgArray[covidimgIndex]
}
