const openModalBtn = document.getElementById("openModal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")

openModalBtn.addEventListener("click", ()=>{
	modal.classList.remove("hidden");
})

closeModal.addEventListener("click", ()=>{
	modal.classList.add("hidden")
})

window.addEventListener("click", (e)=>{
	if(e.target === modal){
		modal.classList.add("hidden")
	}
});