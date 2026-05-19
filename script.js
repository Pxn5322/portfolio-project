// Tab Functionality
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}

// Side Menu Functionality
const sideMenu = document.getElementById('side-menu');

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}

// Contact Form Submission to Google Sheet (example)
const form = document.getElementById('submit-to-google-sheet');
const msg = document.getElementById('msg');

function handleSubmit(e) {
  e.preventDefault();
  const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Apps Script URL

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Message sent successfully';
      setTimeout(() => { msg.innerHTML = ''; }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
}