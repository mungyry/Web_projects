// %표시 글자, 백그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// 로딩 숫자
let load = 0;

let interval = setInterval(blurring, 30); // 0.03초 시간만큼 반복해서 함수 실행

function blurring() {
  load++;
  //   console.log(load);
  if (load > 99) {
    clearInterval(interval); // 위의 반복인터벌을 중지한다.
  }
  loadText.textContent = `${load}%`; // 1옆에 있는 따옴표 벡틱 문자열 `${변수}` 숫자 1옆에 있는 따옴표
  // 1. 블러필터를 사용해 처음에 흐리게30px => 설명하게0px

  // 2. 글자를 갈수록 흐리게 opacity 1(선명)=>0(안보임)
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
