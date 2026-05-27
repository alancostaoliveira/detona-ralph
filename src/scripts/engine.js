const state = {
  view: {
    squares: document.querySelectorAll('.square'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score'),
    btnStart: document.querySelector('#btn-start'),
    btnPause: document.querySelector('#btn-pause'),
    btnReset: document.querySelector('#btn-reset'),
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
  },
  actions: {
    timerId: null,
    countDownTimerId: null,
  },
};

function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;

  if (state.values.currentTime <= 0) {
    pauseGame();
    alert('Game Over! O seu resultado foi: ' + state.values.result);
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove('enemy');
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add('enemy');
  state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound('hit');
      }
    });
  });
}

function startGame() {
  if (state.values.currentTime <= 0) resetGame();

  if (!state.actions.timerId) {
    state.actions.timerId = setInterval(
      randomSquare,
      state.values.gameVelocity,
    );
    state.actions.countDownTimerId = setInterval(countDown, 1000);
  }
}

function pauseGame() {
  clearInterval(state.actions.timerId);
  clearInterval(state.actions.countDownTimerId);
  state.actions.timerId = null;
  state.actions.countDownTimerId = null;
}

function resetGame() {
  pauseGame();
  state.values.currentTime = 60;
  state.values.result = 0;
  state.view.timeLeft.textContent = state.values.currentTime;
  state.view.score.textContent = state.values.result;
  state.view.squares.forEach((square) => square.classList.remove('enemy'));
}

function addControlListeners() {
  state.view.btnStart.addEventListener('click', startGame);
  state.view.btnPause.addEventListener('click', pauseGame);
  state.view.btnReset.addEventListener('click', resetGame);
}

function initialize() {
  addListenerHitBox();
  addControlListeners();
}

initialize();
