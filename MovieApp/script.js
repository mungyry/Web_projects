// 본인 api_key입력하고 인기도순으로 영화 정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=a052248bc1c540aa3eb5e214e2efd1cc&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
// 포스터 이미지 앞의 주소
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a052248bc1c540aa3eb5e214e2efd1cc&language=ko&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
  //url 주소로 요청해서 데이터를 전송받음, await는 다받을때까지 대기
  const res = await fetch(url);
  //데이터 문자열을 제이슨으로 변환해서 data로 저장, await 로 대기
  const data = await res.json();
  console.log(data.results);
  영화보여주기(data.results); //필요한 영화 정보만 배열로 출력
}

// 검색창으로 검색햇을때(이벤트)
form.addEventListener('submit', (e) => {
  e.preventDefault(); //원래 이벤트 제거
  //폼 submit 이벤트는 서버로 입력 데이터를 보냄
  const searchTerm = search.value;
  //console.log(searchTerm);
  if (searchTerm && searchTerm !== '') {
    //입력 내용이 공백이 아닐경우 처리
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload(); //새로고침
  }
});

function 영화보여주기(movies) {
  main.innerHTML = ''; //처음에 비우기

  movies.forEach((movie) => {
    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
    const overview = movie.overview;

    const moveEl = document.createElement('div'); // div태그 생성
    moveEl.classList.add('movie');

    moveEl.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${평점색선택(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>상세 보기</h3>
      ${overview}
    </div>
    `;
    main.appendChild(moveEl);
  });
}

function 평점색선택(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
