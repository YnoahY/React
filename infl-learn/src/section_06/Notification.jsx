import React from "react";

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} "componentDidMount() called."`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} "componentDidUpdate() called."`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id}  "componentWillUnmount() called."`);
  }

  render() {
    return (
      <div style={Styles.wrapper}>
        <span style={Styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

const Styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRedius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

export default Notification;
