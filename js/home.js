const catListElement = document.querySelector('#catList')

const catList = [
  {
    name: 'Himalaia e Persia'
  },
  {
    name: 'Siamês'
  },
  {
    name: 'Maine Coon'
  },
  {
    name: 'Angorá'
  },
  {
    name: 'Sphynx'
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