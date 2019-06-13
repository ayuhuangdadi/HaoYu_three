<template>
    <div>
        <ul>
            <li v-for="qzactives in qzactive" :key="qzactives.index">
                <p>
                    <span>
                        {{qzactives.num}}
                        <u>{{qzactives.aug}}</u>
                    </span>
                    <img :src="qzactives.imgurl" alt="">
                </p>
                <p>
                    <span class="tit">{{qzactives.tit}}</span>
                    <span class="rel">
                        {{qzactives.time}}
                        <u>{{qzactives.o}}</u>
                        {{qzactives.re}}
                        {{qzactives.zhi}}
                        <u>{{qzactives.o}}</u>
                        <a href="#">{{qzactives.hua}}</a>
                    </span>
                    <span class="summary">
                        {{qzactives.fuck}}
                    </span>
                    <span class="gly">
                        <i class="el-icon-price-tag"></i>
                        <a href="#">{{qzactives.tx1}}</a>
                        <a href="#">{{qzactives.tx2}}</a>
                        <a href="#">{{qzactives.tx3}}</a>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import qzcss from "./qzleft.css"
export default {
    computed: {
        qzactive(){
            return this.$store.state.qzactive
        }        
    }
}
</script>
