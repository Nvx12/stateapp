import React from "react";


class Profil extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Aziza Boussetta",
      bio: "Aziza Boussetta is a creator of minimalistic x bold graphics anddigital artwork. Artist/ Creative Director by Day #NFT minting@with FND night.",
      profession: "Digital Artist",  
      imgSrc: 'https://i.imgur.com/wvxPV9S.png',
      count : 0
    };
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({count : this.state.count+1})
    }, 1000);
  }
  
  render() {
    return (
      <>
  
     
          <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            
            <div className="card p-4">
              <div className=" image d-flex flex-column justify-content-center align-items-center">
                <img  src={this.state.imgSrc} alt='logo' height={100}  />
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
                <p>interval time: {this.state.count}</p>
              </div>
            </div>
          </div>
        
      </>
    );
  }
}

export default Profil;
