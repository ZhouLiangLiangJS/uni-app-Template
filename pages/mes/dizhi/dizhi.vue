<template>
	<view>
		<view >
			<view class="hader-box">
				<image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
				<text class="hader-box-text">收货地址</text>
				<text style="margin-left: 60upx;letter-spacing: 1px;font-weight: 300;color: #fff;" @click="goadddz">新增地址</text>
			</view>
			
			<view v-show="!judgehava">
				<view class="info-box" v-for="(item,index) in address" :key="index">
					<view class="info-box-top">
						<text>{{item.userName}}</text>
						<text style="margin-left: 120upx;">{{item.userTel}}</text>
					</view>
					<view class="info-box-bot" style="margin-top: 20upx;">
						<view style="width: 500upx;
						overflow:hidden;
						white-space:nowrap;
						text-overflow:ellipsis;float: left;">
							<text>{{item.addressOne}}</text>
							<text>{{item.addressTwo}}</text>
						</view>	
						<text style="margin-left: 40upx;color: #808080;float: left;" @click="goadddzsp(index)">更改</text>
						
						<text style="margin-right: 40upx;color: #F53D4A;float: right;" @click="del(index)">删除</text>
						<view style="clear: both;"></view>
					</view>
				</view>
			</view>
			
			
		</view>
		
		<view v-show="judgehava">
			
			<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
				<view class="success">
					<image src="https://api.laotiele.com:9527/image/static/tz-success.png" mode="widthFix"></image>
				</view>
				<text style="margin-top: 40upx;">
				     没有地址
				</text>
			</view>
			
			<button class="exit-btn" @click="goadddz">新建地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				judgehava : true,
				address : [
					
				]
				// judgehava : true,
			}
		},
		onLoad() {
		  
		},
		onShow(){
			this.req();
			
		},
		
		onHide(){
			
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			del:function(i){
				let that=this;
				uni.showModal({
				        title: '确定要删除吗',
				        content: '删除地址',
				        cancelText:'确定',
				        confirmText:'取消',
				        success(res){
							console.log(res)
							if(res.cancel){
								let url = that.url1+"/dinghai/Address/deleteAddress";
								
								uni.request({
									 url : url,
											 header : {
												 "Content-type" : "application/x-www-form-urlencoded"
											 },
											 method : 'post',
											 data : {
												 userId:that.user.uid,
												 addressId:that.address[i].addressId
											 },
											 success : function(res){
											     if(res.statusCode===200){
													 that.address.splice(i,1)
													 uni.showToast({
													 	icon:"none",
														title:"删除成功"
													 })
													 if(that.address.length >=1 ){
													 	that.judgehava = false;
													 }else{
													 	that.judgehava = true;
													 }
												 }else{
													 uni.showToast({
													 	title:"您的网络开了小差",
														icon:"none"
													 })
												 }
												
											 },
											 fail : function(err){
												 console.log(err);
												 uni.showToast({
												 	title:"连接服务器失败",
													icon:"none"
												 })
											 }
								});
							}
				        }
				   });
			},
			req:function(){
				uni.showLoading({
					title:"正在加载",
					mask:true
				})
				let that=this;
				let url = that.url1+"/dinghai/Address/selectAddress";
				uni.request({
					 url : url,
							 header : {
								 "Content-type" : "application/x-www-form-urlencoded"
							 },
							 method : 'post',
							 data : {
								 userId:that.user.uid
							 },
							 success : function(res){
							     if(res.statusCode===200){
									 that.address=res.data.flag
									 console.log(that.address)
									 uni.showToast({
									 	title:"加载成功"
									 })
								 }else{
									 uni.showToast({
									 	title:"您的网络开了小差",
										icon:"none"
									 })
								 }
								 console.log(that.address)
								 console.log(that.address.length)
								 if(that.address.length >=1 ){
								 	that.judgehava = false;
								 }else{
								 	that.judgehava = true;
								 }
							 },
							 fail : function(err){
								 console.log(err);
								 uni.showToast({
								 	title:"连接服务器失败",
									icon:"none"
								 })
							 }
				});
				
			},
			   // 去增加新地址
			goadddz : function(){
				uni.navigateTo({
					url : "tjdizhi/tjdizhi"
				})
			},
			
			   // 点击操作
			goadddzsp : function(index){
				var obj = JSON.stringify(this.address[index]);
				console.log(obj)
				uni.navigateTo({
					url : "tjdizhi/tjdizhi?obj="+obj
				});
			}
		
		}
	}
</script>

<style>
	.success{
		width: 100%;
		margin-top: 60upx;
	}
	
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
		margin-left: 140upx;
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
		margin-top: 200upx;
	}
	
	
	.info-box{
		font-size: 30upx;
		margin-left: 40upx;
		margin-top: 80upx;
		letter-spacing: 1px;
	}
</style>
