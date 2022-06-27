import urlParser from "url-parse";
var KEY = "pageLiked";
var HOST_LEVEL_KEY = "pageLiked-host";
var KEY_SHOW = "pageLiked-btn-show";

export default function hasClientAlreadyLiked(level = "path") {
  var path = "/";
  if (level === "path") {
    path = urlParser(window.location.href).pathname;
  }
  var lsData = localStorage.getItem(
    level === "path" ? KEY + path : HOST_LEVEL_KEY
  );
  if (lsData) {
    return lsData === "true" ? true : false;
  }
  return false;
}

export function setLiked(val, level = "path") {
  var path = "/";
  if (level === "path") {
    path = urlParser(window.location.href).pathname;
  }
  localStorage.setItem(level === "path" ? KEY + path : HOST_LEVEL_KEY, val);
}

export function getButtonShow() {
  var path = urlParser(window.location.href).pathname;
  var lsData = localStorage.getItem(KEY_SHOW + "-" + path);
  if (lsData) {
    return lsData === "false" ? false : true;
  }
  return true;
}

export function setButtonShow(val) {
  var path = urlParser(window.location.href).pathname;
  localStorage.setItem(KEY_SHOW + "-" + path, val);
}
