let menuBtn = document.querySelector('.menu-btn');
let menuItems = document.querySelectorAll('.nav-item');
let nav = document.querySelector('.nav');


menuItems.forEach((el) => {
  el.classList.add('hidden');
});

menuBtn.addEventListener('click', function() {
  menuItems.forEach((el) => {
    el.classList.toggle('hidden');
  });
  if (menuBtn.textContent === "Menu"){
    menuBtn.textContent = "Close";
  } else {
    menuBtn.textContent = "Menu";
  }
});

