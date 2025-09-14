import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

const flipCard = document.querySelector('.flip-card');

flipCard.addEventListener('mousedown', (e) => {
  // flipCard.classList.toggle('flipped');
  console.log("mouse down",e);
});

flipCard.addEventListener('mouseup', (e) => {
  flipCard.classList.toggle('flipped');
  console.log("mouse up",e);
});


//2 開個話題
const topicInput = document.getElementById("topic-input");
const topicCount = document.getElementById("topic-count");

topicInput.addEventListener("input", () => {
  const len = topicInput.value.length;
  topicCount.textContent = `${len}/15`;
<<<<<<< HEAD
});
=======
});
>>>>>>> 45fec1094dee394a48c2aad5ec228152f8bfc46e
