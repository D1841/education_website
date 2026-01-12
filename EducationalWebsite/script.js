document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting STUDENT WEBS!");
    this.reset();
});
