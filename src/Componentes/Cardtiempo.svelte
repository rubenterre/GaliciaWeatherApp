<script>
    import axios from "axios";

    import { onMount } from 'svelte';

    import Button from '@smui/button';
    import List, {Text} from '@smui/list';


    import Carddias from "../Componentes/Carddias.svelte";

    export let name;

    // API Key
    const key = "3e867330616c39fa60d18a1af5d82f16";

    let city = "";
    let temperature = "";
    let descripcion = "";
    let latitude = "";
    let longitude = "";
    let icon = "";
    var datosCard = null;


    onMount(async () => {

        axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric&lang=gl`
            )
            .then(data => {
                console.log(data)
                datosCard = data.data;
                city = datosCard.name;
                temperature = datosCard.main.temp;
                descripcion = datosCard.weather[0].description;
                latitude = datosCard.coord.lat;
                longitude = datosCard.coord.lon;
                icon = datosCard.weather[0].icon;

                // Cambiar tiempo en el fondo de pantalla

                var fondo = document.querySelector(".PanelCard");

                function cambiarSoleado() {
                    fondo.classList.add("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNoiteClara() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.add("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarSoleadoPoucasNubes() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.add("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNoitePoucasNubes() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.add("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarDiaNublado() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.add("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNoiteNublada() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.add("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNublado() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.add("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarMoitaChoiva() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.add("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarPoucaChoiva() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.add("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarTormenta() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.add("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNeve() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.add("fondo_neveC");
                    fondo.classList.remove("fondo_neboaC");

                }

                function cambiarNeboa() {
                    fondo.classList.remove("fondo_soleadoC");
                    fondo.classList.remove("fondo_noite_claraC");
                    fondo.classList.remove("fondo_soleado_poucas_nubesC");
                    fondo.classList.remove("fondo_noite_poucas_nubesC");
                    fondo.classList.remove("fondo_dia_nubladoC");
                    fondo.classList.remove("fondo_noite_nubladoC");
                    fondo.classList.remove("fondo_nubladoC");
                    fondo.classList.remove("fondo_moita_choivaC");
                    fondo.classList.remove("fondo_pouca_choivaC");
                    fondo.classList.remove("fondo_tormentaC");
                    fondo.classList.remove("fondo_neveC");
                    fondo.classList.add("fondo_neboaC");

                }

                switch (datosCard.weather[0].icon) {
                    case '01d':
                        fondo = cambiarSoleado();
                        break;

                    case '01n':
                        fondo = cambiarNoiteClara();
                        break;

                    case '02d':
                        fondo = cambiarSoleadoPoucasNubes();
                        break;

                    case '02n':
                        fondo = cambiarNoitePoucasNubes();
                        break;

                    case '03d':
                        fondo = cambiarDiaNublado();
                        break;

                    case '03n':
                        fondo = cambiarNoiteNublada();
                        break;

                    case '04d':
                        fondo = cambiarNublado();
                        break;

                    case '04n':
                        fondo = cambiarNublado();
                        break;

                    case '09d':
                        fondo = cambiarMoitaChoiva();
                        break;

                    case '09n':
                        fondo = cambiarMoitaChoiva();
                        break;

                    case '10d':
                        fondo = cambiarPoucaChoiva();
                        break;

                    case '10n':
                        fondo = cambiarPoucaChoiva();
                        break;

                    case '11d':
                        fondo = cambiarTormenta();
                        break;

                    case '11n':
                        fondo = cambiarTormenta();
                        break;

                    case '13d':
                        fondo = cambiarNeve();
                        break;

                    case '13n':
                        fondo = cambiarNeve();
                        break;

                    case '50d':
                        fondo = cambiarNeboa();
                        break;

                    case '50n':
                        fondo = cambiarNeboa();
                        break;

                    case 'unknown':
                        fondo = cambiarColorDia();
                        break;
                }

            })

    });


    export let visible;


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

        <!-- navbar bottom -->

        <nav class="volver_btn">
            <a href="index.html">
                <div class="nav-fixed col s12 center-align">
                    <Button on:click={!visible} class="volver">
                        <Text>Volver</Text>
                    </Button>
                </div>
            </a>
        </nav>
        <!-- fin navbar bottom -->
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



.PanelCard{
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  top:0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
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