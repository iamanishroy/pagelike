var KEY = "pageLiked";
var KEY_SHOW = "pageLiked-btn-show";
export default function hasClientAlreadyLiked() {
    var lsData = localStorage.getItem(KEY);
    if (lsData) {
        return lsData === 'true' ? true : false;
    }
    return false;
}

export function setLiked(val) {
    localStorage.setItem(KEY, val);
}

export function getButtonShow() {
    var lsData = localStorage.getItem(KEY_SHOW);
    if (lsData) {
        return lsData === 'false' ? false : true;
    }
    return true;
}

export function setButtonShow(val) {
    localStorage.setItem(KEY_SHOW, val);
}