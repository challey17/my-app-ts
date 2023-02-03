

// const rootEl = (document.getElementById('root'));
// if (!rootEl) throw new Error('Failed to find the root element');
// const root = createRoot(rootEl);
// root.render(<h1>Hello, world!</h1>);

// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
 
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
// NULL CHECK
const root = ReactDOM.createRoot(el!);
 
// 4) Create a component
const App = () => {
  return (
    <div>
      <h1>Hi there WITH NULL CHECK!</h1>
    </div>
  );
};
 
// 5) Show the component on the screen
root.render(<App />);