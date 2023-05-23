import React from "react";

function Individual() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="text-container">
              <h1
                style={{
                  fontSize: "3.125rem",
                  lineHeight: "1.2",
                }}
              >
                <b>
                  <b>Easy</b>
                </b>
              </h1>
              <h1
                style={{
                  fontSize: "3.125rem",
                  lineHeight: "1.2",
                }}
              >
                <b>
                  <b>scheduling</b>
                </b>
              </h1>
              <h1
                style={{
                  fontSize: "3.125rem",
                  lineHeight: "1.2",
                  color: "rgb(0, 107, 255)",
                }}
              >
                <b>
                  <b>ahead</b>
                </b>
              </h1>
              <p>
                This website is a hub for scheduling meetings
                <br />
                proffessionaly and effeciently,eliminating the bases of
                <br />
                back-and-forth emails so you can get back to the world
              </p>
              <nav className="">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{ backgroundColor: " black", color: "white" }}
                  >
                    Search
                  </button>
                </form>
              </nav>
              <p style={{ fontSize: "10px" }}>
                Create your own account here.No crack card required.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-container">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/e18c62fb5617db69691c4ec475005c06/Homepage-Hero-new.png?w=1366&h=1132&q=50&fm=webp"
                style={{ width: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="icon-bar">
        <div className="col-md-12">
          <h4>
            Simplified scheduling for more than
            <p style={{ color: "rgb(0, 107, 255)" }}>10,000,000</p> users
            worldwide
          </h4>
          <br />
          <br />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/e576716034690751c9781af8f41a5b3b/EBay_logo.svg"
            style={{ width: "190px" }}
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6NiS4DQmcqEUxKkXJVesAP/d356b290fa1f13a2addae7870312fef2/Vector.svg"
            style={{ width: "190px" }}
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg"
            style={{ width: "190px;" }}
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg"
            style={{ width: "190px;" }}
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/0835570c9693c23131f1e036b0950a80/Dropbox_logo_2017__1_.svg"
            style={{ width: "190px;" }}
          />
        </div>
      </div>

      <div className="cards">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <li>
                    <br />
                    <br />
                    <br />
                    Create
                  </li>{" "}
                  <br />
                  Simple rules
                </h5>
                <br />
                <br />
                <br />
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">
                  Send guest your calendly
                  <br />
                  link or umbeded in your
                  <br /> website
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <li>
                    <br />
                    <br />
                    <br />
                    Create
                  </li>{" "}
                  <br />
                  Simple rules
                </h5>
                <br />
                <br />
                <br />
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">
                  Let calendly know your <br />
                  availabilility preferences
                  <br /> and it will do the work for you
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <li>
                    <br />
                    <br />
                    <br />
                    Create
                  </li>{" "}
                  <br />
                  Simple rules
                </h5>
                <b />
                <b />
                <b />
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">
                  They pick a time and the event is added to your
                  <br /> calender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
