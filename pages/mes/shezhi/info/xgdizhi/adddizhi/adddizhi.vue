<template>
	
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">添加我的地址</text>
		</view>
		
		<button class="exit-btn" @click="openmap">{{staus}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address : "",
				staus : "选择我的地址"
			}
		},
		onLoad() {
		    
		},
		onShow(){
		   if(uni.getStorageSync('addressno') == ""){
		   	this.staus = "选择我的地址";
		   }else{
		   	console.log(uni.getStorageSync('addressno'));
		   	this.staus = "修改我的地址";
		   }	
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
						var tmp = res;
						uni.showModal({
						        title: '是选择此位置',
						        content: tmp.name,
						        cancelText:'确定',
						        confirmText:'取消',
						        success(res){
						          if(res.cancel){
									  that.address = tmp.name;
									  uni.showToast({
									  	title: '添加成功',
										icon : "success"
									  });
									  
									 uni.setStorageSync('addressno',that.address);
						             console.log("点击了确定");
									 uni.navigateBack({
									 	
									 });
						          }else if(res.confirm){
						             console.log("点击了取消");
						          }
						        }
						      });
				    }
				});
			}
		}
	}
</script>

<style>
	.success{
		width: 540upx;
		height: 450upx;
		margin-left: -80upx;
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
		margin-left: 200upx;
	}
	
	.exit-btn{
		width: 80%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 300upx;
	}
</style>
