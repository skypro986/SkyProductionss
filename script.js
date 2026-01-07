document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Animation
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            // Fade out the preloader after content loads
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Wait 500ms for fade out transition
        });
        // Disable preloader on mobile
    if (window.innerWidth < 768) {
        preloader.style.display = 'none';
    } else {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
    }
 const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.classList.add("active");
  } else {
    mobileMenu.classList.remove("active");
  }
});
// Close menu when clicking any mobile menu link
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuOpen = false;
  });
});


    // 2. Sticky Header & Active Nav Links
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('#navbar a.nav-link');
    
    const stickyHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        // Highlight active link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // Adjusted for header height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', stickyHeader);
    stickyHeader(); // Initial check

   

  // EMAILJS CONTACT FORM
(function () {
  emailjs.init('lz2JmrSq9ssvSoJ-M'); // public key
})();

const form = document.getElementById('contact-form');

if (form) {
  const loading = form.querySelector('.loading');
  const sentMessage = form.querySelector('.sent-message');
  const errorMessage = form.querySelector('.error-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    loading.style.display = 'block';
    sentMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    emailjs
      .sendForm(
        'service_hlu7dof',
        'template_ff53qdc',
        this
      )
      .then(() => {
        loading.style.display = 'none';
        sentMessage.style.display = 'block';
        form.reset();
      })
      .catch((error) => {
        loading.style.display = 'none';
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Failed to send message.';
        console.error('EmailJS Error:', error);
      });
  });
}
});
