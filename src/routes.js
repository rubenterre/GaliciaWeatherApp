import Inicio from './Paginas/Inicio.svelte'
import Taboleiro from './Paginas/Taboleiro.svelte'
import Buscar from './Paginas/Buscar.svelte'
import Creditos from './Paginas/Creditos.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'

const routes = {
    '/':Inicio,
    '/Taboleiro':Taboleiro,
    '/Buscar':Buscar,
    '/Creditos':Creditos,
    '*':ErrorRuta
}

export default routes