const containerRedirect = document.getElementById('redirect')

document.getElementById('job').onclick = click
document.getElementById('art').onclick = click
document.getElementById('social').onclick = click
document.getElementById('apps').onclick = click

const events = [
  {
    title: 'job',
    contents: [
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
  },
  {
    title: 'art',
    contents: [
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
  },
  {
    title: 'social',
    contents: [
      {
        decription: "Visit my Instagram account.",
        icon: "instagram",
        link: 'https://www.instagram.com/mehmetalemdarr/'
      }
    ]
  },
  {
    title: 'apps',
    contents: [
      {
        decription: "Check out my note app I've published on Google Play Store.",
        icon: "google-play",
        link: 'https://play.google.com/store/apps/details?id=com.mehmetalemdar.basitnottut&hl=tr&gl=US'
      }
    ]
  }
]


const htmlFunc = (event) => {
  const html = event.map(obj => {
    return `
      <div class="container-redirect-box">
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
      </div>`
  })
  containerRedirect.innerHTML = html
}

const getContent = (title,events) => {
  let contents = []
  events.map(obj => {
    if(obj.title === title) {
      contents = obj.contents
    }
  })
  return contents
}

function click(event){
  const title = event.target.id
  const contents = getContent(title,events)

  htmlFunc(contents)
}

htmlFunc(events[0].contents)
