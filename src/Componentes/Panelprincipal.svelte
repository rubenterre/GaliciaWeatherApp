<script>

import Santiago from '../Santiago/Santiago.svelte'
import UbicacionActual from '../UbicacionGPS/UbicacionActual.svelte'
import Vigo from '../Vigo/Vigo.svelte'
import Coruna from '../ACoruna/Coruna.svelte'
import Pontevedra from '../Pontevedra/Pontevedra.svelte'
import Ourense from '../Ourense/Ourense.svelte';
import Lugo from '../Lugo/Lugo.svelte'


import {  link  } from 'svelte-spa-router'

import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader,PrimaryText, SecondaryText} from '@smui/list';
  let myDrawer;
  let myDrawerOpen = false;
  import IconButton, {Icon} from '@smui/icon-button';
  let usingEvents = false;


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

}


$:if(fondoOurense){
    fondoSantiago = false;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = true;
    fondoLugo = false;

}

$:if(fondoSantiago){
    fondoSantiago = true;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

}

$:if(fondoPontevedra){
    fondoSantiago = false;
    fondoSireno = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = true;
    fondoOurense = false;
    fondoLugo = false;

}

$:if(fondoSireno){
    fondoSireno = true;
    fondoSantiago = false;
    fondoUbicacionGPS = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

}

$:if(fondoUbicacionGPS){
    fondoUbicacionGPS = true;
    fondoSantiago = false;
    fondoSireno = false;
    fondoCoruna = false;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

}
 
$:if(fondoCoruna){
    fondoUbicacionGPS = false;
    fondoSantiago = false;
    fondoSireno = false;
    fondoCoruna = true;
    fondoPontevedra = false;
    fondoOurense = false;
    fondoLugo = false;

}

</script>


<div class="drawer-container">
  <Drawer variant="dismissible" bind:this={myDrawer} bind:open={myDrawerOpen}>
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
          <Icon class="material-icons">location_on</Icon> 
          <Text>
            Ubicación actual
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoSantiago = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Santiago de Compostela
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoSireno = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Vigo
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoCoruna = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            A Coruña
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoPontevedra = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Pontevedra
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoOurense = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Ourense
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoLugo = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Lugo
          </Text>
        </Item>
        <Item href="javascript:void(0)" on:click={() => fondoSireno = true}>
          <Icon class="material-icons">location_city</Icon> 
          <Text>
            Ferrol
          </Text>
        </Item>
        <Separator/>
        <Item href="/#/Creditos" on:click={() => link}>
          <Icon class="material-icons">info_outline</Icon>
          <Text><a class="black-text" href="/Creditos" use:link >Información</a></Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
      <Button on:click={() => myDrawerOpen = !myDrawerOpen} class="transparent"><Label>
        <IconButton on:click={() => usingEvents = !usingEvents} pressed={usingEvents}>
          <Icon class="material-icons white-text transparent menu" on>clear</Icon>
          <Icon class="material-icons white-text transparent menu">sort</Icon>
        </IconButton>
    </Label></Button>
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
    <UbicacionActual/>
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

 .idioma{
          margin-top: 10px;
          margin-right: 10px;
          padding: 10px;
          text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
        }

      </style>