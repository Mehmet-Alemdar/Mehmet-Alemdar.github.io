var host = "mehmetalemdar.github.io"
if((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}

const arr = [
  {
    projectType: 'mobile',
    title: 'proje 1',
    name: 'Nest Blog App',
    description: 'Backend tarafında NestJS, Frontend tarafında React Native kullanarak oluşturduğum bu uygulamada kullanıcılar blog yazıları oluşturabiliyor, blog yazılarını okuyup beğenebiliyor.',
    images: ['./images/blogNest/blogNest-1.png', './images/blogNest/blogNest-2.png', './images/blogNest/blogNest-3.png', './images/blogNest/blogNest-4.png', './images/blogNest/blogNest-5.png', './images/blogNest/blogNest-6.png']
  },
  {
    projectType: 'web',
    title: 'proje 2',
    name: 'İstatistik Okuryazarlık',
    description: 'Bu web sitesi, istatistik okuryazarlık seviyesini ölçmek ve kullanıcıların demografik bilgilerine göre istatistik okuryazarlığı seviyelerini grafikleştirmek amacıyla oluşturulmuştur. Kullanıcılar, site üzerindeki testi tamamlayarak istatistik okuryazarlığı seviyelerini belirleyebilir ve sonrasında demografik bilgilere göre oluşturulan grafikler ile karşılaştırabilir ve inceleyebilirler.',
    images: ['./images/ioy/ioy-1.png', './images/ioy/ioy-2.png', './images/ioy/ioy-3.png', './images/ioy/ioy-4.png', './images/ioy/ioy-5.png', './images/ioy/ioy-6.png', './images/ioy/ioy-7.png', './images/ioy/ioy-8.png', './images/ioy/ioy-9.png']
  },
  {
    projectType: 'mobile',
    title: 'proje 3',
    name : 'İBB Ders Atölyeleri',
    description: 'İnternet üzerinden öğrenciler için eğitim imkanı sunan DT Akademi şirketinde İstanbul Belediyesi Ders Atölyeleri için geliştirdiğim bu uygulamada öğrenciler test çözüp eğitim videoları izleyebiliyorlar.',
    images : ["./images/dt/dt-1.png", "./images/dt/dt-2.png","./images/dt/dt-3.png", "./images/dt/dt-4.png","./images/dt/dt-5.png", "./images/dt/dt-6.png","./images/dt/dt-7.png", "./images/dt/dt-8.png"],
  },
  {
    projectType: 'mobile',
    title: 'proje 4',
    name : 'Movies',
    description:'Movies uygulaması, kendim için bir egzersiz ve örnek bir mimari olması için oluşturduğum bir uygulamadır. Bu Uygulamada kullanıcılar eklediğim filmleri ve uygulamayı kullanan kullanıcıları görebilirler.',
    images : ["./images/movies/movies-1.png", "./images/movies/movies-2.png","./images/movies/movies-3.png", "./images/movies/movies-4.png","./images/movies/movies-5.png"],
  },
  {
    projectType: 'web',
    title: 'proje 5',
    name : 'Coronavirus Graphics',
    description: 'Bu projede koronavirüs verilerini grafikleştirdim. Dünya haritasında ülkelerin üzerine gelerek toplam vaka sayısını görebiliyoruz, aynı kıtalarda bulunan ülkelerin toplam vaka sayısını çizgi grafiğinde görüp kıyaslayabiliyoruz veya kendi seçtiğimiz ülkeleri çizgi grafiğinde kıyaslayabiliyoruz.',
    images : ["./images/covid/covid-1.png", "./images/covid/covid-2.png","./images/covid/covid-3.png", "./images/covid/covid-4.png"],
  },
  {
    projectType: 'web',
    title: 'proje 6',
    name : 'Just Meal',
    description: 'Bir tarif sitesi olan bu projede, kategorilere göre yemek tariflerini listeleyebiliyoruz. Rastgele bir şekilde 10 adet farklı yemek tarifleri listeyebiliyoruz ve yemek tarifleriyle birlikte tarifin videosunu izleyebiliyoruz.',
    images : ["./images/justmeal/justmeal-1.png", "./images/justmeal/justmeal-2.png", "./images/justmeal/justmeal-3.png"],
  },
  {
    projectType: 'mobile',
    title: 'proje 7',
    name : 'Not Tut',
    description: 'Telefonlar için bir not tutma uygulaması olan bu uygulamada, konuşmamızı yazıya çevirebiliyoruz bu sayede konuşarak not tutabiliyoruz, not paylaşma özelliğine de sahip olan bu uygulamada not içeriğini hızlıca okuyabilmek adına notun üzerine basılı tutup açılan pencereden hızlıca notumuzu okuyabiliyoruz.',
    images : ["./images/note/note-1.png", "./images/note/note-2.png","./images/note/note-3.png", "./images/note/note-4.png"],
  },
  {
    projectType: 'web',
    title: 'proje 8',
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