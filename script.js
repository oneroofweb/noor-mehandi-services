/**
 * ============================================================================
 * Noor Mehndi Art - Main Script File
 * ============================================================================
 * 
 * Description: Contains all interactive logic for the Noor Mehndi Art website.
 * Developed by: Frontend Expert Developer
 * Version: 1.0.0
 * Dependencies: jQuery (v3.7.1), Owl Carousel 2 (v2.3.4)
 * 
 * TABLE OF CONTENTS:
 * 1. Global Variables & Configuration
 * 2. Gallery & Image Sync Logic
 * 3. Owl Carousel Initializations
 * 4. FAQ Accordion Logic
 * 5. Sticky Header Animations
 * 6. Off-Canvas Mobile Menu Logic
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* 1. Global Variables & Configuration                                        */
/* -------------------------------------------------------------------------- */
var galleryImagesList = [
    "images/gallery/gallery-1.webp",
    "images/gallery/gallery-2.webp",
    "images/gallery/gallery-3.webp",
    "images/gallery/gallery-4.webp",
    "images/gallery/gallery-5.webp",
    "images/gallery/gallery-6.webp",
    "images/gallery/gallery-7.webp"
];
var currentGalleryIdx = 0;

/* -------------------------------------------------------------------------- */
/* 2. Gallery & Image Sync Logic                                              */
/* -------------------------------------------------------------------------- */
/**
 * Updates the main gallery image and synchronizes the active thumbnail state.
 * @param {number} idx - The index of the active gallery image.
 */
function setGalleryImage(idx) {
    currentGalleryIdx = idx;
    
    // Update main image source
    document.getElementById('galleryMainImg').src = galleryImagesList[idx];
    
    // Reset all thumbnails to inactive state (Full opacity, White border)
    $('.owl-carousel .item img').removeClass('border-accent scale-105').addClass('border-white');
    
    // Highlight active thumbnails (Gold border, Slight zoom)
    $('.owl-carousel .item[data-gallery-idx="' + idx + '"] img').removeClass('border-white').addClass('border-accent scale-105');
}

/* ==========================================================================
   DOM READY EVENT LISTENER
   All jQuery and DOM dependent logic runs here.
   ========================================================================== */
$(document).ready(function() {

    /* ---------------------------------------------------------------------- */
    /* 3. Owl Carousel Initializations                                        */
    /* ---------------------------------------------------------------------- */
    
    // A. Gallery Carousel Initialization
    var owl = $('#gallery-carousel');
    owl.owlCarousel({
        margin: 12,
        nav: false, 
        dots: false,
        loop: true,
        responsive:{
            0: { items: 3 },
            500: { items: 4 },
            768: { items: 5 },
            1024: { items: 3 },
            1280: { items: 4 }
        }
    });
    
    // Gallery Carousel Custom Navigation
    $('.gallery-next').click(function() { 
        owl.trigger('next.owl.carousel'); 
        var nextIdx = (currentGalleryIdx + 1) % galleryImagesList.length;
        setGalleryImage(nextIdx);
    });
    
    $('.gallery-prev').click(function() { 
        owl.trigger('prev.owl.carousel'); 
        var prevIdx = (currentGalleryIdx - 1 + galleryImagesList.length) % galleryImagesList.length;
        setGalleryImage(prevIdx);
    });

    // Initialize first gallery item highlight
    setTimeout(function() { setGalleryImage(0); }, 100);

    // B. Reviews Carousel (Desktop) Initialization
    var reviewsOwlDesktop = $('#reviews-carousel-desktop');
    reviewsOwlDesktop.owlCarousel({
        margin: 20,
        nav: false,
        dots: false,
        loop: true,
        responsive:{
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
    
    // C. Reviews Carousel (Mobile) Initialization
    var reviewsOwlMobile = $('#reviews-carousel-mobile');
    reviewsOwlMobile.owlCarousel({
        margin: 15,
        nav: false,
        dots: false,
        loop: true,
        items: 1
    });
    
    // Reviews Carousel Custom Navigation (Syncs both Desktop and Mobile)
    $('.reviews-next').click(function() { 
        reviewsOwlDesktop.trigger('next.owl.carousel'); 
        reviewsOwlMobile.trigger('next.owl.carousel'); 
    });
    $('.reviews-prev').click(function() { 
        reviewsOwlDesktop.trigger('prev.owl.carousel'); 
        reviewsOwlMobile.trigger('prev.owl.carousel'); 
    });

    // D. Carousel Resize Fix
    // Fixes issue where Owl Carousel initializes with 0 width in hidden wrappers (e.g., orientation change)
    $(window).resize(function() {
        setTimeout(function() {
            reviewsOwlDesktop.trigger('refresh.owl.carousel');
            reviewsOwlMobile.trigger('refresh.owl.carousel');
        }, 200);
    });

    /* ---------------------------------------------------------------------- */
    /* 4. FAQ Accordion Logic                                                 */
    /* ---------------------------------------------------------------------- */
    $('.faq-button').click(function() {
        var $faqItem = $(this).parent();
        var $faqContent = $(this).next('.faq-content');
        var $icon = $(this).find('i');
        
        // Step 1: Close other open items for smooth accordion behavior
        $('.faq-content').not($faqContent).slideUp(300);
        $('.faq-button i').not($icon).removeClass('fa-minus').addClass('fa-plus');
        $('.faq-item').not($faqItem).removeClass('bg-white border-[#D5A770]/80 shadow-md').addClass('bg-white/60 border-[#D5A770]/40');
        
        // Step 2: Toggle the clicked item
        $faqContent.slideToggle(300);
        if ($icon.hasClass('fa-plus')) {
            // Opening state
            $icon.removeClass('fa-plus').addClass('fa-minus');
            $faqItem.removeClass('bg-white/60 border-[#D5A770]/40').addClass('bg-white border-[#D5A770]/80 shadow-md');
        } else {
            // Closing state
            $icon.removeClass('fa-minus').addClass('fa-plus');
            $faqItem.removeClass('bg-white border-[#D5A770]/80 shadow-md').addClass('bg-white/60 border-[#D5A770]/40');
        }
    });

    /* ---------------------------------------------------------------------- */
    /* 5. Sticky Header Animations                                            */
    /* ---------------------------------------------------------------------- */
    $(window).scroll(function() {
        var $header = $('#main-header');
        var $inner = $('#header-inner');
        
        // Trigger sticky morph at 50px scroll depth
        if ($(window).scrollTop() > 50) {
            $header.removeClass('bg-transparent border-transparent').addClass('bg-[#fbf4ed]/95 backdrop-blur-md border-[#D5A770]/20 shadow-sm');
            $inner.removeClass('h-[90px]').addClass('h-[70px]');
        } else {
            $header.addClass('bg-transparent border-transparent').removeClass('bg-[#fbf4ed]/95 backdrop-blur-md border-[#D5A770]/20 shadow-sm');
            $inner.addClass('h-[90px]').removeClass('h-[70px]');
        }
    });

    /* ---------------------------------------------------------------------- */
    /* 6. Off-Canvas Mobile Menu Logic                                        */
    /* ---------------------------------------------------------------------- */
    var $mobileMenuBtn = $('#mobile-menu-btn');
    var $closeMenuBtn = $('#close-menu-btn');
    var $overlay = $('#mobile-menu-overlay');
    var $drawer = $('#mobile-menu-drawer');
    var $mobileLinks = $('.mobile-link');

    /**
     * Opens the mobile off-canvas menu and locks body scroll.
     */
    function openMobileMenu() {
        $overlay.removeClass('opacity-0 pointer-events-none').addClass('opacity-100 pointer-events-auto');
        $drawer.removeClass('translate-x-full');
        $('body').addClass('overflow-hidden');
    }

    /**
     * Closes the mobile off-canvas menu and restores body scroll.
     */
    function closeMobileMenu() {
        $overlay.removeClass('opacity-100 pointer-events-auto').addClass('opacity-0 pointer-events-none');
        $drawer.addClass('translate-x-full');
        $('body').removeClass('overflow-hidden');
    }

    // Bind event listeners for mobile menu interactions
    $mobileMenuBtn.on('click', openMobileMenu);
    $closeMenuBtn.on('click', closeMobileMenu);
    $overlay.on('click', closeMobileMenu);
    $mobileLinks.on('click', closeMobileMenu); // Auto-close menu when a link is clicked
    
});
