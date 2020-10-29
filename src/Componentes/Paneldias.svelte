<script>
 import axios from "axios";

import {onMount} from 'svelte';

import {_} from 'svelte-i18n';


//Datos de la api

let COORDS = "";

let DtempmaxM  = "";
let DtempminM = "";
let DiconElementManana = "";
let DtempmaxP = "";
let DtempminP = "";
let DiconElementPasado = "";
let DtempmaxEnDosDias = "";
let DtempminEnDosDias = "";
let DiconElementEnDosDias = "";
let DtempmaxEnTresDias = "";
let DtempminEnTresDias = "";
let DiconElementEnTresDias = "";
let DtempmaxEnCuatroDias = "";
let DtempminEnCuatroDias = "";
let DiconElementEnCuatroDias = "";
let DtempmaxEnCincoDias = "";
let DtempminEnCincoDias = "";
let DiconElementEnCincoDias = "";

//Descripción del tiempo bajo los iconos

let DdescripcionManana = "";
let DdescripcionPasado = "";
let DdescripcionEnDosDias = "";
let DdescripcionEnTresDias = "";
let DdescripcionEnCuatroDias = "";
let DdescripcionEnCincoDias = "";

//Dia y mes

let diatimesdiaManana = "";
let mestimesdiaManana = "";

let nombresemanadiadosPasado = "";
let diatimesdiadosPasado = "";
let mestimesdiadosPasado = "";

let nombresemanadiados = "";
let diatimesdiados = "";
let mestimesdiados = "";

let nombresemanadiatres = "";
let diatimesdiatres = "";
let mestimesdiatres = "";

let nombresemanadiacuatro = "";
let diatimesdiacuatro = "";
let mestimesdiacuatro = "";

let nombresemanadiacinco = "";
let diatimesdiacinco = "";
let mestimesdiacinco = "";




// API Key
    const KEY = "3e867330616c39fa60d18a1af5d82f16";


    function positionPromise() {
        return new Promise((resolv, reject) => {
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

        axios.get(
                `https://api.openweathermap.org/data/2.5/onecall${COORDS}&exclude=minutely&appid=${KEY}&units=metric&lang=gl`
                )

        .then(
            data => {
                data = data.data;
                console.log(data.data);

                DtempmaxM = data.daily[1].temp.max;
                DtempminM = data.daily[1].temp.min;
                DiconElementManana = data.daily[1].weather[0].icon;

                DtempmaxP = data.daily[2].temp.max;
                DtempminP = data.daily[2].temp.min;
                DiconElementPasado = data.daily[2].weather[0].icon;

                DtempmaxEnDosDias = data.daily[3].temp.max;
                DtempminEnDosDias = data.daily[3].temp.min;
                DiconElementEnDosDias = data.daily[3].weather[0].icon;

                DtempmaxEnTresDias = data.daily[4].temp.max;
                DtempminEnTresDias = data.daily[4].temp.min;
                DiconElementEnTresDias = data.daily[4].weather[0].icon;

                DtempmaxEnCuatroDias = data.daily[5].temp.max;
                DtempminEnCuatroDias = data.daily[5].temp.min;
                DiconElementEnCuatroDias = data.daily[5].weather[0].icon;

                DtempmaxEnCincoDias = data.daily[6].temp.max;
                DtempminEnCincoDias = data.daily[6].temp.min;
                DiconElementEnCincoDias = data.daily[6].weather[0].icon;

                //Descripción del tiempo bajo los iconos

                DdescripcionManana = data.daily[1].weather[0].description;
                DdescripcionPasado = data.daily[2].weather[0].description;
                DdescripcionEnDosDias = data.daily[3].weather[0].description;
                DdescripcionEnTresDias = data.daily[4].weather[0].description;
                DdescripcionEnCuatroDias = data.daily[5].weather[0].description;
                DdescripcionEnCincoDias = data.daily[6].weather[0].description;

                //Convertir en dias de la semana


                let DdiaMes = data.daily[1].dt;
                var eldiaManana = new Date(DdiaMes * 1000);
                diatimesdiaManana = eldiaManana.getDate();
                var meses = ["Xan.", "Feb.", "Mar.", "Abr.", "Mai.", "Xuñ.", "Xul.", "Ago.", "Set.", "Out.", "Nov.",
                    "Dec."];
                mestimesdiaManana = meses[eldiaManana.getMonth()];

                let DdiaPasado = data.daily[2].dt;
                var eldiadosPasado = new Date(DdiaPasado * 1000);
                var days = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
                nombresemanadiadosPasado = days[eldiadosPasado.getDay()];
                diatimesdiadosPasado = eldiadosPasado.getDate();
                mestimesdiadosPasado = meses[eldiadosPasado.getMonth()];

                let DdiaEnDosDias = data.daily[3].dt;
                var eldiados = new Date(DdiaEnDosDias * 1000);
                var daysDos = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
                nombresemanadiados = daysDos[eldiados.getDay()];
                diatimesdiados = eldiados.getDate();
                mestimesdiados = meses[eldiados.getMonth()];


                let DdiaEnTresDias = data.daily[4].dt;
                var eldiatres = new Date(DdiaEnTresDias * 1000);
                var daysTres = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
                nombresemanadiatres = daysTres[eldiatres.getDay()];
                diatimesdiatres = eldiatres.getDate();
                mestimesdiatres = meses[eldiatres.getMonth()];

                let DdiaEnCuatroDias = data.daily[5].dt;
                var eldiacuatro = new Date(DdiaEnCuatroDias * 1000);
                var daysCuatro = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
                nombresemanadiacuatro = daysCuatro[eldiacuatro.getDay()];
                diatimesdiacuatro = eldiacuatro.getDate();
                mestimesdiacuatro = meses[eldiacuatro.getMonth()];

                let DdiaEnCincoDias = data.daily[6].dt;
                var eldiacinco = new Date(DdiaEnCincoDias * 1000);
                var daysCinco = ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"];
                nombresemanadiacinco = daysCinco[eldiacinco.getDay()];
                diatimesdiacinco = eldiacinco.getDate();
                mestimesdiacinco = meses[eldiacinco.getMonth()];

            })
        });
    }

</script>

<div class="col s12 datosTecnicosCard">

    <div class="container">
        <div class="pronos_dias">
            <div class="row">

                <div class="col s12 mas_una prox_dias centrarItems">
                    <div class="col s3 tit-diario">
                        <p>{$_('tomorrow')}</p>

                        <div class="tit-mes font-mes">
                            <p>{diatimesdiaManana} de {mestimesdiaManana}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-manana  weather-icon center">
                        <img src="images/icons/{DiconElementManana}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                    <p class="descripcionManana descripcion">
                        <span>{DdescripcionManana}</span>
                      </p>
                    </div>
                    <div class="col s2 tempmaxD tempmax-manana temp_font">
                        <p>{Math.round(DtempmaxM)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-manana temp_font">
                        <p>{Math.round(DtempminM)}°C</p>
                    </div>

                </div>
                <div class="col s12 mas_dos prox_dias centrarItems">
                    <div class="col s3 tit-pasado">
                        <p>{nombresemanadiadosPasado}</p>
                        <div class="tit-mes_pasado font-mes">
                            <p>{diatimesdiadosPasado} de {mestimesdiadosPasado}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-pasado weather-icon center">
                        <img src="images/icons/{DiconElementPasado}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                        <p class="descripcionPasado descripcion">
                        <span>{DdescripcionPasado}</span>
                        </p>
                    </div> 
                    <div class="col s2 tempmaxD tempmax-pasado temp_font">
                        <p>{Math.round(DtempmaxP)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-pasado temp_font">
                        <p>{Math.round(DtempminP)}°C</p>
                    </div>
                </div>
                <div class="col s12 mas_tres prox_dias centrarItems">
                    <div class="col s3 tit-en_dos_dias">
                        <p>{nombresemanadiados}</p>
                        <div class="tit-mes_en_dos_dias font-mes">
                            <p>{diatimesdiados} de {mestimesdiados}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-en_dos_dias weather-icon center">
                        <img src="images/icons/{DiconElementEnDosDias}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                        <p class="descripcion-en_dos_dias descripcion">
                            <span>{DdescripcionEnDosDias}</span>
                        </p>
                        
                    </div> 
                    <div class="col s2 tempmaxD tempmax-en_dos_dias temp_font">
                        <p>{Math.round(DtempmaxEnDosDias)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-en_dos_dias temp_font">
                        <p>{Math.round(DtempminEnDosDias)}°C</p>
                    </div>
                </div>
                <div class="col s12 mas_cuatro prox_dias centrarItems">
                    <div class="col s3 tit-en_tres_dias">
                        <p>{nombresemanadiatres}</p>
                        <div class="tit-mes_en_tres_dias font-mes">
                            <p>{diatimesdiatres} de {mestimesdiatres}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-en_tres_dias weather-icon center">
                        <img src="images/icons/{DiconElementEnTresDias}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                        <p class="descripcion-en_tres_dias descripcion">
                            <span>{DdescripcionEnTresDias}</span>
                        </p>
                    </div> 
                    <div class="col s2 tempmaxD tempmax-en_tres_dias temp_font">
                        <p>{Math.round(DtempmaxEnTresDias)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-en_tres_dias temp_font">
                        <p>{Math.round(DtempminEnTresDias)}°C</p>
                    </div>
                </div>
                <div class="col s12 mas_cinco prox_dias centrarItems">
                    <div class="col s3 tit-en_cuatro_dias">
                        <p>{nombresemanadiacuatro}</p>
                        <div class="tit-mes_en_cuatro_dias font-mes">
                            <p>{diatimesdiacuatro} de {mestimesdiacuatro}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-en_cuatro_dias weather-icon center">
                        <img src="images/icons/{DiconElementEnCuatroDias}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                        <p class="descripcion-en_cuatro_dias descripcion">
                            <span>{DdescripcionEnCuatroDias}</span>
                        </p>
                    </div> 
                    <div class="col s2 tempmaxD tempmax-en_cuatro_dias temp_font">
                        <p>{Math.round(DtempmaxEnCuatroDias)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-en_cuatro_dias temp_font">
                        <p>{Math.round(DtempminEnCuatroDias)}°C</p>
                    </div>
                </div>
                <div class="col s12 mas_seis prox_dias centrarItems">
                    <div class="col s3 tit-en_cinco_dias">
                        <p>{nombresemanadiacinco}</p>
                        <div class="tit-mes_en_cinco_dias font-mes">
                            <p>{diatimesdiacinco} de {mestimesdiacinco}</p>
                        </div>
                    </div>
                    <div class="col s2 weather-icon-en_cinco_dias weather-icon center">
                        <img src="images/icons/{DiconElementEnCincoDias}.gif" alt="">
                    </div>
                    <div class="col s3 wrapper">
                        <p class="descripcion-en_cinco_dias descripcion">
                            <span>{DdescripcionEnCincoDias}</span>
                        </p>
                    </div> 
                    <div class="col s2 tempmaxD tempmax-en_cinco_dias temp_font">
                        <p>{Math.round(DtempmaxEnCincoDias)}°C</p>
                    </div>
                    <div class="col s2 tempminD tempmin-en_cinco_dias temp_font">
                        <p>{Math.round(DtempminEnCincoDias)}°C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /*Prevision por días */

    .datosTecnicosCard {
        background: #333;
    }

    .pronos_dias {
        color: white;
        font-size: 13px;
        font-weight: 600;
    }

    .font-mes {
        color: white;
        font-size: 10px;
        font-weight: 300;
    }


    .weather-icon img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        padding-top: 10px;
    }

    .tempmaxD {
        font-size: 14px;
        padding-right: 30px;
    }

    .tempminD {
        font-size: 14px;

    }

    .temp_font {
        font-weight: 300;
    }

    .centrarItems {
        vertical-align: middle;
        display: flex;
    }


    /* Texto debajo del icono 
    <div class="wrapper">
    <span class="marquee">algo de nubes</span>
    </div> 
    
    clip-path: inset(14% 26% 16% 24%);*/

.wrapper{
    display: block;
    margin: 0 auto;
}

.descripcion {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  font-size: 11px;
}

.descripcion span {
  display: inline-block;
  padding-left: 100%;
  animation: descripcion 8s linear infinite;
  padding-top: 17px;

}

@keyframes descripcion {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>