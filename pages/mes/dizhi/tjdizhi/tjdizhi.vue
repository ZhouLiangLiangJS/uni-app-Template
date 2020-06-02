<template>
	<view>
		 <view class="hader-box">
		 			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
		 			 <text class="hader-box-text">{{title}}</text>
		 </view>
		 
		 <view class="main-content">
			 
			 <view class="inpent-box">
			 				 <input v-model="name" type="text" class="inpent-box-inp" placeholder="输入姓名">
			 							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box">
			 				 <input v-model="tel" type="number" class="inpent-box-inp" placeholder="输入手机号码">
			 							 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="inpent-box" @click="openmap">
			 				 <view :style="address!='选择地址'?'width: 100%;height: 50upx;':'width: 100%;height: 50upx;color:#777'" v-text="address"  class="inpent-box-inp" ></view>
			 							 <view style="clear: both;"></view>
			 </view>
			
			<view class="inpent-box">
							 <input v-model="moreaddress" style="width: 100%;" type="text" class="inpent-box-inp" placeholder="详细地址(门牌号等等)">
										 <view style="clear: both;"></view>
			</view>
			
		 </view>
		 
		 <button class="exit-btn" @click="addbtn">{{text==1?"确认添加":"确认修改"}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name : "",
				tel : "",
				address : "选择地址",
				moreaddress : "",
				userId:this.user.uid,
				text:1,
				title:"新增地址",
				addressId:""
			}
		},
		onLoad(options) {
			if(options.obj!=null){
				let arr=JSON.parse(options.obj)
				this.name = arr.userName;
				this.tel = arr.userTel;
				this.address = arr.addressTwo;
				this.moreaddress = arr.addressOne;
				this.text=2,
				this.title="修改地址",
				this.addressId=arr.addressId;
				console.log(arr)
			}
		},
		
		onShow(options){
			
		},
		methods: {
			 back : function(){
			    uni.navigateBack({
			 
			    });
			 },
			 
		    openmap : function(){
		    	var that = this;
		    	uni.chooseLocation({
		    	    success: function (res) {
						that.address = res.address;
		    	    }
		    	});
		    },
			
			  // 确定点击地址
			addbtn : function(){
				if(this.name == "" || this.tel == "" || this.address == "选择地址" || this.moreaddress == ""){
					uni.showToast({
						title : "请完整的填写信息",
						icon : "none"
					})
				}else{
					console.log(this.text==1)
					if(this.text==1){
						console.log(11)
						let that=this;
						let url = that.url1+"/dinghai/Address/insertAddress";
						uni.showLoading({
							title:"正在添加",mask: true
						})
						uni.request({
							 url : url,
									 header : {
										 "Content-type" : "application/x-www-form-urlencoded"
									 },
									 method : 'post',
									 data : {
										  userName:that.name,
										  userTel:that.tel,
										  userId:that.userId,
										  addressOne:that.address,
										  addressTwo:that.moreaddress
									 },
									 success : function(res){
										 console.log(res)
									     if(res.statusCode===200){
											 console.log(res)
											 uni.navigateBack({
											 	
											 });
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
					}else if(this.text==2){
						let that=this;
						let url = that.url1+"/dinghai/Address/UpdateAddress?addressId="+that.addressId;
						uni.showLoading({
							title:"正在添加",mask: true
						})
						uni.request({
							 url : url,
									 header : {
										 "Content-type" : "application/x-www-form-urlencoded"
									 },
									 method : 'post',
									 data : {
										  userName:that.name,
										  userTel:that.tel,
										  userId:that.userId,
										  addressOne:that.address,
										  addressTwo:that.moreaddress,
										  addressId:that.addressId
									 },
									 success : function(res){
									     if(res.statusCode===200){
											 console.log(res)
											 uni.navigateBack({
											 	
											 });
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
		margin-left: 240upx;
	}
	
	
	.main-content{
		width: 100%;
		height: 400upx;
		margin-top: 50upx;
	}
	
	
	.inpent-box-inp{
		float: left;
		font-size: 30upx;
	}
	
	
	
	.inpent-box{
		margin-top: 60upx;
		width: 80%;
		border-bottom: 1px solid #C9C9C9;
		margin-left: 80upx;
	}
	
	.inpent-box-text{
		float: right;
		font-size: 30upx;
		color: #F53D4A;
	}
	
	.inpent-box-img{
		float: right;
		width: 40upx;
		height: 40upx;
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
		margin-top: 350upx;
	}
</style>
