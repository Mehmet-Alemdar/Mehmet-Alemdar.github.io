var host = "mehmetalemdar.github.io"
if((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}

const arr = [
  {
    projectType: 'mobile',
    title: 'proje 1',
    name : 'İBB Ders Atölyeleri',
    description: 'İnternet üzerinden öğrenciler için eğitim imkanı sunan DT Akademi şirketinde İstanbul Belediyesi Ders Atölyeleri için geliştirdiğim bu uygulamada öğrenciler test çözüp eğitim videoları izleyebiliyorlar.',
    images : ["./images/dt/dt-1.png", "./images/dt/dt-2.png","./images/dt/dt-3.png", "./images/dt/dt-4.png","./images/dt/dt-5.png", "./images/dt/dt-6.png","./images/dt/dt-7.png", "./images/dt/dt-8.png"],
  },
  {
    projectType: 'web',
    title: 'proje 2',
    name : 'Coronavirus Graphics',
    description: 'Bu projede koronavirüs verilerini grafikleştirdim. Dünya haritasında ülkelerin üzerine gelerek toplam vaka sayısını görebiliyoruz, aynı kıtalarda bulunan ülkelerin toplam vaka sayısını çizgi grafiğinde görüp kıyaslayabiliyoruz veya kendi seçtiğimiz ülkeleri çizgi grafiğinde kıyaslayabiliyoruz.',
    images : ["./images/covid/covid-1.png", "./images/covid/covid-2.png","./images/covid/covid-3.png", "./images/covid/covid-4.png"],
  },
  {
    projectType: 'web',
    title: 'proje 3',
    name : 'Just Meal',
    description: 'Bir tarif sitesi olan bu projede, kategorilere göre yemek tariflerini listeleyebiliyoruz. Rastgele bir şekilde 10 adet farklı yemek tarifleri listeyebiliyoruz ve yemek tarifleriyle birlikte tarifin videosunu izleyebiliyoruz.',
    images : ["./images/justmeal/justmeal-1.png", "./images/justmeal/justmeal-2.png", "./images/justmeal/justmeal-3.png"],
  },
  {
    projectType: 'mobile',
    title: 'proje 4',
    name : 'Not Tut',
    description: 'Telefonlar için bir not tutma uygulaması olan bu uygulamada, konuşmamızı yazıya çevirebiliyoruz bu sayede konuşarak not tutabiliyoruz, not paylaşma özelliğine de sahip olan bu uygulamada not içeriğini hızlıca okuyabilmek adına notun üzerine basılı tutup açılan pencereden hızlıca notumuzu okuyabiliyoruz.',
    images : ["./images/note/note-1.png", "./images/note/note-2.png","./images/note/note-3.png", "./images/note/note-4.png"],
  },
  {
    projectType: 'web',
    title: 'proje 4',
    name : 'Estate App',
    description: 'Bir emlak sitesi olan bu sitede kiralık ve satılık daireleri görebilir ve filtreleyerek listeleyebilirsiniz.',
    images : ["./images/estate/estate-1.png", "./images/estate/estate-2.png", "./images/estate/estate-3.png", "./images/estate/estate-4.png"],
  },
]


const createDiv = (element) => {
  let index = 0

  //Title container
  const containerTitle = document.createElement('div')
  const pTitle = document.createElement('p')
  const hName = document.createElement('h2')
  const pDescription = document.createElement('p')

  containerTitle.className = "contents-container-title"

  pTitle.textContent = element.title
  hName.textContent = element.name
  pDescription.textContent = element.description

  containerTitle.appendChild(pTitle)
  containerTitle.appendChild(hName)
  containerTitle.appendChild(pDescription)
  

  // Image container
  const containerImage = document.createElement('div')
  const prev = document.createElement('p')
  const image = document.createElement('img')
  const next = document.createElement('p')

  if(element.projectType === "web") {
    containerImage.className = "contents-container-image"
  } else if(element.projectType === "mobile") {
    containerImage.className = "contents-container-image-phone"
  }

  prev.className = "prev"
  next.className = "next"

  prev.addEventListener('click', () => {
    index--
    image.src = element.images[index]

    if(index <= 0) {
      prev.style.visibility = "hidden"
    }else {
      prev.style.visibility = "visible"
    }
    if(index < element.images.length - 1) {
      next.style.visibility = "visible"
    }
  })
  next.addEventListener('click', () => {
    index++
    image.src = element.images[index]

    if(index === element.images.length - 1) {
      next.style.visibility = "hidden"
    }
    if(index > 0) {
      prev.style.visibility = "visible"
    }
  })


  prev.textContent = "<"
  image.src = element.images[index]
  next.textContent = ">"

  containerImage.appendChild(prev)
  containerImage.appendChild(image)
  containerImage.appendChild(next)

  const hr = document.createElement('hr')

  const contentsContainer = document.createElement('div')
  contentsContainer.className = "contents-container"
  contentsContainer.appendChild(containerTitle)
  contentsContainer.appendChild(containerImage)


  const box = document.querySelector('.contents')
  box.appendChild(contentsContainer)
  box.appendChild(hr)
}

arr.map((element) => createDiv(element))