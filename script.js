const dropdown = document
  .getElementById("mobile-menu")
  .addEventListener("click", function () {
    document.getElementById("dropdown").classList.toggle("show");
  });


const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const formCard = document.getElementById("my-form");
formCard.addEventListener("submit", function(event){
  event.preventDefault();
  let fullname = document.querySelector("#fullname").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  if(!fullname & !email & !message){
    return
  } else{
    alert(`Fullname: ${fullname}
        Email: ${email}
        Message: ${message}`);
  }

  document.querySelector("#fullname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#message").value = "";
}); 