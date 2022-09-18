const jobButton = document.getElementById('job')
const artButton = document.getElementById('art')
const socialButton = document.getElementById('social')
const appsButton = document.getElementById('apps')

const containerRedirect = document.getElementById('redirect')


const jobEvent = [
  {
    decription: "Visit my github account to see the projects I've made.",
    icon: "github",
    link: 'https://github.com/Mehmet-Alemdar'
  },
  {
    decription: "Visit my LinkedIn profile.",
    icon: "linkedin",
    link: 'https://www.linkedin.com/in/mehmet-alemdar/'
  }
]

const artEvent = [
  {
    decription: "Visit my soundcloud account to listen to my music recordings.",
    icon: "soundcloud",
    link: 'https://soundcloud.com/mehmet-alemdar-557745551'

  },
  {
    decription: "Visit my 500px account to see the various photos I took.",
    icon: "fivehundredx",
    link: 'https://500px.com/p/alemdarmehmet6?view=photos'

  }
]

const socialEvent = [
  {
    decription: "Visit my Instagram account.",
    icon: "instagram",
    link: 'https://www.instagram.com/mehmetalemdarr/'
  }
]

let html = ""

jobButton?.addEventListener("click", () => {
  html = jobEvent.map(obj => {
    return `<div class="container-redirect-box">
    <div class="container-redirect-box-item description">
      ${obj.decription}
    </div>
    <div class="container-redirect-box-item row-image">
      <img src="./icons/arrow.svg">
    </div>
    <div class="container-redirect-box-item icon">
      <a href=${obj.link} target="_blank" rel="noreferrer noopener">
        <img src="./icons/${obj.icon}.svg" />
      </a>
    </div>
    </div>
    </div>
    `
  })
  containerRedirect.innerHTML = html
})

artButton?.addEventListener("click", () => {
  html = artEvent.map(obj => {
    return `<div class="container-redirect-box">
    <div class="container-redirect-box-item description">
      ${obj.decription}
    </div>
    <div class="container-redirect-box-item row-image">
      <img src="./icons/arrow.svg">
    </div>
    <div class="container-redirect-box-item icon">
      <a href=${obj.link} target="_blank" rel="noreferrer noopener">
        <img src="./icons/${obj.icon}.svg" />
      </a>
    </div>
    </div>
    </div>
    `
  })
  containerRedirect.innerHTML = html
})

socialButton?.addEventListener("click", () => {
  html = socialEvent.map(obj => {
    return `<div class="container-redirect-box">
    <div class="container-redirect-box-item description">
      ${obj.decription}
    </div>
    <div class="container-redirect-box-item row-image">
      <img src="./icons/arrow.svg">
    </div>
    <div class="container-redirect-box-item icon">
      <a href=${obj.link} target="_blank" rel="noreferrer noopener">
        <img src="./icons/${obj.icon}.svg" />
      </a>
    </div>
    </div>
    </div>
    `
  })
  containerRedirect.innerHTML = html
})




html = jobEvent.map(obj => {
  return `<div class="container-redirect-box">
  <div class="container-redirect-box-item description">
    ${obj.decription}
  </div>
  <div class="container-redirect-box-item row-image">
    <img src="./icons/arrow.svg">
  </div>
  <div class="container-redirect-box-item icon">
    <a href=${obj.link} target="_blank" rel="noreferrer noopener">
      <img src="./icons/${obj.icon}.svg" />
    </a>
  </div>
  </div>
  </div>
  `
})


containerRedirect.innerHTML = html

