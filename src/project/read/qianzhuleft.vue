<template>
    <div class="qianzhuleft">
        <div class="qz_left" v-for="qznews in qznew" :key="qznews.index">
            <div class="qz_box">
                <img :src="qznews.imgurl" alt="">
                <div class="wechat">
                    <img :src="qznews.wechaturl" alt="扫描关注网站建设微信公众账号">
                    <p>
                        {{qznews.saoma}}
                        <i></i>
                    </p>
                </div>
                <nav>
                    <span id="cloud"></span>
                    <ul>
                        <li @click="error()">{{qznews.sy}}</li>
                        <li>{{qznews.al}}</li>
                        <li>{{qznews.dt}}</li>
                    </ul>
                </nav>
            </div>
            <footer>
                {{qznews.qzbot1}}
                <br>
                {{qznews.qzbot2}}
                <u>{{qznews.qzbot3}}</u>
                {{qznews.qzbot4}}
                <br>
                <a href="http://www.1000zhu.com/">{{qznews.qzbot5}}</a>
            </footer>
        </div>
        <div class="qz_right">
            <i class="el-icon-back"></i>
            <div class="qzcate">
                <span @click="error()" class="any">全部</span>
                <span>千助新闻</span>
                <span>行业动态</span>
                <span>经验之谈</span>
            </div>
        </div>
            <qzbody class="qzbody"></qzbody>
    </div>
</template>
<script>
import {
        mapGetters,
        mapState,
        mapMutations,
        mapActions
} from "vuex";
import qzcss from "./qzleft.css"
import qzbody from './qzbody'
export default {
     components:{
         qzbody
     },
    computed: {
        qznew(){
            return this.$store.state.qznew
        },
        qzactive(){
            return this.$store.state.qzactive
        }        
    },
    methods:{
        error(){
            this.$router.push('/error')
        }
    }
}
$(function(){
    $(".qzcate span").on("click","span",function(){
            $(".qzcate span").removeClass("any");
            $(this).addClass("any");
        });
    $(".qz_right i").on("click","i",function(){
        $(".qz_left").css("left","-240px")
    })
})
</script>
