const fs = require('fs');


let listadoToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoToDo);
  fs.writeFile('db/data.json', data, err => {
    if (err) {
      throw new Error('no se pudo grabar');
    }
  })
}


const crear = descripcion => {
  cargarDB();
  let toDoElement = {
    descripcion,
    completado: false
  };
  listadoToDo.push(toDoElement);
  guardarDB();
  return toDoElement;
}

const cargarDB = () => {
  try {
    listadoToDo = require('../db/data.json');
  } catch (error) {
    listadoToDo = [];
  }
}

const getList = () =>{
  cargarDB();
  return listadoToDo;
}


const actualizar = (description, complete = true) => {
  cargarDB();
  let index = listadoToDo.findIndex(
    tarea => tarea.descripcion === description);
  if (index >= 0) {
    listadoToDo[index].completado = complete;
    guardarDB();
    return true;
  }else {
    return false;
  }
}


const borrar= (descripcion) =>{
  cargarDB();
  let nuevoListado = listadoToDo.filter(tarea =>{
    return tarea.descripcion !== descripcion
  });
  if (listadoToDo.length === nuevoListado.length) {
    return false;
  }else {
    listadoToDo = nuevoListado;
    guardarDB();
    return true;
  }


  // cargarDB();
  // let index = listadoToDo.findIndex(
  //   tarea => tarea.descripcion === descripcion );
  // if (index >= 0) {
  //   listadoToDo.splice(index);   //ESTO ESTA PERFECTO PERO USARE OTRA VERS
  //   guardarDB();
  //   return true;
  // }else {
  //   return false;
  // }


}
module.exports = {
  crear, getList, actualizar, borrar
}
