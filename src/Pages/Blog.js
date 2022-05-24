import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center my-2">
          How will you improve the performance of a React Application?
        </h2>
        <p>
          There is the few way to improve the performance of a react Application
          1.Keeping component state local where necessary.<br></br> 2.Memoizing
          React components to prevent unnecessary re-renders.<br></br>{" "}
          3.Code-splitting in React using dynamic import().<br></br> 4.Windowing
          or list virtualization in React.<br></br> 5.Lazy loading images in
          React.
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-center my-2 ">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There are four main types of state you need to properly manage in your
          React apps: <br></br>1.Local state <br></br>
          2.Global State <br></br>
          3.Server state <br></br>
          4.Server state <br></br>
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-center my-2">
          How does prototypical inheritance work?
        </h2>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-center my-2">
          What is a unit test? Why should write unit tests?
        </h2>
        <p>
          Unit tests are typically automated tests written and run by software
          developers to ensure that a section of an application (known as the
          "unit") meets its design and behaves as intended. In procedural
          programming, a unit could be an entire module, but it is more commonly
          an individual function or procedure.
        </p>
      </div>
      <div>
        <h2 className="text-2xl  my-2">
          Why you do not set the state directly in React. For example, if you
          have const [products, getProducts] = useState([]). Why you do not set
          products = [...] instead, you use the set Products
        </h2>
        <p>
          When you directly update the state, it does not change this. state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value. You will lose control of the state across all components.
        </p>
      </div>
    </div>
  );
};

export default Blog;
