<script>
    import {
        createEventDispatcher
    } from 'svelte';

    import DraggableDraw from '../Componentes/Draggabledraw.svelte';
    import Cardtiempo from '../Componentes/Cardtiempo.svelte';

    let visible = false;
    let maxVH = 90;
    let minVH = 85;

    function switchVisible() {
        visible = !visible;
    }


    export let id;
    export let name;
    export let icon;
    export let temp;


    const dispatch = createEventDispatcher();

    function removeTiempo() {
        dispatch('removeTiempo', {
            id
        })
    }

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
                        <a on:click={()=> switchVisible()} class="btn modal-trigger btn-floating halfway-fab waves-effect waves-light
                            black verTiempo"><i class="material-icons">visibility</i></a>
                        <a on:click={()=> removeTiempo(id)} class="btn-floating halfway-fab waves-effect waves-light
                            black"><i class="material-icons">delete</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>

{#if visible}
<DraggableDraw bind:visible {maxVH} {minVH}>
    <span slot="right" on:click={switchVisible}>Pechar</span>

    <Cardtiempo name={name}/>

</DraggableDraw>
{/if}

<style>


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

    @media only screen and (min-width: 360px) {
        .city-name {
            padding-top: 10px;
        }
    }

    .city-temp {
        font-size: 40px;
    }
</style>