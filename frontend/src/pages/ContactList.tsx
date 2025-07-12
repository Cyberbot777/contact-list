import { useContacts } from "../context/ContactsContext";
import { Link } from "react-router-dom";
import { Trash2, Pencil, Mail, Phone, MapPin } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ContactList() {
  const { contacts, deleteContact } = useContacts();

  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const confirmDelete = (id: number) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      deleteContact(deleteId);
      setIsOpen(false);
    }
  };

  return (
    <div className="p-4 pt-12 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contact List</h2>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
          Add Contact
        </Link>
      </div>

      {contacts.length === 0 ? (
        <p className="text-white">No contacts found.</p>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 bg-gray-800 rounded shadow text-white space-y-2"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <img
                    src="/Paris.jpg"
                    alt="Contact"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{contact.name}</h3>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {contact.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      {contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/edit/${contact.id}`}
                    className="p-2 rounded"
                    title="Edit"
                  >
                    <Pencil className="w-5 h-5 text-white hover:text-yellow-300 transition" />
                  </Link>
                  <button
                    onClick={() => confirmDelete(contact.id)}
                    className="p-2 rounded"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-white hover:text-red-500 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirm Delete Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-gray-900 p-6 space-y-4 shadow-lg border border-gray-700">
            <Dialog.Title className="text-lg font-bold text-white">
              Are you sure?
            </Dialog.Title>
            <p className="text-gray-400">This action cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
