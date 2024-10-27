// tab

const tab = document.querySelector('.tabs');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
	//Hide All Tabpane
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});
	
	//Deselect Tab Button
	tabButtons.forEach( button => {
		button.setAttribute('aria-selected', 'false');
	});
	
	//Mark New Tab
	e.currentTarget.setAttribute('aria-selected', 'true');
	
	//Show New Tab
	const { id } = e.currentTarget;
	
	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);
	
	currentTab.hidden = false;
}

tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
})


// slider 
var currentIndex = 0;
var currentTranslation = 0;

var slides = document.querySelectorAll('.slide');
var slider = document.querySelector('.slider');

function showSlide() {
  slides.forEach( (slide, index) => {
    if (currentIndex === index) {
      slide.classList.add('active')
    } else {
      slide.classList.remove('active')
    }
  });
}

var offset = 210;

function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    currentTranslation = currentIndex * offset * -1 + 100;
    slider.style.transform = 'translateX(' + currentTranslation + 'px)';
    showSlide();
}

function nextSlide() {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : slides.length - 1;
    currentTranslation =  currentIndex  * offset * -1 + 100;
    slider.style.transform = 'translateX(' + currentTranslation + 'px)';
    showSlide();
}