<script>

    import {
        link
    } from 'svelte-spa-router'
    import {
        fade
    } from 'svelte/transition';

    let current = 'TODOS';

    const fondoDeSantiago = '<button class="waves-effect waves-light btn-small black white-text" style="width:100%"> ACTIVAR </button>'; 
    const fondoDeDinoseto = '<button class="waves-effect waves-light btn-small black white-text" style="width:100%"> ACTIVAR </button>';
    const fondoDeSireno = '<button class="waves-effect waves-light btn-small black white-text" style="width:100%"> ACTIVAR </button>';

    //Filtro

    let visibleFiltro = true;

    let selectedCheckbox = [];


    function todos() {
        selectedCheckbox = cidades;
        current = 'TODOS';
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
        current = 'CIDADES'


    }

    function monumentos() {
        let monumentos = cidades.filter((cidade) => {
            if (cidade.etiqueta == 'Arte') {
                return cidade;
            }
        })
        console.log(monumentos)

        selectedCheckbox = monumentos;
        current = 'ARTE';
    }

    function natureza() {
        let natureza = cidades.filter((cidade) => {
            if (cidade.etiqueta == 'Natureza') {
                return cidade;
            }
        })
        console.log(natureza)

        selectedCheckbox = natureza;
        current = 'NATUREZA';

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
            if (cidade.tipo == 'PREMIUM') {
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
            tipo: 'BASIC',
            descargar: fondoDeSantiago
        },
        {
            name: 'Dinoseto de Porta do Sol',
            lugar: 'Vigo',
            imagen: 'Vigo_dinoseto_descargar',
            etiqueta: 'Arte',
            precio: '0,99€',
            tipo: 'PREMIUM',
            descargar: fondoDeDinoseto
        },
        {
            name: 'O Sireo de Porta do Sol',
            lugar: 'Vigo',
            imagen: 'Vigo_sireno_descargar',
            etiqueta: 'Arte',
            precio: '0,99€',
            tipo: 'PREMIUM',
            descargar: fondoDeSireno
        }
    ]

    /*
    <button class="waves-effect waves-light btn-small activacion" on:click={() => fondoSantiago = true} >Santiago</button> 
    
    `<button class="waves-effect waves-light btn-small activacion" on:click={() => fondoDinoseto = true} >Dinoseto</button>`

    `<button class="waves-effect waves-light btn-small activacion" on:click={() => fondoSireno = true} >Sireno</button>`

    ,
        {
            name: 'Praia das Catedráis',
            lugar: 'Ribadeo (Lugo)',
            imagen: 'Ribadeo_descargar',
            etiqueta: 'Natureza',
            precio: '0,99€',
            tipo: 'PREMIUM'
        }
    */

    console.log(cidades)

    if (selectedCheckbox = []) {
        todos()
    }


</script>
<div class="fondo">

    <div class="logoGW">
        <h1 class="logoGW_tit">GaliciaWeather<span class="logoGW_txt">O tempo de Galicia</span></h1>
    </div>

    <div class="corpo center">
        <div class="usuario">
            <div class="container">
                <div class="row">
                    <a href="/Registro" use:link><img class="banner" src="images/Banner_Rexistro.png"
                            alt="Rexístrate"></a>
                </div>
            </div>
        </div>
        <div class="container">
            <div id="BtnContainer" class="col s12">
                <div class="col s3 todos">
                    <button on:click={()=> todos()} class:selected="{current === 'TODOS'}"  class="btn_filtro"><img class="center-align" width="60%"
                            src="images/btn_todos.svg"><span>TODOS</span></button>
                </div>
                <div class="col s3 arte">
                    <button on:click={()=> monumentos()} class:selected="{current === 'ARTE'}" class="btn_filtro"><img class="center-align" width="60%"
                            src="images/btn_monumentos.svg"><span>ARTE</span></button>
                </div>
                <div class="col s3 cidades">
                    <button on:click={()=> cities()} class:selected="{current === 'CIDADES'}" class="btn_filtro"><img class="center-align" width="60%"
                            src="images/btn_cidades.svg"><span>CIDADES</span></button>
                </div>
                <div class="col s3 natureza">
                    <button on:click={()=> natureza()} class:selected="{current === 'NATUREZA'}" class="btn_filtro"><img class="center-align" width="60%"
                            src="images/btn_natureza.svg"><span>NATUREZA</span></button>
                </div>
            </div>
            <div class="col s12 botones_filtro_sub center">
                <div class="col s6 left">
                    <button on:click={()=> gratis()} class="btn_gratis left">GRATIS</button>
                </div>
                <div class="col s6 right">
                    <button on:click={()=> descargadas()} class="btn_descargadas right">PREMIUM</button>
                </div>
            </div>
            <div class="row">
                <!-- Menu filtro -->

                {#if visibleFiltro}
                {#each selectedCheckbox as cidade }
                    
                    <div class="col s12 m7" transition:fade="{{delay: 250, duration: 300}}">
                        <div class="card horizontal">
                          <div class="card-image">
                            <img src="/images/descargar/{cidade.imagen}.png">
                        </div>
                          <div class="card-stacked">
                            <div class="card-content black-text">
                                <p class="header nombre_cidade">{cidade.name}<span style="display: block">{cidade.lugar}</span></p>
                                <div class="etiqueta col s6">
                                    <p>{cidade.etiqueta}</p>
                                </div>
                                <div class="precio col s6">
                                    <p>{cidade.precio}</p>
                                </div> 
                             </div>
                            <div class="card-action">
                                {@html cidade.descargar}
                            </div>
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

 
/* Tarjetas y fondo */

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
        padding-top: 50px;
        margin-top: 0px;
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    }

    .logoGW_txt{
        text-align: center;
        font-size: 12px;
        display: block;
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
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

    .selected {
        border: 3px solid #333!important;
        background: #D8D8D8!important;
        color: #333!important;
        font-size: 9px;
        width: 70px!important;
        margin: 5px;
        text-align: center;
        padding: 5px;
        border-radius: 8px;
        height: 85px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
	}

    .btn_filtro {
        border: 0px;
        background: #D8D8D8;
        color: #333;
        font-size: 9px;
        width: 70px;
        margin: 5px;
        text-align: center;
        padding: 5px;
        border-radius: 8px;
        height: 85px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
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
        border-radius: 8px !important;
        padding: 4px 15px;
        border-top:0px;
        margin-bottom: 10px;
    }

    .card-content{
        padding-top: 14px;
        border-radius: 0 0 2px 2px;
        padding-bottom: 0px;
        padding-left: 18px;
        padding-right: 18px;
    }

    .nombre_cidade {
        text-align: left;
        color: #333;
        font-size: 15px;
        padding-bottom: 10px;
    }

    .card-content span{
        text-align: left;
        font-size: 10px;
    }

    .card-image {
        padding-left: 0px;
        padding-right: 0px;
    }

    .etiqueta {
        padding: 0px;
        text-align: left;
        font-size: 12px;
    }

    .precio {
        text-align: right;
        font-size: 12px;
        padding: 0px;
    }

    .btn-small {
    width: 100%;
    background: black;
    color: white;
    }
</style>