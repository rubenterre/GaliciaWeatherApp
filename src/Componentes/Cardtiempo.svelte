<script>
    import axios from "axios";

    import {
        onMount
    } from 'svelte';

    import Carddias from "../Componentes/Carddias.svelte";

    export let name;

    // API Key
    const key = "3e867330616c39fa60d18a1af5d82f16";

    let city = "";
    let temperature = "";
    let descripcion = "";
    let latitude = "";
    let longitude = "";
    var datosCard = null;


    $:{onMount(async () => { axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric&lang=gl`)
            .then(data => {
                console.log(data)
                datosCard = data.data;
                city = datosCard.name;
                temperature = datosCard.main.temp;
                descripcion = datosCard.weather[0].description;
                latitude = datosCard.coord.lat;
                longitude = datosCard.coord.lon;
            })

    }
    );
    }

</script>

<div class="center PanelCard">
    <div>
        {#if datosCard!==null}
    <div class="white-text PanelPrincipal">
        <div class="container">
            <div class="row">
                <div class="weather-container">
                    <div class="col s12 location">
                        <p>{city}</p>
                    </div>
                    <div class="col s12 temperature-value center">
                        <p>{Math.round(temperature)}°C</p>
                    </div>
                </div>
                <div class="weather-datos">
                    <div class="col s12 temperature-description center">
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <Carddias longitude={longitude} latitude={latitude}/>

    {/if}
    </div>

</div>



<style>

.volver_btn {
    background-color: white;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    margin: 0 auto;
    border: 0px;
}

:global(.volver){
    width: 100%;
    background: white;
    color: black;
}

:global(.volver-txt){
    padding-bottom: 40px;
    font-size: 18px;
}


.PanelCard{
  background: #333;
  display: block; 
  position: fixed;
  z-index: 10000; 
  top:0;
  width: 100%;
  height: 100%; 
  padding-top:40px;
  margin-bottom:20px;
  overflow: scroll;
}

    .weather-container {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        padding-top: 0px;   
    }


    @media only screen and (min-width: 600px) {
        .weather-datos {
            padding-top: 8vh;
        }
    }


    .temperature-value p {
        padding: 0;
        margin: 0;
        color: #fff;
        font-size: 90px !important;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    }


    .temperature-description {
        padding-top: 10px;
    }

    .temperature-description p {
        color: #fff;
        text-align: center;
        font-size: 30px !important;
        font-weight: 300;
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    }


    .location p {
        margin: 0;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 18px !important;
        font-weight: 600;
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    }


</style>