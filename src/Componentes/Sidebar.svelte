<script>

// navbar 

 const sidebar = ()=> {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
 }

</script>

<nav></nav>
    <ul id="slide-out" class="sidenav">
        <li>
            <div class="user-view">
                <img class="img_siderbar" src="images/GaliciaWeather.gif" width="50%">
                <p class="logoTIT_siderbar">GaliciaWeather<span class="logoTEXT_siderbar">O tempo de Galicia</span></p>
            </div>
        </li>
        <li><a href="#"><i class="material-icons white-text">settings</i>Ajustes</a></li>
        <li><a href="#"><i class="material-icons white-text">people</i>Invitar Amigos</a></li>
        <li><a href="#"><i class="material-icons white-text">star</i>Calificar </a></li>
        <li><a href="#"><i class="material-icons white-text">info</i>Información</a></li>
        <li><a href="#"><i class="material-icons white-text">person_add</i>Regístrate</a></li>
        <li><a href="#"><i class="material-icons white-text">account_circle</i>Inicia sesión</a></li>
        <li><a href="#"><i class="material-icons white-text">exit_to_app</i>Salir</a></li>
    </ul>
    <a on:click|preventDefault={sidebar} data-target="slide-out" class="sidenav-trigger"><i class="material-icons">sort</i></a>

    <style>
        /* NAVBAR */
  
        nav{
          background: transparent;
          box-shadow: none;
          height: 36px;
      }
  
      .sidenav-trigger{
          color:white;
          padding-left: 30px;
      }
  
      .sidenav{
          color: white;
          background: #212121;
      }
  
      .img_siderbar{
          display: flex;
          justify-content: center;
          align-content: center;
          margin: 0px auto;
      }
  
      .logoTIT_siderbar{
          text-align: center;
          color: white;
          font-size: 18px;
          line-height: 20px;
      }
  
      .logoTEXT_siderbar{
          text-align: center;
          color: white;
          font-size: 13px;
          display: block;
      }
  
      .user-view {
      padding: 20px;
      text-align: center;
      background-image: linear-gradient(180deg, #181818 0%, #363636 100%);
      border-radius: 0px 0px 30px 30px;
      -moz-border-radius: 0px 0px 30px 30px;
      -webkit-border-radius: 0px 0px 30px 30px;
      }
  
      .sidebar-panel .side-nav .user-view span {
      margin-top: 12px;
      display: block;
      }
  
      .sidebar-panel .side-nav .user-view .background img {
      width: 100%;
      height: 100%;
      }
  
      .side-nav li a{
      margin-right: 1rem;
      width: auto;
      font-size: 15px;
      color: #fff;
      }
  
      .sidenav li > a {
      color: white;
      display: block;
      font-size: 14px;
      font-weight: 500;
      height: 48px;
      line-height: 48px;
      padding: 0 32px;
  }
  
  </style>