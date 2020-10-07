import Inicio from './Paginas/Inicio.svelte'
import Taboleiro from './Paginas/Taboleiro.svelte'
import Buscar from './Paginas/Buscar.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'

const routes = {
    '/':Inicio,
    '/Taboleiro':Taboleiro,
    '/Buscar':Buscar,
    '*':ErrorRuta
}

export default routes