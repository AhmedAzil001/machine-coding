import React from "react";

class ModalClass extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown = ({key})=>{
    if(key==="Escape") this.props.toggleModal();
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="title">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
          <div className="btn-div">
            <button onClick={()=>this.props.toggleModal()}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalClass;