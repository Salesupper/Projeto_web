<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="../css/index.css" media="screen" />
    <style>

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        form {
            width: 300px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h3 {
            text-align: center;
            margin-bottom: 20px;
        }

        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .error-message {
            color: red;
            font-size: 14px;
            margin-top: 5px;
        }
    </style>
</head>

<body>
    <form id="loginForm">
        <h3>Realizar Login</h3>
        <input type="text" id="email" name="email" placeholder="Seu email..." />
        <input type="password" id="senha" name="senha" placeholder="Sua senha..." />
        <input type="submit" name="acao" value="Enviar" />
        <div id="error-msg" class="error-message"></div>
    </form>

    <script>
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var errorMsg = document.getElementById("error-msg");

            if (email.trim() === "" || senha.trim() === "") {
                errorMsg.textContent = "Por favor, preencha todos os campos.";
                event.preventDefault(); 
            } else {

            }
        });
    </script>
</body>

</html>
