import React from "react";
import ReactDOM from "react-dom/client";


const perent = React.createElement(
    "div",
    {id:"perent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"This is React "),
         React.createElement("p",{},"This is paragraph")
        ] 
        )
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(perent);