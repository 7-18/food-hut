export const ShowData = (template, container, data) => {
  container.innerHTML = "";
  let fragment = document.createDocumentFragment();
  data.forEach(item => {
    const { id, name, description, votes, category, image } = item;
    let num = Math.round(Math.random() * (3 - 1) + 1);
    let votesWithZero = votes.toString().padEnd(3, ".0");
    template.querySelector("div.menu-card")
    template.querySelector("img").setAttribute("src", image);
    template.querySelector("img").setAttribute("alt", name);
    template.querySelector("div.likes")
    template.querySelector("img.users").setAttribute("src", `./images/users${num}.png`);
    template.querySelector("span.votes").textContent = `(${votesWithZero})`;
    template.querySelector("div.menu-card-text")
    template.querySelector("h4").textContent = name;
    template.querySelector("p").textContent = description;
    
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
};