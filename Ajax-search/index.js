const xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "user.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log("Request failed. Returned status of " + xhr.status);
  }
};
xhr.send();

search = () => {
  const input = document.getElementById("input-field").value;
  for (let i = 0; i < data.length; i++) {
    if (input === data[i].firstname) {
      const info =
        data[i].firstname +
        " " +
        data[i].lastname 
        ;
      document.getElementById("info").innerHTML = JSON.stringify(info, null, 5);
      return;
    }
  }
  document.getElementById("info").innerHTML = "No results found.";
};
