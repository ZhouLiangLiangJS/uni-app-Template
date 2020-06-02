<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">进行中</text>
		</view>
		
		<view style="margin-top: 200upx;">
			<view class="main-box" @click="showgn" v-for="(item,i) in list" :key="i" v-if="item.rnum>=item.num?item.workover==0?item.workstate==0?true:false:false:false">
				<view class="main-box-title">
					<text class="gray">工作内容:</text>
					<text style="width: 35%;">{{item.workContent}}</text>
					<text style="margin-left: 2%;" class="gray">开工时间:</text>
					<text style="width: 20%;">{{item.startDate}}</text>
				</view>
				<view class="main-box-content" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
				    <view style="margin-top:10upx;:hidden;white-space:nowrap;text-overflow:ellipsis;" class="main-box-content-gongZuo">
						<text class="gray">工作地点:</text>
						<text style="width: 35%;">{{item.adress}}</text>
						<text style="margin-left: 2%;" class="gray">理想工期:</text>
						<text style="width: 23%;">{{item.workDate}}</text>
					</view>
					<view style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
						<text class="gray">备注:</text>
						<text>{{item.remarks}}</text>
					</view>
					<view style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
						<text class="gray">预留电话:</text>
						<text>{{item.tel}}</text>
					</view>
				</view>
				
				<view class="main-box-bot">
					<text class="gray">预估价位:</text>
					<text style="width: 35%;color: #F53D4A;">{{item.price}}</text>
				<!-- 	<text style="margin-left: 2%;" class="gray">预估价位:</text>
					<text style="width: 23%;">1k-2k</text> -->
				</view>
				<view class="main-box-bottom" >
					正在进行中
					<!-- 已开工:<text style="color: yellow;">3</text> 天 -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ListFlag:false,
				time:false,
				list:[]
			}
		},
		onLoad(options) {
			this.yiQiangDan()
		},
		onShow(){
			
		},
		methods: {
			yiQiangDan:function(){
				let that=this;
					let usurl=that.url1+"/dinghai/order/selectMyOrder";
					// uni.showLoading({  mask: false,   title: '正在抢单'  });
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
						that.list=res.data.flag
						console.log(res)
						
						console.log(that.list)
				    },
					fail : function(err){
						uni.showToast({
							title:"网咯错误",
							icon:"none"
						});
					}
				});
			},
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			
			   //  点击整体时显示功能
			showgn : function(){
				
			}
		}
	}
</script>

<style>
	.tanChu{
		position: absolute;
		width: 100upx;
		z-index: 8;
		height: 160upx;
		padding: 10upx;
		background-color: #626262;
		border-radius:10upx;
		right: 20upx;
		top: 75upx;
	}
	.tanChu>.tanChu-jianTou{
		width: 20upx;
		height: 20upx;
		background-color: #626262;
		position: absolute;
		right: 25upx;
		top: -8upx;
		transform: rotate(45deg);
		z-index: 8;
	}
	.tanChu>.tanChu-title{
		width: 100%;
		height: 25%;
		font-size: 25upx;
		color: #fff;
		text-align: center;
		line-height: 40upx;
		z-index: 9;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}
	
	.hader-box-text{
		color: white;
		margin-left: 260upx;
	}
	
	.main-box{
		margin: 40upx auto;
		border-radius: 6px;
		width: 92%;
		background: #fff;
		box-shadow: 0px 0px 5px #ccc;
		padding: 20upx;
		position: relative;
	}
	
	.main-box-title{
		width: 100%;
		height: 60upx;
		border-bottom: 1px solid #bfbfbf;
		
	}
	.main-box-title>text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.main-box-content{
		width: 100%;
		padding-bottom: 10upx;
	}
	
	.main-box-bot{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		border-top: 1px solid #bfbfbf;
	}
	
	.main-box-bottom{
		width: 100%;
		height: 80upx;
		background-color: #F53D4A;
		border-radius:20upx ;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		font-size: 30upx;
	}
	
	.main-box-title>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-content>view>text{
		font-size: 30upx;
		letter-spacing: 1px;
	}
	
	.main-box-bot>text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		font-size: 30upx;
		letter-spacing: 1px;
	}
	.main-box-content-gongZuo text{
		display: inline-block;
		width: 20%;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	
	.gray{
		color: #a4a4a4;
	}
	.main-box-top-img{
		width: 20upx;
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
</style>
