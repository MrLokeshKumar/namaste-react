// const heading = React.createElement("h1",{id: "heading"},"Hello World from React"); // creating h1 element using react
const root = ReactDOM.createRoot(document.getElementById("root")); // creating root using ReactDOM to render the children

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child1"},[
        React.createElement("h1",{id: "heading1"},"h1"),
        React.createElement("h2",{id: "heading2"},"h2")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{id: "heading1"},"h1"),
        React.createElement("h2",{id: "heading2"},"h2")
    ])
]);

root.render(parent); // rendering to the DOM 