let path = anime.path('path');

let circlePathing = anime({
  targets: '.circle',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 20000,
  loop: true,
});

let circleColoring = anime({
targets: '.circle',
backgroundColor: 'hsl(312, 100%, 50%)',
duration: 2500,
easing: 'linear',
direction: 'alternate',
loop: true
});

let pathAnimation = anime({
    targets: 'path',
    opacity: [0, 1],
    duration: 2500,
    easing: 'linear',
    direction: 'alternate',
    loop: true
});

let buttonsColoring = anime({
  targets: ['#play', '#pause', '#stop'],
  backgroundColor: 'hsl(0, 100%, 60%)',
  duration: 2500,
  easing: 'linear',
  direction: 'alternate',
  loop: true
  });

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

playBtn.addEventListener('click', function(){
  circlePathing.play();
  circleColoring.play();
  pathAnimation.play();
  buttonsColoring.play();
});
pauseBtn.addEventListener('click', function(){
  circlePathing.pause();
  circleColoring.pause();
  pathAnimation.pause();
  buttonsColoring.pause();
});
stopBtn.addEventListener('click', function(){
  circlePathing.restart();
  circleColoring.restart();
  pathAnimation.restart();
  buttonsColoring.restart();

  circlePathing.pause();
  circleColoring.pause();
  pathAnimation.pause();
  buttonsColoring.pause();
});

