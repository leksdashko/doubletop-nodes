gsap.registerPlugin(ScrollTrigger);
const smoother = initScrollSmoother();

function initScrollSmoother() {
	return {
		scrollTo: function(el){
			const block = document.querySelector(el);
			if(!block) return false;

			const y = block.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({top: y, behavior: 'smooth'});
		}
	};
}

for(let i = 1; i <= 3; i++){
	const id = 'for-i' + i;
	const element = document.getElementById(id);
	if(!element) continue;

	const elId = '#' + id;
	let previous = '.section-for';
	if(i > 1){
		previous = '#for-i' + (i - 1);
	}

	gsap.from(elId, {
		scrollTrigger : {
			trigger: previous,
			start: "top bottom",
			toggleActions: "restart pause resume none",
		},
		y: 200,
		duration: '1.'+i
	});
}

for(let i = 1; i <= 8; i++){
	const id = 'format-i' + i;
	const element = document.getElementById(id);
	if(!element) continue;

	const elId = '#' + id;
	let previous = '.section-format';
	if(i > 1){
		previous = '#format-i' + (i - 1);
	}

	gsap.from(elId, {
		scrollTrigger : {
			trigger: previous,
			start: "top bottom",
			toggleActions: "restart pause resume none",
		},
		y: 100,
		duration: i / 10
	});
}

for(let i = 2; i <= 3; i++){
	const id = 'tarif-i' + i;
	const element = document.getElementById(id);
	if(!element) continue;

	const elId = '#' + id;
	let previous = '.section-tarifs';
	if(i > 1){
		previous = '#tarif-i' + (i - 1);
	}

	gsap.from(elId, {
		scrollTrigger : {
			trigger: previous,
			start: "top bottom",
			toggleActions: "restart pause resume none",
		},
		y: 300,
		duration: '1.'+(i*2)
	});
}

const topNavigation = document.getElementById('top-navigation');
const isMobile = window.outerWidth < 778;

const testimonials = document.querySelectorAll('.testimonial');
if(isMobile && testimonials.length > 0){
	testimonials.forEach(function(item){
		item.removeAttribute('data-speed');
	});
}

window.addEventListener('scroll', () => {
	const offsetY = this.scrollY;

	document.body.style.cssText += `--ScrollTop: ${offsetY}px`; 

	if(offsetY > 100){
		topNavigation.classList.add('filled');
	}else{
		topNavigation.classList.remove('filled');
	}
});

document.querySelectorAll('.mobile-menu .nav-item a').forEach(function(item){
	item.addEventListener('click', function(){
		document.getElementById('close-mobile-menu').click();
	});
});

document.querySelectorAll('a[href*="#"]').forEach(function(link){
	var href = link.getAttribute('href');
	var elId = href.split('#')[1];
	if(elId.length > 0) {
		var block = document.getElementById(elId);
		if(block) {
			link.addEventListener('click', function(e){
				e.preventDefault();

				smoother.scrollTo('#' + elId, true);
			});
		}
	}
});

const mainSlider = document.querySelector('.slider_main');
if(mainSlider){
	const container = document.querySelector('.container');
	const marginWidth = (window.innerWidth - container.offsetWidth) / 2;
	new Swiper('.slider_main', {
		slidesOffsetBefore: marginWidth + 15,
		slideToClickedSlide: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-right",
			prevEl: ".swiper-button-left",
		},
		breakpoints: {
			0: {
				slidesOffsetBefore: 10,
				slidesPerView: 1.3,
				spaceBetween: 20
			},
			680: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
}

const testimonialSlider = document.querySelector('.slider_testimonial');
if(testimonialSlider){
	new Swiper('.slider_testimonial', {
		grabCursor: true,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				origin: "left center",
				translate: ["-5%", 0, -200],
				rotate: [0, 100, 0],
			},
			next: {
				origin: "right center",
				translate: ["5%", 0, -200],
				rotate: [0, -100, 0],
			},
    },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			680: {
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
	});
}

