import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLogIn, setIsLogIn] = useState(false);

  const onClickLogin = () => {
    setIsLogIn(true);
  };

  const onClickLogOut = () => {
    setIsLogIn(false);
  };

  return (
    <div>
      <Toolbar
        isLogIn={isLogIn}
        onClickLogin={onClickLogin}
        onClickLogOut={onClickLogOut}
      />
      <div style={{ padding: 16 }}>리액트...재밌...어....</div>
    </div>
  );
}

export default LandingPage;
