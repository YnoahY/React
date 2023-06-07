import React from "react";
import Book from "./Book";

const Library = (props) => {
  return (
    <div>
      <Book name="'까눌레는 맛있지'" numOfPage={300} />
      <Book name="'떡볶이 먹고싶다'" numOfPage={800} />
      <Book name="'리액트란 무엇인가...'" numOfPage={600} />
      <hr />
    </div>
  );
};

export default Library;
