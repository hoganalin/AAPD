import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

const flipCard = document.querySelector('.flip-card');

flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('flipped');
});