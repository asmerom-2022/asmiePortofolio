document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Get references to the new paragraph and button
const hiddenParagraphs = document.querySelectorAll('.hidden-paragraph');
const seeMoreButtons = document.querySelectorAll('.see-more-btn');
const ellipses = document.querySelectorAll('.ellipsis');
const hiddenTexts = document.querySelectorAll('.hidden-text');

// Add event listeners to each "See More" button
for (let i = 0; i < seeMoreButtons.length; i++) {
    seeMoreButtons[i].addEventListener('click', () => {
        const isHidden = hiddenTexts[i].style.display === 'none' || hiddenTexts[i].style.display === '';

        if (isHidden) {
            hiddenTexts[i].style.display = 'inline';
            seeMoreButtons[i].textContent = 'See Less';
            ellipses[i].style.display = 'none';
        } else {
            hiddenTexts[i].style.display = 'none';
            seeMoreButtons[i].textContent = 'See More';
            ellipses[i].style.display = 'inline';
        }
    });
}

// handle for toggle bar
// Get references to the toggle button and content
const toggleButton = document.querySelector('.toggle-button');
const content = document.querySelector('.content');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function () {
    // Toggle the display property of the content
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});


