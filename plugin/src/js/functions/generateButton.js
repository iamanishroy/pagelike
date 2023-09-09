import getLike from "../connection/getLike";
import confirmAndRemove from "./confirmAndRemove";
import handleClick from "./handleClick";
import hasClientAlreadyLiked from "./localstorage";

export default async function generateButton() {
  var scriptTag = document.querySelectorAll("[data-pl-custom]")[0] || null;
  // variables
  var customization = window._pl || {};

  var location =
    scriptTag?.getAttribute("data-pl-button-location") ||
    customization.buttonLocation ||
    "TR";
  var zIndex =
    scriptTag?.getAttribute("data-pl-z-index") || customization.zIndex || "100";
  var level =
    scriptTag?.getAttribute("data-pl-level") || customization.level || "path";

  var button = document.createElement("button");
  button.classList.add("page-like-button");
  var like = await getLike(level);
  button.innerHTML = "Like";
  button.setAttribute("data-total-like", like.totalLike);
  button.setAttribute("data-button-location", location);
  button.style.zIndex = zIndex;
  button.setAttribute("liked", hasClientAlreadyLiked(level));

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function (ev) {
    ev.preventDefault();
    handleClick(ev.target, level);
  });

  onRightClick(button, () => {
    confirmAndRemove(button);
  });
}

function onRightClick(element, callback) {
  var timeoutId;

  element.addEventListener("touchstart", function (e) {
    timeoutId = setTimeout(function () {
      timeoutId = null;
      e.stopPropagation();
      callback(e.target);
    }, 500);
  });

  element.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    callback(e.target);
  });

  element.addEventListener("touchend", function () {
    if (timeoutId) clearTimeout(timeoutId);
  });

  element.addEventListener("touchmove", function () {
    if (timeoutId) clearTimeout(timeoutId);
  });
}
