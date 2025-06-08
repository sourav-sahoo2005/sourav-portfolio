let hamburger = document.querySelector('.hamburger')
let navitem = document.getElementById('navitem')
let cross1 = document.getElementById('cross1')
let cross2 = document.getElementById('cross2')
let cross3 = document.getElementById('cross3')
hamburger.addEventListener('click', () => {

    if (navitem.style.transform == "translateY(400px)") {
        navitem.style.transform = "translateY(-400px)"
        cross1.style.transform = "rotate(0deg)"
        cross3.style.transform = "rotate(0deg)"
        hamburger.style.position = "none";
        cross3.style.position = "relative"
        hamburger.style.display = "block";
        cross2.style.opacity = "100%"

    } else {
        navitem.style.transform = "translateY(400px)"
        cross1.style.transform = "rotate(45deg)"
        cross3.style.transform = "rotate(-45deg)"
        hamburger.style.display = "flex";
        hamburger.style.flexDirection = "column";
        hamburger.style.position = "relative"
        cross3.style.position = "absolute"
        cross2.style.opacity = "0%"

    }
})

document.getElementById('emailForm').addEventListener('submit', function (e) {
    alert("do you want to send the email?");
    const to = "souravsahoo26320@gmail.com"
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent(document.getElementById('message').value);
    // This will open the user's Gmail compose window with the fields filled in
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank');
});

const navLinks = document.querySelectorAll('nav  a');
const sections = document.querySelectorAll("section")

navLinks.forEach(link => {

    link.addEventListener('click', event => {

        event.preventDefault();

        const targetId = link.getAttribute('href');

        const targetSection = document.querySelector(targetId)
        targetSection.scrollIntoView({

            behavior: 'smooth'

        });
        sections.forEach(section => {
            section.classList.remove('animation')

        });
        targetSection.classList.add('animation')

    });

});
