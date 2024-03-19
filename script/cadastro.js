const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){   
    var name = document.getElementById('name'); 
    var email = document.getElementById('email')    
    var cpf_cnpj = document.getElementById('cpf_cnpj')
    var user_type = document.getElementById('user_type');
    var aniversario = document.getElementById('birthday');
    var senha = document.getElementById('password') 
   
    if (
        !name.value || 
        !email.value ||
        !cpf_cnpj.value ||
        !user_type.value ||
        !aniversario.value ||
        !senha.value 
    )return alert("campos inválidos, verifique o formulario")
    
    if (
       user_type.value == 0
    )return alert("é necessário aceitar os termos para continuar")
    
    let resposta = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name": name.value,
                "email":email.value,
                "user_type_id":user_type.value,
                "password":senha.value,
                "cpf_cnpj":cpf_cnpj.value,
                "terms": 1,
                "birthday":aniversario.value    
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    let data = await resposta.json();
    
    if(resposta.status != 200){
        alert(data.data.errors);
        return;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";
}