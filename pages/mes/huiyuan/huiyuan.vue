<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">会员充值</text>
		</view>
		<view style="font-size: 30upx;color: #4F4F4F;" >
			<view class="nav">
				<image :src="useUser.imgage" mode="aspectFill"></image>
				<text>{{useUser.name}}</text>
			</view>
			<view class="main" v-if='mysf'>
				<view :style="item.membershipId==dj?'background: #F53D4A;color: #fff;':''"  v-for="(item,ind) in list" :key='ind' @click="bh(item.membershipId,ind)">
					<text>{{item.membershipDate}}</text>
					<text><!-- 首月充值 --></text>
					<text>￥{{item.memberprice}}</text> 
					<text :style="item.membershipId==dj?'color: #fff;':''">￥{{item.membershipprice}}</text>
				</view>
			</view>
			<view class="main" v-if='!mysf'>
				<view :style="item.businessId==dj?'background: #F53D4A;color: #fff;':''"  v-for="(item,ind) in list" :key='ind' @click="bh(item.businessId,ind)">
					<text>{{item.businessDate}}</text>
					<text><!-- 首月充值 --></text>
					<text>￥{{item.businessprices}}</text> 
					<text :style="item.businessId==dj?'color: #fff;':''">￥{{item.businessprice}}</text>
				</view>
			</view>
			<view class="zhifu">
				<image src="https://api.laotiele.com:9527/image/1575270055125.png" mode="aspectFill"></image>
				<text>平台支付</text>
				<view :class="flag?'dianji':''" @click="flag=!flag"></view>
			</view>
		</view>
		
	
		<view class="qrzf">
			<view>
				<text>总计：</text>
				<text style="color: #F53D4A;">{{jg}}元</text>
			</view>
			<view @click="zhifu()">确认支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useUser:this.user,
				flag:false,
				dj:1,
				i:0,
				list:[
				],
				jg:0,
				wd:this.sf?'工人':'商家',
				mysf:this.sf
			}
		},
		onLoad() {
			this.login()
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			bh(ind,i){
				this.dj=ind;
				this.i=i
			},
			login(){
				uni.showLoading({
					title:'正在加载中',
					mask:true
				})
				let that=this;
				if(this.sf){
					let usurl=that.url1+"/Membership/selectAllAddress";
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							
						},
					   success: (res) => {
						if(res.statusCode==200){
							uni.showToast({
								title:"加载成功"
							})
							this.list=res.data.flag;
							this.i=0;
							this.dj=this.list[0].membershipId;
							this.jg=this.list[0].memberprice;
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
				}else{
					let usurl=that.url1+"/Membership/selectAllbusiness";
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							
						},
					   success: (res) => {
						console.log(res)
						if(res.statusCode==200){
							uni.showToast({
								title:"加载成功"
							})
							this.list=res.data.flag;
							this.i=0;
							this.dj=this.list[0].businessId;
							this.jg=this.list[0].businessprices;
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
				}
			},
			zhifu(){
				if(this.flag==false){
					uni.showToast({
						icon:'none',
						title:'请选择支付方式'
					})
				}else{
				uni.showModal({
					title:'温馨提示',
					content:'您当前的身份为'+this.wd+'您将进行'+this.wd+'会员充值',
					success:(res)=>{
						if(res.confirm){
							uni.showLoading({
								title:'正在支付中..',
								mask:true
							})
							if(this.sf){
								let that=this;
								let usurl=that.url1+"/dinghai/user/updateRole";
								uni.request({
									url: usurl,
									header:{
										"Content-Type" : "application/x-www-form-urlencoded"
									},
									method:'POST',
									data: {
										uid:this.user.uid,
										rolemoney:this.jg,
										roletime:this.list[this.i].membershipDate=="包月"?2592000:this.list[this.i].membershipDate=="包季"?7776000:this.list[this.i].membershipDate=="半年"?15768000:this.list[this.i].membershipDate=="包年"?31536000:0
									},
								   success: (res) => {
									   uni.hideLoading()
									   console.log(res)
									if(res.statusCode==200){
										if(res.data.flag==200){
											uni.showToast({
												title:"恭喜您充值成功！"
											})
											uni.navigateBack({
												
											})
											console.log(res)
										}else{
											uni.showModal({
												title:'温馨提示',
												content:'您的金额不足是否要充值',
												success(res) {
													if(res.confirm){
														uni.redirectTo({
															url:'../jine/chongzhi/chongzhi'
														})
													}else{
														
													}
												}
											})
										}
									}else{
										uni.showToast({
											title:"您的余额不足或者网络问题",
											icon:"none"
											})
									}
								   },
								fail : function(err){
									uni.showToast({
										title:"您的网络打了个盹！",
										icon:"none"
										})
									}
								});
							}else{
								let that=this;
								let usurl=that.url1+"/dinghai/user/updateMarchant";
								uni.request({
									url: usurl,
									header:{
										"Content-Type" : "application/x-www-form-urlencoded"
									},
									method:'POST',
									data: {
										sid:this.user.uid,
										Merchantprice:this.jg,
										Merchantend:this.list[this.i].businessDate=="包月"?2592000:this.list[this.i].businessDate=="包季"?7776000:this.list[this.i].businessDate=="半年"?15768000:this.list[this.i].businessDate=="包年"?31536000:0
									},
								   success: (res) => {
									   console.log(res)
									   uni.hideLoading()
									if(res.statusCode==200){
										if(res.data.flag==200){
											uni.showToast({
												title:"恭喜您充值成功！"
											})
											uni.navigateBack({
												
											})
										}else{
											
											uni.showModal({
												title:'温馨提示',
												content:'您的金额不足是否要充值',
												success(res) {
													if(res.confirm){
														uni.redirectTo({
															url:'../jine/chongzhi/chongzhi'
														})
													}else{
														
													}
												}
											})
										}
									}else{
										uni.showToast({
											title:"您的网络打了个盹！",
											icon:"none"
											})
									}
								   },
								fail : function(err){
									uni.showToast({
										title:"您的网络打了个盹！",
										icon:"none"
										})
									}
								});
							}
						}else{
							uni.showToast({
								title:"您取消了充值操作！",
								icon:"none"
								})
						}
					}
					})
				}
			}
		 },
		 watch:{
			 i(val){
				 if(this.sf){
					 this.jg=this.list[val].memberprice
				 }else{
					 this.jg=this.list[val].businessprices
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
		position: fixed;
		top:0;
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-20%);
	}
	
	.nav{
		width: 100%;
		height: 150upx;
		margin-top: 168upx;
		position: relative;
	}
	.nav>image{
		height: 100upx;
		width: 100upx;
		border-radius: 100%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 150upx;
	}
	.nav>text{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 300upx;
	}
	.main{
		overflow: hidden;
		margin-top: 30upx;
	}
	.main>view{
		width: 20%;
		height: 220upx;
		border: 1px solid #F53D4A;
		border-radius: 10upx;
		background: #fff;
		box-shadow: 0 0 5px #ccc;
		float: left;
		margin-left: 27upx;
		position: relative;
	}
	.main>view>text{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		text-align: center;
	}
	.main>view>text:nth-child(1){
		font-size: 40upx;
		top: 30upx;
	}
	.main>view>text:nth-child(2){
		font-size: 25upx;
		top: 90upx;
	}
	.main>view>text:nth-child(3){
		font-size: 40upx;
		top: 120upx;
	}
	.main>view>text:nth-child(4){
		font-size: 25upx;
		top: 180upx;
		color: #A4A4A4;
		text-decoration:line-through
	}
	.zhifu{
		width: 100%;
		position: relative;
		height: 100upx;
	}
	.zhifu>image,.zhifu>view,.zhifu>text{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.zhifu>image{
		width: 50upx;
		height: 50upx;
		left: 30upx;
	}
	.zhifu>text{
		left: 100upx;
	}
	.zhifu>view{
		right: 30upx;
		width: 30upx;
		height: 30upx;
		border: 1px solid #F53D4A;
		border-radius: 100%;
	}
	.dianji{
		background: url(https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/juXing.png);
		background-size: 100% 100%;
		border: 0 !important;
	}
	.qrzf{
		width: 90%;
		height: 60upx;
		overflow: hidden;
		box-shadow: -1px 1px 3px #ccc;
		border-radius: 15upx;
		position: fixed;
		bottom: 100upx;
		transform: translateX(-50%);
		left: 50%;
		font-size: 30upx;
	}
	.qrzf>view{
		float: left;
		height: 100%;
		line-height: 60upx;
	}
	.qrzf>view:nth-child(1){
		width: 65%;
		background: #fff;
		padding-left: 5%;
	}
	.qrzf>view:nth-child(2){
		width: 30%;
		background: #F53D4A;
		color: #fff;
		text-align: center;
	}
</style>
