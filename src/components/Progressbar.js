function Progression(datadone) {
  var barwidth = datadone["barwidth"];
  console.log(barwidth);

  if (barwidth === undefined) {
    barwidth = "100%";
  }

  return (
    <div class="progress">
      <div class="progress-done" style={{ width: barwidth }}></div>
    </div>
  );
}

export default Progression;
