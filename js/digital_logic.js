const boxes = document.querySelectorAll(".boxes");

const intersectionObserver = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("animate-scroll");
    } else {
      entry.target.classList.remove("animate-scroll");
    }
  }
});

boxes.forEach((box) => intersectionObserver.observe(box));
