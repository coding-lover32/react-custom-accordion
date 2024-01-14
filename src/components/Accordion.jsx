import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import PropTypes from "prop-types";

const Accordion = ({ faq }) => {
  const [accodion, setAccordion] = useState(false);
//   console.log(faq);
  return (
    <>
      <div className="bg-white p-4">
        {/* Question */}
        <div className="flex justify-between">
          <h5 className="text-xl font-bold">{faq?.question}</h5>
          {/* Open-closed button */}
          <button
            onClick={() => setAccordion(!accodion)}
            className="bg-blue-300 border-2 border-blue-400 leading-none text-sm p-1"
          >
            {accodion ? (
              <FaMinus className="text-blue-600" />
            ) : (
              <FaPlus className="text-blue-600" />
            )}
          </button>
        </div>
        {/* Answer */}
        <div
          className={`${accodion ? "block" : "hidden"} mt-5 scale-up-ver-top`}
        >
          <p className="text-left">{faq?.answer}</p>
        </div>
      </div>
    </>
  );
};

Accordion.propTypes = {
  faq: PropTypes.object.isRequired,
};

export default Accordion;
