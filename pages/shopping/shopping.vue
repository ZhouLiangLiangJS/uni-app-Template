<template>
	<view>
		<!-- 头部购物车标题 -->
		<view class="header_div">
			<text class="header_div_title">购物车</text>
		</view>
		<!-- 购物车列表-->
		<view class="main_div">
			<view class="bianJi">
				<text class="bianJiNeiRong" @click="txt=='编辑'?txt='返回':txt='编辑'">{{txt}}</text>
			</view>
			<view class="main_div_view" v-for="(item,i) in gwcArr" :key='i'>
				<view :class="'main_div_left'">
					<text @click="dian(i)" :class="xuanZhong.indexOf(i)==-1?'':'dianJi'"></text>
					<image :src="url+'/image/'+item.shopimg" mode="aspectFill"></image>
				</view>
				<view class="main_div_right">
					<text class="main_div_right_top">{{item.commodityname}}</text>
					<text class="main_div_right_bottom">￥{{(item.shoppingprice+item.freight)*item.shoppingnum}}</text>
					<view class="main_div_right_right">
						<button @click="del(item)">-</button>
						<text>{{item.shoppingnum}}</text>
						<button class="red" @click="add(item)">+</button>
					</view>
				</view>
			</view>
		<!-- 购物车列表结束 -->
		
		
		<!-- 相关推荐 -->
		<view class="tuiJian">
			<view class="tuiJian_title">
				相关推荐
			</view>
			
			<view class="tuiJian_div" v-for="(item,i) in shop" :key="i" @click="goShopping(item)">
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
		<!-- 相关推荐结束 -->
		
		
		<!-- 底部结算 -->
		<view class="JieSuan" v-if="txt=='编辑'?true:false">
			<view class="qunxuan">
				<text :class="flag?'dianJi':''" @click="quanXuan">
					
				</text>
				<text>
					全选
				</text>
			</view>
			
			<view class="heji">
				合计：
				<text class="JieSuan_heJi">￥{{zongjia}}</text>
			</view>
			<button @click="jieSuan">去结算</button>
		</view>
		<!-- 底部结算结束 -->
		
		<!-- 删除开始 -->
		<view class="JieSuan" v-if="txt!='编辑'?true:false">
			<view class="qunxuan">
				<text :class="flag?'dianJi':''" @click="quanXuan">
					
				</text>
				<text>
					全选
				</text>
			</view>
			
			
			<button @click="shanChu()">删除</button>
		</view>
		<!-- 删除结束 -->
	</view>
</view>
</template>

<script>
	export default{
		data(){
			return{
				txt:'编辑',
				xuanZhong:[],
				useUser:this.user,
				gwcArr:[],
				url:this.url1,
				zongjia:0,
				flag:false,
				shop:[]
			}
		},
		watch:{
			gwcArr(){
				this.qx()
			},
			xuanZhong(){
				this.zj()
				this.qx()
			}
		},
		methods:{
			jieSuan:function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					if(this.xuanZhong.length>0){
						let arr=[]
						for(let i=0;i<this.xuanZhong.length;i++){
							arr.push(this.gwcArr[this.xuanZhong[i]])
						}
						uni.navigateTo({
							url:'gm/gm?shopping='+JSON.stringify(arr)+'&heJi='+this.zongjia
						})
					}else{
						uni.showToast({
							title:'请选择商品',
							icon:'none'
						})
					}
				}
			},
			goShopping:function(a){
				let that=this;
				let usurl2=that.url1+"/dinghai/shop/byid";
				uni.showLoading({
					title: '正在获取',
					mask: true
				});
				uni.request({
				    url: usurl2,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'GET',
				    data: {
						uid:a.uid
					},
				    success: (res) => {
						if(res.statusCode==200){
							uni.showToast({
								title: '加载成功'
							});
							console.log(res)
							uni.navigateTo({
								url:"../index/goShopping/goShopping?goShopping="+JSON.stringify(a)+'&shop='+JSON.stringify(res.data.data),
								complete(res){
									console.log(res)
								}
							})
						}else{
							uni.showToast({
								title: '您的网络打了个盹！',
								icon:"none"
							});
						}
				    },
					fail : function(err){
						console.log(err)
						uni.showToast({
							title: '您的网络打了个盹！',
							icon:"none"
						});
					}
				})
			},
			shanChu:function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					for(let i=0;i<this.xuanZhong.length;i++){
						this.shanChuReq(this.gwcArr[this.xuanZhong[i]].shoppingid,this.xuanZhong[i],i)
					}
				}
			},
			shanChuReq:function(id,i,o){
				let that=this;
				uni.request({
						url: that.url1+"/dinghai/Shopping/deleteShopping",
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							shoppingid:id
						},
				    success: (res) => {
						console.log(res)
						if(res.statusCode==200){
							that.gwcArr.splice(i,1),
							that.xuanZhong.splice(o,1)
						}else{
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"您的网络打了个盹",
							icon:"none"
						})
					}
				});
			},
			qx:function(){
				if(this.gwcArr.length!=0){
					if(this.gwcArr.length==this.xuanZhong.length){
						this.flag=true
					}else{
						this.flag=false
					}
				}else{
					this.flag=false
				}
			},
			zj:function(){
				let p=0;
				for(let i=0;i<this.xuanZhong.length;i++){
					p+=((this.gwcArr[this.xuanZhong[i]].shoppingprice+this.gwcArr[this.xuanZhong[i]].freight)*this.gwcArr[this.xuanZhong[i]].shoppingnum)
				}
				this.zongjia=p;
			},
			quanXuan:function(){
				if(this.xuanZhong.length!=this.gwcArr.length){
					let arr=[]
					for(let i=0;i<this.gwcArr.length;i++){
						arr.push(i)
					}
					this.xuanZhong=arr
				}else{
					this.xuanZhong=[]
				}
			},
			dian:function(i){
				this.xuanZhong.indexOf(i)==-1?this.xuanZhong.push(i):this.xuanZhong.splice(this.xuanZhong.indexOf(i),1)
			},
			del:function(item){
				item.shoppingnum<=1?'':item.shoppingnum--;
				this.zj()
			},
			add:function(item){
				item.shoppingnum++;
				this.zj()
			},
			get:function(){
				console.log(this.useUser.uid)
				let that=this;
				let usurl=that.url1+"/dinghai/Shopping/selectAllShopping";
				uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							uid:that.useUser.uid
						},
				    success: (res) => {
						console.log(res)
						if(res.statusCode==200){
							that.gwcArr=res.data.flag
						}else{
							uni.showToast({
								title:"您的网络打了个盹",
								icon:"none"
							})
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"您的网络打了个盹",
							icon:"none"
						})
					}
				});
			},
			getArr:function () {
				let that=this;
				let usurl=that.url1+"/dinghai/commodity/getbytypeall";
				uni.showLoading({
					title:'正在加载',
					mask: true
				})
				uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'GET',
							data: {
								type:'家纺',
								start:1,
								size:20
							},
					    success: (res) => {
							console.log(res)
							if(res.data.code==200){
								that.shop=res.data.data;
								for(let i=0;i<that.shop.length;i++){
									that.shop[i].img1=JSON.parse(that.shop[i].img1);
									that.shop[i].img2=JSON.parse(that.shop[i].img2);
									// that.shop[i].shopType=JSON.parse(that.shop[i].shopType);
									// that.shop[i].label=JSON.parse(that.shop[i].label)
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
		},
		onLoad() {
			if(this.user=='未登录'){
				uni.navigateTo({
					url:'../login/index/index'
				})
			}else{
				this.get();
				this.getArr()
				this.xuanZhong=[]
			}
		},
		onShow(){
			this.get();
			this.getArr()
			this.xuanZhong=[]
		}
	}
</script>

<style>
	/* 头部购物车标题 */
	.header_div{
		width: 100%;
		height: 168upx;
		line-height: 190upx;
		background: #F53D4A;
		text-align: center;
		color: #fff;
		z-index: 10;
		position: fixed;
		top: 0;
	}
	
	/* 头部购物车标题结束 */
	
	/* 编辑 */
	.bianJi{
		padding: 20upx 4% 0 0;
		margin-top: 168upx;
		height: 50upx;
	}
	.bianJiNeiRong{
		color: #000000;
		font-size: 30upx;
		float: right;
	}
	/* 编辑结束 */
	
	/* 购物车列表 */
	.main_div_view{
		width: 93%;
		padding:0 0 0 5%;
		height: 200upx;
		margin-bottom: 50upx;
	}
	.main_div_left{
		float: left;
		height: 100%;
		position: relative;
		width: 40%;
	}
	.main_div_left text{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: inline-block;
		width: 35upx;
		height: 35upx;
		border: 1px solid #7F7F7F;
		border-radius: 100%;
	}
	.dianJi{
		background: url(https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/juXing.png);
		background-size: 100% 100%;
		border: 0 !important;
	}
	.main_div_left image{
		border-radius: 10upx;
		width: 200upx;
		height: 100%;
		margin-left: 60upx;
	}
	.main_div_right{
		float: right;
		width: 60%;
		height: 100%;
		position: relative;
	}
	.main_div_right .main_div_right_top{
		position: absolute;
		color: #4F4F4F;
		font-size: 30upx;
		top:20upx;
		left: 0;
	}
	.main_div_right .main_div_right_bottom{
		position: absolute;
		color: red;
		font-size: 30upx;
		bottom:20upx;
		left: 0;
	}
	.main_div_right_right{
		position: absolute;
		bottom:20upx;
		right: 4%;
	}
	.main_div_right_right button{
		float: left;
		width: 40upx;
		height: 40upx;
		background-color: #F1F1F1;
		line-height: 40upx;
		color: #757575;
		border: 0;
		border-radius: 0;
		padding: 0;
		margin: 0;
	}
	.main_div_right_right button:after{
		border: 0;
	}
	.red{
		color: #F53D4A !important;
	}
	.main_div_right_right text{
		display:block;
		float: left;
		width: 40upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		font-size: 30upx;
	}
	/* 购物车列表结束 */
	
	/* 相关推荐 */
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
	/* 相关推荐结束 */
	
	/* 底部结算 */
	.JieSuan{
		background-color: #fff;
		box-shadow: -1px 1px 5px #CCCCCC;
		position: fixed;
		bottom: 0;
		height: 100upx;
		width: 100%;
		z-index: 10;
	}
	.JieSuan>.qunxuan{
		position: absolute;
		left: 5%;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);

	}
	.qunxuan>text:nth-child(1){
		display: inline-block;
		width: 35upx;
		height: 35upx;
		border: 1px solid #7F7F7FFF;
		-webkit-border-radius: 100%;
		border-radius: 100%;
	}
	.qunxuan>text:nth-child(2){
		position: relative;
		color: #000000;
		font-size: 30upx;
		margin-left: 30upx;
		top: -4upx;
	}
	.JieSuan>.heji{
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%) translateX(-50%);
		-ms-transform: translateY(-50%) translateX(-50%);
		transform: translateY(-50%) translateX(-50%);
		left: 50%;
		font-size: 27upx;
	}
	.JieSuan_heJi{
		color:#F53D4A;
	}
	.JieSuan>button{
		position: absolute;
		right: 5%;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		background-color: #F53D4A;
		color: #fff;
		font-size: 30upx;
		padding: 0;
		width: 140upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 20upx;
		text-align: center;
	}
	/* 底部结算结束 */
</style>
