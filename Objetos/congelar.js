/*CONGELAR UN OBJETO*/

/*Se desarrollara un sistema de registro de empleados para una empresa
en donde cada empleado sera el objeto que almacena informacion personal
los cuales sera los atributos*/

function Register_Empl(name,lastName,id,salary,age,job){
   const Employe={
     name: name,
     lastName:lastName,
     id:id,
     salary:salary,
     age:age,
     job:job
   };
    //Congelacion del objeto 
   Object.freeze(Employe);
   return Employe;

}

const Employe_Unos = Register_Empl('Fariddy','Marrtillo','7777777', 100000,25,'Vende Martillos');
console.log(Employe_Unos);

//Modificacion 
Employe_Unos.salary=0000;
console.log(Employe_Unos.salary);

//Seal 
Object.seal(Employe_Unos);
console.log(Object.isSealed(Employe_Unos));
Employe_Unos.age=45;
console.log(Employe_Unos);





