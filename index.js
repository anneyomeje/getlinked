const navbarToggle = document.getElementById("navbar-toggle");
const navbarToggle2 = document.getElementById("navbar-toggle2");
const mobileNavbar = document.getElementById("mobile-navbar");

    navbarToggle.addEventListener("onOpen", onOpen = () => {
        if (mobileNavbar.style.display === "none") {
            mobileNavbar.style.display = "block";
        } else {
            mobileNavbar.style.display = "none";
        }
    });

    navbarToggle2.addEventListener("onClose", onClose = () => {
        if (mobileNavbar.style.display === "block") {
            mobileNavbar.style.display = "none";
        } else {
            mobileNavbar.style.display = "block";
        }
    });