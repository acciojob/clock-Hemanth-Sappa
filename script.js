//your JS code here. If required.
let p = document.createElement("p");
const date = new Date();
const node = document.createTextNode(date);
p.appendChild(node);
document.body.appendChild(p);

