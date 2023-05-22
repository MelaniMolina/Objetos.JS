/*   OBJETOS FUNDAMENTOS    */
/*Desarrollo de una Apliacion de Carrito de compras online 
en donde el objeto es el usuario o el cliente en donde obtendremos 
los siguientes atributos */

const cliente = {
       name:"Dany",
       street:"Pueblo Solo Pueblo",
       cell: 092345765,
       //Utilizamos un array objects
      Catalogue: [
        {
         id:001,
         name:"Lampara de Lava",
         price:13.40
        },
        {
            id:002,
            name:"Tablet Galaxy",
            price:540.0
        },
        {
            id:003,
            name:"Audifonos",
            price:10
        }
      ],
      ValorPago(){
        let pago=0;
        //for of ya que nos permite iterar dentro de un array
        for (let it of this.Catalogue){
            pago=pago+it.price;
        }   
        return pago;
    } ,
    Proceso_Pago(){
        const total=this.ValorPago();
        return `El Valor de su compra es ${total} $ Compra Exitosa !!! `
    } 
       
};

console.log(`Nombre del Cliente: ${cliente.name}`);
console.log(`Direccion: ${cliente.street}`);
console.log(`Valor: ${cliente.ValorPago()}$`);
console.log(cliente.Proceso_Pago());

//Agregar y Eliminar

cliente.Inf_Em="Pedidos Ya!";
delete cliente.cell;




