const logobar = document.querySelector('.header .nav-bar .nav-list .logo-bar');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

logobar.addEventListener('click', () => {
    logobar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_pos = window.scrollY;
    if (scroll_pos > 250) {
        header.style.backgroundColor = "rgb(36, 36, 36)";
    }
    else {
        header.style.backgroundColor = "rgba(43, 37, 37, 0.4)";
    }
});

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        logobar.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


/* Animate class anim-from-right */
const section_titles = document.querySelectorAll('.anim-from-right');
observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-in-right 2s ease forwards';
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
section_titles.forEach(title => {
    observer.observe(title);
})
/* End Animate class anim-from-right */


/* Animate class anim-from-left */
const paragraphs = document.querySelectorAll('.anim-from-up');
observer1 = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `fade-in-up 1s ${entry.target.dataset.delay} ease forwards`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
paragraphs.forEach(paragraph => {
    observer1.observe(paragraph);
})
/* End Animate class anim-from-left */

/* Animate class anim-from-bottom */
const profile_pic = document.querySelectorAll('.anim-from-bottom');
observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-in-bottom 2s ease forwards';
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
profile_pic.forEach(box_image => {
    observer2.observe(box_image);
})

/* End Animate class anim-from-bottom */


/* Animate class anim-from-left */
const elements = document.querySelectorAll('.anim-from-left');
observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-in-left 2s ease forwards';
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
elements.forEach(element => {
    observer3.observe(element);
})

/* End Animate class anim-from-left */


//option-2
/*function callbackFunc(entries, observer) {
    entries.forEach(entry => {
        var txt = entry.target.id + " visibility: " + entry.isIntersecting;

        if (entry.isIntersecting) {

        }
    });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('about'));
observer.observe(document.getElementById('projects'));
*/

/* Options:
root: null << Set to null if you want it inside your viewport (visible area)
threshold: 0.3 << means 30% visibility. If you set 0.3, the callback is called
once when the visibility reach at least 30% and once it is visible for less than 30%. */

