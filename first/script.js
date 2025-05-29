const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen:', $screen);
console.log('toggleButton: ', $toggleButton);

if ($screen && $toggleButton) {
  // 첫번째 인자 : 문자열(이벤트 종류)
  // 두번째 인자 : 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert('hi');
  }

  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn: ', stopWatchOn);
    $toggleButton.innerHTML = stopWatchOn ? '■' : '▶';
    $toggleButton.classList.toggle('stop-color');
    // $toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    if (stopWatchOn) {
      // 첫번째 인자: 콜백함수
      // 두번째 인자: Number (ms)
      timeInterval = setInterval(() => {
        // 1초 > 100
        // 1분 > 60초 > 6000
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0');
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0');
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = '00:00:00';
    }
  });
}
