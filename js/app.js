let currentPage = 0;
const pages = document.querySelectorAll(".note-page");

function nextPage() {
    pages[currentPage].classList.add("hidden");
    currentPage++;
    pages[currentPage].classList.remove("hidden");
}
