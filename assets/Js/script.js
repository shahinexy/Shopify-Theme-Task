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


// swiper slider 
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
	  640: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  768: {
		slidesPerView: 4,
		spaceBetween: 40,
	  },
	  1024: {
		slidesPerView: 5,
		spaceBetween: 50,
	  },
	},
  });