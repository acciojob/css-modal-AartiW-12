const openModalBtn = document.getElementById("openModal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modal-content");

openModalBtn.addEventListener("click", ()=>{
	modal.classList.remove("hidden");
})

closeModal.addEventListener("click", ()=>{
	modal.classList.add("hidden")
})

window.addEventListener("click", (e) => {
	if (!modalContent.contains(e.target) && !openModalBtn.contains(e.target)) {
		modal.classList.add("hidden");
	}
});