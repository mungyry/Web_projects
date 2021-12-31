// 객체 상수 만들기
const progress = document.getElementById('progress'); //막대기바
const prev = document.getElementById('prev'); //버튼 이전
const next = document.getElementById('next'); //버튼 다음
// 서클(1,2,3,4)들을 객체를 저장
const circles = document.querySelectorAll('.circle');

//단계 표시 변수
let currentActive = 1;
//다음 버튼을 클릭 했을때.
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
    //다음버튼을 계속 눌러도 서클객체의 갯수이상은 안됨
  }
  막대바업데이트();
});
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
    //이전버튼을 계속 눌러도 1이하는 안됨
  }
  막대바업데이트();
});

function 막대바업데이트() {
  circles.forEach((circle, idx) => {
    //console.log(circle, idx);
    if (idx < currentActive) {
      circle.classList.add('active'); //클래스 추가
    } else {
      circle.classList.remove('active'); //클래스 제거
    }
  });
  //막대바 업데이트
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  //이전버튼을 누를수 있도록
  if (currentActive === 1) {
    prev.disabled = true; //현재 상태가 1이면 이전버튼은 사용못함
  } else if (currentActive === circles.length) {
    next.disabled = true; //상태가 4이면 다음버튼은 사용못함
  } else {
    prev.disabled = false; //그 이외는 전부 사용가능
    next.disabled = false;
  }
}
