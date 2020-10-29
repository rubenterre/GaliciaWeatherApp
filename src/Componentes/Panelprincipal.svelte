<script>
    import axios from "axios";
    import { Pulse } from 'svelte-loading-spinners'


    import {
        onMount
    } from 'svelte';

    // API Key
    const KEY = "3e867330616c39fa60d18a1af5d82f16";

    let COORDS = "";
    let city = "";
    let temperature = "";
    let descripcion = "";
    var datosPrincipal = null;



    // Comprobar la localización en el navegador
    function positionPromise() {
        return new Promise((resolv) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolv(position)
                }
            )
        })
    }

    onMount(async () => {
        const coordenadas = await positionPromise();
        console.log(coordenadas)

        let latitude = coordenadas.coords.latitude;
        let longitude = coordenadas.coords.longitude;
        console.log(latitude)


        COORDS = `lat=${latitude}&lon=${longitude}`;
        console.log(COORDS)

        axios.get(
                `http://api.openweathermap.org/data/2.5/weather?${COORDS}&appid=${KEY}&units=metric&lang=gl`
            )

            .then(
                data => {
                    datosPrincipal = data.data;
                    console.log(data.data);

                    city = datosPrincipal.name;
                    temperature = datosPrincipal.main.temp;
                    descripcion = datosPrincipal.weather[0].description;

                    // Cambiar a noche o día el fondo de pantalla
                    
                    var fondo = document.querySelector("body");

                    function cambiarSoleado() {
                        fondo.classList.add("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNoiteClara() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.add("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarSoleadoPoucasNubes() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.add("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNoitePoucasNubes() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.add("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarDiaNublado() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.add("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNoiteNublada() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.add("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNublado() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.add("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarMoitaChoiva() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.add("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarPoucaChoiva() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.add("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarTormenta() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.add("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNeve() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.add("fondo_neve");
                        fondo.classList.remove("fondo_neboa");

                    }

                    function cambiarNeboa() {
                        fondo.classList.remove("fondo_soleado");
                        fondo.classList.remove("fondo_noite_clara");
                        fondo.classList.remove("fondo_soleado_poucas_nubes");
                        fondo.classList.remove("fondo_noite_poucas_nubes");
                        fondo.classList.remove("fondo_dia_nublado");
                        fondo.classList.remove("fondo_noite_nublado");
                        fondo.classList.remove("fondo_nublado");
                        fondo.classList.remove("fondo_moita_choiva");
                        fondo.classList.remove("fondo_pouca_choiva");
                        fondo.classList.remove("fondo_tormenta");
                        fondo.classList.remove("fondo_neve");
                        fondo.classList.add("fondo_neboa");

                    }

                    switch (datosPrincipal.weather[0].icon) {
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
                }
            )
    });
</script>

<div class="center">
    {#if datosPrincipal!==null}
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
    {:else}
    <div class="loading center">
        <Pulse size="60" color="#fff" unit="px"></Pulse>
    </div>
    {/if}
</div>

<style>


    .loading{
        height: 100vh;
        width: 100vw;
        padding-left: 45vw;
        padding-top: 40vh;
    }

    .weather-container {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        padding-top: 30px;   
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
        font-size: 40px !important;
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