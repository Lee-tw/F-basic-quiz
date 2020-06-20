import "./style/index.scss";
import { sendRequestForUser, sendRequestForEducations } from "./sendRequest";

const url = window.location.href;
const id = url.split("users/")[1];

const getUserInfo = async () => {
  const user = await sendRequestForUser(id);
  document.getElementById("name").innerHTML = user.name;
  document.getElementById("age").innerHTML = user.age;
  document.getElementById("description").innerHTML = user.description;
};

const getUserEducations = async () => {
  const educations = await sendRequestForEducations(id);
  const container = document.getElementById("list");
  for (var i = 0; i < educations.length; i++) {
    container.innerHTML += "<ul>" +
        "<li>" + educations[i].year + "</li>" +
        "<li>" +
        "<div>" + educations[i].title + "</div>" +
        "<div>" + educations[i].description + "</div>" +
        "</li>" +
        "</ul>";
  }
};

getUserInfo();
getUserEducations();
