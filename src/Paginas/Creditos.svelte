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

    </div>
    <div class="banner">
        <img class="center" src="/images/GaliciaWeather.gif" alt="">
    </div>

    <section>
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h4 class="about-tit">GaliciaWeather</h4>
                    <p class="about-version">Versión 2.2.1.</p>
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
                        <li>1- Engadir un widget</li>
                        <li> 2- Melloras de rendimento xeral da aplicación</li>
                        <li> 3- Sistema de alertas meterolóxicas</li>
                        <li> 4- Notificacións Push</li>
                        <li> 5- Melloras no diseño</li>
                    </ul>

                </div>

            </div>
        </div>
    </section>

</div>
<Footer />

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
        margin: 0px auto;
        padding-bottom: 0px;
        width: 50%;
    }

    .saudo {
        font-size: 36px;
        color: white;
        font-weight: 600;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-top: 0px;

    }

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