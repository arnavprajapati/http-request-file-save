fetch("http://localhost:3000", {
  method: "POST",
  body: "arnav prajapti",
})
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });
