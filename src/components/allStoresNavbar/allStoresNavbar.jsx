import { Link } from "react-router-dom";
const AllStoresNavbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={() => {window.location.href="/"}}>
          Emprendimientos Locales
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login              
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/owner/dashboard" >
                Owner Dashboard 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" onClick={() => {window.location.href="/"}}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default AllStoresNavbar;