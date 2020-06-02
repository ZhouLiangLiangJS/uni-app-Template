<template>
	<view style="background: #F7F7F7;min-height: 100vh;">
		<view class="hader-box">
			<image @click="f1()" src="https://api.laotiele.com:9527/image/static/zuo.png" mode="widthFix" class="zuo"></image>
			<text class="hader-box-text">发帖内容</text>
		</view>
		<view class="main">
			<view class="main_user">
				<image :src="list.userImg" mode="aspectFill"></image>
				<text>{{list.username}}</text>
			</view >
			<view class="main_neiRong">
				{{list.postedContent}}
			</view>
			<view class="main_img">
				<image v-for="(item,i) in list.postedImg" :key='i' :src="url+'/image/'+item" mode="aspectFill"></image>
			</view>
			
		</view>
		<!-- <view class="xinXi">
			<text class="fl">转发499</text>
			<text class="fl" style="color: #000000;">评论199</text>
			<text class="fr">赞999</text>
		</view> -->
		<!-- <view class="pinglun">
			<view class="pinglun_neiRong">
				<image  src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
				<view class="pinglun_text">
					<view>
						<text class="pinglun_text_userName">
							你好世界
						</text>
					</view>
					<text class="pinglun_text_main">
						你们家多大啊，多久装修好的。
					</text>
				</view>
			</view>
			<view class="pinglun_neiRong">
				<image  src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
				<view class="pinglun_text">
					<view>
						<text class="pinglun_text_userName">
							你好世界
						</text>
					</view>
					<text class="pinglun_text_huiFu" style="color:#808080">回复你好世界：</text>
					<text class="pinglun_text_main">
						你们家多大啊，多久装修好的。
					</text>
					
				</view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:{},
				url:this.url1,
				pinglunArr:[]
			}
		},
		methods:{
			f1(){
				uni.navigateBack({
					
				})
			},
			ping:function(){
				let that=this;
				let usurl1=that.url1+"/dinghai/comment/comment/selectOrder";
				uni.request({
				    url: usurl1,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
				    data: {
						postedId:that.list.postedId
					},
				    success: (res) => {
						that.pinglunArr=res.flag
				    },
					fail : function(err){
						console.log(err);
					}
				})
			}
		},
		onLoad(it){
			this.list=JSON.parse(it.id)
			console.log(this.list)
			this.ping()
		},
		onShow(){
			
		},
		onPullDownRefresh(){
			uni.stopPullDownRefresh()
		},
	}
</script>

<style>
	.hader-box{
		width: 100%;
		height: 168upx;
		line-height: 200upx;
		background: #F53D4A;
		text-align: center;
		color: #fff;
		position: fixed;
		top: 0;
		z-index: 10;
	}
	.zuo{
		position: absolute;
		left: 20upx;
		top: 75upx;
		width: 40upx;
	}
	.main{
		background-color: #fff;
		width: 80%;
		margin-top:168upx;
		font-size: 30upx;
		padding:  50upx 10%;
	}
	.main_user{
		width: 100%;
		height: 100upx;
		position: relative;
	}
	.main_user>image{
		width: 100upx;
		height: 100upx;
		border-radius:100%;
		position: absolute;
	}
	.main_user>text{
		line-height: 100upx;
		margin-left: 130upx;
	}
	.main_neiRong{
		width: 100%;
		padding: 30upx 0;
	}
	.main_img{
		width: 100%;
	}
	.main_img>image{
		width: 190upx;
		height: 190upx;
		border-radius: 10upx;
	}
	.main_img>image:nth-child(2),.main_img>image:nth-child(5),.main_img>image:nth-child(8){
		margin: 0 15upx;
	}
	.xinXi{
		width: 100%;
		height: 70upx;
		background-color: #fff;
		border-bottom: 1px solid #F7F7F7;
		font-size: 30upx;
		margin-top: 20upx;
		line-height: 70upx;
		color: #808080;
	}
	.xinXi>.fl{
		float: left;
		margin-left:5%;
	}
	.xinXi>.fr{
		float: right;
		margin-right:5%;
	}
	.pinglun{
		width: 90%;
		border-bottom: 1px solid #F7F7F7;
		padding:30upx 5% 0 5%;
		background-color: #fff;
		font-size: 30upx;
	}
	.pinglun_neiRong{
		position: relative;
		padding-left: 15%;
		width: 85%;
		margin-bottom: 30upx;
	}
	.pinglun_neiRong>image{
		width: 80upx;
		height: 80upx;
		position: absolute;
		left: 0;
		border-radius: 100%;
	}
</style>
