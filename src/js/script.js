export default function Scripts() {

    const menuHeight = document.querySelector('.mainNav').offsetHeight;
    document.getElementById("root").style.marginTop = menuHeight;
}