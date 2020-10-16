<script>
    import {
        db
    } from '../firebase.js'

    let nome = ''
    let email = ''
    let contrasinal = ''
    let consentimiento = true
    let idUpdate = ''
    let users = []
    db.collection('users').orderBy('nombre', 'asc').onSnapshot(data => {
        users = data.docs
    })

    function addUser() {
        db.collection('users').add({
            nome: nome,
            email: email,
            contrasinal: contrasinal,
            consentimiento: consentimiento
        })
        nome = ''
        email = ''
        contrasinal = ''
        consentimiento = true
    }

</script>
<div class="fondo">
    <div class="container">
        <div class="row">
            <div class="col s12 logoGW">
                <img class="img_logoGW" src="images/GaliciaWeather.gif" width="50%">
                <p class="logoTIT">GaliciaWeather<span class="logoTEXT">O tempo de Galicia</span></p>
            </div>
        </div>
    </div>
    <div class="rexistro">
        <input type="hidden" bind:value={idUpdate}>
        <input type="text" placeholder="Nome" bind:value={nome} class="validate">
        <input type="text"  placeholder="Email" bind:value={email} class="validate">
        <input type="password"  placeholder="Contrasinal" bind:value={contrasinal} class="validate">
        <p>
            <label>
              <input type="checkbox" bind:value={consentimiento}/>
              <span>Acepto el Consentimiento para el tratamiento
                de datos personales.</span>
            </label>
        </p>

        <button class="btn rexistrarme" on:click={addUser}>REXISTRARME</button>

    </div>
</div>
    <style>
        
        .fondo {
        background-color: #333;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100vw;
    }

    /* Logo GW */

    .img_logoGW{
          display: flex;
          justify-content: center;
          align-content: center;
          margin: 0px auto;
      }
  
      .logoTIT{
          text-align: center;
          color: white;
          font-size: 18px;
          line-height: 20px;
      }
  
      .logoTEXT{
          text-align: center;
          color: white;
          font-size: 13px;
          display: block;
      }

      /* Rexistrarme */

      .rexistro{
          display: block;
          margin: 0px auto;
          padding-left: 20%;
          padding-right: 20%;
      }

      .rexistrarme{
        margin-top: 30px;
        width: 100%;
        font-family: Rubik-Medium;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0.52px;
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        border-radius: 4px;
      }

    input{
    color: white!important;
    }

    </style>