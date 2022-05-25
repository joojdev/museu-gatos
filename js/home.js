const catListElement = document.querySelector('#catList')

const catList = [
  {
    name: 'Himalaia e Persa',
    url: './cats/himalaia-e-persa.html'
  },
  {
    name: 'Siamês',
    url: './cats/siames.html'
  },
  {
    name: 'Maine Coon',
    url: './cats/maine-coon.html'
  },
  {
    name: 'Angorá',
    url: './cats/angora.html'
  },
  {
    name: 'Sphynx',
    url: './cats/sphynx.html'
  },
  {
    name: 'Ragdoll',
    url: './cats/ragdoll.html'
  },
  {
    name: 'Ashera',
    url: './cats/ashera.html'
  },
  {
    name: 'American Shorthair',
    url: './cats/american-shorthair.html'
  },
  {
    name: 'Exótico',
    url: './cats/exotico.html'
  },
  {
    name: 'SRD',
    url: './cats/sem-raca-definida.html'
  }
]

for (catData of catList) {
  const listItemElement = document.createElement('li')
  const anchorElement = document.createElement('a')
  anchorElement.textContent = catData.name
  anchorElement.href = catData.url

  listItemElement.append(anchorElement)
  catListElement.append(listItemElement)
}