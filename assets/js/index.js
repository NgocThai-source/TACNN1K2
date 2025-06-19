document.addEventListener("DOMContentLoaded", function () {
    // Search functionality
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    alert("Searching for: " + keyword);
                    searchInput.blur();
                    setTimeout(() => {
                        searchInput.value = "";
                    }, 1000);
                }
            }
        });
    }

    // Active menu link detection
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('.inner-menu a');
    menuLinks.forEach(function(link) {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Section-one scroll effect
    window.addEventListener('scroll', function () {
        const heading = document.querySelector('.section-one div');
        if (!heading) return;
        
        const scrollY = window.scrollY;
        const fadeStart = 0;
        const fadeEnd = 300;
        const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        heading.style.opacity = Math.max(opacity, 0);
    });

    // Counter animation
    const counters = document.querySelectorAll(".counter");
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animateCount = (counter, duration = 2000) => {
        const target = +counter.getAttribute("data-target");
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOut(progress);
            const value = Math.floor(easedProgress * target);

            counter.textContent = value.toLocaleString();

            // Add plus sign if not present
            if (!counter.textContent.includes('+')) {
                counter.textContent += '+';
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = value.toLocaleString() + '+';
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Feature box functionality
    const mainFeature = document.getElementById("main-feature");
    const mainIcon = document.getElementById("main-icon");
    const mainTitle = document.getElementById("main-title");
    const mainDesc = document.getElementById("main-desc");
    const featureList = document.getElementById("feature-list");

    if (featureList) {
        const featureBoxes = document.querySelectorAll('.feature-box');
        featureBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const title = box.getAttribute('data-title');
                const desc = box.getAttribute('data-desc');
                const imgSrc = box.querySelector('img').src;

                // Update main feature
                if (mainIcon && mainIcon.querySelector('img')) {
                    mainIcon.querySelector('img').src = imgSrc;
                }
                if (mainTitle) mainTitle.innerText = title;
                if (mainDesc) mainDesc.innerText = desc;

                // Scroll to main feature
                if (mainFeature) {
                    mainFeature.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Timeline functionality
    const timelineCards = document.querySelectorAll(".timeline-content");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const timelineContainer = document.querySelector(".timeline");

    timelineCards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

    if (prevBtn && timelineContainer) {
        prevBtn.addEventListener("click", () => {
            timelineContainer.scrollBy({ left: -320, behavior: "smooth" });
        });
    }

    if (nextBtn && timelineContainer) {
        nextBtn.addEventListener("click", () => {
            timelineContainer.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    // Slide functionality
    const nextSlide = document.getElementById('next');
    const prevSlide = document.getElementById('prev');
    const slide = document.getElementById('slide');
    
    if (nextSlide && slide) {
        nextSlide.onclick = function () {
            const lists = document.querySelectorAll('.item');
            slide.appendChild(lists[0]);
        };
    }
    
    if (prevSlide && slide) {
        prevSlide.onclick = function () {
            const lists = document.querySelectorAll('.item');
            slide.prepend(lists[lists.length - 1]);
        };
    }
    
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function () {
            if (slide) {
                const lists = document.querySelectorAll('.item');
                slide.appendChild(lists[0]);
            }
        });
    });
    
    // Initialize GSAP animations if available
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animation for section-four
        gsap.utils.toArray(".section-four").forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    once: true
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
            
            // Images in section-four: all from bottom up
            gsap.from(".iamge1", {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    once: true
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out"
            });
            
            gsap.from(".iamge2", {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    once: true
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            });
            
            gsap.from(".iamge3", {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    once: true
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out"
            });
        });
    }
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});

// Login/Register form script
function openForm() {
    document.getElementById('auth-form-container').innerHTML = `
    <div class="form">
        <span class="close-form" onclick="closeForm()">&times;</span>
        <div class="form-container sign-in">
            <form>
                <h1>Login</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fab fa-github"></i></a>
                    <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="email" placeholder="Email">
                <div class="password-input-wrapper">
                    <input type="password" id="login-password" placeholder="Password">
                    <i id="login-eye-icon" class="fa-solid fa-eye-slash"></i>
                </div>
                <a href="#">Forgot Password?</a>
                <button>Login</button>
            </form>
        </div>
        <div class="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fab fa-github"></i></a>
                    <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Full Name">
                <input type="email" placeholder="Email">
                <div class="password-input-wrapper">
                    <input type="password" id="signup-password" placeholder="Password">
                    <i id="signup-eye-icon" class="fa-solid fa-eye-slash"></i>
                </div>
                <button>Register</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all site features</p>
                    <button class="hidden" id="login">Login</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all site features</p>
                    <button class="hidden" id="register">Register</button>
                </div>
            </div>
        </div>
    </div>
    `;

    document.querySelector('.form').classList.add('show');
    
    const container = document.querySelector('.form');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // Password toggle functionality for login form
    const loginEyeIcon = document.getElementById('login-eye-icon');
    const loginPasswordInput = document.getElementById('login-password');
    
    loginEyeIcon.addEventListener('click', function () {
        togglePasswordVisibility(loginPasswordInput, loginEyeIcon);
    });
    
    // Password toggle functionality for signup form
    const signupEyeIcon = document.getElementById('signup-eye-icon');
    const signupPasswordInput = document.getElementById('signup-password');
    
    signupEyeIcon.addEventListener('click', function () {
        togglePasswordVisibility(signupPasswordInput, signupEyeIcon);
    });

    function togglePasswordVisibility(inputField, eyeIcon) {
        if (inputField.type === 'password') {
            inputField.type = 'text';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        } else {
            inputField.type = 'password';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
    }

    // Get reference to the login and register links in the header
    const headerLogin = document.getElementById('header-login');
    const headerRegister = document.getElementById('header-register');

    // Add click event listeners to switch between login and register forms
    headerLogin.addEventListener('click', function (event) {
        event.preventDefault();
        container.classList.remove('active');
    });

    headerRegister.addEventListener('click', function (event) {
        event.preventDefault();
        container.classList.add('active');
    });
}

function closeForm() {
    const form = document.querySelector('.form');
    if (form) {
        form.classList.remove('show');
    }
}
