const url = "https://go-wash-api.onrender.com/api/login"

async function login(){
    
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let resposta = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            "email":email,
            "password":senha,
            "user_type_id":1,   
        }),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    let respostaApi = await resposta.json();

    localStorage.setItem('user',JSON.stringify(respostaApi))

    console.log(respostaApi);
}