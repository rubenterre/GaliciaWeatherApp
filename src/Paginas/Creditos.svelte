<script>
    import Footer from "../Componentes/Footer.svelte";
    import {
        link
    } from 'svelte-spa-router'
</script>
<div class="fondo">
    <!-- navbar -->
    <div class="navbar">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="col s6 content-left">
                        <a href="/" use:link class="left"><img src="images/prev.png" alt="" width="50%"
                                class="prev"></a>
                    </div>
                    <div class="col s6 content-right">
                        <p class="white-text axustes">INFORMACIÓN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end navbar -->
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
                    <p class="about-txt">Esta aplicación está susentada pola base de datos de Openweathermaps e pola base de datos de fases lunares de iCalendar.</p>

                    <p class="about-txt">
                        Desenvolto por Rubén Terré.
                    </p>
                    <img class="center logo_RT" src="/images/Ruben_Terre_Logo_blanco_131119.svg" alt="logo Rubén Terré" width="40%">
                    <p class="about-txt">
                        Para máis información sobre os meus traballos visita a miña web en <a
                            href="https://www.rubenterre.com">www.rubenterre.com</a> ou a través dos seguintes
                        canais:
                    </p>

                    <div class="col s12 icon_contact">
                        <div class="col s4">
                            <a href="https://www.behance.net/rubenterre"><img
                                    src="/images/behance-square-brands_white.svg" alt="Benhance link" width="40%"></a>
                        </div>
                        <div class="col s4">
                            <a href="https://github.com/rubenterre"><img src="/images/github-square-brands_white.svg"
                                    alt="Github link" width="40%"></a>
                        </div>
                        <div class="col s4">
                            <a href="https://www.linkedin.com/in/rubenterrelameiro"><img
                                    src="/images/linkedin-brands_white.svg" alt="Linkedin link" width="40%"></a>
                        </div>
                    </div>


                    <p class="about-textoDos"><strong class="white-text">Actualizacións nas que estamos
                            a traballar</strong></p>
                    <ul class="white-text left-align">
                        <li>1- Engadir un widget</li>
                        <li> 2- Melloras xerais da aplicación</li>
                        <li> 3- Sistema de alertas meterolóxicas</li>
                        <li> 4- Notificacións Push</li>
                        <li> 5- Melloras no deseño</li>
                    </ul>
                    <br>

                    <h4 class="about-tit">MIT License</h4>

                    <p class="about-version">Copyright (c) 2020 Rubén Terré - Diseño & Desarrollo web</p>

                    <p class="licencia-txt">Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:</p>

                    <p class="licencia-txt">The above copyright notice and this permission notice shall be included in
                        all
                        copies or substantial portions of the Software.</p>

                    <p class="licencia-txt">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.
                    </p>

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
        height: 100%;
        width: 100vw;
    }

    .logo_RT {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .icon_contact {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    /* Waves */

    .shape-fill {
        fill: #333;
    }

    .shape {
        transform: rotate(180deg);
    }

    /*navbar*/

    .navbar {
        padding: 15px 0 11px;
        background-color: #212121;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .navbar i {
        font-size: 22px;
        margin-top: 3px;
    }

    .navbar h1 {
        font-size: 24px;
        padding: 0;
        margin: 0;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .navbar .content-left {
        display: inline-flex;
        vertical-align: middle;
    }

    .navbar .content-right {
        text-align: right;
        vertical-align: middle;
    }

    .navbar .row {
        margin-bottom: 0;
    }

    .navbar .content-left .sidebar {
        margin-right: 18px;
    }

    .navbar .content-right .sidebar-search {
        margin-right: 14px;
    }

    .navbar .content-right .sidebar-cart i,
    .navbar .content-right .sidebar-search i {
        position: relative;
        left: 8px;
    }

    .axustes {
        text-align: right;
    }

    .prev {
        padding-top: 5px;
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
        padding-top: 50px;
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
        margin-top: 40px;
    }

    /* Licencia */

    .licencia-txt {
        color: white;
        font-family: Roboto;
        font-size: 11px;
        font-weight: 300;
        text-align: justify;
        padding-top: 20px;
    }
</style>