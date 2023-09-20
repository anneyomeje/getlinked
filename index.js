const navbarToggle = document.getElementById("navbar-toggle");
const mobileNavbar = document.getElementById("mobile-navbar");
const closeBtn = document.querySelector(".close-btn")

    navbarToggle.addEventListener("click", onOpen = () => {
        if (mobileNavbar.style.display === "none") {
            mobileNavbar.style.display = "block";
        } else {
            mobileNavbar.style.display = "none";
        }
    });

    closeBtn.addEventListener("click", onClose = () => {
        if (mobileNavbar.style.display === "block") {
            mobileNavbar.style.display = "none";
        } else {
            mobileNavbar.style.display = "block";
        }
    });