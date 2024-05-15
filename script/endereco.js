window.onload = () => {
  document
    .getElementById("formendereco")
    .addEventListener("submit", async function submit(e) {
      e.preventDefault();

      var url = "https://go-wash-api.onrender.com/api/auth/address";

      var titulo = document.getElementById("titulo");
      var cep = document.getElementById("cep");
      var address = document.getElementById("address");
      var numero = document.getElementById("numero");
      var complement = document.getElementById("complement");

      const token = JSON.parse(localStorage.getItem("user")).access_token;
      if (!token) window.location.url = "/index.html";

      var regex = /^\d{8,}$/;

      if (!titulo.value || !cep.value || !address.value || !numero.value)
        return alert("campos inválidos, verifique o formulario");

      if (!regex.test(cep.value)) return alert("cep deve ter 8 digitos");

      let resposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title: titulo.value,
          cep: cep.value.toString(),
          address: address.value,
          number: numero.value.toString(),
          complement: complement.value ?? "",
        }),
        headers: {
          Authorization: `Bearer ${token}`,

          "Content-Type": "application/json",
        },
      });

      let respostaApi = await resposta.json();

      if (!resposta.ok) {
        alert(respostaApi["data"]["errors"]);
        return;
      }

      alert("endereço cadastrado com sucesso");
      window.location.href = "home.html";
    });
};
