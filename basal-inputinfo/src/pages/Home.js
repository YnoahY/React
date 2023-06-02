import React from "react";

const Home = () => {
  return <h1>Home 화면 입니다.</h1>;
};

export default Home;

// function Home() {
//   return <h1>Home 화면 입니다.</h1>;
// }
// export default Home;

/**리액트 컴포넌트 만드는 방법
 * 1. 함수형 컴포넌트
 * 		ex)
  			import React from "react";

					function Home() {
						return <h1>Home 화면 입니다.</h1>;
					}

				export default Home;

 * 2. 클래스형 컴포넌트
				import React, {Component} from "react";

					class Home extends Component {
						render() {
							return <h1>Home 화면 입니다.</h1>
						}
					}

				export default Home;
 */
