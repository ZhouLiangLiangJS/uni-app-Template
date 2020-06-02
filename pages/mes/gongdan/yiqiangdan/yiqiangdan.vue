<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">已抢单</text>
		</view>
		
		
		<view style="margin-top: 200upx;">
			<view class="main-box" @click="showgn" v-for="(item,i) in list" :key="i" >
				<view v-if="item.workstate==1?true:false">
					<view class="yiQuXiao">
					</view>
					<text class="yiQuXiaoTx">发单人已取消此单</text>
				</view>
				<view class="main-box-title">
					<text class="gray">工作内容:</text>
					<text style="width: 35%;">{{item.workContent}}</text>
					<text style="margin-left: 2%;" class="gray">开工时间:</text>
					<text style="width: 20%;">{{item.startDate}}</text>
				</view>
				<image @click="xian(i)" src="https://api.laotiele.com:9527/image/static/fenLei.png" mode="widthFix" class="main-box-top-img"></image>
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
				</view>
				
				<view class="main-box-bot">
					<text class="gray">预留电话:</text>
					<text style="width: 35%;">{{item.tel}}</text>
					<text style="margin-left: 2%;" class="gray">预估价位:</text>
					<text style="width: 23%;">{{item.price}}</text>
				</view>
				<view class="main-box-bottom" v-show="1800-((time/1000)-item.endTime)>0?true:false" @click="dianhua(item)" >
					<view>
						<text>已抢到该单请进行进一步沟通</text>
						<image style="margin: 27upx 20upx 0 20upx;" src="https://api.laotiele.com:9527/image/static/you.png" mode="widthFix"></image>
						<image style="width: 30upx;" src="https://api.laotiele.com:9527/image/static/tel.png" mode="widthFix"></image>
					</view>
					<view>
						<text>{{Math.floor(((1800-((time/1000)-item.endTime))/60))+"分"+Math.floor(((1800-((time/1000)-item.endTime))%60))+"秒"}}</text>
					</view>
				</view>
				<view class="tanChu" v-if="ListFlag==i?true:false">
					<view class="tanChu-jianTou"></view>
					<view class="tanChu-title" @click="f1(i)">取消订单</view>
				</view>
			</view>
			<!-- <view style="text-align: center;" v-if="list.length==0?true:false">
				<image mode="widthFix" style="width: 100%;height: 500upx;" src="https://api.laotiele.com:9527/image/static/tz-success.png" ></image>
				<text style="font-size: 35upx;">暂无任何抢单</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ListFlag:null,
				time:new Date().getTime(),
				list:[]
				
			}
		},
		onLoad(options) {
		},
		onShow(){
			this.yiQiangDan()
		},
		filters:{
			tm:function(el){
				let t= Math.round((new Date().getTime()/1000));
				let f= Math.floor((1800-(t-el))/60)
				let s= Math.floor((1800-(t-el))%60)
				return f+"分"+s+"秒"
			}
		},
		methods: {
			dianhua:function(i){
				console.log(i)
				uni.makePhoneCall({
					phoneNumber:i.tel
				})
			},
			f1:function(i){
				console.log(i)
				this.ListFlag=null;
				if(1800-((this.time/1000)-this.list[i].endTime)>0){
					let that=this;
						let usurl=that.url1+"/dinghai/order/deleteOrder";
						uni.showLoading({  mask: false,   title: '正在抢单'  });
						uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								worksId:that.list[i].worksId,
								id:that.list[i].id
							},
					    success: (res) => {
							clearInterval(that.list[i].getInter)
							that.list.splice(i,1);
							uni.showToast({
								title:'取消成功'
							})
					    },
						fail : function(err){
							uni.showToast({
								title:"网咯错误",
								icon:"none"
							});
						}
					});
				}else{
					uni.showToast({
						icon:"none",
						title:"已过取消时间"
					})
				}
			},
			xian:function(i){
				if(i!=this.ListFlag){
					this.ListFlag=i;
				}else{
					this.ListFlag=null
				}
			},
			back : function(){
			   uni.navigateBack({
			
			   });
			},
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
						for(let i=0;i<that.list.length;i++){
							if(1800-((that.time/1000)-that.list[i].endTime)>0){
								that.list[i]["getInter"]=setInterval(function(){
									that.list[i].endTime--
								},1000)
							}
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"网咯错误",
							icon:"none"
						});
					}
				});
			},
			   //  点击整体时显示功能
			showgn : function(){
				// uni.showActionSheet({
										
				// 	itemList: ["取消招工","修改详情","刷新该条"],
				// 						success : function(res){
				// 							var index = res.tapIndex;
				// 							if(index == 0){
				// 								console.log("取消招工");
												
				// 							}else if(index == 1){
				// 							    console.log("修改详情");
				// 							}else{
				// 								console.log("刷新该条");
				// 							}
				// 						}
				// });
			}
		}
	}
</script>

<style>
	.yiQuXiaoTx{
		color: #F53D4A;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 3;
		font-size: 40upx;
	}
	.yiQuXiao{
		background: #000000;
		opacity: .7;
		text-align: center;
		z-index: 2;
		width: 100%;
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
	}
	.tanChu{
		position: absolute;
		width: 100upx;
		z-index: 8;
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
		z-index: 10;
		top: 0;
		left: 0;
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
		height: 130upx;
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
	}
	
	.main-box-bottom>view:nth-child(1){
		width: 70%;
		height: 100%;
		float: left;
		padding-left: 5%;
		line-height: 80upx;
		font-size: 30upx;
		color: #fff;
	}
	.main-box-bottom>view:nth-child(1)>text{
		float: left;
	}
	.main-box-bottom>view:nth-child(1)>image{
		width: 20upx;
		height: 30upx;
		margin-top: 27upx;
		float: left;
	}
	
	.main-box-bottom>view:nth-child(2){
		height: 100%;
		width: 25%;
		float: left;
		line-height: 80upx;
	}
	
	.main-box-bottom>view:nth-child(2)>text{
		font-size: 35upx;
		color: #fff;
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
		height: 50upx;
		position: absolute;
		right: 20upx;
		top: 20upx;
	}
</style>
