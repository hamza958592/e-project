// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// search bar strt

// Sample data extracted from the HTML context
const data = [
    { type: "course", name: "Digital Marketing Course" },
    { type: "course", name: "Web Development Course" },
    { type: "course", name: "Video Editing Course" },
    { type: "team", name: "Maviya Khan" },
    { type: "team", name: "Hussian" },
    { type: "team", name: "Murad Ali Khan" },
    { type: "team", name: "Muskan" },
    { type: "service", name: "Schools" },
    { type: "service", name: "Karachi Grammar School" },
    { type: "service", name: "The Smart School" },
    { type: "service", name: "Happy Home School" }
];

const searchBar = document.getElementById('searchBar');
const results = document.getElementById('results');

searchBar.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Clear previous results

    if (query) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.type.charAt(0).toUpperCase() + item.type.slice(1)}: ${item.name}`;
            results.appendChild(li);
        });
    }
});


// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

// Our Partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});

