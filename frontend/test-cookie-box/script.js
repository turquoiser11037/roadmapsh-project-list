const consentBox =
    document.querySelector(".consentBox");
const acceptButton =
    document.querySelector(".consentButton");
const rejectButton =
    document.querySelector(".rejectButton");

acceptButton.onclick = () => {
    document.cookie = "CookieBy=Website; max-age="
        + 60 * 60 * 24 + "; path=/";
    if (document.cookie) {
        consentBox.classList.add("hide");
    } else {
        alert
            ("Cookie cannot be set");
    }
}

rejectButton.onclick = () => {
    alert(
        "Cookies rejected");
    consentBox.classList.add("hide");
};

let checkCookie =
    document.cookie.indexOf("CookieBy=Website");
checkCookie !== -1 ? consentBox.classList.add("hide") :
    consentBox.classList.remove("hide");