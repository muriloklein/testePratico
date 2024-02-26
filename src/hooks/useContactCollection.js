import { useState } from "react";

export default function useContactCollection() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (!storedContacts) return [];
    return JSON.parse(storedContacts);
  });

  const addContact = ({ name, tel, city, email, category }) => {
    const id = Math.floor(Math.random() * 10000000000);
    const contact = { id, name, tel, city, email, category };
    setContacts((state) => {
      const newState = [...state, contact];
      localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;
    });
  };

  const removeContact = (id) => {
    setContacts((state) => {
      const newState = state.filter((p) => p.id !== id);
      localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;
    });
  };

  const updateContact = (id, newData) => {
    setContacts((state) => {
      const updatedContacts = state.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...newData };
        }
        return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updateContact;
    });
  };

  return { contacts, addContact, removeContact, updateContact };
}
