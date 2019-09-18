<template>
    <div id="content">
        <div class="movie_body">
				<!-- <ul>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>					
				</ul> -->
				<ul>
					<li v-for="item in movieList" :key="item.id">
						<!-- 图片的连接是这种样式，其中w.h为宽高，需要我们自己指定。所以这种连接不能直接使用，要把其中的w.h换成宽.高http://p0.meituan.net/w.h/moviemachine/b7362f555340906684944957dfc8d5421530646.jpg"
						下面用了一个全局过滤器setWH
						 -->
						<div class="pic_show"><img :src="item.img | setWH('128.180')"></div>
						<div class="info_list">
							<h2>{{item.nm}} <img v-if="item.version" src="@/assets/maxs.png" alt=""></h2>
							<p>观众评 <span class="grade">{{item.sc}}</span></p>
							<p>主演: {{item.star}}</p>
							<p>{{item.showInfo}}</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>					
				</ul>
			</div>
    </div>
</template>
<script>
   
    export default{
		name:"NowPlaying",
		data(){
			return{
				movieList:[]
			}
		},
        mounted(){
			this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
				var msg=res.data.msg;
				if(msg==='ok'){
					this.movieList=res.data.data.movieList;
					//console.log(res)
				}
			});
		}
    }
</script>
<style scoped>
 .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>