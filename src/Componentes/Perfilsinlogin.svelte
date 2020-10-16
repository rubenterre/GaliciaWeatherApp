<script>

    import Sidebar from '../Componentes/Sidebar.svelte'

    //Filtro

    let visibleFiltro = true;

    let selectedCheckbox = [];


    function todos() {
        selectedCheckbox = cidades;
    };

    function cities() {
        let cities = cidades.filter((cidade) => {
            if (cidade.etiqueta == 'Cidades') {
                return cidade;
            }
        })
        console.log(cities)

        selectedCheckbox = cities;

        console.log(selectedCheckbox)


    }

    function monumentos() {
        let monumentos = cidades.filter((cidade) => {
            if (cidade.etiqueta == 'Monumentos') {
                return cidade;
            }
        })
        console.log(monumentos)

        selectedCheckbox = monumentos;

    }

    function natureza() {
        let natureza = cidades.filter((cidade) => {
            if (cidade.etiqueta == 'Natureza') {
                return cidade;
            }
        })
        console.log(natureza)

        selectedCheckbox = natureza;

    }

    function gratis() {
        let gratis = cidades.filter((cidade) => {
            if (cidade.precio == 'GRATIS') {
                return cidade;
            }
        })
        console.log(gratis)

        selectedCheckbox = gratis;

    }

    function descargadas() {
        let descargadas = cidades.filter((cidade) => {
            if (cidade.descargado == 'DESCARGADO') {
                return cidade;
            }
        })
        console.log(descargadas)

        selectedCheckbox = descargadas;
    }

    let cidades = [{
            name: 'Santiago de Compostela',
            lugar: 'A Coruña',
            imagen: 'SantiagoCompostela_descargar',
            etiqueta: 'Cidades',
            precio: 'GRATIS',
            descargado: 'DESCARGADO'
        },
        {
            name: 'Teatro García Barbón',
            lugar: 'Vigo',
            imagen: 'Vigo_descargar',
            etiqueta: 'Monumentos',
            precio: '0,99€',
            descargado: 'DESCARGAR'
        },
        {
            name: 'Praia das Catedráis',
            lugar: 'Ribadeo (Lugo)',
            imagen: 'Ribadeo_descargar',
            etiqueta: 'Natureza',
            precio: '0,99€',
            descargado: 'DESCARGAR'
        }
    ]

    console.log(cidades)

    if (selectedCheckbox = []) {
        todos()
    }

</script>
<div class="fondo">

<Sidebar/>

    <div class="logoGW">
        <h1 class="logoGW_tit">GaliciaWeather<span class="logoGW_txt">O tempo de Galicia</span></h1>
    </div>


    <div class="corpo center">
        <div class="usuario">
            <div class="container">
                <div class="row">
                    <img class="banner" src="images/Banner_rexistrate.png" alt="Rexístrate">
                </div>
            </div>
        </div>
        <div class="container">
            <div id="BtnContainer" class="col s12">
                <div class="col s3">
                    <button on:click={()=> todos()} class="btn_filtro active"><img class="center-align" width="80%"
                            src="images/btn_todos.svg"><span>TODOS</span></button>
                </div>
                <div class="col s3 ">
                    <button on:click={()=> monumentos()} class="btn_filtro"><img class="center-align" width="80%"
                            src="images/btn_monumentos.svg"><span>MONUMENTOS</span></button>
                </div>
                <div class="col s3">
                    <button on:click={()=> cities()} class="btn_filtro"><img class="center-align" width="80%"
                            src="images/btn_cidades.svg"><span>CIDADES</span></button>
                </div>
                <div class="col s3">
                    <button on:click={()=> natureza()} class="btn_filtro"><img class="center-align" width="80%"
                            src="images/btn_natureza.svg"><span>NATUREZA</span></button>
                </div>
            </div>
            <div class="col s12 botones_filtro_sub center">
                <div class="col s6 left">
                    <button on:click={()=> gratis()} class="btn_gratis left">GRATIS</button>
                </div>
                <div class="col s6 right">
                    <button on:click={()=> descargadas()} class="btn_descargadas right">DESCARGADAS</button>
                </div>
            </div>
            <div class="row">
                <!-- Menu filtro -->

                {#if visibleFiltro}
                {#each selectedCheckbox as cidade }
                    
                    <div class="col s6 m7">
                      <div class="card">
                          <div class="nombre_cidade col s12 center-align">
                            <p>{cidade.name}<span style="display: block">{cidade.lugar}</span></p>
                          </div>
                        <div class="card-image">
                          <img src="/images/descargar/{cidade.imagen}.png">
                        </div>
                        <div class="card-content black-text">
                            <div class="etiqueta col s6">
                                <p>{cidade.etiqueta}</p>
                            </div>
                            <div class="precio col s6">
                                <p>{cidade.precio}</p>
                            </div>
                        </div>
                        <div class="card-action">
                            {#if cidade.descargado == "DESCARGAR"}
                          <a class="waves-effect waves-light btn-small">{cidade.descargado}</a>
                            {:else}
                          <a class="waves-effect waves-light btn-small black-text white">{cidade.descargado}</a>
                            {/if}
                        </div>
                      </div>
                    </div>
                {/each}
                {/if}
            </div>
        </div>
    </div>
</div>


<style>
    .fondo {
        background: url('/images/fondo_perfil.svg');
        background-color: #333;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100vw;
    }

    .usuario {
        z-index: 99;
        position: absolute;
        max-width: 100%;
        width: 98vw;
        height: auto;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .corpo {
        background-image: linear-gradient(180deg, #949393 0%, #5A5A5A 100%);
        border-radius: 40px 40px 0 0;
        position: absolute;
        width: 100%;
        min-height: 100vh;
        margin-top: 80px;
    }

    .banner{
        margin-top: 10px;
        margin-bottom: 30px;
        width: 100%;
        display: flex;
    }

    .logoGW{
        display: block;
        justify-content: center;
        align-items: center;
        align-content: center;
        }

    .logoGW_tit{
        text-align: center;
        font-size: 22px;
        padding-top: 0px;
        margin-top: 0px;
        text-shadow: 0px 2px 4px rgba(0,0,0,1);
    }

    .logoGW_txt{
        text-align: center;
        font-size: 12px;
        display: block;
        text-shadow: 0px 2px 4px rgba(0,0,0,1);

    }



    .btn_inicio {
        height: 100px;
        width: 90px;
        background: #D8D8D8;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        border-radius: 8px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn_registro{
        height: 100px;
        width: 90px;
        background: #D8D8D8;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        border-radius: 8px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .txt_btn{
        font-size: 12px;
        color: #333;
        letter-spacing: 0.79px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        font-weight: 300;
    }



    /* Filtro */

    #BtnContainer {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 100px;
    }

    .btn_filtro {
        border: 0px;
        background: transparent;
        color: white;
        font-size: 9px;
        width: 80px;
    }

    .btn_filtro span {
        display: block;
    }

    .botones_filtro_sub {
        display: inline-flex;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .btn_gratis {
        width: 161px;
        height: 34px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: 600;
        background: #D8D8D8;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
        border-radius: 4px;
    }

    .btn_descargadas {
        width: 161px;
        height: 34px;
        margin-left: 10px;
        font-size: 12px;
        font-weight: 600;
        background: #D8D8D8;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
        border-radius: 4px;
    }

    @media only screen and (max-width: 360px) {
        .btn_gratis {
            width: 141px;
        }
        .btn_descargadas{
            width: 141px;
        }
    }

    .card {
        border-radius: 10px;
        background: #D8D8D8;
    }

    .card-action {
        border-radius: 10px !important;
        padding: 4px 10px;
    }

    .nombre_cidade {
        text-align: center;
        color: #333;
        font-size: 10px;
    }

    .card-image {
        padding-left: 10px;
        padding-right: 10px;
    }

    .etiqueta {
        padding: 0px;
        text-align: left;
        font-size: 10px;
    }

    .precio {
        text-align: right;
        font-size: 10px;
        padding: 0px;
    }

    .btn-small {
    width: 100%;
    background: black;
    color: white;
    }
</style>