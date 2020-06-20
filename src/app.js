import "./style/index.scss";
import { sendRequest } from "./sendRequest";

const url = window.location.href;
const id = url.split("users/")[1];

const onOrderChange = async () => {
  const user = await sendRequest(id);
  document.getElementById("name").innerHTML = user.name;
  document.getElementById("age").innerHTML = user.age;
  document.getElementById("description").innerHTML = user.description;
};

onOrderChange();
