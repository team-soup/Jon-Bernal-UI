let menuBtn = document.querySelector('.menu-btn');
let menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach((el) => {
  el.classList.add('hidden');
});

menuBtn.addEventListener('click', function() {
  menuItems.forEach((el) => {
    el.classList.toggle('hidden');
  });
  if (menuBtn.textContent === "MENU"){
    menuBtn.textContent = "CLOSE";
  } else {
    menuBtn.textContent = "MENU";
  }
});