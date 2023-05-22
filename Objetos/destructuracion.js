/* DESTRUCTURACION DE OBJETOS*/
/* El desarrollo de una aplicacion de un directorio telefonico
en donde el contecto es el objeto y sus atributos sera la informacion
de una persona.
*/

const contact ={
    name: "Darla",
    lastName: "Naranjo",
    SecondName: "Mantilla",
    email: "darla@gmail.com",
    Inf:{
        country:"Chile",
        city:"Punta Arena", 
        street:"Street Colón"
    }
}
//Destructuracion
//Es una caracteristica que nos permite extraer propiedades de un objeto y asignarlas a variables individuales 
const{name,lastName,email,Inf:{city, street}} = contact;
console.log(`Nombre del Contacto: ${name} ${lastName}`);
console.log(`Correo Electronico:  ${email}`);
console.log(`Residencias: ${city} , "${street}"`);