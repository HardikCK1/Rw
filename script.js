document.addEventListener("DOMContentLoaded", () => {
    // Optional JS interactivity for multiple pages.
    const events = document.querySelectorAll(".event");
    events.forEach(event => {
        event.addEventListener("mouseover", () => {
            event.innerHTML = "<strong>" + event.getAttribute("data-content") + "</strong>";
        });
        event.addEventListener("mouseout", () => {
            event.innerHTML = event.querySelector("h3").innerText;
        });
    });
});
