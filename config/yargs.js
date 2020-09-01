// const { require } = require('yargs')


const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tardea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea ya completada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}