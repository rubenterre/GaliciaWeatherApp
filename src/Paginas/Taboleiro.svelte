<script>
    import Footer from "../Componentes/Footer.svelte";
</script>

<div class="fondo">
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
    <div class="container">
        <div class="row">
            <div class="caja_benvida col s12">
                <div class="benvida col s6">
                    <h1 class="saudo">Bos días,</h1>
                    <p>Benvido a GaliciaWeather</p>
                </div>
                <!-- <div class="info">
                    <a class="right waves-effect waves-light transparent btn-small"><i class="material-icons left">info_outline
                    </i>Info</a>
                </div> -->
            </div>
        </div>
    </div>
    <div class="banner">
        <img class="center" src="/images/Banner_ilustracions.png" alt="">
    </div>

    <!--

    
    <div class="container">
        <div class="favoritos_tit">
            <h1 class="taboleiro_titulo">Cidades populares</h1>
            <p class="taboleiro_text">Algunhas poboacións populares de Galicia</p>
        </div>
    </div>


    <div class="favoritos">
        <div class="cidade">
            <h1 class="temperatura_cidade">23°C</h1>
            <img src="/images/icons/02d.gif" width="80px" alt="">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade">
            <h1 class="temperatura_cidade">23°C</h1>
            <img src="/images/icons/02d.gif" width="80px" alt="">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade">
            <h1 class="temperatura_cidade">23°C</h1>
            <img src="/images/icons/02d.gif" width="80px" alt="">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade">
            <h1 class="temperatura_cidade">23°C</h1>
            <img src="/images/icons/02d.gif" width="80px" alt="">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade">
            <h1 class="temperatura_cidade">23°C</h1>
            <img src="/images/icons/02d.gif" width="80px" alt="">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
    </div>

    <div class="container">
        <div class="favoritos_tit">
            <h1 class="taboleiro_titulo">Ilustracións</h1>
            <p class="taboleiro_text">Pack de ilustracións de cidades para o pronóstico do tempo</p>
        </div>
    </div>
        -->

    <section>
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h4 class="about-tit">GaliciaWeather</h4>
                    <p class="about-version">Versión 1.2.1.</p>
                    <p class="about-txt">Esta aplicación está susentada pola base de datos de Openweathermaps.</p>


                    <div class="about-txt center"><a class="about-txt center" rel="license"
                            href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            <img alt="Licenza Creative Commons" style="border-width:0"
                                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                        </a><br />Esta obra está baixo unha <a class="about-txt center" rel="license"
                            href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licenza Creative Commons
                            Atribución-NonComercial-CompartirIgual 4.0 Internacional</a>.</div>

                    <p class="about-textoDos"><strong class="white-text">Actualizacións nas que estamos
                            traballando</strong></p>
                    <ul class="white-text left-align">
                        <li> 1- Sistema de temas do tempo para escoller ilustracións da túa cidade para o pronostico do
                            tempo.</li>
                        <li>2- Engadir un widget</li>
                        <li> 3- Melloras de rendimento xeral da aplicación</li>
                        <li> 4- Sistema de alertas meterolóxicas</li>
                        <li> 5- Notificacións Push</li>
                        <li> 6- Melloras no diseño</li>
                    </ul>

                </div>

            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .fondo {
        background-color: #333;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100vw;
    }

    /* Waves */

    .shape-fill {
        fill: #333;
    }

    .shape {
        transform: rotate(180deg);
    }

    /* Benvida */



    .caja_benvida {
        padding: 0px;
    }

    .benvida {
        padding-top: 10px;
        padding-bottom: 0px;
        padding-left: 0px;
    }

    .banner img {
        display: block;
        margin: 0px;
        padding-bottom: 10px;
        width: 100%;
    }

    .saudo {
        font-size: 36px;
        color: white;
        font-weight: 600;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-top: 0px;

    }

    /*
    .favoritos {
        overflow: auto;
        white-space: nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .cidade {
        text-align: center;
        font-size: 12px;
        color: white;
        font-weight: 300;
        display: inline-grid;
        border-radius: 8px;
        background: #5e5e5e;
        margin-left: 10px;
        -webkit-box-shadow: 6px 10px 5px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 6px 10px 5px -5px rgba(0,0,0,0.75);
        box-shadow: 6px 10px 5px -5px rgba(0,0,0,0.75);
    }

    .cidade>img {
        margin: 0px auto;
    }

    .cidade::-webkit-scrollbar {
        display: none;
    }

    .temperatura_cidade {
        font-size: 26px;
        color: #FFFFFF;
        letter-spacing: 1.58px;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 0px;
        text-align: center;
    }

    .nome_cidade {
        font-weight: bold;
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0.44px;
        text-align: left;
        white-space: normal !important;
        margin-top: 0px;
        padding-top: 0px;
        width: 110px;
        text-align: center;
    }

    .taboleiro_titulo {
        font-size: 19px;
        font-weight: 900;
        color: #FFFFFF;
        letter-spacing: 0.48px;
        text-align: justify;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .taboleiro_text {
        font-size: 11px;
        color: #FFFFFF;
        letter-spacing: 0.48px;
        text-align: justify;
        padding-top: 0px;
        margin-top: 0px;
    }


    .btn_aplicar {
        text-align: left;
        font-weight: 900;
        background-color: black;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        padding-top: 5px;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        width: 100%;
    }

    .btn_aplicar span {
        font-size: 13px;
        padding: 20px;
        margin-top: 0px;
        font-weight: 900;
    }

    .temas {
        overflow: auto;
        white-space: nowrap;
        padding-top: 0px;
        padding-bottom: 30px;
    }

    .tema {
        text-align: center;
        font-size: 12px;
        color: white;
        font-weight: 300;
        display: inline-grid;
        background: #D8D8D8;
        border-radius: 8px;
        margin-left: 10px;

    }

    .tema::-webkit-scrollbar {
        display: none;
    }
/*
    /* Sobre esta aplicación */

    .about-tit {
        color: white;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    .about-version {
        color: white;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }

    .about-txt {
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        padding-top: 20px;
    }

    .about-textoDos {
        padding-top: 40px;

    }
</style>