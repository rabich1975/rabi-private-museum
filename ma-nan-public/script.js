const buttons = Array.from(document.querySelectorAll(".filter-button"));
const cards = Array.from(document.querySelectorAll(".work-card"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    buttons.forEach((item) => item.classList.toggle("active", item === button));

    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});
