<script>
    import axios from "axios";

    import {
        onMount
    } from 'svelte';


    // API Key
    const KEY = "3e867330616c39fa60d18a1af5d82f16";

    //Datos de la api

    let COORDS = "";

    let HtempMasUna = "";
    let HiconElementMasUna = "";
    let HtempMasDos = "";
    let HiconElementMasDos = "";
    let HtempMasTres = "";
    let HiconElementMasTres = "";
    let HtempMasCuatro = "";
    let HiconElementMasCuatro = "";
    let HtempMasCinco = "";
    let HiconElementMasCinco = "";
    let HtempMasSeis = "";
    let HiconElementMasSeis = "";
    let HtempMasSiete = "";
    let HiconElementMasSiete = "";
    let HtempMasOcho = "";
    let HiconElementMasOcho = "";
    let HtempMasNueve = "";
    let HiconElementMasNueve = "";
    let HtempMasDiez = "";
    let HiconElementMasDiez = "";
    let HtempMasOnce = "";
    let HiconElementMasOnce = "";
    let HtempMasDoce = "";
    let HiconElementMasDoce = "";
    let HtempMasTrece = "";
    let HiconElementMasTrece = "";
    let HtempMasCatorce = "";
    let HiconElementMasCatorce = "";
    let HtempMasQuince = "";
    let HiconElementMasQuince = "";
    let HtempMasDieciseis = "";
    let HiconElementMasDieciseis = "";
    let timesLahorauna = "";
    let timesLahorados = "";
    let timesLahoratres = "";
    let timesLahoracuatro = "";
    let timesLahoracinco = "";
    let timesLahoraseis = "";
    let timesLahorasiete = "";
    let timesLahoraocho = "";
    let timesLahoranueve = "";
    let timesLahoradiez = "";
    let timesLahoraonce = "";
    let timesLahoradoce = "";
    let timesLahoratrece = "";
    let timesLahoracatorce = "";
    let timesLahoraquince = "";
    let timesLahoradieciseis = "";



    $:{onMount(async () => {
        let latitude = 42.8782132;
        let longitude = -8.5448445;


        COORDS = `?lat=${latitude}&lon=${longitude}`;
        console.log(COORDS)

        axios.get(
                `https://api.openweathermap.org/data/2.5/onecall${COORDS}&exclude=minutely&appid=${KEY}&units=metric&lang=gl`
            )

            .then(
                data => {
                    data = data.data;
                    console.log(data.data);


                    HtempMasUna = data.hourly[1].temp;
                    HiconElementMasUna = data.hourly[1].weather[0].icon;
                    HtempMasDos = data.hourly[2].temp;
                    HiconElementMasDos = data.hourly[2].weather[0].icon;
                    HtempMasTres = data.hourly[3].temp;
                    HiconElementMasTres = data.hourly[3].weather[0].icon;
                    HtempMasCuatro = data.hourly[4].temp;
                    HiconElementMasCuatro = data.hourly[4].weather[0].icon;
                    HtempMasCinco = data.hourly[5].temp;
                    HiconElementMasCinco = data.hourly[5].weather[0].icon;
                    HtempMasSeis = data.hourly[6].temp;
                    HiconElementMasSeis = data.hourly[6].weather[0].icon;
                    HtempMasSiete = data.hourly[7].temp;
                    HiconElementMasSiete = data.hourly[7].weather[0].icon;
                    HtempMasOcho = data.hourly[8].temp;
                    HiconElementMasOcho = data.hourly[8].weather[0].icon;
                    HtempMasNueve = data.hourly[9].temp;
                    HiconElementMasNueve = data.hourly[9].weather[0].icon;
                    HtempMasDiez = data.hourly[10].temp;
                    HiconElementMasDiez = data.hourly[10].weather[0].icon;
                    HtempMasOnce = data.hourly[11].temp;
                    HiconElementMasOnce = data.hourly[11].weather[0].icon;
                    HtempMasDoce = data.hourly[12].temp;
                    HiconElementMasDoce = data.hourly[12].weather[0].icon;
                    HtempMasTrece = data.hourly[13].temp;
                    HiconElementMasTrece = data.hourly[13].weather[0].icon;
                    HtempMasCatorce = data.hourly[14].temp;
                    HiconElementMasCatorce = data.hourly[14].weather[0].icon;
                    HtempMasQuince = data.hourly[15].temp;
                    HiconElementMasQuince = data.hourly[15].weather[0].icon;
                    HtempMasDieciseis = data.hourly[16].temp;
                    HiconElementMasDieciseis = data.hourly[16].weather[0].icon;

                    let horauna = data.hourly[1].dt;
                    let horados = data.hourly[2].dt;
                    let horatres = data.hourly[3].dt;
                    let horacuatro = data.hourly[4].dt;
                    let horacinco = data.hourly[5].dt;
                    let horaseis = data.hourly[6].dt;
                    let horasiete = data.hourly[7].dt;
                    let horaocho = data.hourly[8].dt;
                    let horanueve = data.hourly[9].dt;
                    let horadiez = data.hourly[10].dt;
                    let horaonce = data.hourly[11].dt;
                    let horadoce = data.hourly[12].dt;
                    let horatrece = data.hourly[13].dt;
                    let horacatorce = data.hourly[14].dt;
                    let horaquince = data.hourly[15].dt;
                    let horadieciseis = data.hourly[16].dt;

                    //Convertir en horas
                    var lahorauna = new Date(horauna * 1000);
                    timesLahorauna = lahorauna.getHours();

                    var lahorados = new Date(horados * 1000);
                    timesLahorados = lahorados.getHours();

                    var lahoratres = new Date(horatres * 1000);
                    timesLahoratres = lahoratres.getHours();

                    var lahoracuatro = new Date(horacuatro * 1000);
                    timesLahoracuatro = lahoracuatro.getHours();

                    var lahoracinco = new Date(horacinco * 1000);
                    timesLahoracinco = lahoracinco.getHours();

                    var lahoraseis = new Date(horaseis * 1000);
                    timesLahoraseis = lahoraseis.getHours();

                    var lahorasiete = new Date(horasiete * 1000);
                    timesLahorasiete = lahorasiete.getHours();

                    var lahoraocho = new Date(horaocho * 1000);
                    timesLahoraocho = lahoraocho.getHours();

                    var lahoranueve = new Date(horanueve * 1000);
                    timesLahoranueve = lahoranueve.getHours();

                    var lahoradiez = new Date(horadiez * 1000);
                    timesLahoradiez = lahoradiez.getHours();

                    var lahoraonce = new Date(horaonce * 1000);
                    timesLahoraonce = lahoraonce.getHours();

                    var lahoradoce = new Date(horadoce * 1000);
                    timesLahoradoce = lahoradoce.getHours();

                    var lahoratrece = new Date(horatrece * 1000);
                    timesLahoratrece = lahoratrece.getHours();

                    var lahoracatorce = new Date(horacatorce * 1000);
                    timesLahoracatorce = lahoracatorce.getHours();

                    var lahoraquince = new Date(horaquince * 1000);
                    timesLahoraquince = lahoraquince.getHours();

                    var lahoradieciseis = new Date(horadieciseis * 1000);
                    timesLahoradieciseis = lahoradieciseis.getHours();


                })

    });
    }
</script>

<div class="caja_horas_general center">


    <div class="shape" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="shape-fill">
            <path class="elementor-shape-fill" opacity="0.33"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
            </path>
            <path class="elementor-shape-fill" opacity="0.66"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
            </path>
            <path class="elementor-shape-fill"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
            </path>
        </svg>
    </div>

    <div class="caja_horas">
        <div class="horas_venideras">
            <div class="mas_una_hora horasDestacadas">
                <p>{timesLahorauna}h</p>
            </div>
            <div class="weather-icon-mas_una center">
                <img src="images/icons/{HiconElementMasUna}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_una">
                <p>{Math.round(HtempMasUna)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_dos_hora horasDestacadas">
                <p>{timesLahorados}h</p>
            </div>

            <div class="weather-icon-mas_dos center">
                <img src="images/icons/{HiconElementMasDos}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_dos">
                <p>{Math.round(HtempMasDos)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_tres_hora horasDestacadas">
                <p>{timesLahoratres}h</p>
            </div>

            <div class="weather-icon-mas_tres center">
                <img src="images/icons/{HiconElementMasTres}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_tres">
                <p>{Math.round(HtempMasTres)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_cuatro_hora horasDestacadas">
                <p>{timesLahoracuatro}h</p>
            </div>

            <div class=" weather-icon-mas_cuatro center">
                <img src="images/icons/{HiconElementMasCuatro}.gif" alt="icono"/>
            </div>
            <div class=" temp-mas_cuatro">
                <p>{Math.round(HtempMasCuatro)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_cinco_hora horasDestacadas">
                <p>{timesLahoracinco}h</p>
            </div>

            <div class="weather-icon-mas_cinco center">
                <img src="images/icons/{HiconElementMasCinco}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_cinco">
                <p>{Math.round(HtempMasCinco)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_seis_hora horasDestacadas">
                <p>{timesLahoraseis}h</p>
            </div>

            <div class=" weather-icon-mas_seis center">
                <img src="images/icons/{HiconElementMasSeis}.gif" alt="icono"/>
            </div>
            <div class=" temp-mas_seis">
                <p>{Math.round(HtempMasSeis)}°C</p>
            </div>

        </div>

        <div class="horas_venideras">
            <div class="mas_siete_hora horasDestacadas">
                <p>{timesLahorasiete}h</p>
            </div>

            <div class=" weather-icon-mas_siete center">
                <img src="images/icons/{HiconElementMasSiete}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_siete">
                <p>{Math.round(HtempMasSiete)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_ocho_hora horasDestacadas">
                <p>{timesLahoraocho}h</p>
            </div>

            <div class=" weather-icon-mas_ocho center">
                <img src="images/icons/{HiconElementMasOcho}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_ocho">
                <p>{Math.round(HtempMasOcho)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_nueve_hora horasDestacadas">
                <p>{timesLahoranueve}h</p>
            </div>

            <div class=" weather-icon-mas_nueve weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasNueve}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_nueve">
                <p>{Math.round(HtempMasNueve)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_diez_hora horasDestacadas">
                <p>{timesLahoradiez}h</p>
            </div>

            <div class=" weather-icon-mas_diez weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasDiez}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_diez">
                <p>{Math.round(HtempMasDiez)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_once_hora horasDestacadas">
                <p>{timesLahoraonce}h</p>
            </div>

            <div class=" weather-icon-mas_once weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasOnce}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_once">
                <p>{Math.round(HtempMasOnce)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_doce_hora horasDestacadas">
                <p>{timesLahoradoce}h</p>
            </div>

            <div class=" weather-icon-mas_doce weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasDoce}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_doce">
                <p>{Math.round(HtempMasDoce)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_trece_hora horasDestacadas">
                <p>{timesLahoratrece}h</p>
            </div>

            <div class=" weather-icon-mas_trece  weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasTrece}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_trece">
                <p>{Math.round(HtempMasTrece)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_catorce_hora horasDestacadas">
                <p>{timesLahoracatorce}h</p>
            </div>

            <div class=" weather-icon-mas_catorce weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasCatorce}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_catorce">
                <p>{Math.round(HtempMasCatorce)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_quince_hora horasDestacadas">
                <p>{timesLahoraquince}h</p>
            </div>

            <div class=" weather-icon-mas_quince weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasQuince}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_quince">
                <p>{Math.round(HtempMasQuince)}°C</p>
            </div>

        </div>

        <div class=" horas_venideras">
            <div class="mas_dieciseis_hora horasDestacadas">
                <p>{timesLahoradieciseis}h</p>
            </div>

            <div class=" weather-icon-mas_dieciseis weather-icon_hora_general center">
                <img src="images/icons/{HiconElementMasDieciseis}.gif" alt="icono"/>
            </div>
            <div class="temp-mas_dieciseis">
                <p>{Math.round(HtempMasDieciseis)}°C</p>
            </div>

        </div>
    </div>
</div>

<style>
    /* Waves */

    .shape-fill {
        fill: #333;
    }

    .shape {
        transform: rotate(180deg);
    }

    /* Previsión horaria */


    .caja_horas {
        overflow: auto;
        white-space: nowrap;
        /*background: rgba(0, 0, 0, 0.22);*/
        background: #333;
        padding-top: 10px;
        padding-bottom: 10px;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .caja_horas::-webkit-scrollbar {
        display: none;
    }

    .horas_venideras {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        color: white;
        font-weight: 300;
        display: inline-block;
        width: 60px;
    }

    .horas_venideras::-webkit-scrollbar {
        display: none;
    }

    .horasDestacadas {
        color: white;
        font-weight: 800;
    }

    .weather-icon-mas_una img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_dos img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_tres img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_cuatro img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_cinco img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_seis img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_siete img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon-mas_ocho img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }

    .weather-icon_hora_general img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin: 0 auto;
    }


</style>