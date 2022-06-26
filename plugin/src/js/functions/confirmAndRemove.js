import { setButtonShow } from "./localstorage";

export default function confirmAndRemove(el) {
    if (confirm('Do you want to remove this like button from this site?')) {
        el.remove();
        setButtonShow(false);
    }
}