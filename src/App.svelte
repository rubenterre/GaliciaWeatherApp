<script>
  import Router from 'svelte-spa-router'
  import { link } from 'svelte-spa-router'
  import routes from './routes.js'

  //Menu flotante
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });

</script>

<div class="fixed-action-btn toolbar">
  <a class="btn-floating btn-large white">
    <i class="large material-icons black-text">menu</i>
  </a>
  <ul>
    <li><a class="btn-floating" href="/Buscar" use:link ><i class="material-icons black-text">search</i></a></li>
    <li><a class="btn-floating" href="/" use:link ><i class="material-icons black-text">home</i></a></li>
    <li><a class="btn-floating" href="/Taboleiro" use:link ><i class="material-icons black-text">account_circle</i></a></li>
  </ul>
</div>
<Router {routes} />

