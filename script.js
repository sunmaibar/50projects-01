const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveCleasses()
    panel.classList.add('active')
  })
})

const removeActiveCleasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
