import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.customLogo}`} href="#">
          EventEase
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className={`d-flex me-auto ${styles.customForm}`} role="search">
            <input
              className={`form-control me-2 ${styles.customInput}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className={`navbar-nav ms-3 `}>
            <li className={`nav-item ${styles.customLink}`}>
              <a className="nav-link link-opacity-75-hover" href="#">
                About Us
              </a>
            </li>
            <li className={`nav-item ${styles.customLink}`}>
              <a className="nav-link link-opacity-75-hover" href="#">
                Contact Us
              </a>
            </li>
            <li className={`nav-item ${styles.customLink}`}>
              <a className="nav-link link-opacity-75-hover" href="#">
                Log In
              </a>
            </li>
            <li className={`nav-item ${styles.customLink}`}>
              <a className="nav-link link-opacity-75-hover" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
