// Navbar functionality
const mobileNavigation = document.getElementById("mobileNavigation");
const hamburger = document.getElementById("check");

hamburger.onclick = function () {
  if (hamburger.checked) {
    mobileNavigation.classList.toggle("translate-x-[100%]");
    return;
  }
  mobileNavigation.classList.toggle("translate-x-[100%]");
  return;
};
// rada
const radaContainer = document.getElementById("radaContainer");
const radaComponent = document.getElementById("radaComponent");
const komisjaComponent = document.getElementById("komisjaComponent");
const zarzadComponent = document.getElementById("zarzadComponent");
const handleButtonClick = (index) => {
  if (index == 0) {
    radaContainer.innerHTML = "";
    radaContainer.appendChild(radaComponent);
  } else if (index == 1) {
    radaContainer.innerHTML = "";
    radaContainer.appendChild(komisjaComponent);
  } else if (index == 2) {
    radaContainer.innerHTML = "";
    radaContainer.appendChild(zarzadComponent);
  }
};

// form

const formImie = document.getElementById("name");
const formEmail = document.getElementById("email");
const formSubject = document.getElementById("subject");
const formTopic = document.getElementById("topic");
const formMessage = document.getElementById("message");
const hiddeninput = document.getElementById('hiddenField');

const handleFormSubmit = (event) => {
  event.preventDefault();

  let formData = {
    imie: formImie.value,
    email: formEmail.value,
    subject: formSubject.value,
    topic: formTopic.value,
    message: formMessage.value,
  };

  console.log(formData);
  

};
// execute important js
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("dateFooter").innerText += " " + year;
  handleButtonClick(0);
});
