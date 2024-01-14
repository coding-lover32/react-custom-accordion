
import style from "./ReactFaq.module.css"
import Faq from "./Faq";

const ReactFaq = () => {

    const generalReactFAQs = [
        { id: 1,
            question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently."},
        
        {id: 2,
             question: "How do I install React?",
          answer: "You can install React by using npm (Node Package Manager) and running the command: npm install react react-dom."},
        
        { id: 3,
            question: "What is JSX?",
          answer: "JSX is a syntax extension for JavaScript, recommended for use with React. It looks similar to XML/HTML and allows you to write HTML structures in your JavaScript code."},
        
        { id: 4,
            question: "Explain the virtual DOM in React.",
          answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by updating only the parts of the actual DOM that have changed."},
        
      ];


    return (
        <div className={style.container}>
            <h1 className={style.title}>FAQ / Accordion</h1>
           {
            generalReactFAQs.map(faq => <Faq key={faq.id} faq={faq}></Faq>)
           }
        </div>
    );
};

export default ReactFaq;