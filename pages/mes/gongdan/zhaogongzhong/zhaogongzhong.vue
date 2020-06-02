<template>
	<view @click="ListFlag=false">
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">招工中</text>
		</view>
		<view style="margin-top:200upx ;">
			<view class="main-box" @click="showgn" v-for="(item,i) in listArr"  :key="i" v-if="item.orderstate==0?item.num<item.people?true:false:false">
				<view class="main-box-title">
					<text class="gray">工作内容:</text>
					<text style="width: 35%;">{{item.workContent}}</text>
					<text style="margin-left: 2%;" class="gray">开工时间:</text>
					<text style="width: 20%;">{{item.startdate}}</text>
				</view>
				<image @click.stop="showList(i)" src="https://api.laotiele.com:9527/image/static/fenLei.png" mode="widthFix" class="main-box-top-img"></image>
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
				<!-- <view class="main-box-bottom">
					<view>
						<text>工人已接单请进行进一步沟通</text>
						<image style="margin: 27upx 20upx 0 20upx;" src="https://api.laotiele.com:9527/image/static/you.png" mode="widthFix"></image>
						<image style="width: 30upx;" src="https://api.laotiele.com:9527/image/static/tel.png" mode="widthFix"></image>
					</view>
					<view>
						<text>20分33秒</text>
					</view>
				</view> -->
				<view class="tanChu" v-show="ind==i?true:false">
					<view class="tanChu-jianTou"></view>
					<view class="tanChu-title" @click="quXiao(item,i)">取消招工</view>
					<view class="tanChu-title" @click="xiuGai(item)">修改详情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time:false,
				listArr:[],
				ind:null
			}
		},
		onLoad(options) {
			this.getListArr()
		},
		onShow(){
			
		},
		methods: {
			quXiao:function(item,i){
				let that=this;
				uni.showModal({
				        title: '确定要取消吗',
				        content: "订单ID为："+item.id,
				        cancelText:'是',
				        confirmText:'否',
				        success(res){
				          if(res.cancel){
							  let usurl=that.url1+"/dinghai/order/deleteRecruit";
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
									  uni.showToast({
									  	title:"已成功取消"
									  })
									  that.listArr.splice(i,1)
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
			showList:function(i){
				if(this.ind!=i){
					this.ind=i
				}else{
					this.ind=null
				}
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
			xiuGai:function(){
				uni.navigateTo({
					url:"./xiugai/xiuGai"
				})
			},			   //  点击整体时显示功能
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
