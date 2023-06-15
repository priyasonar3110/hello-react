/*
<div id="parent">
    <div id="child1">
        <h1 id="h1tag">I am h1 tag</h1>
        <h1 id="h2tag">I am h2 tag</h1>
    </div>
      <div id="child2">
        <h1 id="h1tag">I am h1 tag</h1>
        <h1 id="h2tag">I am h2 tag</h1>
    </div>
</div>
*/


const h2tag = React.createElement("h1", {
    id: "h2tag"
}, "I am h2 tag");
const h1Tag = React.createElement("h1", {
    id: "h1tag"
}, "I am h1 tag");
const child1 = React.createElement("div", { id: "child1" }, [h1Tag, h2tag]);
const child2 = React.createElement("div", { id: "child2" }, [h1Tag, h2tag]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);