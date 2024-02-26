import { useState } from "react";
import useContactCollection from "../../hooks/useContactCollection";

const categories = [
  "Aluno",
  "Responsável",
  "Professor",
  "Funcionário",
  "Coordenador",
];

function App() {
  const { addContact } = useContactCollection();

  function handleSubmit(ev) {
    ev.preventDefault();
    const newContact = {
      name: nameInput,
      tel: telInput,
      city: cityInput,
      email: emailInput,
      category: categoryInput,
    };

    addContact(newContact);
    setNameInput("");
    setTelInput("");
    setCityInput("");
    setEmailInput("");
    setButtonState(false);

    console.log(newContact);
  }
  const [buttonState, setButtonState] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [telInput, setTelInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  return (
    <>
      <section>
        <div className="container">
          <h1>
            Agenda <br />
            de Contatos
          </h1>
          <p className="containerText">Preencha os campos abaixo</p>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={nameInput}
                onChange={(name) => setNameInput(name.target.value)}
              />
            </div>
            <div>
              <label htmlFor="telephone">Telefone</label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                value={telInput}
                onChange={(tel) => setTelInput(tel.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">Cidade/Estado</label>
              <input
                type="text"
                name="city"
                id="city"
                value={cityInput}
                onChange={(city) => setCityInput(city.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={emailInput}
                onChange={(email) => setEmailInput(email.target.value)}
              />
            </div>
            <div>
              <label htmlFor="categoria">Categoria</label>
              <select
                name="categoria"
                id="categoria"
                value={categoryInput}
                onChange={(option) => setCategoryInput(option.target.value)}
              >
                <option disabled defaultValue value="">
                  Selecione uma categoria
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="termosDeUso">
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                checked={buttonState}
                onChange={() => setButtonState(!buttonState)}
              />
              <label htmlFor="checkBox">Concordo com os Termos de uso</label>
            </div>
            <div>
              <button type="submit" disabled={!buttonState}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
