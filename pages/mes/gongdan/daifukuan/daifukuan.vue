<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">待付款</text>
		</view>
		
		
		<view style="margin-top: 200upx;">
			<view class="main-box" v-for="(item,i) in listArr" :key="i" v-if="item.workover!=0?item.num>=item.people?item.settlement==0?true:false:false:false">
					<view class="main-box-title">
						<!-- <span></span> -->
						<text class="gray">已完成</text>
						<!-- <text>2天</text> -->
						<text style="float: right; margin-right:30upx ; color: #FE6C0E;">等待付款</text>
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
							<text class="gray">请支付</text>
							<!-- <text class="gray" @click="xiangQing(item)" style="">查看订单详情 ></text> -->
							<text style="float: right; margin-right: 30upx; color: #F53D4A;">{{item.price}}</text>
							<text style="float: right;" class="gray">最终价位： </text>
						</view>
						
						<view style="margin-top: 30upx;">
							<view style="color:#fff;font-size: 25upx;width: 124upx;font-weight: 500;background: #F53D4A;padding:0 10upx;" class="btn-style" @click="xianshang(item,i)">线上支付</view>
							<view style="color:#fff;font-size: 25upx;width: 124upx;font-weight: 500;background: #F53D4A;padding:0 10upx;" class="btn-style" @click="yiZhiFu(item,i)">线下支付</view>
							<!-- <view style="width: 142upx;font-weight: 500;margin-right: 40upx;background: #fff;color: #b1b1b1;" class="btn-style" >联系工人</view> -->
						</view>
					</view>
				</view>
				<view></view>
				<view>
					
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
			dianhua:function(i){
				console.log(i)
				uni.makePhoneCall({
					phoneNumber:i.tel
				})
			},
			xianshang(item,i){
				let that=this;
				let usurl=that.url1+"/dinghai/order/Pay";
				uni.showModal({
				        title: '是否要进行线上支付',
				        content: "订单ID为："+item.id,
				        cancelText:'是',
				        confirmText:'否',
				        success(res){
							uni.showLoading({
								title:'正在付款中...'
							})
				          if(res.cancel){
							  uni.request({
							  		url: usurl,
							  		header:{
							  			"Content-Type" : "application/x-www-form-urlencoded"
							  		},
							  		method:'POST',
							  		data: {
							  			id:item.id
							  		},
							      success: (res) => {
									  console.log(res)
							  		if(res.statusCode==200){
							  			if(res.data.flag==200){
											that.listArr.splice(i,1)
											uni.showToast({
												title:'支付成功'
											})
										}else if(res.data.flag=="发单人未充值"){
											uni.showToast({
												title:'余额不足',
												icon:"none"
											})
										}
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
				          }else if(res.confirm){
				             console.log("点击了取消");
				          }
				        }
				   })
			},
			yiZhiFu:function(item,i){
				
				let that=this;
				let usurl=that.url1+"/dinghai/order/updateSettlement";
				uni.showModal({
				        title: '是否已完成线下支付',
				        content: "订单ID为："+item.id,
				        cancelText:'是',
				        confirmText:'否',
				        success(res){
				          if(res.cancel){
							  uni.request({
							  		url: usurl,
							  		header:{
							  			"Content-Type" : "application/x-www-form-urlencoded"
							  		},
							  		method:'POST',
							  		data: {
							  			id:item.id
							  		},
							      success: (res) => {
							  		if(res.statusCode==200){
							  			that.listArr.splice(i,1)
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
				          }else if(res.confirm){
				             console.log("点击了取消");
				          }
				        }
				   })
			},
			getListArr:function(){
					let that=this;
					let usurl=that.url1+"/dinghai/order/selectOrder";
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
			xiangQing:function(item){
				uni.navigateTo({
					url:"../XiangQing/XiangQing?item="+JSON.stringify(item)
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
		left: 0;
		
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
	
	.main-box-title span{
		display: inline-block;
		width: 25upx;
		height: 25upx;
		border: 1px solid #7D7D7D;
		border-radius: 100%;
		margin-right:  30upx;
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
