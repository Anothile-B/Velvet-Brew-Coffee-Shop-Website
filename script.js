const filterButtons = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".menu-category");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        categories.forEach(category => {
            if (filterValue === "all" || category.dataset.category === filterValue) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });

    });
});