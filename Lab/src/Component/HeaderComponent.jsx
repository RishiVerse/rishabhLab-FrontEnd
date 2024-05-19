import { useNavigate } from "react-router-dom";

//import Quiz from "../Service/QuizClassComponent";

function HeaderComponent() {
  const navigate = useNavigate();

  const handleSpaceScience = () => {
    document.getElementById("offcanvasExample").classList.remove("show");
    navigate("/spacescience");
  };

  const handleMathematics = () => {
    document.getElementById("offcanvasExample").classList.remove("show");
    navigate("/mathematics");
  };
  const handlePhysics = () => {
    document.getElementById("offcanvasExample").classList.remove("show");
    navigate("/homepage");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => navigate("/homepage")}
          >
            RishabhLab
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() =>
                    document
                      .getElementById("offcanvasExample")
                      .classList.toggle("show")
                  }
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ paddingRight: "400px" }}>
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "300px" }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ paddingRight: "50px", margin: "5px" }}
            >
              Search
            </button>
          </form>
        </div>
        <div style={{ paddingRight: "4px", display: "flex" }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ marginRight: "10px" }}
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-info"
            style={{ marginRight: "10px" }}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            RishabhLab
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() =>
              document
                .getElementById("offcanvasExample")
                .classList.remove("show")
            }
          ></button>
        </div>
        <div className="offcanvas-body">
          <h5>Learning By Topic</h5>
          <ul>
            <a href="#">
              <li onClick={handleSpaceScience}>Space Science</li>
            </a>
            <a href="#">
              <li onClick={handleMathematics}>Mathematics</li>
            </a>
          </ul>
          <h5>Experimental Labs By Subject</h5>
          <ul>
            <a href="#">
              <li onClick={handlePhysics}>Physics</li>
            </a>
            <a href="#">
              <li>Chemistry</li>
            </a>
            <a href="#">
              <li>Mathematics</li>
            </a>
            <a href="#">
              <li>Quiz Time</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
