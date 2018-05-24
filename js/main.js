window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function classToggle() {
//     this.classList.toggle('side_menu');
//     this.classList.toggle('side_menu_open');
// }

document.getElementById("menu").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("side_menu").classList.toggle("open");
    // document.getElementById('body').classList.toggle("overflow-hidden");
});

// function openSlideMenu() {
//     document.getElementById('side_menu').style.width = '150px';
// }
//
// function closeSlideMenu() {
//     document.getElementById('side_menu').style.width = '0';
// }