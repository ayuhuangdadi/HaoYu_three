<template>
    <div class="bgColor" :style="'height:'+fullHeight+'px;'">
        <div class="lxtwo">
            <span v-for="lxlists in lxlist" :key="lxlists.index">{{lxlists.title}}</span>
            <ul class="lx_list">
                <li @click="option()" v-for="lxlists in lxlist" :key="lxlists.index">{{lxlists.text}}</li>
            </ul>
        </div>
        <div class="lxbg"></div>
    </div>
</template>
<script>
import {
        mapGetters,
        mapState,
        mapMutations,
        mapActions
} from "vuex";
export default{
		name:"Login",
		data () {
			return {
				fullHeight: document.documentElement.clientHeight
			}
		},
		watch: {
			fullHeight (val) {//监控浏览器高度变化
				if(!this.timer) {
					this.fullHeight = val
					this.timer = true
					let that = this
					setTimeout(function (){
						that.timer = false
					},400)
				}
				
			}
		},
		mounted () {
			this.get_bodyHeight()
		},
		methods :{
			get_bodyHeight () {//动态获取浏览器高度
				const that = this
				window.onresize = () => {
					return (() => {
						window.fullHeight = document.documentElement.clientHeight
						that.fullHeight = window.fullHeight
					})()
				}
			},
            option(){
               this.$router.push('/index') 
            }
        },
        computed: {
            lxlist(){
                return this.$store.state.lxlist
            }
        },
	}
</script>