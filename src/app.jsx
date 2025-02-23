
import Routes from "./routes";

import { Link } from "preact-router/match";

export function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link href="/" className="navbar-brand" activeClassName="active">
              HOME
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    href="/daftarproduk"
                    className="nav-link"
                    activeClassName="active"
                    aria-current="page"
                  >
                    Daftar Produk
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
                <a
                  href="https://raffi-portofolio.web.app"
                  target="_blank"
                  className="btn btn-success"
                >
                  RAFFI FADLIKA
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />
    </>
  );
}