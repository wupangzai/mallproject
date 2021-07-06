import BackTop from '../components/content/backtop/BackTop.vue'

export const backTop = {
  components:{
    BackTop,
  },
  methods: {
    backTop() {
      if(this.$refs.scroll)
      this.$refs.scroll.scrollTo(0,0,500)
    }
  },
}