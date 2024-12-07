import React from "react";

class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("parent-constructor");
  }

  componentDidMount() {
    // this.time=setInterval(()=>{
    //     console.log("parent-componentDidmount");
    // },1000 )
    // console.log("parent-componentdidmount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    //     clearInterval(time);
    //     console.log(" clear memory");
  }

  render() {
    console.log("render");

    return (
      <>
        <h1> {this.props.name}</h1>
        <h1> count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          {" "}
          class Button
        </button>
      </>
    );
  }
}

export default Profileclass;
