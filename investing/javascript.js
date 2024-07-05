document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const gallery = document.getElementById('gallery');
    const videos = document.getElementById('video-section');
    const images = gallery.getElementsByTagName('img');
    const videoElements = videos.getElementsByTagName('video');
    const slideshowModal = document.getElementById('slideshow-modal');
    const slideshowContent = document.getElementById('slideshow-content');
    const closeBtn = document.getElementById('close-btn');
    const allImagesBtn = document.getElementById('all-images-btn');
    const allVideosBtn = document.getElementById('all-videos-btn');
    const currentViewBtn = document.getElementById('current-view-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    let currentType = 'image'; // 'image' or 'video'

    // Function to show the modal
    function showModal(type) {
        currentType = type;
        currentIndex = 0;
        slideshowModal.style.display = 'block';
        updateSlideshowContent();
    }

    // Function to close the modal
    closeBtn.addEventListener('click', function() {
        slideshowModal.style.display = 'none';
    });

    // Function to update the content in the modal
    function updateSlideshowContent() {
        if (currentType === 'image') {
            slideshowContent.innerHTML = `<img src="${images[currentIndex].src}" alt="Slideshow Image">`;
        } else {
            slideshowContent.innerHTML = `<video controls src="${videoElements[currentIndex].src}" poster="${videoElements[currentIndex].poster}"></video>`;
        }
    }

    // Functions to show next and previous content
    function showNext() {
        const elements = currentType === 'image' ? images : videoElements;
        currentIndex = (currentIndex + 1) % elements.length;
        updateSlideshowContent();
    }

    function showPrevious() {
        const elements = currentType === 'image' ? images : videoElements;
        currentIndex = (currentIndex - 1 + elements.length) % elements.length;
        updateSlideshowContent();
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrevious);

    // Show all images or videos at once
    allImagesBtn.addEventListener('click', function() {
        gallery.style.display = 'flex';
        videos.style.display = 'none';
        slideshowModal.style.display = 'none';
        allImagesBtn.style.display = 'none';
        allVideosBtn.style.display = 'inline';
        currentViewBtn.style.display = 'inline';
    });

    allVideosBtn.addEventListener('click', function() {
        videos.style.display = 'block';
        gallery.style.display = 'none';
        slideshowModal.style.display = 'none';
        allVideosBtn.style.display = 'none';
        allImagesBtn.style.display = 'inline';
        currentViewBtn.style.display = 'inline';
    });

    // Show the current view (slideshow)
    currentViewBtn.addEventListener('click', function() {
        slideshowModal.style.display = 'block';
        updateSlideshowContent();
        gallery.style.display = 'none';
        videos.style.display = 'none';
        allImagesBtn.style.display = 'inline';
        allVideosBtn.style.display = 'inline';
        currentViewBtn.style.display = 'none';
    });

    // Initial state
    gallery.style.display = 'flex';
    videos.style.display = 'none';
    allImagesBtn.style.display = 'none';
    allVideosBtn.style.display = 'inline';
    currentViewBtn.style.display = 'inline';
});

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get form and its elements
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Clear initial field values on focus
    nameInput.addEventListener('focus', clearInitialValue);
    emailInput.addEventListener('focus', clearInitialValue);
    subjectInput.addEventListener('focus', clearInitialValue);
    messageInput.addEventListener('focus', clearInitialValue);

    // Validate form on submit
    contactForm.addEventListener('submit', function(event) {
        // Check if critical fields are empty
        if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields.'); // Display alert for missing fields
        }
    });

    // Function to clear initial field value
    function clearInitialValue(event) {
        const inputField = event.target;
        if (inputField.value === inputField.placeholder) {
            inputField.value = '';
        }
    }
});
