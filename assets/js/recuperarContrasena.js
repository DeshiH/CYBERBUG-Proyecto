const myModal = document.getElementById('miModal')
const button = document.getElementById('button_normal')

myModal.addEventListener('shown.bs.modal', () => {
    button.focus()
})