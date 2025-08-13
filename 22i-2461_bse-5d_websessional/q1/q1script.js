// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Menu Filter Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      menuItems.forEach(item => {
        if (item.classList.contains(category) || category === 'all') {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Real-time Form Validation
  const contactForm = document.querySelector('form');
  const nameInput = contactForm.querySelector('input[name="name"]');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const messageInput = contactForm.querySelector('textarea[name="message"]');
  
  contactForm.addEventListener('input', () => {
    nameInput.setCustomValidity('');
    emailInput.setCustomValidity('');
    messageInput.setCustomValidity('');
  
    if (nameInput.value.trim() === '') {
      nameInput.setCustomValidity('Please enter your name.');
    }
  
    if (!emailInput.value.includes('@')) {
      emailInput.setCustomValidity('Please enter a valid email.');
    }
  
    if (messageInput.value.trim().length < 10) {
      messageInput.setCustomValidity('Your message should be at least 10 characters long.');
    }
  });
  
  // Gallery Image Modal
  const galleryImages = document.querySelectorAll('.gallery-container img');
  const modal = document.createElement('div');
  const modalImg = document.createElement('img');
  modal.classList.add('modal');
  modal.appendChild(modalImg);
  document.body.appendChild(modal);
  
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      modalImg.src = image.src;
      modal.style.display = 'block';
    });
  });
  
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  