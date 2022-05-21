const checkboxElement = document.querySelector('#checkbox')
checkboxElement.checked = false
const labelElement = document.querySelector('#label')
const enterButtonElement = document.querySelector('#enterButton')

checkboxElement.addEventListener('click', updateButton)
labelElement.addEventListener('click', updateButton)

function updateButton() {
  const { checked } = checkboxElement

  if (checked) {
    enterButtonElement.className = 'allowed'
  } else if (!checked) {
    enterButtonElement.className = ''
  }
}

updateButton()

enterButtonElement.addEventListener('click', () => {
  const { checked } = checkboxElement

  if (checked) {
    window.location.href = './home.html'
  }
})