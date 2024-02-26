import { Link, Outlet, useLocation } from "react-router-dom";

export default function Itens() {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="title">Contatos</h1>
      <hr />
      <Outlet />
    </>
  );
}
