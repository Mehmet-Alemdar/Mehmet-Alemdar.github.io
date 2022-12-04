const imageList = [
  {
    index: 0,
    name: 'dt',
    prev: document.querySelector('.dtPrev'),
    next: document.querySelector('.dtNext'),
    document: document.querySelector('.dtimg'),
    images: ['./images/dt-1.png','./images/dt-2.png','./images/dt-3.png','./images/dt-4.png','./images/dt-5.png','./images/dt-6.png','./images/dt-7.png','./images/dt-8.png']
  },
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
    name: 'note',
    prev: document.querySelector('.notePrev'),
    next: document.querySelector('.noteNext'),
    document: document.querySelector('.noteimg'),
    images: ['./images/note-1.png','./images/note-2.png','./images/note-3.png','./images/note-4.png']
  },
  {
    index: 0,
    name: 'estate',
    prev: document.querySelector('.estatePrev'),
    next: document.querySelector('.estateNext'),
    document: document.querySelector('.estateimg'),
    images: ['./images/estate-1.png','./images/estate-2.png','./images/estate-3.png','./images/estate-4.png']
  }
]

const navigateClick = (navigate, who) => {
  const doc = imageList.find(element => element.name == who)

  if(navigate === 'prev') {
    doc.index--
  } else if(navigate === 'next') {
    doc.index++
  }

  doc.document.src = doc.images[doc.index]

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
}
