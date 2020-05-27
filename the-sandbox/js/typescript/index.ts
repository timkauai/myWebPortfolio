let header = document.createElement("h1");
header.innerHTML = "We are learning TS";
document.body.appendChild(header);

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const personA: Person = {
  first: "Jeff",
  last: "rey",
};
