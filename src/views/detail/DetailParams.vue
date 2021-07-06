<!--  -->
<template>
  <div class="detail-params">
    <table class="size">
      <tr v-for="(item, index) in detailParams.size" :key="index">
        <div v-for="(item,index) in item" :key="index">
          <td v-for="(item, index) in item" :key="index">
          {{ item }}
          </td>
        </div>

      </tr>
    </table>
    <table class="info">
      <tr v-for="(item, index) in detailParams.info" :key="index">
        <td>{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    detailParams: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  components:{
  },
  mounted() {
  }

}

</script>

<style scoped>
  .detail-params{
    margin: 10px 10px;
    color: #999;
    font-size: 14px;
  }
  .size{
  border-spacing: 0 5px;
  border-bottom: 3px solid #eee;
  }
  .size  td{
    text-align: center;
    padding-right: 30px;
    width: 50px;
  }
  .size tr{
    border: 1px solid;    
  }
  .info{
    border-spacing: 5px 15px;
    border-bottom: 3px solid #eee;
  }
  .info td{
    padding-right: 10px;
  }
  .info-value{
    color: var(--color-high-text);
    padding-left: 20px;
  }
</style>
