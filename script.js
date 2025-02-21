const app = document.getElementById("app");

const formAction = () => { 
    const form = document.getElementById('form');
    form.onsubmit = (event) => {
        event.preventDefault()
}
}

const startApp = () => {
    const content = `
    <form id="form">
            <input type="email" name="name" placeholder="E-mail"></input>
            <input type="text" name="phone" placeholder="Telefone"></input>
            <button>Confirmar</button>
        </form>
    `

    app.innerHTML = content
    formAction()
}

startApp()
