import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Hello Contact Page ...!</h1>
          <div className="row">
            <div className="col-11 col-sm-10 mx-auto">
              <img
                src={require("./Image/DigitalMarket.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
