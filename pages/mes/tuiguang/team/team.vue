<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">我的团队</text>
		</view>
		
		<view class="content-two">
		    <view class="content-two-group" v-for="(item,i) in userArr" :key='i'>
						 <image class="content-two-img" :src="item.imgage==null?'https://api.laotiele.com:9527/image/static/mesimg/user.png':url+'/image/'+item.imgage" mode="aspectFill"></image>
						 <view class="content-two-text" >
							 <view>{{item.name}}</view>
							 <view style="margin-top: 20upx;font-size: 30upx;color: #808080;">手机号：{{item.introduce}}</view>
						 </view>
						 <!-- <view class="content-two-btn">2019-10-20</view> -->
					 </view>
					 
					 <view v-if="judgehava" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
						 <view class="success">
						 	<image src="../../static/tz-success.png"></image>
						 </view>
						 <text style="margin-top: 60upx;">
						 	 您还没有邀请人
						 </text>
					 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useUser:this.user,
				userArr:[],
				url:this.url1
			}
		},
		onLoad(options) {
		    this.myTeam()
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
				
			myTeam:function(){
				let that=this;
				let usurl1=that.url1+"/dinghai/user/selectMy";
				uni.request({
				    url: usurl1,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
				    data: {
						introduce:that.useUser.tel
					},
				    success: (res) => {
						if(res.statusCode==200){
							this.userArr=res.data.flag
						}
				    },
					fail : function(err){
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style>
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 70upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 260upx;
	}
	
	
	.content-two-group{
		margin-top: 40upx;
		margin-left: 20upx;
		width: 94%;
		height: 200upx;
		box-shadow: 0px 0px 5px #ccc;
		border-radius: 6px;
	}
	
	.content-two-img{
		margin-top: 40upx;
		margin-left: 20upx;
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		float: left;
	}
	
	.content-two-text{
		float: left;
		font-size: 30upx;
		margin-top: 40upx;
		margin-left: 20upx;
	}
	
	.content-two-btn{
		font-size: 30upx;
		float: right;
		color: #808080;
		margin-right: 20upx;
		margin-top:60upx;
	}
	
	
	.success{
		width: 540upx;
		height: 450upx;
		margin-left: -80upx;
		margin-top: 60upx;
	}
</style>
