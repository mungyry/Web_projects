// 사용할 객체를 상수로
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// id 선택시 getElementById를 사용('id')
const body = document.getElementById('gradient');
const h1 = document.querySelector('h1');
// const button = document.querySelector('button');
// 이벤트 리스너
// button.addEventListener('click', set);
function set() {
  body.style.background =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
