const API_KEY = "e9f4e0112fe8c8649824aa5a0adae7a2";
const BASE_PATH = "https://api.themoviedb.org/3";

// 이미지 예시
// https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg
export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&region=kr`).then(
    (response) => response.json()
  );
};

