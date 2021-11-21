
document.querySelectorAll("input").forEach((element) => {

    element.addEventListener('invalid', () => {
        var invalidMessage = element.nextElementSibling;
        invalidMessage.style.display = 'flex';
        element.style.border = "2px solid var(--red)";
    })

    element.addEventListener('keypress', () => {
        var invalidMessage = element.nextElementSibling;
        invalidMessage.style.display = 'none';
        element.style.border = "1px solid hsl(0, 0%, 75%)";
    })
});


