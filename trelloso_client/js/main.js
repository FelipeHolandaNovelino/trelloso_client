


//CADASTRO
  document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // Evita a atualização da página

    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var avatar_url = document.getElementById('avatar_url').value;
    var password = document.getElementById('password').value;

    var userObject = {
        "name": name,
        "username": username,
        "avatar_url": avatar_url,
        "password": password
    };

    console.log(userObject);

    postJSON(userObject);
});

//ENVIO DO CADASTRO
  async function postJSON(data) {
    try {
      const response = await fetch("http://192.168.89.186:8087/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Sucesso:", result);
  
    } catch (error) {
      console.error("Erro:", error);
 
    }
  }

//LOGIN
async function loginUser() {
    try {
        const loginForm = document.getElementById('loginForm');
        const formData = new FormData(loginForm);

        const response = await fetch("http://192.168.89.186:8087/api/v1/auth/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                username: formData.get('loginUsername'),
                password: formData.get('loginPassword')
            }).toString()
        });

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); // Resultado esperado

        

    } catch (error) {
        console.error("Erro na solicitação: ", error);
    }
}

// Adicione um ouvinte de evento ao botão de login
document.getElementById('loginButton').addEventListener('click', loginUser);




