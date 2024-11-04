function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // Toggle de 'active' klasse om de sidebar te tonen of te verbergen
    sidebar.classList.toggle('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Verberg de sidebar
}

// Voeg een klik event toe aan de hamburger-icoon om de sidebar te tonen
document.querySelector('.icon-circle').addEventListener('click', toggleSidebar);

// Voeg een klik event toe aan de sluitknop in de sidebar om deze te verbergen
document.querySelector('.sidebar .icon-circle').addEventListener('click', hideSidebar);


// Selecteer de popup en de footer
const contactPopup = document.getElementById('contactPopup');
const footer = document.getElementById('footer');

// Functie om te controleren of de footer in beeld is
function isFooterInView() {
    const footerRect = footer.getBoundingClientRect();
    // Controleer of de footer binnen het zichtbare gebied van de viewport valt
    return footerRect.top <= window.innerHeight && footerRect.bottom >= 0;
}

// Event listener voor scroll
window.addEventListener('scroll', function() {
    // Controleer of de footer in beeld is
    if (isFooterInView()) {
        contactPopup.classList.add('show'); // Voeg de show klasse toe om de popup te tonen
    } else {
        contactPopup.classList.remove('show'); // Verberg de popup als de footer niet in beeld is
    }
});

// Initialisatie om te controleren of de footer al in beeld is bij het laden
if (isFooterInView()) {
    contactPopup.classList.add('show'); // Toon de popup als de footer al zichtbaar is bij het laden
}




const sliderWrapper = document.querySelector('.slider1'); // De container met afbeeldingen
const images = document.querySelectorAll('.slider1 img'); // Alle afbeeldingen binnen de slider
const totalImages = images.length; // Totaal aantal afbeeldingen
let currentIndex = 0; // Huidige index van de afbeelding

function nextSlide() {
    // Controleer of we meer afbeeldingen hebben om naar te verschuiven
    if (currentIndex < totalImages - 4) {
        currentIndex++;
        updateSlider();
    }
}

function prevSlide() {
    // Controleer of we terug kunnen verschuiven
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

// Functie om de slider bij te werken
function updateSlider() {
    const offset = currentIndex * 25; // Elke afbeelding is 25% breed
    sliderWrapper.style.transform = `translateX(-${offset}%)`; // Verschuif de slider
}

// Voeg event listeners toe aan de knoppen
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);



let currentSlideIndex = 0; // Gebruik let om currentSlideIndex correct te declareren

function moveSlide(direction) {
    const slider = document.querySelector('.slider4');
    const images = document.querySelectorAll('.slider4 img');

    // Aantal slides om weer te geven op basis van de schermgrootte
    const slidesToShow = window.innerWidth <= 837 ? 1 : 3; // 1 afbeelding bij kleinere schermen, 3 anders

    const totalImages = images.length;

    // Bereken het maximale aantal slides op basis van het aantal afbeeldingen
    const maxIndex = Math.ceil(totalImages / slidesToShow) - 1;

    // Update de huidige slide index op basis van de richting
    currentSlideIndex = Math.min(Math.max(currentSlideIndex + direction, 0), maxIndex);

    // Beweeg de slider door 100% te verplaatsen voor elke slide-index, aangepast voor het aantal afbeeldingen dat moet worden weergegeven
    slider.style.transform = `translateX(-${currentSlideIndex * (100 / slidesToShow)}%)`;
}

// Functies voor vorige en volgende knoppen
function prevSlide2() {
    moveSlide(-1);
}

function nextSlide2() {
    moveSlide(1);
}
