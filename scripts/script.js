import { GetData } from "../helpers/getData.js";
import { ShowData } from "../modules/showData.js";

const icon = document.getElementById("icon");
const URL = "https://data-json-menu.herokuapp.com/menu";
const container_list_menu = document.querySelector("#list-menu");
const template = document.querySelector("template").content;
const menu_options = document.querySelector("#menu-options");

icon.addEventListener("click", (e) => {
  if (icon.src.includes("/images/moon.png")) {
    icon.src = "./images/sun.png";
    change_mode();
  } else {
    icon.src = "./images/moon.png";
    change_mode();
  }
});

const change_mode = () => {
  const container = document.getElementById("webPage");
  let dataTheme = container.getAttribute("data-theme");
  localStorage.setItem("theme", dataTheme);
  localStorage.theme === "dark"
    ? container.setAttribute("data-theme", "light")
    : container.setAttribute("data-theme", "dark");
};

document.addEventListener("DOMContentLoaded", async () => {
  const data = await GetData(URL);
  const dataRamen = data.filter((item) => item.category === "Ramen");
  ShowData(template, container_list_menu, dataRamen);
});

menu_options.addEventListener("click", async (e) => {
  const button = e.target;

  const addDisable = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.contains("disable") === false
        ? button.classList.add("disable")
        : null;
    });
  };

  if (button.tagName === "BUTTON") {
    addDisable();
    let active = button.classList.contains("disable");
    if (active) button.classList.remove("disable");
    const data = await GetData(URL);
    const dataCategory = data.filter(
      (item) => item.category === button.textContent
    );
    ShowData(template, container_list_menu, dataCategory);
  }
});
