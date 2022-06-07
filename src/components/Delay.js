function Delay() {
  setTimeout(() => {
    const box = document.getElementsByClassName("box");

    box[0].style.visibility = "unset";
  }, 100);
}

export default Delay;
