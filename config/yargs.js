const descripcion = {
  demand:true,
  alias: 'd',
  desc: 'descripcion de una tarea'
};
const completado = {
  default: true,
  alias: 'c',
  desc: 'Mark complete/incomplete a todo element'
};


const argv = require('yargs')
    .command('crear','create a todo element', {descripcion})
    .command('actualizar','update the entire status from a todo element',
    {descripcion, completado})
    .command('borrar','delete the entire todo element',{descripcion})
    .help()
    .argv;
module.exports = {
  argv
}
