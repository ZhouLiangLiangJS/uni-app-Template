<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">已结算</text>
		</view>
		
		
		<view class="main-box" @click="showgn" v-for="(item,i) in listArr" :key="i" v-if="item.settlement!=0?true:false">
				<view class="main-box-title">
					<text class="gray">已完成： </text>
					<!-- <text>2天</text> -->
					<text style="float: right; margin-right:30upx ; color: #FE6C0E;">交易成功</text>
				</view>
				
				<view class="main-box-content">
				    <view style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top: 10upx;">
						<text class="gray" style="width: 20%;">工作地点:</text>
						<text  style="width:40%;">{{item.adress}}</text>
						<text style="width:20%;" class="gray">工作内容:</text>
						<text style="width:20%;">{{item.workContent}}</text>
					</view>
					<view style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top: 16upx;">
						<text class="gray">备注：</text>
						<text>{{item.remarks}}</text>
					</view>
				</view>
				
				<view class="main-box-bot">
					<view style="margin-top: 20upx;">
						<text class="gray">已支付请评价</text>
						<!-- <text class="gray" @click="xiangQing(item)" style="">查看订单详情 > </text> -->
						<text style="float: right; margin-right: 30upx; color: #F53D4A;">{{item.price}}</text>
						<text style="float: right;" class="gray">最终价位： </text>
					</view>
					
					<view style="margin-top: 30upx;">
						<view style="color:#fff;width: 124upx;font-weight: 500;background: #F53D4A;" class="btn-style" @click="pingj(item.useruid)">评价</view>
						<view style="color:#b1b1b1;width: 124upx;font-weight: 500;background: #fff;" class="btn-style">已结算</view>
						<!-- <view style="width: 142upx;font-weight: 500;margin-right: 40upx;background: #fff;color: #b1b1b1;" class="btn-style">联系</view> -->
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			}
		},
		onLoad(options) {
			this.getListArr()
		},
		methods: {
			pingj:function(u){
				uni.navigateTo({
					url:"../../../pj/pj?id=1&uid="+u
				})
			},
			getListArr:function(){
				let that=this;
					let usurl=that.url1+"/dinghai/order/selectMyOrder";
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							useruid:that.user.uid
						},
				    success: (res) => {
						if(res.statusCode==200){
							that.listArr=res.data.flag
							console.log(that.listArr)
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
			xiangQing:function(){
				uni.navigateTo({
					url:"../XiangQing/XiangQing"
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
	
	
	.main-box{
		overflow: hidden;
		margin: 40upx auto;
		border-radius: 6px;
		width: 92%;
		height: 380upx;
		background: #fff;
		box-shadow: 0px 0px 5px #CCCCCC;
		padding: 15upx;
	}
	
	.main-box-title{
		width: 100%;
		height: 60upx;
		border-bottom: 1px solid #bfbfbf;
		overflow:hidden; /*超出的部分隐藏起来。*/
		white-space:nowrap;/*不显示的地方用省略号...代替*/
		text-overflow:ellipsis;/* 支持 IE */
	}
	
	.main-box-content{
		width: 100%;
		height: 160upx;
	}
	
	.main-box-bot{
		width: 100%;
		height: 190upx;
		border-top: 1px solid #bfbfbf;
	}
	
	
	
	.main-box-title>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-content>view>text{
		display: inline-block;
		font-size: 30upx;
		letter-spacing: 1px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.main-box-bot>view>view>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-bot-float{
		float: left;
		margin-top: 26upx;
	}
	
	.main-box-bot>view>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.gray{
		color: #a4a4a4;
	}
	
	.btn-style{
		float: right;
		margin-right: 20upx;
		color: #fff;
		background: #F53D4A;
		font-size: 30upx;
		width: 84upx;
		height: 44upx;
		text-align: center;
		line-height: 44upx;
		font-weight: 300;
		letter-spacing: 1px;
		box-shadow: 0px 1px 3px #ccc;
	}
</style>
