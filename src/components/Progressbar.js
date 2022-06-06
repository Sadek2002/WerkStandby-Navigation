function Progression() {
  const progress = document.querySelector(".progress-done");
  // const setwidth = progress.getAttribute("data-done");

  setTimeout(() => {
    progress.style.width = progress.getAttribute("data-done") + "%";
  }, 2000);
}

export default Progression;
