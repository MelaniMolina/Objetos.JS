/*COPIAR DOS OBJETOS*/
/*Se desea desarrollar un sistema para gestion de proyectos de una empresa
en donde se trabaja con dos proyectos que tienen los mismo atributos*/

const proyect_one={
name: 'Proyecto de Recursos Humanos',
StarteDate: '2023-08-09',
description:'Nuevo planes ejecutivos de la empresa'
}; 

const proyect_two={
    name: 'Proyecto De una Nueva Marca',
    StarteDate: '2024-02-01',
    description:'El lanzamiento de una nueva imagen para empresa'

}
const Union_Proyects={...proyect_one, ...proyect_two};
console.log(Union_Proyects);
