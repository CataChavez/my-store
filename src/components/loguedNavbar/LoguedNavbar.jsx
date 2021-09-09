import { Link } from "react-router-dom";

const LoguedNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EMPRENDIMIENTO LOCAL
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
              <Link className="nav-link active" aria-current="page" to="/">
                Lista de productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Crear producto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Volver a Almacenes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LoguedNavbar;