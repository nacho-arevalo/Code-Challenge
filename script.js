document.getElementById("formulario").addEventListener('click', function(e){
    e.preventDefault()
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const date = document.getElementById("date").value;

    const dataJSON = {
        nombre: name,
        apellido: lastname,
        fechadenacimiento: date,
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method:"post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataJSON),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});