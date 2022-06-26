import getLike from "../connection/getLike";
import confirmAndRemove from "./confirmAndRemove";
import handleClick from "./handleClick";
import hasClientAlreadyLiked from "./localstorage";

export default async function generateButton() {
    var scriptTag = document.querySelectorAll('[custom]')[0] || null;
    // variables
    var location = scriptTag?.getAttribute('pl-button-location') || 'TR';
    var zIndex = scriptTag?.getAttribute('z-index') || '100';

    var button = document.createElement("button");
    button.classList.add('page-like-button');
    var like = await getLike();
    button.innerHTML = "Like";
    button.setAttribute('data-total-like', like.totalLike);
    button.setAttribute('data-button-location', location);
    button.style.zIndex = zIndex;
    button.setAttribute('liked', hasClientAlreadyLiked());

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener("click", function (ev) {
        ev.preventDefault();
        handleClick(ev.target);
    });

    onRightClick(button, () => {
        confirmAndRemove(button)
    });
}

function onRightClick(element, callback) {
    var timeoutId;

    element.addEventListener('touchstart', function (e) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            e.stopPropagation();
            callback(e.target);
        }, 500);
    });

    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        callback(e.target);
    });

    element.addEventListener('touchend', function () {
        if (timeoutId) clearTimeout(timeoutId);
    });

    element.addEventListener('touchmove', function () {
        if (timeoutId) clearTimeout(timeoutId);
    });
}