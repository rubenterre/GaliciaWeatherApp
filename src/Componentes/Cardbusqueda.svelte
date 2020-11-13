<script>
  import Dialog, {Title, Content, Actions, InitialFocus} from '@smui/dialog';
  import Button, {Label} from '@smui/button';

  let simpleDialog;

  let clicked;


import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function removeTiempo() {
        dispatch('removeTiempo', {
            name
        })
    }

    import Cardtiempo from '../Componentes/Cardtiempo.svelte';

    export let name;
    export let icon;
    export let temp;


</script>

<li class="data">
    <div class="ulwrpper">
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="/images/tarxetas/{icon}.gif" alt="icono do tempo" class="fondo_card">
                        <span class="card-title city-temp">{Math.round(temp)}°C <br>
                            <p class="city-name">{name}</p>
                        </span>
                        <a on:click={() => simpleDialog.open()} class="btn modal-trigger btn-floating halfway-fab waves-effect waves-light
                            black verTiempo"><i class="material-icons">visibility</i></a>
                        <a on:click={()=> removeTiempo(name)} class="btn-floating halfway-fab waves-effect waves-light
                            black"><i class="material-icons">delete</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>

<div>
    <Dialog bind:this={simpleDialog}>
        <div>
            <Cardtiempo name={name} />
        </div>
        <div>
            <Actions style="z-index: 99999;line-height: 9px; margin-bottom: 100vh;padding: 0px!important;margin-top: 0px;">
               <Button style="height:30px!important;border:0px;">
                   <a on:click={() => clicked = 'Volver'}  class="botonVolver waves-effect waves-light btn">X</a>
               </Button>
            </Actions>
        </div>
    </Dialog>

  </div>



<style>

/* Modals */

:global(.mdc-dialog) {
    z-index: 99999!important;
}

:global(.botonVolver){
    color:white;
    font-size: 700;
    background: transparent;
    border:0px;
}

/* Tarjetas */

    .card {
        border-radius: 20px;
        border: 2px solid black;
        background: #222;
    }

    .verTiempo {
        right: 80px;
    }

    .card-image img {
        border-radius: 20px;
    }

    .card .card-title {
        font-weight: 300;
        padding: 0px 0px 0px 20px;
    }

    .city-name {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        margin-top: 0px;
    }

    @media only screen and (min-width: 365px) {
        .city-name {
            padding-top: 10px;
        }
    }

    .city-temp {
        font-size: 40px;
    }

</style>