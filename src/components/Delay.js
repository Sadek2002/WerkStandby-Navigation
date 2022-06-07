function Delay() {
  setTimeout(() => {
    const box = document.getElementsByClassName("box");

    // 👇️ removes element from DOM
    box[0].style.visibility = "unset";

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 100); // 👈️ time in milliseconds
}

export default Delay;
