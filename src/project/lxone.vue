<template>
    <div class="lxonebody" :style="'height:'+fullHeight+'px;'">
        <div class="lxone" v-for="lxfirsts in lxfirst" :key="lxfirsts.index">
            <div class="lx_above">
                <div class="lx_wechat">
                    <img :src="lxfirsts.imgurl" alt="">
                </div>
				<div class="lx_left">
					<div></div>
					<p>
						{{lxfirsts.lxtext1}}<br>
						{{lxfirsts.lxtext2}}<br>
						{{lxfirsts.lxtext3}}<br>
						{{lxfirsts.lxtext4}}
					</p>
				</div>
				<div class="lx_right">
					{{lxfirsts.lxtextone}}<br>
					{{lxfirsts.lxtexttwo}}<br>
					{{lxfirsts.lxtextthree}}<br>
					{{lxfirsts.lxtextfour}}<br>
					{{lxfirsts.lxtextfive}}
				</div>
            </div>
            <div class="lx_below">
				<i></i>
            </div>
        </div>
    </div>
</template>
<script>
import {
        mapGetters,
        mapState,
        mapMutations,
        mapActions
} from "vuex";
export default {
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
            
        },
        computed: {
            lxfirst(){
                return this.$store.state.lxfirst
            }
        },
}
</script>

