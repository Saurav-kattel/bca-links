const weeksMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
setInterval(() => {
  const date = new Date();
  const localDateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()} ${
    weeksMap[date.getDay()]
  }`;
  document.getElementById("date").innerHTML = localDateString.toString();
}, 1000);
