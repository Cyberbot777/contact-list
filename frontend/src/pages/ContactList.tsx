import { useContacts } from "../context/ContactsContext";
import { Link } from "react-router-dom";

export default function ContactList() {
  const { contacts, deleteContact } = useContacts();

  return (
    <div className="p-4 pt-12 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contact List</h2>
        <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">Add Contact</Link>
      </div>
      {contacts.length === 0 ? (
        <p className="text-white">No contacts found.</p>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="p-4 bg-gray-800 rounded shadow text-white space-y-2">
              <h3 className="text-lg font-bold">{contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>Address: {contact.address}</p>
              <div className="flex gap-2">
                <Link to={`/edit/${contact.id}`} className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded">Edit</Link>
                <button onClick={() => deleteContact(contact.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
