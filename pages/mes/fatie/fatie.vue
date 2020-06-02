<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">我的发帖</text>
		</view>
		
		<view class="main-box" >
			<view class="main-box-group" @click="tiao(item,i)" :key='i' v-for="(item,i) in arr">
				<view class="main-box-group-title">
					<image :src="item.userImg"></image>
					<text>{{item.username}}</text>
					<view style="clear: both;"></view>
				</view>
				
				<view class="main-box-group-text">
					<text>{{item.postedContent}}</text>
				</view>
				
				<view class="main-box-group-content">
					<image v-for="(chd,o) in item.postedImg" :key="o" :src="url+'/image/'+chd"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[],
				useUser:this.user,
				url:this.url1
			}
		},
		onLoad(options) {
		    this.name = options.name;
			this.getMy()
		},
		methods: {
			getMy:function(){
				uni.showLoading({
					title:'正在加载',mask: true
				})
				let that=this;
				let usurl=that.url1+"/dinghai/Posted/selectMyPosted";
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
							for(let i=0;i<res.data.flag.length;i++){
								res.data.flag[i].postedImg=JSON.parse(res.data.flag[i].postedImg)
							}
							that.arr=res.data.flag;
							
							uni.showToast({
								title:"加载成功"
							})
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
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			tiao:function(item){
				uni.navigateTo({
					url:'../../post/pingJia/pingJia?id='+JSON.stringify(item)
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
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 240upx;
	}
	
	
	.main-box{
		width: 92%;
		margin-left: 30upx;
		border-radius: 6px;
	}
	.main-box-group{
		padding: 30upx;
		margin-top: 40upx;
		box-shadow: 0px 0px 5px #ccc;
	}
	
	.main-box-group-title{
		width: 100%;
		height: 130upx;
	}
	
	.main-box-group-title>image{
		margin-top: 20upx;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		float: left;
	}
	
	.main-box-group-title>text{
		margin-top: 50upx;
		margin-left: 28upx;
		float: left;
		letter-spacing: 1px;
		font-size: 30upx;
	}
	
	
	.main-box-group-content{
		width: 100%;
		overflow: hidden;
	}
	
	.main-box-group-text{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		margin: 20rpx 0;
		letter-spacing: 1px;
		font-size: 30rpx;
		width: 100%;

	}
	
	.main-box-group-content>image{
		margin-top: 10upx;
		margin-left: 10upx;
		width: 200upx;
		height: 164upx;
		border-radius: 8px;
		float: left;
	}
</style>
