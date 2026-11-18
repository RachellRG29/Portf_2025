const buttonBacktop = document.getElementById("buttonBacktop");

// Mostrar al bajar
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        buttonBacktop.classList.add("show");
    } else {
        buttonBacktop.classList.remove("show");
    }
});

// Regresar suavemente al inicio
buttonBacktop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.querySelectorAll("img[data-art]").forEach(function (im) { im.src = art(+im.dataset.art) });

var picker = document.getElementById("picker"), target = null;
document.querySelectorAll("button.slot").forEach(function (b) {
    b.addEventListener("click", function () { target = b.querySelector("img"); picker.value = ""; picker.click() });
});
picker.addEventListener("change", function () {
    var f = picker.files[0]; if (!f || !target) return;
    var r = new FileReader(); r.onload = function () { target.src = r.result }; r.readAsDataURL(f);
});