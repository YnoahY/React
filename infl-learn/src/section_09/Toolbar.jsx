import React from "react";

const Toolbar = (props) => {
  const { isLogIn, onClickLogin, onClickLogOut } = props;

  return (
    <div style={styles.wrapper}>
      {isLogIn && <span style={styles.greeting}>환영합니다!!</span>}
      {isLogIn ? (
        <button onClick={onClickLogOut}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
    color: "red",
  },
};

export default Toolbar;
