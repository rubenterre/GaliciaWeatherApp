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

                    fondo.classList.add("fondo_soleadoUbicacion");
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
                    fondo.classList.remove("fondo_neboaOurense");

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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.add("fondo_noite_claraUbicacion");
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
                    fondo.classList.remove("fondo_neboaOurense");

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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.add("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.add("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.add("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.add("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.add("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.add("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.add("fondo_pouca_choivaUbicacion");
                    fondo.classList.remove("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.remove("fondo_soleadoUbicacion");
                    fondo.classList.remove("fondo_noite_claraUbicacion");
                    fondo.classList.remove("fondo_soleado_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_noite_poucas_nubesUbicacion");
                    fondo.classList.remove("fondo_dia_nubladoUbicacion");
                    fondo.classList.remove("fondo_noite_nubladoUbicacion");
                    fondo.classList.remove("fondo_nubladoUbicacion");
                    fondo.classList.remove("fondo_moita_choivaUbicacion");
                    fondo.classList.remove("fondo_pouca_choivaUbicacion");
                    fondo.classList.add("fondo_tormentaUbicacion");
                    fondo.classList.remove("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.add("fondo_neveUbicacion");
                    fondo.classList.remove("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                    fondo.classList.add("fondo_neboaUbicacion");

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
                    fondo.classList.remove("fondo_neboaOurense");


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
                <p><i class="material-icons">location_on</i>Ubicación actual</p>
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


   /* Fondos tiempo */

:global(.fondo_soleadoUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_soleado.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
}

:global(.fondo_noite_claraUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_noite_clara.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_soleado_poucas_nubesUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_soleado_poucas_nubes.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_noite_poucas_nubesUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_noite_poucas_nubes.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_dia_nubladoUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_soleado_moitas_nubes.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_noite_nubladoUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_noite_moitas_nubes.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_nubladoUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_nublado.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_moita_choivaUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_moita_choiva.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_pouca_choivaUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_pouca_choiva.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_tormentaUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_tormenta.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_neveUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_neve.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}

:global(.fondo_neboaUbicacion) {
    background: url("/images/fondos/ubicacion/fondo_ubicacion_neboa.png") #333;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

}
</style>