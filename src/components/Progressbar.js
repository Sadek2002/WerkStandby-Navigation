function Progression(datadone) {
  const progress = document.querySelector(".progress-done");

  // const setwidth = progress.getAttribute("data-done");
  console.log(progress);

  setTimeout(() => {
    progress.style.width = datadone + "%";
  }, 5000);

  return (
    <div class="progress">
      <div class="progress-done"></div>
      <Progression datadone="10" />
    </div>
  );
}

export default Progression;
