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
  console.log(educations);
  // const container = document.getElementById("container");
  // for (var i = 0; i < educations.length; i++) {
  //   if (i === 0) {
  //     container.innerHTML += '<ul><li>' + educations[i] + '</li></ul>';
  //   } else {
  //     container.childNodes[0].innerHTML += '<li>' + educations[i] + '</li>';
  //   }
  // }
};

getUserInfo();
getUserEducations();
