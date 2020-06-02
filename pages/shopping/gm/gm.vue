<template>
	<view style="background: #F1F1F1;overflow-x: hidden;">
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">订单确认</text>
		</view>
		<image src="https://api.laotiele.com:9527/image/static/redBlue.png" mode="widthFix" style="display: block; width: 100%;margin-top: 168upx;height: 5.13369px;"></image>
		<view class="diZhi"  style="font-size: 30upx;" @click="dizhiXuanZe">
			<view v-if="address.length>0?true:false">
				<view class="diZhi_shouhuo" >收货人：{{address[0].userName}}</view>
				<view class="diZhi_tel">{{address[0].userTel}}</view>
				<image class="dinWeiTu" src="https://api.laotiele.com:9527/image/static/dinWei.png" mode="widthFix"></image>
				<view class="diZhi_dizhi">收货地址：{{address[0].addressOne+address[0].addressTwo}}</view>
				<image class="youBian" src="https://api.laotiele.com:9527/image/static/you.png" mode="widthFix"></image>
				<view class="beiZhu">（收获不便时，默认可选择免费的暂存服务）</view>
			</view>
			<view class="tianJia" v-if="address.length<=0?true:false" >
				<button @click="tjsh" style="border-radius: 80upx;background: #fff;">添加收货地址</button>
			</view>
		</view>
		<view class="dinDan">
			<view v-for="(item,i) in shopping" :key='i' style="background: #fff;margin-top: 30upx;">
				<view class="dianpuMing">
					<view class="yuan">
						
					</view>
					<view class="mingzi">
						{{item.shopname}}
					</view>
				</view>
				<view>
					<view class="shopXinXi">
						<image class="shopXinXi_img" :src="url+'/image/'+item.shopimg" mode="aspectFill"></image>
						<view class="shopXinXi_txt">{{item.commodityname}}</view>
						<view class="shopXinXi_fenLei">
							<!-- <text v-for="(item,i) in txt" :key='i'></text> -->
							<text >{{item.shoptype}}</text>
						</view>
						<view class="jiage">
							<text>￥{{(item.freight+item.shoppingprice)*item.shoppingnum}}</text>
							<text>${{(item.freight+item.shoppingprice)*item.shoppingnum}}</text>
						</view>
						<view class="shuliang">
							× {{item.shoppingnum}}
						</view>
					</view>
					<view class="yunfei">
						<text>运费</text>
						<text>￥{{item.freight}}</text>
					</view>
					<view class="yunfei youHui">
						<text>商品优惠</text>
						<text>￥0.00</text>
					</view>
				</view>
				<view class="heji">
					<view class="fr">￥{{(item.freight+item.shoppingprice)*item.shoppingnum}}</view>
					<view class="fr">共<text style="color: #000000;padding: 0 20upx;font-weight: 900;">1</text>件商品 小记：</view>
				</view>
				<view class="yunfei">
					<text>优惠券</text>
					<text>暂无可用优惠券</text>
				</view>
				<view class="liuYan">
					<textarea v-model="item.liuyan" placeholder="买家留言"  />
				</view>
			</view>
		</view>
		<view class="diBu">
			<view >总计：￥{{heji}}</view>
			<button @click="liji">立刻支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:[],
				useUser:this.user,
				shopping:[],
				txt:[],
				jg:null,
				liuyan:'',
				url:this.url1,
				heji:null
			}
		},
		onLoad(op) {
			this.shopping=JSON.parse(op.shopping);
			this.heji=Number(op.heJi)
			console.log(this.heji)
			console.log(Number(op.heJi))
			for(let i=0;i<this.shopping.length;i++){
				this.shopping[i].liuyan=''
			}
		},
		onShow(){
			this.req()
		},
		methods: {
			liji:function(){
				if(this.address.length>0){
					let that=this;
					let usurl=that.url1+"/dinghai/ShopOrder/insertAddress";
					uni.showLoading({  mask: true,   title: '正在购买中'  });
					for(let p=0;p<that.shopping.length;p++){
						uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								shopAddressName:that.address[0].userName,
								shopAddress:that.address[0].addressOne+that.address[0].addressTwo,
								shopAdressTel:that.address[0].userTel,
								shopName:that.shopping[p].commodityname,
								shopOrderNum:that.shopping[p].shoppingnum,
								shopPrice:(that.shopping[p].freight+that.shopping[p].shoppingprice)*that.shopping[p].shoppingnum,
								shopFreight:that.shopping[p].freight,
								message:that.shopping[p].liuyan,
								Coupon:0,
								uid:that.useUser.uid,
								sid:that.shopping[p].uid,
								commodityid:that.shopping[p].commodityid,
								commodityName:that.shopping[p].commodityname
							},
						success: (res) => {
							console.log(res)
							if(res.statusCode==200){
								uni.request({
									url: that.url1+"/dinghai/ShopOrder/pay",
									header:{
										"Content-Type" : "application/x-www-form-urlencoded"
									},
									method:'POST',
									data: {
										uid:that.useUser.uid,
										sid:that.shopping[p].sid,
										money:(that.shopping[p].freight+that.shopping[p].shoppingprice)*that.shopping[p].shoppingnum
									},
								success: (res) => {
									console.log(res)
									if(res.statusCode==200){
										if(res.data.flag==200){
											let that=this;
											uni.request({
													url: that.url1+"/dinghai/Shopping/deleteShopping",
													header:{
														"Content-Type" : "application/x-www-form-urlencoded"
													},
													method:'POST',
													data: {
														shoppingid:that.shopping[p].shoppingid
													},
											    success: (res) => {
													console.log(res)
													if(res.statusCode==200){
														uni.showToast({
															title:"支付成功！",
															icon:"none"
														});
													}else{
														uni.showToast({
															title:"支付成功！此件商品在购物车未删除成功，请手动删除",
															icon:"none"
														})
													}
											    },
												fail : function(err){
													uni.showToast({
														title:"支付成功！此件商品在购物车未删除成功，请手动删除",
														icon:"none"
													})
												}
											});
											uni.navigateBack({
												
											})
											
										}else{
											uni.showToast({
												title:"支付失败！",
												icon:"none"
											});
											uni.showModal({
											    title: '提示',
											    content: '您的余额不足是否要充值',
											    success: function (res) {
											        if (res.confirm) {
											            uni.navigateTo({
											            	url:'../../../mes/jine/chongzhi/chongzhi'
											            })
											        } else if (res.cancel) {
														
											        }
											    }
											});
											
										}
									}else{
										uni.showToast({
											title:"您的网络打了个盹！",
											icon:"none"
										});
									}
								},
								fail : function(err){
									uni.showToast({
										title:"您的网络打了个盹！",
										icon:"none"
									});
								}
								})
								
							}else{
								uni.showToast({
									title:"您的网络打了个盹！",
									icon:"none"
								});
							}
						},
						fail : function(err){
							uni.showToast({
								title:"您的网络打了个盹！",
								icon:"none"
							});
						}
						})
					}
				}else{
					uni.showToast({
						title:'请添加地址后购买',
						icon:'none'
					})
				}
			},
			tjsh:function(){
				uni.navigateTo({
					url:'../../mes/dizhi/tjdizhi/tjdizhi'
				})
			},
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			dizhiXuanZe:function(){
				
			},
			req:function(){
				uni.showLoading({
					title:"正在加载",
					mask: true
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
								 userId:that.useUser.uid
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
		 }
}
</script>

<style>
	page{
		background: #F1F1F1;
	}
	.fr{
		float: right;
	}
	.tianJia{
		position: absolute;
		transform: translate(-50%,-50%);
		left: 50%;
		top: 50%;
		font-size: 50upx;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		top: 0;
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
	.diZhi{
		height: 300upx;
		background: #FFF1DB;
		width: 100%;
		position: relative;
	}
	.diZhi_shouhuo{
		position: absolute;
		top: 40upx;
		left: 80upx;
	}
	.diZhi_tel{
		position: absolute;
		right: 80upx;
		top: 40upx;
		font-size: 25upx;
	}
	.dinWeiTu{
		width: 40upx;
		height: 50upx;
		position: absolute;
		left: 15upx;
		top: 105upx;
	}
	.diZhi_dizhi{
		width: 80%;
		position: absolute;
		left: 80upx;
		top: 110upx;
	}
	.youBian{
		width: 30upx;
		height: 50upx;
		position: absolute;
		right: 15upx;
		top: 105upx;
	}
	.beiZhu{
		position: absolute;
		color: #00A0E9;
		bottom: 50upx;
		left: 80upx;
	}
	.dinDan{
		width: 100%;
		height: auto;
		font-size: 30upx;
		margin-bottom: 168upx;
	}
	.dianpuMing{
		height: 60upx;
		width: 100%;
		position: relative;
		border-bottom: 1px solid #F1F1F1;
	}
	.yuan{
		border-radius: 100%;
		border: 1px solid #979797;
		width: 30upx;
		height: 30upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 30upx;
	}
	.mingzi{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 30upx;
		left: 80upx;
	}
	.shopXinXi{
		height: 300upx;
		width: 100%;
		border-bottom: 1px solid #F1F1F1;
		position: relative;
	}
	.shopXinXi_img{
		width: 250upx;
		height: 250upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%); 
		left: 30upx;
	}
	.shopXinXi_txt{
		position: absolute;
		top: 30upx;
		left: 300upx;
		width: 430upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.shopXinXi_fenLei{
		position: absolute;
		top: 50%;
		left: 300upx;
		transform: translateY(-50%);
		color: #737373;
	}
	.shopXinXi_fenLei>text{
		margin-right: 30upx;
		color: #A5A5A5;
		font-size: 25upx;
	}
	.jiage{
		position: absolute;
		bottom: 30upx;
		left: 300upx;
	}
	.jiage>text:nth-child(1){
		color: #E02020;
		margin-right: 50upx;
		font-weight: 900;
	}
	.jiage>text:nth-child(2){
		color: #737373;
		font-size: 25upx;
		text-decoration:line-through
	}
	.shuliang{
		position: absolute;
		right: 30upx;
		bottom: 30upx;
		color: #737373;
	}
	.yunfei{
		height: 60rpx;
		width: 100%;
		position: relative;
		border-bottom: 1px solid #F1F1F1;
	}
	.yunfei>text{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.yunfei>text:nth-child(1){
		left: 30upx;
		color: #B7B7B7;
	}
	.yunfei>text:nth-child(2){
		right: 30upx;
		color: #737373;
		font-size: 25upx;
	}
	.youHui>text:nth-child(2){
		font-size: 25upx;
		color: #E02020;
	}
	.heji{
		height: 80upx;
		border-bottom: 1px solid #F1F1F1;
		padding-top: 30upx;
		padding-right: 30upx;
	}
	.heji>view:nth-child(1){
		color: #E02020;
	}
	.heji>view:nth-child(2){
		color: #626262;
	}
	.liuYan>textarea{
		height: 300upx;
		padding: 30upx;
	}
	.diBu{
		height: 120upx;
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #FF4343;
		z-index: 10;
	}
	.diBu>view{
		font-size:45upx ;
		/* font-weight: 900; */
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 30upx;
		color: #fff;
	}
	.diBu>button{
		height: 80upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 30upx;
		width: 250upx;
		border-radius: 50upx;
		color: #FF4343;
		background: #fff;
		line-height: 80upx;
	}
</style>
