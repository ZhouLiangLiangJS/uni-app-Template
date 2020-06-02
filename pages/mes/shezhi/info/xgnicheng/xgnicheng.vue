<template>
	
	<view>
		<view class="hader-box">
				 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
				 <text class="hader-box-text">修改昵称</text>
		</view>
		
		<view class="input-conent">
			<text>{{useUser.name}}</text>
			<input type="text" maxlength="10" v-model="name" placeholder="请输入新的昵称" class="input-style">
		</view>
		<button class="exit-btn" @click="wc">完成</button>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				useUser:this.user,
				name:''
			}
		},
		onLoad(options) {
			
		},
		methods: {
			wc:function(){
				if(this.name.length>0){
					var that = this;
					let usurl2=that.url1+"/dinghai/user/update";
					uni.showLoading({
						title: '正在修改',
						mask: true
					});
					uni.request({
					    url: usurl2,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
							uid:that.useUser.uid,
							name:that.name,
							sex:that.useUser.sex
						},
					    success: (res) => {
							if(res.statusCode==200){
								uni.showToast({
									title:'修改成功'
								})
								that.useUser.name=that.name;
								uni.navigateBack({
									
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
				}
			},
			back : function(){
			   uni.navigateBack({
			
			   });
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
	
	.exit-btn{
		width: 90%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 300upx;
	}
	
	.input-conent{
		margin-top: 40upx;
		letter-spacing: 1px;
		font-size: 30upx;
		margin-left: 40upx;
	}
	
	.input-style{
		margin-top: 40upx;
		width: 60%;
		border-bottom: 1px solid #c9c9c9;
		color: #808080;
	}
</style>
