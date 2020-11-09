<script>
    import axios from "axios";
    import {
        Pulse
    } from 'svelte-loading-spinners'

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




    onMount(async () => {

        let latitude = 42.3356056;
        let longitude = -7.8640044;
        console.log(latitude);
        console.log(longitude);


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

                        fondo.classList.add("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNoiteClara() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.add("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarSoleadoPoucasNubes() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.add("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNoitePoucasNubes() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.add("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarDiaNublado() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.add("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNoiteNublada() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.add("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNublado() {
                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.add("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarMoitaChoiva() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.add("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarPoucaChoiva() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.add("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");

                    }

                    function cambiarTormenta() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.add("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNeve() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.add("fondo_neveOurense");
                        fondo.classList.remove("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
                    }

                    function cambiarNeboa() {

                        fondo.classList.remove("fondo_soleadoOurense");
                        fondo.classList.remove("fondo_noite_claraOurense");
                        fondo.classList.remove("fondo_soleado_poucas_nubesOurense");
                        fondo.classList.remove("fondo_noite_poucas_nubesOurense");
                        fondo.classList.remove("fondo_dia_nubladoOurense");
                        fondo.classList.remove("fondo_noite_nubladoOurense");
                        fondo.classList.remove("fondo_nubladoOurense");
                        fondo.classList.remove("fondo_moita_choivaOurense");
                        fondo.classList.remove("fondo_pouca_choivaOurense");
                        fondo.classList.remove("fondo_tormentaOurense");
                        fondo.classList.remove("fondo_neveOurense");
                        fondo.classList.add("fondo_neboaOurense");

                        fondo.classList.remove("fondo_soleadoUbicacion");
                        fondo.classList.remove("fondo_noite_claraUbicacion");
                        fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                        fondo.classList.remove("fondo_dia_nubladoUbicacion");
                        fondo.classList.remove("fondo_noite_nubladoUbicacion");
                        fondo.classList.remove("fondo_nubladoUbicacion");
                        fondo.classList.remove("fondo_moita_choivaUbicacion");
                        fondo.classList.remove("fondo_pouca_choivaUbicacion");
                        fondo.classList.remove("fondo_tormentaUbicacion");
                        fondo.classList.remove("fondo_neveUbicacion");
                        fondo.classList.remove("fondo_neboaUbicacion");

                        fondo.classList.remove("fondo_soleadoLugo");
                        fondo.classList.remove("fondo_noite_claraLugo");
                        fondo.classList.remove("fondo_soleado_poucas_nubesLugo");
                        fondo.classList.remove("fondo_noite_poucas_nubesLugo");
                        fondo.classList.remove("fondo_dia_nubladoLugo");
                        fondo.classList.remove("fondo_noite_nubladoLugo");
                        fondo.classList.remove("fondo_nubladoLugo");
                        fondo.classList.remove("fondo_moita_choivaLugo");
                        fondo.classList.remove("fondo_pouca_choivaLugo");
                        fondo.classList.remove("fondo_tormentaLugo");
                        fondo.classList.remove("fondo_neveLugo");
                        fondo.classList.remove("fondo_neboaLugo");

                        fondo.classList.remove("fondo_soleadoPontevedra");
                        fondo.classList.remove("fondo_noite_claraPontevedra");
                        fondo.classList.remove("fondo_soleado_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_noite_poucas_nubesPontevedra");
                        fondo.classList.remove("fondo_dia_nubladoPontevedra");
                        fondo.classList.remove("fondo_noite_nubladoPontevedra");
                        fondo.classList.remove("fondo_nubladoPontevedra");
                        fondo.classList.remove("fondo_moita_choivaPontevedra");
                        fondo.classList.remove("fondo_pouca_choivaPontevedra");
                        fondo.classList.remove("fondo_tormentaPontevedra");
                        fondo.classList.remove("fondo_nevePontevedra");
                        fondo.classList.remove("fondo_neboaPontevedra");

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
                        fondo.classList.remove("fondo_neboa");

                        fondo.classList.remove("fondo_soleadoCoruna");
                        fondo.classList.remove("fondo_noite_claraCoruna");
                        fondo.classList.remove("fondo_soleado_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_noite_poucas_nubesCoruna");
                        fondo.classList.remove("fondo_dia_nubladoCoruna");
                        fondo.classList.remove("fondo_noite_nubladoCoruna");
                        fondo.classList.remove("fondo_nubladoCoruna");
                        fondo.classList.remove("fondo_moita_choivaCoruna");
                        fondo.classList.remove("fondo_pouca_choivaCoruna");
                        fondo.classList.remove("fondo_tormentaCoruna");
                        fondo.classList.remove("fondo_neveCoruna");
                        fondo.classList.remove("fondo_neboaCoruna");

                        fondo.classList.remove("fondo_soleadoDinoseto");
                        fondo.classList.remove("fondo_noite_claraDinoseto");
                        fondo.classList.remove("fondo_soleado_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_noite_poucas_nubesDinoseto");
                        fondo.classList.remove("fondo_dia_nubladoDinoseto");
                        fondo.classList.remove("fondo_noite_nubladoDinoseto");
                        fondo.classList.remove("fondo_nubladoDinoseto");
                        fondo.classList.remove("fondo_moita_choivaDinoseto");
                        fondo.classList.remove("fondo_pouca_choivaDinoseto");
                        fondo.classList.remove("fondo_tormentaDinoseto");
                        fondo.classList.remove("fondo_neveDinoseto");
                        fondo.classList.remove("fondo_neboaDinoseto");

                        fondo.classList.remove("fondo_soleadoSireno");
                        fondo.classList.remove("fondo_noite_claraSireno");
                        fondo.classList.remove("fondo_soleado_poucas_nubesSireno");
                        fondo.classList.remove("fondo_noite_poucas_nubesSireno");
                        fondo.classList.remove("fondo_dia_nubladoSireno");
                        fondo.classList.remove("fondo_noite_nubladoSireno");
                        fondo.classList.remove("fondo_nubladoSireno");
                        fondo.classList.remove("fondo_moita_choivaSireno");
                        fondo.classList.remove("fondo_pouca_choivaSireno");
                        fondo.classList.remove("fondo_tormentaSireno");
                        fondo.classList.remove("fondo_neveSireno");
                        fondo.classList.remove("fondo_neboaSireno");
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
                <div class="col s12 location center">
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


       /* Fondos tiempo */

    :global(.fondo_soleadoOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_soleado.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
    }

    :global(.fondo_noite_claraOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_noite_clara.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_soleado_poucas_nubesOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_soleado_poucas_nubes.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_noite_poucas_nubesOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_noite_poucas_nubes.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_dia_nubladoOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_soleado_moitas_nubes.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_noite_nubladoOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_noite_moitas_nubes.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_nubladoOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_nublado.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_moita_choivaOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_moita_choiva.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_pouca_choivaOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_pouca_choiva.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_tormentaOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_tormenta.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_neveOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_neve.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }

    :global(.fondo_neboaOurense) {
        background: url("/images/fondos/ourense/fondo_ourense_neboa.png") #333;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;

    }
</style>