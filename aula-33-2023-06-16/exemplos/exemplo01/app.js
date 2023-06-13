const modal = document.getElementById("modal")
const closeButton = document.getElementById("closeButton")

const openModal = () => {
  modal.style.display = "block"
}

const closeModal = () => {
  modal.style.display = "none"
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})
