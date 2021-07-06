export const backTop = {
  components:{
    backTop
  },
  methods: {
    backTop() {
      if(this.$refs.scroll)
      this.$refs.scroll.scrollTo(0,0,500)
    }
  },
  mounted() {
    console.log('我是混入的mounted');
  },
}