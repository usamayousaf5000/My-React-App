import React from "react";

const UpdatedCompoent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    increment = () => {
      // console.log("-------")
      this.setState({
        count : this.state.count + 1
      })
    };
    decrement = () => {
        this.setState({
            count : this.state.count  - 1
          })
    };
    reset = () => {
        this.setState({
            count : 0
          })
    };

    render() {
        console.log('-------',this.state.count)
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
          />
        </div>
      )
    }
  }
  return NewComponent;
};
export default UpdatedCompoent;
