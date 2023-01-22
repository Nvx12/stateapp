import "./App.css";
import React from "react";
import Button from 'react-bootstrap/Button';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Aziza Boussetta",
      bio: "Aziza Boussetta is a creator of minimalistic x bold graphics anddigital artwork. Artist/ Creative Director by Day #NFT minting@with FND night.",
      profession: "Digital Artist",
      show: false,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  handleShow = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <>
      <Button variant="warning" onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</Button>
        {
          this.state.show && <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
              <button className="btn btn-secondary"></button>
              <span className="name mt-3">{this.state.name}</span>
              <span className="idd">{this.state.profession}</span>
              <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <span className="number">
                  1069 <span className="follow">Followers</span>
                </span>
              </div>
              <div className=" d-flex mt-2">
                <button className="btn1 btn-dark">Edit Profile</button>
              </div>
              <div className="text mt-3">
                <span>{this.state.bio}</span>
              </div>
              <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                <span>
                  <i className="fa fa-twitter"></i>
                </span>
                <span>
                  <i className="fa fa-facebook-f"></i>
                </span>
                <span>
                  <i className="fa fa-instagram"></i>
                </span>
                <span>
                  <i className="fa fa-linkedin"></i>
                </span>
              </div>
              <div className=" px-2 rounded mt-4 date ">
                <span className="join">Joined December,2022</span>
              </div>
            </div>
          </div>
        </div>
        }    
        
      </>
    );
  }
}

export default App;
