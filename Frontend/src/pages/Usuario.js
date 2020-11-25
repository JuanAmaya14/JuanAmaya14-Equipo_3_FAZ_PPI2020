
const addBtn = document.querySelector('#add-btn');

function Registro(){
    const NombreInput=document.querySelector('#nombre-input');
    const ClaveInput=document.querySelector('#clave-input');
    const CorreoInput=document.querySelector('#correo-input');
    const Nombre=NombreInput.value;
    const Clave=ClaveInput.value;
    const Correo=CorreoInput.value;
    NombreInput.value="";
    ClaveInput.value="";
    CorreoInput.value="";

    fetch('http://localhost:4001/nuevo-Usuario',{
        headers:{
            'Content-type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({Nombre:Nombre,Clave:Clave,Correo:Correo})
    })
    .then(res=>res.json());
    
}
addBtn.onclick=Registro();