import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  new-nav">
      <a className="navbar-brand" href="" />
      <img src="data:image/png;base64,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" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link style={{ paddingRight: "20px" }} to="/">
              Individual
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ paddingRight: "20px" }} to="/teams">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ paddingRight: "20px" }} to="/enterprice">
              Enterprice
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
