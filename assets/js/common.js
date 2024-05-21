var backdrop = document.querySelector(".backdrop");
var toggleButton2 = document.querySelector("#toggle-mobile-nav2");
var mobileNav = document.querySelector("#menu");

toggleButton2 ? toggleButton2.addEventListener("click", openMobileNev) : "";

function openMobileNev() {
  if ($("#collapseExample").hasClass("show")) {
    backdrop.classList.remove("open");
    $("#collapseExample").removeClass("show");
    console.log("Here");
    return;
  }

  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

backdrop.addEventListener("click", closeMobileNav);

function closeMobileNav() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  $("#collapseExample").removeClass("show");
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
      list: "4fcd9471-9662-492a-b8cc-7b51ffa6dce6",
    },
  }).then(function (response) {
    console.log("Submitted");
  });
}

// Header to appear on scroll up
var lastScrollTop = 0;
var header = document.querySelector("header");

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      header.classList.remove("open");
    } else if (st < lastScrollTop) {
      // upscroll code
      header.classList.add("open");
    } // else was horizontal scroll

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

///END

async function changeheaderColor() {
  // if ($('#main-header').hasClass("service-open")) {
  //   $('#main-header').classList.remove("service-open");
  // } else {
  // $("#main-header").classList.add("service-open");
  // }
  window.scrollTo({ top: 0, behavior: "smooth" });
  if ($("#collapseExample").hasClass("show")) {
    backdrop.classList.remove("open");
    header.classList.remove("open");
  } else {
    header.classList.add("open");
    backdrop.classList.add("open");
    $("#menu").removeClass("open");
  }
}

var currentVideo = 1;
var nextVideo = 2;
var FirstVideo = 1;
var LastVideo = 10;

async function moveRightImg() {
  $(".video-" + currentVideo).addClass("hide");
  if (currentVideo < LastVideo) {
    currentVideo += 1;
  } else {
    currentVideo = FirstVideo;
  }

  $(".video-" + currentVideo).removeClass("hide");
  // if (nextVideo < LastVideo) {
  //   nextVideo += 1;
  // } else {
  //   nextVideo = FirstVideo;
  // }
}

async function moveLeftImg() {
  $(".video-" + currentVideo).addClass("hide");
  if (currentVideo > FirstVideo) {
    currentVideo -= 1;
  } else {
    currentVideo = LastVideo;
  }
  $(".video-" + currentVideo).removeClass("hide");
  // if (nextVideo > FirstVideo) {
  //   nextVideo -= 1;
  // } else {
  //   nextVideo = LastVideo;
  // }
}

setTimeout("moveRightImg(5)", 5 * 1000);

// document.getElementsByClassName("video-autoplay").play();

// $(window).on("load", loadAfter5sec);
window.onload = typeWriter;

function typeWriter() {
  loadAfter5sec();
  loadAfter10sec();
  loadAfter15sec();
}

function loadAfter5sec() {
  setTimeout(() => {
    $("#first-impr").removeClass("line-1");
    $("#design-matter").removeClass("hide-dc");
    $("#design-matter").addClass("anim-typewriter");
    $("#design-matter").addClass("design-matter");
  }, 2.9 * 1000);
}

function loadAfter10sec() {
  setTimeout(() => {
    $("#design-matter").removeClass("line-1");
    $("#customer-matter").removeClass("hide-dc");
    $("#customer-matter").addClass("anim-typewriter");
    $("#customer-matter").addClass("customer-matter");
  }, 7.1 * 1000);
}

function loadAfter15sec() {
  setTimeout(() => {
    $("#customer-matter").removeClass("line-1");
    $("#do-it-right").removeClass("hide-dc");
    $("#do-it-right").addClass("anim-typewriter");
    $("#do-it-right").addClass("line-1");
  }, 11.5 * 1000);
}
