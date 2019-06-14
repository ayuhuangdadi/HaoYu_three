<template>
    <div>
        <el-table :data="qzactive.slice((currentPage-1)*pagesize,currentPage*pagesize)"
         style="width: 100%"
         stripe
         :default-sort = "{prop: 'date', order: 'descending'}">
        <ul class="bodyul">
            <el-table-column porp="name">
            <li class="bodyli" v-for="qzactives in qzactive" :key="qzactives.index">
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
	        </el-table-column>
        </ul>
        </el-table>
            <el-pagination
            background
            layout="prev, pager, next"
            @current-change="current_change"
            :total="total">
            </el-pagination>
    </div>
</template>
<script>
import qzcss from "./qzleft.css"
export default {
    data(){
        return {
            total:150,//默认数据总数
            pagesize:2,//每页的数据条数
            currentPage:1,
        }
    },
    computed: {
        qzactive(){
            return this.$store.state.qzactive
        }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'th';
        }
        return '';
      },
      switchChange(){
          this.istag = !this.istag ;
          
      },
      created:function(){
         this.total=30;
      },
     current_change:function(currentPage){
        this.currentPage = currentPage;
      }
    }
}
</script>
