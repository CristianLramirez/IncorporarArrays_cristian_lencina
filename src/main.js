/** Muestra en pantalla el nombre y apellido del empleado  buscado por id */
const empleados = [{ 
    "ID": 1130,
    "nombre": 'Cristian',
    "apellido": 'Lencina',
    "edad": '31',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 5 },
    {
    "ID": 1131,
    "nombre": 'Rodrigo',
    "apellido": 'Borquez',
    "edad": '38',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 2 },
    {
    "ID": 1132,
    "nombre": 'Gabriel',
    "apellido": 'sciancalepore',
    "edad": '27',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 7},
    {
    "ID": 1133,
    "nombre": 'Cristian',
    "apellido": 'Rudzki',
    "edad": '24',
    "cargo": 'Programador',
    "sector": 'Sistemas',
    "antiguedad": 7}
];

const existe_empleado = (Listado_empleados, id) => {
    for (const empleado of Listado_empleados) {
        if (empleado.ID === id) 
        return 1;
    }
    return -1;  
}

const eliminar_empleado = (Listado_empleados, id) => {
    for (let index = 0; index < Listado_empleados.length; index++) {
        if (Listado_empleados[index].ID === id) {
           Listado_empleados.splice(index, 1);
           console.log(`ID: ${id} Eliminado`);
        }
    } 
}

//Muestro el Array de empleados completo
console.log(empleados);

// ID de Empleado.
id = 1133

// Pregunto si existe el ID.
let result = existe_empleado(empleados, id);

// Si existe lo elimino.
if (result) eliminar_empleado(empleados,id);

//Muestro el Array de empleados si el ID eliminado
console.log(empleados);

