import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <Link to="/">
            <h3>Formulário de Contatos</h3>
          </Link>
          <div>
            <Link to="/">Início</Link>
            <Link to="/Contacts">Ver Contatos</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
