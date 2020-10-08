<script>
    import Footer from "../Componentes/Footer.svelte";
</script>

<div class="fondo">

    <div class="header">
        <div class="container">
            <div class="row">
                <div class="caja_benvida col s12">
                    <div class="benvida col s6">
                        <h1 class="saudo">Bos días,</h1>
                        <p>Benvido a GaliciaWeather</p>
                    </div>
                    <div class="info">
                        <a class="right waves-effect waves-light transparent btn-small"><i
                                class="material-icons left">info_outline
                            </i>Info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="favoritos_tit">
            <h1 class="taboleiro_titulo">Escolle a túa cidade favorita</h1>
            <p class="taboleiro_text">Podes elexir as ilustracións das cidades <br>para poñer no muro principal.</p>
        </div>
    </div>


    <div class="favoritos">
        <div class="cidadeBig santiagoCompostelaBig">
            <div class="row">
                <div class="col s10">
                    <p class="nome_cidade_Big">Santiago de Compostela<br>A Coruña</p>
                </div>
                <div class="col s2">
                    <img class="nome_cidade_Big" src="/images/descargar/btn_descargar.png" alt="">
                </div>
            </div>
        </div>
        <div class="cidadeBig santiagoCompostelaBig">
            <div class="row">
                <div class="col s10">
                    <p class="nome_cidade_Big">Santiago de Compostela<br>A Coruña</p>
                </div>
                <div class="col s2">
                    <img class="nome_cidade_Big" src="/images/descargar/btn_descargar.png" alt="">
                </div>
            </div>
        </div>
        <div class="cidadeBig santiagoCompostelaBig">
            <div class="row">
                <div class="col s10">
                    <p class="nome_cidade_Big">Santiago de Compostela<br>A Coruña</p>
                </div>
                <div class="col s2">
                    <img class="nome_cidade_Big" src="/images/descargar/btn_descargar.png" alt="">
                </div>
            </div>
        </div>
        <div class="cidadeBig santiagoCompostelaBig">
            <div class="row">
                <div class="col s10">
                    <p class="nome_cidade_Big">Santiago de Compostela<br>A Coruña</p>
                </div>
                <div class="col s2">
                    <img class="nome_cidade_Big" src="/images/descargar/btn_descargar.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="favoritos_tit">
            <h1 class="taboleiro_titulo">Oportunidades</h1>
            <p class="taboleiro_text">Pack de ilustracións de cidades para o pronóstico do tempo</p>
        </div>
    </div>

    <div class="favoritos">
        <div class="cidade santiagoCompostela">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade vigo">
            <p class="nome_cidade">Vigo</p>
        </div>
        <div class="cidade ribadeo">
            <p class="nome_cidade">Ribadeo</p>
        </div>
        <div class="cidade santiagoCompostela">
            <p class="nome_cidade">Santiago de Compostela</p>
        </div>
        <div class="cidade vigo">
            <p class="nome_cidade">Vigo</p>
        </div>
        <div class="cidade ribadeo">
            <p class="nome_cidade">Ribadeo</p>
        </div>
    </div>


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

    .header {
        background-image: linear-gradient(180deg, #949393 0%, #5A5A5A 100%);
        border-radius: 0 0 40px 40px;
    }


    .caja_benvida {
        padding: 0px;
    }

    .benvida {
        padding-top: 60px;
        padding-bottom: 20px;
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

    .favoritos {
        overflow: auto;
        white-space: nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .favoritos::-webkit-scrollbar {
        display: none;
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
        height: 156px;
    }

    .cidade>img {
        margin: 0px auto;
    }

    .cidade::-webkit-scrollbar {
        display: none;
    }

    .cidadeBig {
        text-align: center;
        font-size: 12px;
        color: white;
        font-weight: 300;
        display: inline-grid;
        border-radius: 8px;
        background: #5e5e5e;
        margin-left: 10px;
        height: 359px;
        width: 275px;
    }

    .cidadeBig .row {
        margin-left: 10px;
        margin-right: 25px;
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
        color: #333;
        letter-spacing: 0.44px;
        text-align: left;
        white-space: normal !important;
        margin-top: 0px;
        padding-top: 10px;
        width: 110px;
        text-align: center;
    }

    .nome_cidade_Big {
        color: #333;
        text-align: left;
        padding-top: 295px;
        font-weight: 400;
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

    /* Cidades */

    .santiagoCompostela {
        background: url(/images/descargar/SantiagoCompostela_descargar.png);
        background-repeat: no-repeat;
        background-size: contain;
    }

    .santiagoCompostelaBig {
        background: url(/images/descargar/SantiagoCompostelaBig_descargar.png);
        background-repeat: no-repeat;
        background-size: contain;

    }

    .vigo {
        background: url(/images/descargar/vigo_descargar.png);
        background-repeat: no-repeat;
        background-size: contain;
    }

    .ribadeo {
        background: url(/images/descargar/ribadeo_descargar.png);
        background-repeat: no-repeat;
        background-size: contain;
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
</style>