<script>
    import { link } from 'svelte-spa-router'

    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  import H6 from '@smui/common/H6.svelte';
  let clicked = 'nothing yet';
  let myDrawer;
  let myDrawerOpen = false;
  let active = 'Gray Kittens';
  let myDrawer2;
  let myDrawer2Open = false;
  let active2 = 'Inbox';
  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }
  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
  }
/* Open when someone clicks on the span element
const open = () => {
  document.getElementById("menuLateral").style.width = "100%";
}


const close = () => {
  document.getElementById("menuLateral").style.width = "0%";
}
  <!-- The overlay -->
<div id="menuLateral" class="overlay">

  <!-- Button to close the overlay navigation -->
  <a href="javascript:void(0)" class="closebtn" on:click={close}>&times;</a>

  <!-- Overlay content -->
  <div class="overlay-content">
      <ul>
          <li>
              <div class="user-view">
                  <img class="img_siderbar" src="images/GaliciaWeather.gif" width="50%">
                  <p class="logoTIT_siderbar">GaliciaWeather<span class="logoTEXT_siderbar">O tempo de Galicia</span></p>
              </div>
          </li>
         <!-- <li><a href="/Axustes" use:link >Axustes</a></li> --> 
          <li><a href="#">Convidar amizades</a></li>
          <li><a href="#">Calificar </a></li>
          <li><a href="/Creditos" use:link >Información</a></li>
      </ul>
  </div>
    </div>

      <!-- Use any element to open/show the overlay navigation menu -->
<span class="sidenav-trigger" on:click={open}>MENU</span>



*/
</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:this={myDrawer} bind:open={myDrawerOpen}>
    <Header>
      <Title>GaliciaWeather</Title>
      <Subtitle>O tempo de Galicia</Subtitle>
    </Header>
    <Content>
      <List>
        <Item>
          <Text><a href="/Axustes" use:link >Axustes</a></Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>
          <Text>A Space Rocket</Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>
          <Text>100 Pounds of Gravel</Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>
          <Text>All of the Shrimp</Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>
          <Text>A Planet with a Mall</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
      <Button on:click={() => myDrawerOpen = !myDrawerOpen}><Label><i class="material-icons white-text menu">location_city</i></Label></Button>
    </main>
  </AppContent>
</div>


  <style>

.menu{
  margin-top: 20px;
}

      
.user-view{
    margin-bottom: 50px;
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
              text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
          }
      
.logoTEXT_siderbar{
              text-align: center;
              color: white;
              font-size: 13px;
              display: block;
              text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
          }

.sidenav-trigger{
              padding-left: 30px;
              padding-top: 30px;
              color: #fff;
              writing-mode: vertical-rl;
              font-size: 18px;
              text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
          }

.overlay {
  height: 100%;
  width: 0;
  position: fixed; 
  z-index: 999999; 
  left: 0;
  top: 0;
  /* background-color: rgb(0,0,0); Black fallback color */
  background-color: #333;
  /* background-color: rgba(0,0,0, 0.9);  Black w/opacity */
  overflow-x: hidden; 
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 10%;
  width: 100%; 
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 15px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
  </style>