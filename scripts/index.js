const buttonContact = document.querySelector(".menu .contato a");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal a + a + a");

buttonContact.addEventListener("click", () => {
  modal.classList.remove("hide");
  event.preventDefault();
});

close.addEventListener("click", () => {
  modal.classList.add("hide");
});