const perent = React.createElement("div", {
    id: "perent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("p", {}, "This is paragraph")
]));
const r1 = ReactDOM.createRoot(document.getElementById("main"));
r1.render(perent);

//# sourceMappingURL=React.6bd02f5a.js.map
