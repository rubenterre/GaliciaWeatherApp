<script>

import Santiago from '../Santiago/Santiago.svelte'
import UbicacionActual from '../UbicacionGPS/UbicacionActual.svelte'
import Vigo from '../Vigo/Vigo.svelte'
import Coruna from '../ACoruna/Coruna.svelte'
import Pontevedra from '../Pontevedra/Pontevedra.svelte'
import Ourense from '../Ourense/Ourense.svelte';
import Lugo from '../Lugo/Lugo.svelte'

import CidadesBtn from '../Componentes/CidadesBtn.svelte'

import {  link  } from 'svelte-spa-router'

import Drawer, {AppContent, Content, Header, Title,  Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  
  //import IconButton, {Icon} from '@smui/icon-button';


  import H6 from '@smui/common/H6.svelte';
  let myDrawer2;
  let myDrawer2Open = false;


let fondoSireno = false;
let fondoSantiago = false;
let fondoUbicacionGPS = false;
let fondoCoruna = false;
let fondoPontevedra = false;
let fondoOurense = false;
let fondoLugo = false;


$:if(fondoLugo){
    fondoSantiago = false;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = true;

    localStorage.removeItem("Ubicacion")
    localStorage.removeItem("Coruna");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Ourense");
    localStorage.setItem("Lugo", JSON.stringify(fondoLugo))
  }

  fondoLugo =  JSON.parse(localStorage.getItem("Lugo"))
      
    

$:if(fondoOurense){
    fondoSantiago = false;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = true;
    fondoLugo = false;

    localStorage.removeItem("Ubicacion")
    localStorage.removeItem("Coruna");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Ourense", JSON.stringify(fondoOurense))

}

fondoOurense =  JSON.parse(localStorage.getItem("Ourense"))


$:if(fondoSantiago){
    fondoSantiago = true;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

    localStorage.removeItem("Ubicacion")
    localStorage.removeItem("Coruna");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Ourense");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Santiago", JSON.stringify(fondoSantiago))
}

fondoSantiago =  JSON.parse(localStorage.getItem("Santiago"))


$:if(fondoPontevedra){
    fondoSantiago = false;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = true;
    fondoOurense = false;
    fondoLugo = false;

    localStorage.removeItem("Ubicacion")
    localStorage.removeItem("Coruna");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Ourense");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Pontevedra", JSON.stringify(fondoPontevedra))
}

fondoPontevedra =  JSON.parse(localStorage.getItem("Pontevedra"))


$:if(fondoSireno){
    fondoSireno = true;
    fondoSantiago = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

    localStorage.removeItem("Ubicacion")
    localStorage.removeItem("Coruna");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Ourense");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Vigo", JSON.stringify(fondoSireno))
}

fondoSireno =  JSON.parse(localStorage.getItem("Vigo"))

$:if(fondoUbicacionGPS){
    fondoUbicacionGPS = true;
    fondoSantiago = false;
    fondoSireno = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

    localStorage.removeItem("Coruna");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Ourense");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Ubicacion", JSON.stringify(fondoUbicacionGPS))
}
 
fondoUbicacionGPS =  JSON.parse(localStorage.getItem("Ubicacion"))


$:if(fondoCoruna){
    fondoUbicacionGPS = false;
    fondoSantiago = false;
    fondoSireno = false;
    fondoCoruna = true;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

    localStorage.removeItem("Ubicacion");
    localStorage.removeItem("Vigo");
    localStorage.removeItem("Pontevedra");
    localStorage.removeItem("Santiago");
    localStorage.removeItem("Ourense");
    localStorage.removeItem("Lugo");
    localStorage.setItem("Coruna", JSON.stringify(fondoCoruna))
}

fondoCoruna =  JSON.parse(localStorage.getItem("Coruna"))


</script>


  <div class="drawer-container">
    <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
      <Header class="center" >
        <div class="GW_icon">
          <img class="center" src="/images/GaliciaWeather.gif" alt="" width="50%">
        </div>
        <Title class="center" >GaliciaWeather<br><p style="padding-bottom:20px;color:#333;font-size:13px;font-weight:300;">O tempo de Galicia</p></Title>
      </Header>
      <Content>
        <List class="grey darken-3">
          <Item>
            <Text class="white-text">
              <p style="font-size:14px;font-weight:600;">Escolle unha cidade:</p>
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoUbicacionGPS = true}>
            <Graphic class="material-icons" aria-hidden="true">location_on</Graphic>
           <Text>
             Ubicación Actual
           </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoSantiago = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              Santiago de Compostela
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoSireno = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              Vigo
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoCoruna = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              A Coruña
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoPontevedra = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              Pontevedra
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoOurense = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              Ourense
            </Text>
          </Item>
          <Item href="javascript:void(0)" on:click={() => fondoLugo = true}>
            <Graphic class="material-icons" aria-hidden="true">location_city</Graphic>
            <Text>
              Lugo
            </Text>
          </Item>
          <Separator nav />
          <Subheader component={H6}>Outros</Subheader>
          <!-- 
          <Item href="">
            <Graphic class="material-icons" aria-hidden="true">share</Graphic>
            <Text><a class="black-text" on:click={()=>share()} > Convidar amizades</a></Text>
          </Item>
          <Item href="">
            <Graphic class="material-icons" aria-hidden="true">star</Graphic>
            <Text><a class="black-text" on:click={()=>rate()}> Valore a nosa aplicación</a></Text>
          </Item>
          -->

          <Item href="/#/Creditos" on:click={() => link}>
            <Graphic class="material-icons" aria-hidden="true">info_outline</Graphic>
            <Text><a class="black-text" href="/Creditos" use:link > Información</a></Text>
          </Item>
        </List>
      </Content>
    </Drawer>

    <Scrim />
    <AppContent class="app-content">
      <main class="main-content">
        <Button on:click={() => myDrawer2Open = !myDrawer2Open}>
          <Label>
        <CidadesBtn/>
          </Label>
        </Button>
        <br />
        <div style="height: 300px;">&nbsp;</div>
      </main>
    </AppContent>
  </div>



    {#if fondoSireno}
    <Vigo/>
    {:else if fondoSantiago}
    <Santiago/>
    {:else if fondoCoruna}
    <Coruna/>
    {:else if fondoPontevedra}
    <Pontevedra/>
    {:else if fondoOurense}
    <Ourense/>
    {:else if fondoLugo}
    <Lugo/>
    {:else if fondoUbicacionGPS}
    <UbicacionActual/>
    {:else}
    <Santiago/>
    {/if}

    <style>

      .GW_icon{
        padding-top: 30px;
      }

:global(.menu){
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
}

:global(.mdc-button:after){
    background-color: var(--mdc-theme-primary, rgba(0,0,0,0.0))!important;
}

:global(.mdc-button:before){
    background-color: var(--mdc-theme-primary, rgba(0,0,0,0.0))!important;
}

:global(button:focus){
  background-color: transparent;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);

}

:global(.main-content){
  height: 60px;
}

      </style>