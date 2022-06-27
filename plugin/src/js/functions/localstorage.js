var KEY = "pageLiked";
var HOST_LEVEL_KEY = "pageLiked-host";
var KEY_SHOW = "pageLiked-btn-show";

export default function hasClientAlreadyLiked(level = "path") {
  var lsData = localStorage.getItem(level === "path" ? KEY : HOST_LEVEL_KEY);
  if (lsData) {
    return lsData === "true" ? true : false;
  }
  return false;
}

export function setLiked(val, level = "path") {
  localStorage.setItem(level === "path" ? KEY : HOST_LEVEL_KEY, val);
}

export function getButtonShow() {
  var lsData = localStorage.getItem(KEY_SHOW);
  if (lsData) {
    return lsData === "false" ? false : true;
  }
  return true;
}

export function setButtonShow(val) {
  localStorage.setItem(KEY_SHOW, val);
}
