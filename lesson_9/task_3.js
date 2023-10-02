const jedi = [];

jedi.push("Yoda");
jedi.push("Obi-Wan");
jedi.push("Qui-Gon");

jedi.shift();

const newJedi = [...jedi, "Anakin"];

var jediCount = newJedi.length;

console.log("На планете " + jediCount + " джедая, их зовут:");
for (var i = 0; i < jediCount; i++) {
  console.log(newJedi[i]);
}
