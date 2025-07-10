import { ContactsProvider } from "./context/ContactsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./pages/ContactList";
import ContactForm from "./pages/ContactForm";

export default function App() {
  return (
    <ContactsProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<ContactForm />} />
            <Route path="/edit/:id" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
    </ContactsProvider>
  );
}
