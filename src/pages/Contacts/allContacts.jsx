import { useEffect } from "react";
import useContactCollection from "../../hooks/useContactCollection";

export default function allContacts() {
  const { contacts, removeContact } = useContactCollection();

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <section>
      <h1>Todos Contatos</h1>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Telefone</td>
            <td>Cidade</td>
            <td>Email</td>
            <td>Categoria</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.tel} </td>
                <td>{contact.city}</td>
                <td>{contact.email}</td>
                <td>{contact.category}</td>
                <td>
                  <button onClick={removeContact(contact.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h2 style={{ textAlign: "center", padding: "2rem" }}>
                  Nenhum Contato Salvo
                </h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
