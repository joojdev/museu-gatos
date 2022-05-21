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
    name: 'Ragdoll'
  },
  {
    name: 'Ashera'
  },
  {
    name: 'American Shorthair'
  },
  {
    name: 'Exótico'
  },
  {
    name: 'SRD'
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