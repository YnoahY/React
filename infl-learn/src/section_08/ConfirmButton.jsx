import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    //this.handleConfirm = this.handleconfirm.bind(this);
  }

  // handleconfirm() {
  //   this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
  // }
  handleConfirm = () => {
    this.setState((prevState) => ({ isConfirmed: !prevState.isConfirmed }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인 완료" : "확인 요망"}
      </button>
    );
  }
}

export default ConfirmButton;
