const landscapeTemplate = document.querySelector(".landscape-template");
const landscapeContainer = document.querySelector(".landscape-container");

const templateChildren = landscapeTemplate.content.querySelectorAll("img");

let numberOfColumns = 0;

async function setUpLandscapeContainer() {
  let columns = 0;
  const width = window.innerWidth;
  if (width <= 600) {
    columns = 1;
  } else if (width <= 768) {
    columns = 2;
  } else {
    columns = 3;
  }

  if (numberOfColumns === columns) {
    return;
  }

  console.log("change");
  numberOfColumns = columns;

  landscapeContainer.innerHTML = "";
  landscapeContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  const holders = new Array();
  for (let i = 0; i < columns; i++) {
    const newHolder = document.createElement("div");
    newHolder.classList.add("landscape-wrapper");
    landscapeContainer.appendChild(newHolder);
    holders.push(newHolder);
  }
  for (let index = 0; index < templateChildren.length; index++) {
    const item = document.importNode(templateChildren[index], true);

    const imgSize = await addImageProcess(item.getAttribute("src"));

    const aspect = imgSize[1] / imgSize[0];

    const divContainer = document.createElement("div");
    divContainer.style.backgroundImage = `url("${item.getAttribute("src")}")`;
    divContainer.style.backgroundRepeat = "no-repeat";
    divContainer.style.backgroundSize = "100%";
    divContainer.style.width = "100%";
    divContainer.style.height = "0";
    divContainer.style.paddingBottom = `${aspect * 100}%`;
    //divContainer.classList.add("scroll-item");

    holders[index % columns].appendChild(divContainer);
  }
}
function addImageProcess(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve([img.width, img.height]);
    img.onerror = reject;
    img.src = src;
  });
}

setUpLandscapeContainer();

window.addEventListener("resize", () => {
  setUpLandscapeContainer();
});
