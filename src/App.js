import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Profil from "./Components/Profil";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
 
  handleShow = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <>
        <Button variant="warning" onClick={this.handleShow}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && 
          <Profil/>
        }
      </>
    );
  }
}

export default App;
