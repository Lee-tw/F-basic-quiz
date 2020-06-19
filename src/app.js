import "./style/index.scss";

fetch("http://localhost:8080/users/1", {
  method: "GET",
})
  .then((response) => response.json())
  .then((content) => console.log(content));
