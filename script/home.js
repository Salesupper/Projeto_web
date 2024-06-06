// $(".slider-planos").slick({
//   infinite: true,
//   speed: 600,
//   slidesToShow: 3,
// });

const url = "https://go-wash-api.onrender.com/api/auth/address";

async function deleteEndereco(id) {
  token = JSON.parse(localStorage.getItem("user")).access_token;
  if (!token) window.location.url = "/index.html";

  const request = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  let respostaApi = await request.json();
  if (!request.ok) {
    alert(respostaApi["data"]["errors"]);
    return;
  }

  alert("endereço excluido com sucesso");
  location.reload();
}

async function submit(e,data){
  e.preventDefault()

  const title = document.getElementById("title");
  const idEnd = document.getElementById("idEnd");
  const cep = document.getElementById("cep");
  const addr = document.getElementById("addr");
  const num = document.getElementById("num");
  const comp = document.getElementById("comp");

  const token = JSON.parse(localStorage.getItem("user")).access_token;
  if (!token) window.location.url = "/index.html";

  let resposta = await fetch(`${url}/${idEnd.value}`, {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      cep: cep.value.toString(),
      address: addr.value,
      number: num.value.toString(),
      complement: comp.value ?? "",
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

  alert("endereço atualizado com sucesso");

  location.reload()

}

function edit(item) {
  const title = document.getElementById("title");
  const idEnd = document.getElementById("idEnd");
  const cep = document.getElementById("cep");
  const addr = document.getElementById("addr");
  const num = document.getElementById("num");
  const comp = document.getElementById("comp");

  [title, cep, addr, num, comp].forEach((i) => {
    i.disabled = false;
  });

  idEnd.value = item.id;
  title.value = item.title;
  cep.value = item.cep;
  addr.value = item.address;
  num.value = item.number;
  comp.value = item.complement;

  document.getElementsByTagName('form')[0].removeEventListener('submit',submit)
  document.getElementsByTagName('form')[0].addEventListener('submit',submit)

}

async function onLoad() {
  token = JSON.parse(localStorage.getItem("user")).access_token;
  if (!token) window.location.url = "/index.html";

  const request = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  let { data } = await request.json();

  if (data.length == 0) {
    window.location.href = `http://${window.location.hostname}:${window.location.port}/view/endereco.html`;
  }
  const endercos = document.getElementById("enderecos");
  data.forEach((i) => {
    let list = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = () => deleteEndereco(i.id);
    deleteBtn.textContent = "deletar";

    let editBtn = document.createElement("button");
    editBtn.onclick = () => edit(i);
    editBtn.textContent = "editar";

    list.textContent = i.formatted_address;
    list.appendChild(deleteBtn);
    list.appendChild(editBtn);
    endercos.append(list);
  });
}
