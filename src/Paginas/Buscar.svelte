<script>
  import axios from "axios";
  import Cardbusqueda from '../Componentes/Cardbusqueda.svelte'
  import {del, get,keys,set} from 'idb-keyval';



  var loading = false;
  var id = "";
  var temp = "";
  var name = "";
  var icon = "";
  var incomeData = null;


  const key = "3e867330616c39fa60d18a1af5d82f16";


  //Guardar, recuperar y eliminar resultados

  let todos = [];
  let input = "";

  function update () {
    todos=[]
    keys().then(ciudades=>{
            var promises = [];
            ciudades.forEach(ciudad=>{
              promises.push(
                get(ciudad)
              )
            })
            Promise.all(promises).then(ciudades=>{
              ciudades.forEach(ciudad=>{
                console.log('ciudad:', ciudad)
                todos = [...todos, ciudad];
                console.log(todos)
              })
            })
          })
      }

  update()



  function addTiempo() {

    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric&lang=gl`
      )
      .then(data => {
        console.log(data)
        incomeData = data.data;
        name = incomeData.name;
        temp = incomeData.main.temp;
        icon = incomeData.weather[0].icon;
        id = Math.random().toString(36).substr(2, 9);

        var tarjeta = {
          id: id,
          name: name,
          temp: temp,
          icon: icon
        }
        set(name,tarjeta)
        update()

        input = "";
      })
    }

  function removeTiempo(name) {
    del(name)
    update()
  }


</script>
<main>
  <nav class="navbar-fixed navbarbaja grey darken-4">
    <div class="nav-wrapper">
      <form class="forminput" on:submit|preventDefault={addTiempo}>
        <div class="input-field">
          <input id="search" type="search" bind:value={input} autocomplete="off" placeholder="Busca aquí unha cidade"
            required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
          <span class="msg"></span>
        </div>
        <button class="transparent">buscar</button>
      </form>
      {#if loading}
            <div class="loader" />
          {/if}
        </div>
    </nav>
    <section class="ajax-section">
        <ul class:list={todos.length > 0}>
        {#if todos.length}
          {#each todos as todo, i (todo.name) }
              <Cardbusqueda id={todo.id} icon={todo.icon} name={todo.name} temp={todo.temp} on:removeTiempo={removeTiempo(todo.name)}
              />
          {/each}
        {/if}
        </ul>
    </section>   
</main>
<style>

    main{
        background-color: #333;
        height: 100vh;

    }

    /* barra baja buscador */
    .navbarbaja {
        overflow: hidden;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 999;
        margin: 0 auto;
    }

    #search{
        color: black;
    }

    /* Resultados */

    .ajax-section {
        padding-top: 50px;
    }

      /* loader style */
  .loader {
    margin-left: 45%;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>