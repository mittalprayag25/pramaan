export const toggleLoadMask = () => {
    if (document.querySelector('.backgroundCont')) {
        if (document.querySelector('.backgroundCont').classList.contains('displayNone')) {
            document.querySelector('.backgroundCont').classList.remove('displayNone');
        } else {
            document.querySelector('.backgroundCont').classList.add('displayNone');
        }
    }
};