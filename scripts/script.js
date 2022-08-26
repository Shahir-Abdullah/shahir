gotoTopBtn = document.getElementById("gotoTopBtn");


window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        gotoTopBtn.style.display = "block";
      } else {
        gotoTopBtn.style.display = "none";
      }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

  


