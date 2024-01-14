import { useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchAccordion = async () => {
      try {
        const res = await fetch("/faq.json");
        const data = await res.json();
        setFaq(data);
      } catch (err) {
        console.error("Error fetching JSON data:", err);
      }
    };

    fetchAccordion();
  }, []);

  // console.log(faq);

  return (
    <>
      <h2 className="text-2xl text-center my-7">Faq/Accordion</h2>
      <div className="max-w-screen-md mx-auto px-5">
        <div className="bg-blue-700 p-6">
          <h4 className="text-white text-2xl text-center mb-4">
            Frequently Asked Questions
          </h4>
          {/* Accordion */}
          {faq.map((q) => (
            <Accordion key={q.id} faq={q} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
