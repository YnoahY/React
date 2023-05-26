import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

//propType 체크
//componentName.PropTypes => 오류 발생/ propTypes으로 변경 할 것
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
