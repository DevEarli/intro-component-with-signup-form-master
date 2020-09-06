const form = document.querySelector("form");
const input = document.querySelectorAll("input");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  input.forEach(function (ev) {
    if (ev.value == "") {
      Empty(ev);
    } else {
      if(ev.classList.contains('email')){
        let email = ValidateEmail(ev);
        if(email){
          notEmpty(ev);
        }else{
          Empty(ev);
        }
      }else{
         notEmpty(ev);
      }
    }
  });
});

function Empty(ev){
  ev.style.color = "var(--Red)";
  ev.style.borderColor = "red";
  ev.nextElementSibling.style.display = "inherit";
  ev.nextElementSibling.nextElementSibling.style.display = "inherit";
}

function notEmpty(ev){
  ev.style.color = "inherit";
  ev.style.borderColor = "inherit"
  ev.nextElementSibling.style.display = "none";
  ev.nextElementSibling.nextElementSibling.style.display = "none";
}

function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
    return (true);
  }
  return (false);
}