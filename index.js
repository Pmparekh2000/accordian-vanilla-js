const ACCORDIAN_CONFIG = [
  { id: 1, title: "Section 1", content: "Content for section 1" },
  { id: 2, title: "Section 2", content: "Content for section 2" },
  { id: 3, title: "Section 3", content: "Content for section 3" },
];

document.addEventListener("DOMContentLoaded", (e) => {
  const accordianContainer = document.querySelector(".accordian");

  ACCORDIAN_CONFIG?.forEach((accordian, index) => {
    const accordianElement = document.createElement("div");
    accordianElement.classList.add("accordian-item");

    const accordianTitle = document.createElement("h2");
    accordianTitle.classList.add("accordian-header");
    accordianTitle.textContent = accordian.title;

    const accordianContent = document.createElement("span");
    accordianContent.classList.add("accordian-content");
    accordianContent.textContent = accordian.content;

    accordianElement.appendChild(accordianTitle);
    accordianElement.appendChild(accordianContent);

    accordianContainer.appendChild(accordianElement);

    if (index === 0) {
      accordianElement.classList.add("active");
      accordianContent.style.display = "block";
    }
  });

  accordianContainer.addEventListener("click", (e) => {
    // Checking the closest header been clicked
    const header = e.target.closest(".accordian-header");

    if (!header) return;
    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordian-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordian-item")?.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordian-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
