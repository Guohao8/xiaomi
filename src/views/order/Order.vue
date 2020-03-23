<template>
  <div>
    <order-header/>
     <router-view></router-view>
    <order-footer/>
  </div>
</template>

<script>
  import OrderFooter from 'components/order/OrderFooter'
  import OrderHeader from 'components/order/OrderHeader'

  export default {
    name:"Order",
    components:{
      OrderFooter,
      OrderHeader
    }
  }
</script>

<style scoped>

</style>