<script>
    import Sidebar from '../Componentes/Sidebar.svelte'
    import Panelprincipal from '../Componentes/Panelprincipal.svelte'
    import Panelhoras from '../Componentes/Panelhoras.svelte'
    import Paneldias from '../Componentes/Paneldias.svelte'
    import Datostecnicos from '../Componentes/Datostecnicos.svelte'
    import Footer from '../Componentes/Footer.svelte'


	  import {dictionary,locale} from 'svelte-i18n';
    import {translations} from '../translations.js';
    
    dictionary.set(translations);

    
    function toEs () {
        locale.set('es');
	}
	  function toGl () {
        locale.set('gl');
    }
    
    toGl()

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
</script>

<main>

  <!-- Dropdown Trigger -->
  <a class='dropdown-trigger transparent idioma right' data-target='dropdown1'><i class="material-icons white-text">settings</i></a>
  
  <!-- Dropdown Structure -->
  <ul id='dropdown1' class='dropdown-content'>
    <li><a on:click={() => toGl()} class="black-text">GL</a></li>
    <li><a on:click={() => toEs()} class="black-text">ESP</a></li>
  </ul>

    <Sidebar/>
    <Panelprincipal />
    <Panelhoras />
    <Paneldias/>
    <Datostecnicos/>
    <Footer />

</main>


<style>
    .idioma{
      margin-top: 10px;
      margin-right: 10px;
      padding: 10px;
    }
  </style>