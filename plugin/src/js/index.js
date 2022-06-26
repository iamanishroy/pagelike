import generateButton from './functions/generateButton';
import { getButtonShow } from './functions/localstorage';

window.onload = async function () {
    if (getButtonShow()) {
        generateButton();
    }
};

