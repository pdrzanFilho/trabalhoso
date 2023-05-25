let urlGato = "";

async function api() {
  await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      urlGato = data.message; // Output: "Hello, I'm your chatbot!"
    });
  console.log(urlGato);
  let imgGato = document.getElementById("img-gato");
  if (imgGato !== null) {
    imgGato.setAttribute("src", urlGato);
  }
}
async function iniciar() {
  await api();
  let botaogato = document.getElementById("mudar-gato");
  if (botaogato !== null && botaogato.onclick == null) {
    botaogato.onclick = api;
  }
}

iniciar();
