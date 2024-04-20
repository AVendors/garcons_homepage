var backdrop = document.querySelector(".backdrop");
var toggleButton2 = document.querySelector("#toggle-mobile-nav2");
var mobileNav = document.querySelector("#menu");

toggleButton2 ? toggleButton2.addEventListener("click", openMobileNev) : "";

function openMobileNev() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

backdrop.addEventListener("click", closeMobileNav);

function closeMobileNav() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
}

//SUBMIT SUBSCRIBE BUTTON

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

async function validateDownloadForm() {
  let email = document.getElementById("enter-email").value;
  let enterdName = document.getElementById("enter-name").value;

  if (enterdName == "") {
    alert("Name must be filled out");
    return false;
  } else if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (validateEmail(email)) {
    // $("#download-email-entered").text(`"${email}"`);
    // $("#dowload-page-1").addClass("hide");
    // $("#dowload-page-2").removeClass("hide");
    submitDownloadForm();
  } else {
    alert("Email must be valid");
  }
}

async function submitDownloadForm() {
  let email = document.getElementById("enter-email").value;
  let enterdName = document.getElementById("enter-name").value;
  axios({
    method: "post",
    url: "https://backend.avmade.com/api/v1/products/addSendgridContact",
    // url: "http://localhost:5000/api/v1/products/addSendgridContact",
    data: {
      email: email,
      name: enterdName,
      list:'4fcd9471-9662-492a-b8cc-7b51ffa6dce6'
    },
  }).then(function (response) {
   console.log("Submitted")
  });
}
