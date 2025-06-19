let header = document.querySelector('.header');
const currentPath = window.location.pathname;
const isInPages = currentPath.includes("/pages/");
let prefix = isInPages ? "../" : "";
let logoPath = prefix + "assets/images/logo.png";

const navLinks = [
  { href: prefix + "index.html", label: "Home", match: "/index.html" },
  { href: prefix + "pages/statistics.html", label: "Statistics", match: "/pages/statistics.html" },
  { href: prefix + "pages/community.html", label: "Community", match: "/pages/community.html" },
  { href: prefix + "pages/ranking.html", label: "Ranking", match: "/pages/ranking.html" },
  { href: prefix + "pages/news.html", label: "Partnerships", match: "/pages/news.html" },
  { href: prefix + "pages/guidance.html", label: "Guidance", match: "/pages/guidance.html" }
];

function getActiveClass(linkMatchPath) {
  return linkMatchPath && currentPath.includes(linkMatchPath) ? "active" : "";
}

// Create HTML menu
let menuHTML = navLinks.map(link => `
  <li><a href="${link.href}" class="${getActiveClass(link.match)}">${link.label}</a></li>
`).join("");
let mobileMenuHTML = navLinks.map(link => `
  <li><a href="${link.href}" class="${getActiveClass(link.match)}">${link.label}</a></li>
`).join("");
header.innerHTML = `
<div class="header__topbar"  data-aos="fade-down" data-aos-duration="11500">
   <div class="header__topbar container-fluid px-5 ">
        <div class="header__topbar__container px-5">
        
              <div class="header__topbar__container--contacts py-2">
                <div class="inner-social ">
                  <span> +84 787 540 572</span>
                  <ul ">
                     <li ">
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                            <i class="fa-brands fa-tiktok"></i>
                      </a>
                      </li>
                        <li>
                        <a href="#" target="_blank">
                             <a href="#"><i class="fab fa-dribbble"></i></a>
                      </a>
                      </li>
                        <li>
                        <a href="#" target="_blank">
                                           <a href="#"><i class="fab fa-pinterest"></i></a>

                      </a>
                      </li>
                  </ul>
                </div>
              </div>


            <div class="register">
                 <ul class="container-register px-2">
                     <li><a href="#" id="header-login" onclick="openForm()">Login</a></li>
                     <li>|</li>
                     <li><a href="#" id="header-register" onclick="openForm()">Register</a>
                     </li>
                 </ul>
            </div>

        </div>
    </div>
</div>


<nav class="header__nav container-fluid px-5" data-aos="fade-down" data-aos-duration="11500">
  <div class="header__nav__container">
    <div class="row">
      <div class="col-12"> 
        <div class="inner-main py-4">

          <div class="inner-logo">
            <a href="${prefix}index.html">
              <img src="${logoPath}" alt="Waste Less">
            </a>
            <span>Waste Less</span>
          </div>

          <div class="inner-menu">
            <ul>${menuHTML}</ul>
          </div>
          
          <div class="left">

                <div class="inner-search">
                    <i class="fas fa-search search-icon" id="search"></i>

                     <input type="text" id="search-input" class="form-control search-input" placeholder="Search...">
                </div>
          
         
                <div class="inner-icon-mobi">
                     <i class="fa-solid fa-bars"></i>
                </div>

                <div class="mobile-menu-overlay"></div>

          </div>


        </div>
      </div>
     </div>
     </div>
</nav>



<div class="header__menu">
<div class="header__menu__overlay"></div>
 <div class="header__menu__body--content">
      <ul>
        ${mobileMenuHTML}
      </ul>
  <i class="fas fa-times" id="menu_close"></i>
</div>
</div>

<div class=scroll> 
<div class="scroll-top">
<i class="fas fa-arrow-up"></i>
</div></div>
`;

AOS.init();







const mobileMenuBtn = document.querySelector('.inner-icon-mobi i');
const mobileMenu = document.querySelector('.header__menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const menuClose = document.getElementById('menu_close');

// Open mobile menu
mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
});

// Close mobile menu when clicking overlay
mobileMenuOverlay.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
});

// Close mobile menu when clicking close button
menuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
});

// Close menu when clicking menu item (if needed)
const menuItems = document.querySelectorAll('.header__menu__body--content ul li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });
});









const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Scroll Top
var scrollTop = () => {
    var header = $(".header");
    header.scrollIntoView({ behavior: "smooth", block: "start" });
};

var scrollBtn = $(".scroll");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBtnDisplay);

function scrollBtnDisplay() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 400
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Active link header
var listLink = location.href;
var listItem = $$(".header__nav__container--list a");
var listLength = listItem.length;

var i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) {
        listItem[i].className = "active";
    }
}

var links = location.href;
var items = $$(".header__menu__body--content a");
var listslength = items.length;

var j = 0;
for (j; j < listLength; j++) {
    if (items[j].href === links) {
        items[j].className = "active";
    }
}

// Header sticky
var headerSticky = $(".header__nav");
var topBar = $(".header__topbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        headerSticky.classList.add("scroll");
        topBar.classList.add("hide");
    } else {
        headerSticky.classList.remove("scroll");
        topBar.classList.remove("hide");
    }
}

// Search Button
var searchIcon = $("#search");
var input = $(".search-input");


searchIcon.onclick = function() {
    input.classList.toggle("active");
};

// Active link
var links = $$(".header__nav__container--list li");
var add = function() {
    $(".header__nav__container--list li.active").classList.remove("active");
    this.classList.add("active");
};
links.forEach((link) => {
    link.addEventListener("click", add);
});
// Active Search
var tabs = $$(".search__container__tab");

tabs.forEach((tab) => {
    tab.onclick = function() {
        $(".search__container__tab.active").classList.remove("active");
        this.classList.add("active");
    };
});

