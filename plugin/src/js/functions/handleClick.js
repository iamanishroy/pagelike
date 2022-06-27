import addLike from "../connection/addLike";
import removeLike from "../connection/removeLike";
import hasClientAlreadyLiked, { setLiked } from "./localstorage";

function updateButton(el, liked, count) {
  el.setAttribute("data-total-like", count);
  el.setAttribute("liked", liked);
}

export default async function handleClick(el, level) {
  el.disabled = true;
  var res, liked;
  if (hasClientAlreadyLiked(level)) {
    res = await removeLike(level);
    liked = false;
  } else {
    res = await addLike(level);
    liked = true;
  }
  if (res.success) {
    setLiked(liked, level);
    updateButton(el, liked, res.totalLike);
  }
  el.disabled = false;
}
