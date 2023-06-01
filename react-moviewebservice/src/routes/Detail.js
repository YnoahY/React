import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  //id값 찾아옴
  const { id } = useParams();

  //api로 부터 데이터 fetch
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;

//useParams(); : url에 있는 값(변경되는 값 포함)을 반환, url의 변수 값
//App.js의 <Route path="/movie/:id"> 에서 id == const { id }의 id 변수명 넣음
