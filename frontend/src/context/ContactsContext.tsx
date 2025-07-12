import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

type NewContact = Omit<Contact, "id"> & { agenda_slug: string };

type ContactsContextType = {
  contacts: Contact[];
  addContact: (contact: NewContact) => Promise<void>;
  updateContact: (id: number, updatedContact: NewContact) => Promise<void>;
  deleteContact: (id: number) => Promise<void>;
};

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

const AGENDA_SLUG = "my_agenda_123";
const API_BASE = "https://playground.4geeks.com/contact";

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`);
    const data = await res.json();
    if (Array.isArray(data.contacts)) setContacts(data.contacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact: NewContact) => {
    await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    fetchContacts();
  };

  const updateContact = async (id: number, updatedContact: NewContact) => {
    await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    });
    fetchContacts();
  };

  const deleteContact = async (id: number) => {
    await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, { method: "DELETE" });
    fetchContacts();
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) throw new Error("useContacts must be used inside ContactsProvider");
  return context;
};
