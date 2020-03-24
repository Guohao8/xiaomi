<template>
  <div>
    <nav-header/>
    <router-view></router-view>
    <nav-footer/>
  </div>
</template>

<script>
import NavFooter from 'components/nav/NavFooter'
import NavHeader from 'components/nav/NavHeader'
export default {
  name: 'Home',
  components:{
    NavFooter,
    NavHeader,
 },
 data() {
   return {

   }
 },
 mounted() {

 },
}
</script>
