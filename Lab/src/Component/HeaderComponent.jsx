import React, { useState, useEffect, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  isUserLoggedIn,
  getLoggedInUser,
  logout,
} from "../Service/AuthService.js";

function HeaderComponent() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isUserLoggedIn());
  const [username, setUsername] = useState(getLoggedInUser());
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [flag, setFlag] = useState(false);
  const lessons = [
    {
      title: "Algebra Basics",
      description:
        "Learn the foundational concepts of algebra, including equations and inequalities.",
      instructor: "Prof. Alice Johnson",
    },
    {
      title: "Geometry Fundamentals",
      description:
        "Explore the principles of geometry, such as shapes, angles, and transformations.",
      instructor: "Dr. Bob Smith",
    },
    {
      title: "Calculus Essentials",
      description:
        "Discover the fundamental ideas of calculus, including limits, derivatives, and integrals.",
      instructor: "Prof. Charlie Brown",
    },
    // Insert more lessons here
    {
      title: "Trigonometry for Beginners",
      description:
        "Learn the basics of trigonometry, including sine, cosine, and tangent functions.",
      instructor: "Dr. Emily Davis",
    },
    {
      title: "Statistics Fundamentals",
      description:
        "Explore the basic concepts of statistics, including probability, distributions, and hypothesis testing.",
      instructor: "Prof. George Wilson",
    },
    {
      title: "Linear Algebra Introduction",
      description:
        "Discover the fundamental concepts of linear algebra, including vectors, matrices, and systems of equations.",
      instructor: "Dr. Hannah White",
    },
    {
      title: "Differential Equations",
      description:
        "Explore the theory and applications of differential equations in various fields.",
      instructor: "Prof. Isaac Martinez",
    },
    {
      title: "Advanced Calculus Topics",
      description:
        "Delve into advanced topics in calculus, such as multivariable calculus and differential equations.",
      instructor: "Dr. Jack Thompson",
    },
    {
      title: "Discrete Mathematics",
      description:
        "Learn about the mathematical structures and techniques used in computer science and cryptography.",
      instructor: "Prof. Kelly Johnson",
    },
    {
      title: "Mathematical Logic",
      description:
        "Explore the principles of mathematical logic, including propositional and predicate calculus.",
      instructor: "Dr. Laura Adams",
    },
  ];

  useEffect(() => {
    setLoggedIn(isUserLoggedIn());
    setUsername(getLoggedInUser());
  }, []);

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

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    setUsername(null);
    navigate("/"); // Redirect to the home page or login page after logout
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      setFlag(true);
      const results = lessons.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(query) ||
          lesson.description.toLowerCase().includes(query) ||
          lesson.instructor.toLowerCase().includes(query)
      );
      setFilteredLessons(results);
    } else {
      setFlag(false);
      setFilteredLessons("");
    }
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
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "300px" }}
              onChange={handleSearchChange}
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
          {loggedIn ? (
            <>
              <span style={{ marginRight: "10px" }}>{username}</span>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "10px" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginRight: "10px" }}
              onClick={handleLogin}
            >
              Login
            </button>
          )}
          {!loggedIn && (
            <button
              type="button"
              className="btn btn-info"
              id="registerbutton"
              style={{ marginRight: "10px" }}
              onClick={handleRegister}
            >
              Register
            </button>
          )}
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

      <div style={{ padding: "1px" }}>
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>
              <p>
                <strong>Instructor:</strong> {lesson.instructor}
              </p>
            </div>
          ))
        ) : flag ? (
          <p>no employee found</p>
        ) : null}
      </div>
    </>
  );
}

export default HeaderComponent;
