<template>
	<view>
		 <image @click="back" src="https://api.laotiele.com:9527/image/1579062295410.jpg" style="width: 100%;height: 400upx"></image>
		 
		 
		 <view style="margin-top: 60upx;padding-bottom: 100upx;">
			 <view class="inp-style">
				 <text class="inp-style-left">姓名 </text>
				 <input class="inp-style-right" type="text" v-model="name" placeholder="请输入姓名">
				 
				 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inp-style">
			 				 <text class="inp-style-left">手机号</text>
			 				 <input class="inp-style-right" type="text" v-model="tel" placeholder="请输入手机号">
			 				 
			 				 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inp-style">
			 				 <text class="inp-style-left">微信号</text>
			 				 <input class="inp-style-right" type="text" v-model="wxh" placeholder="请输入微信号">
			 				 
			 				 <view style="clear: both;"></view>
			 </view>
			 
			 
			 <view class="inp-style" style="border: 1px solid #C9C9C9;">
				 <textarea style="width: 100%;height: 240upx;padding: 8upx;" v-model="zj" placeholder="请输入您想咨询的内容" />
			 </view>
			 
		    <button class="exit-btn" @click="tiJiao">提交</button>
		 </view>
		 
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				zj:'',
				wxh:'',
				tel:''
			}
		},
		onLoad() {
		   
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			tiJiao:function(){
				if(
					this.name!='',
					this.zj!='',
					this.wxh!='',
					this.tel!=''
						){
					let that=this;
					let usurl=that.url1+"/dinghai/City/insertCity";
					uni.showLoading({
						title:'发送中..',mask: true
					})
					uni.request({
								url: usurl,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'POST',
								data: {
									cityname:that.name,
									tel:that.tel,
									wechat:that.wxh,
									content:that.zj
								},
						    success: (res) => {
								console.log(res)
								if(res.statusCode==200){
									uni.showToast({
										title:"已收到"
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
				}else{
					uni.showToast({
						title:'请完整填写',
						icon:'none'
					})
				}
			}
		 }
}
</script>

<style>
	.inp-style{
		letter-spacing: 1px;
		font-size: 30upx;
		width: 460upx;
		border-bottom: 1px solid #C9C9C9;
		margin-top: 50upx;
		margin-left: 140upx;
	}
	
	.inp-style-left{
		float: left;
		margin-top: 6upx;
	}
	
	.inp-style-right{
		float: left;
		margin-left: 40upx;
	}
	
	.exit-btn{
		width: 70%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 80upx;
	}
</style>
