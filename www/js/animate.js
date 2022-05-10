function reveal() {
    var reveals = document.querySelectorAll(".reveal"); // gets class
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // current hight
        var elementTop = reveals[i].getBoundingClientRect().top; // top of .reveal element
        var elementVisible = 20; // how much of the element needs to be visible (in px)
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active"); // adds active to classlist
        } else {
            reveals[i].classList.remove("active"); // removes active to classlist
        }
    }
}

window.addEventListener("scroll", reveal); // launch the reveal function on every scroll

reveal(); // check current position