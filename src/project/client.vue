<template>
    <div class="clientbody">
        <div class="addji">
            <div class="cli_top">整合营销，抢占商机</div>
            <ul class="cli_ul">
                <li v-for="clients in client" :key="clients.index" class="cli_li">
                    <!-- <div class="div1"> -->
                        <div :class="clients.class">
                            <div>
                                <img :src="clients.imgurl" alt="">
                            </div>
                        </div>
                        <div class="cli_font">
                            <b class="cli_b">{{clients.four}}</b>
                            <p class="cli_fuck">{{clients.seo}}<br>{{clients.cmo}}</p>
                        </div>
                    <!-- </div> -->
                </li>
            </ul>
        </div>
        <!-- <div v-for="product in products" :key="product.index">
            <span>{{product.name}}</span>                   
            <span>{{product.price}}</span>
        </div> -->
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
    data(){
        return{
            
        }
    },
    computed: {
        // products(){
        //     return this.$store.state.products
        // },
        client(){
            return this.$store.state.client
        }
    },
    methods:{
        
    }
}
</script>

