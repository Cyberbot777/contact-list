import { createContext, useContext, useState, ReactNode } from "react";

// Contact type
export type Contact = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
};

// Context type
type ContactsContextType = {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
};

// Create context
const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

// Provider component
export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

// Hook for easy context use
export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
};
