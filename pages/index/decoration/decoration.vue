<template>
	<view>
		 <view class="hader-box">
			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
			 <text class="hader-box-text">{{name}}</text>
		 </view>
		 
		 <view class="methods-box">
			 <picker @change="bindPickerChange" :value="index" :range="array" style="width: auto;float: left;">
			 								  <text class="zonghe" style="font-size: 30upx;color: #808080;">距离排序</text>
			 								 <image src="https://api.laotiele.com:9527/image/static/xiag.png" style="width: 24upx;height: 20upx;"></image>
			 </picker>
			 <text style="color: #808080;font-size: 30upx;margin-left: 30upx;">{{types}}km</text>
		 </view>
		 
		 
		 <view class="main-content-box">
			  <view class="show-groupdata"  v-for="(item,index) in shop" :key="index" @click="go(item)">
				  <image :src="url+'/image/'+item.shopImg" mode="aspectFill"></image>
				  <view class="show-groupdata-text">
					   <view><text style="font-size: 30upx;font-weight: 540;">{{item.name}}</text></view>
					   <view><text style="font-size: 30upx;">店铺简介：</text><text style="font-size: 30upx;color: #F53D4A;">{{item.introduce}}</text></view>
					   <view><text style="font-size: 30upx;">地址：</text><text style="font-size: 30upx;color: #F53D4A;">{{item.adress}}</text></view>
				  </view>
			  </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: ['100km','50km','20km','10km','5km','1km'],
				index: 0,
				name : "",
				shop : [],
				types:100,
				ard:this.ard,
				url:this.url1
			}
		},
		onLoad(options) {
		   this.name = options.name;
		   this.getArr()
		},
		methods: {
			go:function(item){
				uni.navigateTo({
					url:"../dianPu/dianPu?item="+JSON.stringify(item)
				})
			},
			getArr:function () {
				let that=this;
				let usurl2=that.url1+"/dinghai/shop/bytype";
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
						type:'装修',
						Longitude:that.ard.longitude,
						Latitude:that.ard.latitude,
						distance:that.types
					},
				    success: (res) => {
						if(res.statusCode==200){
							uni.showToast({
								title: '加载成功'
							});
							that.shop=res.data.flag
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
			back : function(){
			   uni.navigateBack({

			   });
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        },
			bindPickerChange: function(e) {
			            let i=e.target.value;
			             e.target.value;
			            if(i==0){
			            	this.types = 100;
			            }else if(i==1){
			            	this.types = 50
			            }else if(i==2){
			            	this.types = 20
			            }else if(i==3){
			            	this.types = 10
			            }else if(i==4){
			            	this.types = 5
			            }else {
			            	this.types = 1
			            }
						this.getArr()
			        }
		}
	}
</script>

<style>
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
	
	.methods-box{
		padding:20upx 80upx;
		position: fixed;
		box-shadow:0 0 5px #CCCCCC;
		top: 168upx;
		width: 100%;
		z-index: 9;
		background-color: #fff;
	}
	
	.main-content-box{
		width: 100%;
		height: auto;
		margin-top: 300upx;
	}
	
	.show-groupdata{
		margin-top: 40upx;
		width: 670upx;
		background: white;
		height: 230upx;
		border-radius: 8px;
		box-shadow: 0px 0px 5px #ccc;
		margin-left: 42upx;
	}
	
	.show-groupdata>image{
		width: 290upx;
		height: 100%;
		border-radius: 8px 0 0 8px;
		float: left;
	}
	
	.show-groupdata-text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 56%;
		height: 100%;
		float: left;
		font-size: 16px;
	}
	
	
	.show-groupdata-text>view{
		width: 100%;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 16upx;
	}
</style>
