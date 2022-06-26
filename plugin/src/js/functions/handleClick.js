import addLike from "../connection/addLike";
import removeLike from "../connection/removeLike";
import hasClientAlreadyLiked, { setLiked } from "./localstorage";

function updateButton(el, liked, count) {
    el.setAttribute('data-total-like', count);
    el.setAttribute('liked', liked);
}

export default async function handleClick(el) {
    el.disabled = true;
    var res, liked;
    if (hasClientAlreadyLiked()) {
        res = await removeLike();
        liked = false;
    } else {
        res = await addLike();
        liked = true;
    }
    if (res.success) {
        setLiked(liked);
        updateButton(el, liked, res.totalLike);
    }
    el.disabled = false;
}