<template>
    <TopBar />
    <LogoArea />
    <MainMenu />
    <Navbar />
    <RouterView />
    <Footers />
</template>

<script>
import {Navbar} from '@/components'
import {TopBar} from '@/components'
import { Footers } from './components';
import { LogoArea } from './components';
import {MainMenu} from './components'


export default {
components:{
  Navbar,
  TopBar,
  Footers,
  LogoArea,
  MainMenu,

},
}
</script>

<style>

</style>