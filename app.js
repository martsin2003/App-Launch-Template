const slides = document.querySelectorAll('.header-slide');
const dialog = document.getElementById('dialog');

let index = 0;
let stateDialog = false;

function nextSlide() {
  index = index === 2 ? 0 : index + 1;
  slides.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function openDialog() {
  stateDialog = !stateDialog;
  if (stateDialog) {
    this.dialog.style.display = 'flex';
  } else {
    this.dialog.style.display = 'none';
  }
}
