import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";


// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div",
//     { id: "child" },
//     [React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag")]),
//     React.createElement("div",
//     { id: "child1" },
//     [React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag")])]);

//React Element
const jsxHeading = (<h1>This is from React using jsx</h1>)

//react component
const Title = function() {
    return <h1>React Title</h1>
} 

const number = 1000;
//react component
// <Title /> or <Title></Title> or {Title()} - same thing
const HeadingComponent = () => (
    <div className="container">
        {jsxHeading}
        <Title />
        <Title></Title> 
        {Title()}
        <h2>{number}</h2>{100 + 200}
        <h1>Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);