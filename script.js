document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        const accordionContent = button.nextElementSibling;
        if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null;
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
      });
    });
  });
  