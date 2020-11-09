import Inicio from './Paginas/Inicio.svelte'
import Buscar from './Paginas/Buscar.svelte'
import Creditos from './Paginas/Creditos.svelte'
import Axustes from './Paginas/Axustes.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'


const routes = {
    '/':Inicio,
    '/Buscar':Buscar,
    '/Creditos':Creditos,
    '/Axustes':Axustes,
    '*':ErrorRuta
}

export default routes