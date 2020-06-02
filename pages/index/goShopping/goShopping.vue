<template>
	<view>
		 <view class="hader-box">
			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			 <text class="hader-box-text">商品详情</text>
		 </view>
		 <swiper autoplay style="" id="shell" :indicator-dots="true" :duration="1000" :interval="5000">
		          <swiper-item v-for="(item,index) in goShopping.img1" :key=index >
		             <image class="lbmg" :src="url+'/image/'+item" mode="aspectFill"></image>
		         </swiper-item>
		 </swiper>
		 <view class="main-div">
			 <view>
				 <text>{{goShopping.name}}</text>
				 <text>￥{{goShopping.price}}</text>
				 <view @click="goDianPu()">
					 <image src="https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/dianpu@2x.png" mode="widthFix"></image>
					 <text>店铺</text>
				 </view>
			</view>
			 <view>
				 <text>剩余：{{goShopping.nums}}</text>
				 <text>运费：{{goShopping.freight}}</text>
			 </view>
		 </view>
		 <view class="xinYong">
			 <text v-for="(item,i) in goShopping.label" :key="i" v-if="item.judge">{{item.name}}</text>
		 </view>
		 <view class="fenLei">
			 <text @click="fenLeiActive=1" :style="fenLeiActive===1?'color:#F53D4A':'color:#000'">商品详情</text>
			 <text @click="fenLeiActive=2" :style="fenLeiActive===2?'color:#F53D4A':'color:#000'">商品推荐</text>
		 </view>
		 <view class="fenLei_div">
			 <view v-show="fenLeiActive===1?true:false" style="margin-bottom: 100upx;">
				 <image :src="url+'/image/'+item" mode="widthFix" v-for="(item,i) in goShopping.img2" :key="i"></image>
			 </view>
			 <view v-show="fenLeiActive===2?true:false">
				 <view class="tuiJian">
				 	<view class="tuiJian_title">
				 		相关推荐
				 	</view>
				 	
				 	<view class="tuiJian_div" v-for="(item,i) in cnxh" :key='i'  @click="shopping(item,itemArr)">
				 		<view class="tuiJian_div_img">
				 			<image  :src="url+'/image/'+item.img1[0]" mode="aspectFill"></image>
				 		</view>
				 		<view class="tuiJian_div_top">
				 			<text>{{item.name}}</text>
				 		</view>
				 		<view class="tuiJian_div_bottom">
				 			<text class="tuiJian_div_bottom_jiaGe">￥{{item.price}}</text>
				 			<text class="tuiJian_div_bottom_fuKuan">{{item.type!='装修'?('运费：'+item.freight+'元'):(item.area+'㎡')}}</text>
				 			<image :src="item.type!='装修'?'https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/biaoqiangouwuche@2x.png':'https://api.laotiele.com:9527/image/static/gongrenPingJia.png'" mode="widthFix"></image>
				 		</view>
				 	</view>
				 </view>
			 </view>
		 </view>
		<view class="nav-bottom" v-if="goShopping.type!='装修'?true:false">
			<view class="gouWuChe" @click="gouWuChe">
				加入购物车
			</view>
			<view class="gouMai" @click="liJiGouMai">
				立即购买
			</view>
		</view>
		<view class="Xuanlist" @touchmove.stop="f1" v-if='xunXiang'>
			<view>
				<image :src="url+'/image/'+goShopping.img1[0]" mode="aspectFill"></image>
				<text class="jg">价格：<text style="color:red">{{goShopping.price}}￥</text></text>
				<text class="fl">分类：{{txt}}</text>
				<text class="fi">库存：99</text>
			</view>
			<view>
				<view v-for="(item,i) in goShopping.shopType" :key='i' >
					<text>{{item.fenLeiTitle}}</text>
					<button v-for="(chd,o) in item.btnTitleArr" :key='o' @click="active(chd,i)" :style="chd.title==showColor[i].title?'background:red;color:#fff':'background:#F8F8F8;color:#000'">{{chd.title}}</button>
				</view>
			</view>
		</view>
		<view class="muBu" v-if='xunXiang' @click="xunXiang=!xunXiang">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:this.url1,
				txt:'',
				xunXiang:false,
				lbt : [
					
				],
				fenLeiActive:1,
				goShopping:null,
				shop:null,
				cnxh:[],
				showColor:[],
				useUser:this.user
			}
		},
		onLoad(options) {
			
			console.log(options)
			this.goShopping=JSON.parse(options.goShopping);
			this.goShopping.label=JSON.parse(this.goShopping.label);
			this.goShopping.shopType=JSON.parse(this.goShopping.shopType);
			this.shop=JSON.parse(options.shop);
			this.getshop();
		},
		methods: {
			
			gouWuChe:function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../../login/index/index'
					})
				}else{
					if(this.useUser.uid!=this.shop.uid){
						if(!this.showXunXiang()){
							let that=this;
							let usurl=that.url1+"/dinghai/Shopping/insertAddress";
							uni.showLoading({
								title:'正在添加',mask: true
							})
							uni.request({
										url: usurl,
										header:{
											"Content-Type" : "application/x-www-form-urlencoded"
										},
										method:'POST',
										data: {
											commodityid:that.goShopping.id,
											commodityname: that.goShopping.name,
											shoppingnum:1,
											shoppingprice:that.goShopping.price,
											uid:that.useUser.uid,
											shopid:that.shop.id,
											shopimg:that.goShopping.img1[0],
											shopname:that.shop.name,
											shoptype:that.txt,
											freight:that.goShopping.freight,
											sid:that.goShopping.uid
										},
								    success: (res) => {
										console.log(res)
										if(res.statusCode==200){
											uni.showToast({
												title:"添加购物车成功"
											})
											uni.navigateBack({
												
											})
										}else{
											uni.showToast({
												title:"您的网络打了个盹",
												icon:"none"
											})
										}
								    },
									fail : function(err){
										console.log(err)
										uni.showToast({
											title:"您的网络打了个盹",
											icon:"none"
										})
									}
								});
						}
					}else{
						uni.showToast({
							title:'不可以把自己的商品添加购物车哦',
							icon:'none'
						})
					}
				}
			},
			liJiGouMai:function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../../login/index/index'
					})
				}else{
					let that=this;
					if(this.useUser.uid!=this.shop.uid){
						if(!this.showXunXiang()){
							uni.redirectTo({
								url:'liJiGouMai/liJiGoMai?goShopping='+JSON.stringify(that.goShopping)+'&shop='+JSON.stringify(that.shop)+'&txt='+JSON.stringify(that.showColor)
							})
						}
					}else{
						uni.showToast({
							title:'不可以购买自己的商品哦',
							icon:'none'
						})
					}
				}
			},
			showXunXiang:function(){
				if(this.showColor.length==this.goShopping.shopType.length){
					for(let i=0;i<this.showColor.length;i++){
						if(!this.showColor[i]){
					this.xunXiang=true;
							return true
						}
					}
				}else{
					this.xunXiang=true;
					return true
				}
				this.xunXiang=false;
				return false
			},
			active:function(chd,i){
				let arr=this.showColor.slice();
				arr[i]=chd;
				this.showColor=arr;
				let jg=0;
				let t='';
				for(let o=0;o<arr.length;o++){
					jg+=new Number(arr[o].jg)
					t+=arr[o].title
					console.log(jg)
				}
				this.goShopping.price=jg
				this.txt=t
			},
			f1:function(){},
			
			shopping:function(a,b){
				let that=this;
				let usurl=that.url1+"/dinghai/shop/byid";
				uni.showLoading({
					title:'正在加载',mask: true
				})
				uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'GET',
							data: {
								uid:a.uid
							},
					    success: (res) => {
							console.log(res)
							if(res.data.code==200){
								this.goShopping=a;
								this.shop=res.data.data;
								uni.showToast({
									title:"加载成功",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:"您的网络打了个盹",
									icon:"none"
								})
							}
					    },
						fail : function(err){
							console.log(err)
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
						}
					});
			},
			back : function(){
			   uni.navigateBack({

			   });
			},
			getshop:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/commodity/getbytypeall";
				uni.showLoading({
					title:'正在加载',mask: true
				})
				uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'GET',
							data: {
								type:that.goShopping.type,
								start:1,
								size:20
							},
					    success: (res) => {
							console.log(res)
							if(res.data.code==200){
								that.cnxh=res.data.data;
								for(let i=0;i<that.cnxh.length;i++){
									that.cnxh[i].img1=JSON.parse(that.cnxh[i].img1);
									that.cnxh[i].img2=JSON.parse(that.cnxh[i].img2);
									that.cnxh[i].shopType=JSON.parse(that.cnxh[i].shopType);
									that.cnxh[i].label=JSON.parse(that.cnxh[i].label)
								}
								uni.showToast({
									title:"加载成功",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:"您的网络打了个盹",
									icon:"none"
								})
							}
					    },
						fail : function(err){
							console.log(err)
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
						}
					});
			},
			goDianPu:function(){
				uni.navigateTo({
					url:"../dianPu/dianPu?item="+JSON.stringify(this.shop)
				})
			}
			
		}
	}
</script>

<style>
	.muBu{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: .5;
		position: fixed;
		top: 0;
		z-index: 11;
	}
	.Xuanlist{
		width: 100%;
		height: 900upx;
		position: fixed;
		z-index: 12;
		bottom: 100upx;
		border-radius: 30upx 30upx 0 0;
		font-size: 30upx;
		overflow: hidden;
		background: #fff;
	}
	.Xuanlist>view:nth-child(1){
		width: 100%;
		height: 20%;
		position: relative;
	}
	.Xuanlist>view:nth-child(2){
		width: 100%;
		height: 80%;
		position: relative;
		overflow-y: auto;
	}
	.Xuanlist>view:nth-child(1)>image{
		height: 95%;
		width: 27%;
		margin-left: 2%;
		margin-top: 2%;
	}
	.Xuanlist>view:nth-child(1)>.jg{
		position: absolute;
		left: 300upx;
		top: 40upx;
	}
	.Xuanlist>view:nth-child(1)>.fl{
		position: absolute;
		left: 300upx;
		top: 80upx;
	}
	.Xuanlist>view:nth-child(1)>.fi{
		position: absolute;
		left: 300upx;
		top: 120upx;
	}
	.Xuanlist>view:nth-child(2)>view{
		border-top:1px solid #ccc;
		margin-top: 30upx;
		position: relative;
	}
	.Xuanlist>view:nth-child(2)>view>text{
		position: absolute;
		top: -20upx;
		background: #fff;
		left: 50upx;
	}
	.Xuanlist>view:nth-child(2)>view>button{
		width: auto;
		margin: 30upx;
		padding: 0;
		height: auto;
		display: inline-block;
		line-height: 30upx;
		font-size:30upx;
		padding: 30upx;
		
	}
	.nav-bottom{
		height: 100upx;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		z-index: 13;
		box-shadow: 0 0 5px #aaa;
	}
	.nav-bottom>view{
		display: inline-block;
		width: 40%;
		height: 70%;
		line-height: 70upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		background: #F53D4A;
		border-radius:20upx;
		position: absolute;
	}
	.nav-bottom>.gouWuChe{
		left: 30upx;
		transform: translateY(-50%);
		top: 50%;
	}
	.nav-bottom>.gouMai{
		right: 30upx;
		transform: translateY(-50%);
		top: 50%;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		z-index: 10;
		top: 0;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 240upx;
	}
	#shell{
		width: 100%;height: 380upx;
		margin-top:168upx;
	}.lbmg{
		width: 100% !important;height: 100%;
	}
	.main-div{
		width: 100%;
		height: 250upx;
		position: relative;
		border-bottom:1px solid #C9C9C9 ;
	}
	.main-div>view:nth-child(1){
		width: 100%;
		height: 150upx;
		position: absolute;
		top: 50%;
		transform: translateY(-70%);
	}
	.main-div>view:nth-child(1)>view{
		position: absolute;
		right: 20upx;
		width: 100upx;
		text-align: center;
		font-size: 30upx;
		top: 0;
		color: #F53D4A;
	}
	.main-div>view:nth-child(1)>view>image{
		width: 100%;
	}
	.main-div>view:nth-child(1)>text:nth-child(1){
		position: absolute;
		top: 20upx;
		width: 80%;
		left: 20upx;
		font-size: 30upx
	}
	.main-div>view:nth-child(1)>text:nth-child(2){
		position: absolute;
		bottom: 20upx;
		left: 20upx;
		font-size: 30upx;
		color: #F53D4A;
	}
	.main-div>view:nth-child(2){
		font-size: 30upx;
		position: absolute;
		bottom: 20upx;
		left: 20upx;
	}
	.main-div>view:nth-child(2)>text{
		margin-right: 40upx;
		color: #808080;
	}
	.xinYong{
		width: 100%;
		border-bottom: 1px solid  #C9C9C9;
	}
	.xinYong>text{
		display: inline-block;
		width: 25%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		font-size: 30upx;
		color: #F53D4A;
	}
	.fenLei{
		width: 100%;
		padding: 10upx 0 30upx 0;
	}
	.fenLei>text{
		display: inline-block;
		width: 50%;
		text-align: center;
		font-size: 30upx;
	}
	.fenLei_div>view:nth-child(1){
		width: 100%;
	}
	.fenLei_div>view:nth-child(1)>image{
		width: 100%;
	}
	
	.tuiJian{
		width: 92%;
		padding: 0 4%;
		margin-bottom: 100upx;
		overflow: hidden;
	}
	.tuiJian_title{
		color: #000000;
		width: 100%;
		font-size: 30upx;
		height: 60upx;
	}
	.tuiJian_div{
		float: left;
		width: 47%;
		height: 480upx;
		border-radius: 10upx;
		box-shadow: -1px 1px 5px #aaa;
		overflow: hidden;
		margin-bottom: 40upx;
	}
	.tuiJian_div:nth-child(even){
		margin-right: 6%;
	}
	.tuiJian_div .tuiJian_div_img{
		width: 100%;
		height: 66%;
	}
	.tuiJian_div .tuiJian_div_img>image{
		width: 100%;
		height: 100%;
	}
	.tuiJian_div_top{
		height: 14%;
		position: relative;
		padding: 0 10upx;
	}
	.tuiJian_div_top text{
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		position: absolute;
		font-size: 27upx;
		color: #000;
	}
	.tuiJian_div_bottom{
		height: 20%;
		font-size: 30upx;
		position: relative;
		padding: 0 10upx;
	}
	.tuiJian_div_bottom text{
		position: absolute;
	}
	.tuiJian_div_bottom .tuiJian_div_bottom_jiaGe{
		color: #F53D4A;
		bottom: 5upx;
	}
	.tuiJian_div_bottom .tuiJian_div_bottom_fuKuan{
		top: 10upx;
		font-size: 23upx;
		color: #808080;
	}
	.tuiJian_div_bottom image{
		position: absolute;
		bottom: 0;
		right: 10upx;
		width:60upx;
		height: 60upx;
	}
</style>

