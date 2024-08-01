import React from "react";
import ModalClass from "./ModalClass";

class AppClass extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  toggleModal= () =>{
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className="container">
        <h1>This is a Modal Demo</h1>
        {this.state.isOpen ? (
          <ModalClass
            title={"Modal Title"}
            description={"This is a description"}
            toggleModal={this.toggleModal}
          />
        ) : (
          <button onClick={()=> this.toggleModal()}>
            Open
          </button>
        )}
      </div>
    );
  }
}

export default AppClass;
