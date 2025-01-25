/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		
})(jQuery);


// Link clicks and scrolling
document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll("#sidebar nav ul li a");
	const sections = Array.from(links).map(link => {
	  const targetId = link.getAttribute("href").slice(1);
	  return document.getElementById(targetId);
	});
  
	let isScrolling = false; // Track if the user is scrolling programmatically
	let clickedLink = null; // Track the currently clicked link
  
	// Function to update the active link based on scroll position
	const updateActiveLink = () => {
	  if (isScrolling) return; // Do not update active links during programmatic scrolling
  
	  let activeSectionIndex = -1;
  
	  sections.forEach((section, index) => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
		  activeSectionIndex = index;
		}
	  });
  
	  links.forEach((link, index) => {
		if (index === activeSectionIndex) {
		  link.classList.add("active");
		} else {
		  link.classList.remove("active");
		}
	  });
	};
  
	// Function to check if the target section is reached
	const checkIfTargetReached = (targetSection, callback) => {
	  const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			observer.disconnect();
			callback();
		  }
		});
	  }, { threshold: 0.5 }); // Adjust threshold as needed
  
	  observer.observe(targetSection);
	};
  
	// Scroll smoothly to the section and highlight the link while scrolling
	links.forEach(link => {
	  link.addEventListener("click", event => {
		event.preventDefault();
		const targetId = link.getAttribute("href").slice(1);
		const targetSection = document.getElementById(targetId);
  
		clickedLink = link; // Track the clicked link
  
		links.forEach(l => l.classList.remove("active"));
		link.classList.add("active");
  
		isScrolling = true; // Start programmatic scrolling
  
		targetSection.scrollIntoView({
		  behavior: "smooth",
		});
  
		// Wait until the target section is reached
		checkIfTargetReached(targetSection, () => {
		  isScrolling = false;
		  clickedLink = null; // Unlock after the target section is reached
		  updateActiveLink();
		});
	  });
	});
  
	// Update active link on scroll
	window.addEventListener("scroll", () => {
	  if (!isScrolling) {
		updateActiveLink();
	  }
	});
  });