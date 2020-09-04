var i;
var students = ["baha", "chammakhi", "hakim", "ahmed"];
for (i = 0; i < students.length; i++) {
  var node = document.createElement("H3"); // Create a <li> node
  if (students[i] == "baha") students[i] = students[i] + " Trainer";
  var textnode = document.createTextNode(students[i]); // Create a text node
  node.appendChild(textnode);
  document.getElementById("text").appendChild(node);
}

document.getElementById("showmore").addEventListener("click", function () {
  console.log(document.getElementsByClassName("information"));
  document.getElementsByClassName("information")[0].style.display = "block";
});

document.getElementById("submit").addEventListener("click", function () {
  var text = document.getElementById("form").value;
  document.getElementsByClassName("information")[0].style.display = "none";
  var node = document.createElement("H3"); // Create a <li> node
  var textnode = document.createTextNode(text); // Create a text node
  node.appendChild(textnode);
  document.getElementById("text").appendChild(node);
});
