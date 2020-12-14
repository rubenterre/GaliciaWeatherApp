<script>
    import Faseslunares from '../Componentes/Faseslunares.svelte';
    import axios from "axios";


    import {
        onMount
    } from 'svelte';


    // API Key
    const KEY = "3e867330616c39fa60d18a1af5d82f16";

    //Datos de la api

    let COORDS = "";

    let tempmax = "";
    let tempmin = "";
    let wind = "";
    let feel = "";
    let humidity = "";
    let pressure = "";
    let visibilidad = "";
    let uvi = "";

    var datosGlobal = null;

    function positionPromise() {
        return new Promise((resolv) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolv(position)
                }
            )
        })
    }

    $:{onMount(async () => {
        const coordenadas = await positionPromise();
        COORDS = coordenadas;
        console.log(coordenadas)

        let latitude = coordenadas.coords.latitude;
        let longitude = coordenadas.coords.longitude;
        console.log(latitude)


        COORDS = `?lat=${latitude}&lon=${longitude}`;
        console.log(COORDS)

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall${COORDS}&exclude=minutely&appid=${KEY}&units=metric&lang=gl`
                )


            .then(
                data => {
                    datosGlobal = data.data;
                    console.log(data.data);

                    tempmax = datosGlobal.daily[0].temp.max;
                    tempmin = datosGlobal.daily[0].temp.min;
                    wind = datosGlobal.daily[0].wind_speed;
                    feel = datosGlobal.current.feels_like;
                    humidity = datosGlobal.daily[0].humidity;
                    pressure = datosGlobal.daily[0].pressure;
                    visibilidad = datosGlobal.current.visibility;
                    uvi = datosGlobal.current.uvi;



                    //Amencer e Solpor
                    let DatosSunrise = document.querySelector('.sunrise p');
                    let sunrise = [datosGlobal.current.sunrise];
                    let dateSunrise = new Date(sunrise * 1000);
                    console.log(dateSunrise);
                    let timestrSunrise = dateSunrise.toLocaleTimeString();
                    DatosSunrise.innerHTML = `${timestrSunrise}`;


                    let DatosSunset = document.querySelector('.sunset p');
                    let sunset = [datosGlobal.current.sunset];
                    let dateSunset = new Date(sunset * 1000);
                    let timestrSunset = dateSunset.toLocaleTimeString();
                    DatosSunset.innerHTML = `${timestrSunset}`;

                })

    });
}
</script>

<div class="PanelXeral center">
    <div class="PanelDatosInicio">
        <div class="container">
            <div class="row">
                <div class="col s6 DatosEsencialesInicio">
                    <img src="images/temperMax.png" width="20%" alt="Temperatura máxima">
                    <p class="tit_icon">
                        Temp. Max.
                    </p>
                    <div class="chip tempmax">
                        {#if datosGlobal!==null}
                        <p>{tempmax}°C</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsencialesInicio">
                    <img src="images/temperMin.png" width="20%" alt="Temperatura mínima">
                    <p class="tit_icon">
                        Temp. Min.
                    </p>
                    <div class="chip tempmin">
                        {#if datosGlobal!==null}
                        <p>{tempmin}°C</p>
                        {/if}                   
                     </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/wind.png" width="20%" alt="Velocidad del viento">
                    <p class="tit_icon">
                        Vento
                    </p>
                    <div class="chip wind">
                        {#if datosGlobal!==null}
                        <p>{wind} km/h</p>
                        {/if}                   
                     </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/feel_like.png" width="20%" class="center" alt="Sensación térmica">
                    <p class="tit_icon">
                        Sensación térmica
                    </p>
                    <div class="chip feel-like">
                        {#if datosGlobal!==null}
                        <p>{feel} °C</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/humidity.png" width="20%" alt="Humedad">
                    <p class="tit_icon">
                        Humidade
                    </p>
                    <div class="chip humidity">
                        {#if datosGlobal!==null}
                        <p>{humidity}%</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/pressure.png" width="20%" alt="Presión atmosférica">
                    <p class="tit_icon">
                        Presión
                    </p>
                    <div class="chip pressure">
                        {#if datosGlobal!==null}
                        <p>{pressure}hPa</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/uvi.png" width="20%" alt="Índice UVI">
                    <p class="tit_icon">
                        Índice UV
                    </p>
                    <div class="chip uvi">
                        {#if datosGlobal!==null}
                        <p>{uvi}/10</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/visibilidad.png" width="20%" alt="Visibilidad">
                    <p class="tit_icon">
                        Visibilidade
                    </p>
                    <div class="chip visibilidad">
                        {#if datosGlobal!==null}
                        <p>{visibilidad}m</p>
                        {/if}
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/sunrise.png" width="20%" alt="Amencer">
                    <p class="tit_icon">
                        Amencer
                    </p>
                    <div class="chip sunrise">
                        <p></p>
                    </div>
                </div>
                <div class="col s6 DatosEsenciales">
                    <img src="images/sunset.png" width="20%" alt="Solpor">
                    <p class="tit_icon">
                        Solpor
                    </p>
                    <div class="chip sunset">
                        <p></p>
                    </div>
                </div>


                <Faseslunares />

            </div>
        </div>
    </div>

</div>


<style>

    .PanelXeral{
        background-color: #222;
    }

    .chip {
        background-color: transparent !important;
        border-radius: 0px;
        display: block;
        align-items: center;
        text-align: center;
        line-height: 0px;
        color: white;
    }

    .row {
        margin-bottom: 0px;
    }

    .PanelDatosInicio {
        background: rgb(0, 0, 0, 0.4);
    }

    .DatosEsenciales {
        padding: 10px;
    }

    .DatosEsencialesInicio {
        padding-top: 40px !important;
    }


    .feel-like p {
        color: white;
        font-size: 15px !important;
        text-align: center;

    }


    .wind p {
        color: white;
        font-size: 15px !important;
        text-align: center;

    }



    .humidity p {
        color: white;
        font-size: 15px !important;

    }

    .pressure p {
        color: white;
        font-size: 15px !important;
    }

    .uvi p {
        color: white;
        font-size: 15px !important;
    }

    .visibilidad p {
        color: white;
        font-size: 15px !important;
    }

    .tempmax p {
        color: white;
        font-size: 15px !important;
    }

    .tempmin p {
        color: white;
        font-size: 15px !important;
    }

    .sunset p {
        color: white;
        font-size: 15px !important;
    }

    .sunrise p {
        color: white;
        font-size: 15px !important;
    }
</style>