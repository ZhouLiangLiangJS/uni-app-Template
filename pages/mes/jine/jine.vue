<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">钱包</text>
		</view>
		<view style="font-size: 30upx ;">
			<view style="text-align: center;margin-top:300upx;">
				<image src="https://api.laotiele.com:9527/image/static/qianBao.png" mode="widthFix" style="width: 25%;height: 199upx;"></image>
			</view>
			<view style="text-align: center;margin-top:30upx;font-size:35upx">
				<text>我的零钱</text>
			</view>
			<view style="text-align: center;margin-top:30upx;font-size:35upx">
				<text>￥{{myMoney}}</text>
			</view>
			<button style="width:40%;margin:40upx auto;padding:10upx;background:#F53D4A;font-size:30upx;color: #fff;" @click="cz">充值</button>
			<button style="width:40%;margin:40upx auto;padding:10upx;color:#F53D4A;font-size:30upx" @click="tx">提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useUser:this.user,
				myMoney:'0.00'
			}
		},
		onLoad() {
		   
		},
		onShow() {
			this.getMoney()
		},
		methods: {
			cz:function(){
				uni.navigateTo({
					url:'chongzhi/chongzhi'
				})
			},
			tx:function(){
				uni.navigateTo({
					url:'tixian/tixian'
				})
			},
			back : function(){
			   uni.navigateBack({});
			},
			getMoney:function(){
				let that=this;
				uni.showLoading({
					title:'正在查询',
					mask:true
				})
				uni.request({
				    url: that.url1+'/dinghai/user/selectMoney',
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
				    data: {
						uid:that.useUser.uid,
					},
				    success: (res) => {
						if(res.statusCode==200){
							console.log(res);
							if(res.data.flag!=null){
								that.myMoney=res.data.flag.money
							}else{
								that.myMoney='0.00'
							}
							uni.showToast({
								title:'查询成功'
							})
						}else{
							uni.showToast({
								title: '查询失败！请联系客服',
								icon:"none"
							});
						}
				    },
					fail : function(err){
						console.log(err)
						uni.showToast({
							title: '查询失败！原因为：'+err.toString(),
							icon:"none"
						});
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
		position: fixed;
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-20%);
	}
</style>