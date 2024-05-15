const url = "https://go-wash-api.onrender.com/api/login";

  document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: senha,
        user_type_id: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let respostaApi = await resposta.json();

    if (!resposta.ok) {
      alert(respostaApi["data"]["errors"]);
      return;
    }

    localStorage.setItem("user", JSON.stringify(respostaApi));

    console.log(respostaApi);

    window.location.href = `http://${window.location.hostname}:${window.location.port}/view/home.html`;
  });
