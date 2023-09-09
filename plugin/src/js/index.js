import generateButton from "./functions/generateButton";
import { getButtonShow } from "./functions/localstorage";

(function () {
  if (getButtonShow()) {
    generateButton();
  }
})();
