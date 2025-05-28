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
  });
}
