import { useState, useEffect } from "react";
import { useContacts } from "../context/ContactsContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactForm() {
  const { contacts, addContact, updateContact } = useContacts();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== undefined;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const contactToEdit = contacts.find((c) => c.id === Number(id));

  useEffect(() => {
    if (isEditing && contactToEdit) {
      setForm({
        name: contactToEdit.name,
        email: contactToEdit.email,
        phone: contactToEdit.phone,
        address: contactToEdit.address,
      });
    }
  }, [isEditing, contactToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = { ...form, agenda_slug: "my_agenda_123" };

    if (isEditing && contactToEdit) {
      await updateContact(contactToEdit.id, contactData);
    } else {
      await addContact(contactData);
    }

    navigate("/");
  };

  if (isEditing && !contactToEdit) {
    return <p className="text-center text-white">Loading contact...</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? "Edit Contact" : "Add New Contact"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">{isEditing ? "Update Contact" : "Save Contact"}</button>
      </form>
    </div>
  );
}
