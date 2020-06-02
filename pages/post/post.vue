<template>
	<view >
		
		<image @click="fabu" src="https://api.laotiele.com:9527/image/static/fabu.png" style="width: 80upx;height: 80upx;position: fixed;top: 220upx;right: 80upx;" v-if='flg'>
			
		</image>
		<view class="hader-box">
			<text class="hader-box-text">头条</text>
		</view>
		
		<view class="main-box">
			<view class="main-box-group" style="margin-top: 40upx;box-shadow: 0px 0px 5px #ccc;
				border-radius: 6px;" v-for="(item,i) in tieZiList"  
				@click="tiaoZhuan(item)" :key="i">
				<view class="main-box-group-title">
					<image :src="item.userImg" mode="aspectFill"></image>
					<text>{{item.username}}</text>
					<view style="clear: both;"></view>
				</view>
				
				<view class="main-box-group-text">
					<text>{{item.postedContent}}</text>
				</view>
				
				<view class="main-box-group-content">
					<image v-for="(child,ind) in item.postedImg" mode="aspectFill" :key="ind" :src="url+'/image/'+child"></image>
				</view>
				<view class="main-box-group-three">
					<image @touchstart.stop="dianZhanf(item.postedId,item)"  mode="widthFix" :src="dianZhan.indexOf(item.postedId)!=-1?'https://api.laotiele.com:9527/image/static/dianzanActive.png':'https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/dianzan.png'"></image>
					<image @touchstart.stop="showPingLun(item.postedId,item)" mode="widthFix" style="margin: 0 20rpx;" src="https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/pinglun.png"></image>
					<image @touchstart.stop="shareFlag(item)" mode="widthFix" src="https://api.laotiele.com:9527/image/static/zzzzzzzzzzzzzzzz/zhuanfa1.png"></image>
				</view>
			</view>
			<!-- dier -->
		</view >
		<view class="muBu" @touchstart="quXiaoPingLun" v-show="flag">
			
		</view>
		<view class="pingLunBox" style="font-size: 32upx;" v-show="flag">
			<textarea class="pingLun" maxlength="500" v-model="pingLun" placeholder="最多评论五百字" />
			<view @touchstart="quXiaoPingLun">取消评论</view>
			<view @touchstart="faBiaoPingLun">确认评论</view>
		</view>
		<view class="muBu" @touchstart="guanBiShare" v-show="share">
			
		</view>
		<view class="share"  v-show="share">
			<view class="share_title">
				分享
			</view>
			<view class="share_img">
				<view @touchstart="shareFriend()">
					<image src="https://api.laotiele.com:9527/image/static/wx.png" mode=""></image>
					<text>微信好友</text>
				</view>
				<view @touchcancel="shareFriendcricle()">
					<image src="https://api.laotiele.com:9527/image/static/pengyouquan.png" mode=""></image>
					<text>微信朋友圈</text>
				</view>
				<view>
					<image src="https://api.laotiele.com:9527/image/static/qunZi.png" mode=""></image>
					<text>圈子</text>
				</view>
			</view>
			<view class="share_title" @touchstart="guanBiShare">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tieZiList:[],
				url:this.url1,
				flag:false,
				pingLun:null,
				tieZiId:null,
				share:false,
				dianZhan:[],
				share_i:null,
				flg:this.flg
			}
		},
		onLoad() {
			this.getRenGong()
		},
		onPullDownRefresh(){
			this.getRenGong()
		},
		methods: {
			shareFlag:function(i){
				this.share=true;
				this.share_i=i;
				console.log(this.share_i)
			},
			guanBiShare:function(){
				this.share=false;
				this.share_i=null;
				console.log(this.share_i)
			},
			shareFriend: function() {
			               //分享到微信朋友
			console.log(this.share_i)
			let that=this;
			let shareArr=this.share_i;
			                uni.share({ 
			                    provider: "weixin",
			                    scene: "WXSceneSession",
			                    type: 0,
			                    href: that.url1+'/image/'+shareArr.postedImg[0],//这地址太长了，就省略了
			                    title: shareArr.postedContent,
			                    summary: shareArr.postedContent,                         
			                    imageUrl: that.url1+'/image/'+shareArr.postedImg[0],
			                    success: function(res) {
			                        console.log("success:" + JSON.stringify(res));
			                    },
			                    fail: function(err) {
			                        console.log("fail:" + JSON.stringify(err));
			                    }
			                });
			            },
			
			          //分享到微信朋友圈
			            shareFriendcricle: function(i) {
			                uni.share({
			                    provider: "weixin",
			                    scene: "WXSenceTimeline",
			                    type: 0,
			                    href: url+'/image/'+shareArr.postedImg[0],
			                    title: shareArr.postedContent,
			                    summary: shareArr.postedContent,
			                    imageUrl: url+'/image/'+shareArr.postedImg[0],
			                    success: function(res) {
			                        console.log("success:" + JSON.stringify(res));
			                    },
			                    fail: function(err) {
			                        console.log("fail:" + JSON.stringify(err));
			                    }
			                });
			            },
			dianZhanf:function(id,item){
				this.share_i=item;
				this.dianZhan.indexOf(id)!=-1?this.dianZhan.splice(this.dianZhan.indexOf(id),1):this.dianZhan.push(id);
				let that=this;
				if(this.dianZhan.indexOf(id)!=-1){
					let usurl1=that.url1+"/dinghai/Posted/updatePraise";
					uni.request({
					    url: usurl1,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
							postedId:id.toString(),
							userId:that.user.uid
						},
					    success: (res) => {
					    },
						fail : function(err){
							console.log(err);
						}
					})
				}else{
					let usurl2=that.url1+"/dinghai/Posted/updatePraise1";
					uni.request({
					    url: usurl2,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
					    data: {
							postedId:id.toString(),
							userId:that.user.uid
						},
					    success: (res) => {
							
					    },
						fail : function(err){
							console.log(err);
						}
					})
				}
			},
			quXiaoPingLun:function(){
				this.pingLun=null;
				this.share_i=null;
				this.flag=false;
			},
			faBiaoPingLun:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/comment/comment/insertPostedComment";
				console.log(that.share_i.postedId)
				
				console.log(that.user)
				
				console.log(that.pingLun)
				
				console.log(that.user.username)
				uni.showLoading({  mask: true,   title: '正在发布'  });
				uni.request({
				    url: usurl,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
				    data: {
						postedId:that.share_i.postedId.toString(),
						userId:that.user.uid,
						commentContent:that.pingLun,
						username:that.user.username
					},
				    success: (res) => {
						if(res.statusCode===200){
							uni.showToast({
								title : "发布成功"
							});
							that.flag=false
						}else{
							uni.showToast({
								title : "您的网络有点迟钝，请稍后再试",
								icon:"none"
							});
						}
				    },
					fail : function(err){
						uni.showToast({
							title : "服务器错误",
							icon:"none"
						});
						console.log(err);
					}
				});
			},
			showPingLun:function(i,item){
				this.share_i=item;
				this.tieZiId=i;
				this.flag=true
			},
			tiaoZhuan:function(i){
				
				uni.navigateTo({
					url:"./pingJia/pingJia?id="+JSON.stringify(i)
				})
			},
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			getRenGong:function () {
				
				let that=this;
				let usurl=that.url1+"/dinghai/Posted/Posted/selectAll";
				uni.showLoading({  mask: true,   title: '正在加载'  });
				uni.request({
				    url: usurl,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'GET',
				    data: {},
				    success: (res) => {
						if(res.statusCode===200){
							console.log(res)
							uni.showToast({
								title : "加载成功"
							});
							that.tieZiList=res.data
							for(let i=0;i<that.tieZiList.length;i++){
								let arr=JSON.parse(that.tieZiList[i].postedImg)
								that.tieZiList[i].postedImg=arr;
								console.log(that.tieZiList)
							}
						}else{
							uni.showToast({
								title : "您的网络有点迟钝，请稍后再试",
								icon:"none"
							});
						}
						uni.stopPullDownRefresh()
				    },
					fail : function(err){
						uni.showToast({
							title : "服务器错误",
							icon:"none"
						});
						console.log(err);
						uni.stopPullDownRefresh()
					}
				});
			},
			fabu : function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					uni.navigateTo({
						url : "mytf/myft"
					})
				}
			}
		}
	}
</script>

<style>
	.share{
		width: 90%;
		position: fixed;
		bottom: 30upx;
		background-color: #fff;
		left: 50%;
		transform: translateX(-50%);
		z-index: 12;
		font-size: 30upx;
	}
	.share>.share_title{
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
	}
	.share_img{
		width: 100%;
		height: 250upx;
		border-top:1px solid #E0E0E0 ;
		border-bottom: 1px solid #E0E0E0;
	}
	.share_img>view{
		width: 33.3%;
		float: left;
		text-align: center;
		padding-top: 50upx;
	}
	.share_img>view>image{
		width: 80upx;
		height: 80upx;
	}
	.share_img>view>text{
		width: 100%;
		display: block;
		margin-top: 20upx;
	}
	.pingLunBox{
		width: 80%;
		height: 500upx;
		background-color: #fff;
		border-radius: 30upx;
		overflow: hidden;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 12;
	}
	.pingLunBox>view{
		width: 50%;
		display: inline-block;
		background: #F53D4A;
		height: 15%;
		text-align: center;
		line-height: 75upx;
		color: #fff;
	}
	.pingLun{
		padding: 2.5% 5%;
		width: 90%;
		height: 80%;
	}
	.muBu{
		width: 100%;
		position: fixed;
		height: 100%;
		z-index: 11;
		opacity: .6;
		background: #000;
		top: 0;
		left: 0;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		text-align: center;
		line-height: 190upx;
		top: 0;
	}
	.hader-box-text{
		color: #fff;
	}
	.hader-box-back{
		width: 40upx;
		height: 40upx;
		margin-top: 75upx;
		margin-left: 20upx;
	}

	
	
	.main-box{
		width: 92%;
		margin:190upx auto;
	}
	.main-box-group{
		padding: 20upx;
		overflow: hidden;
	}
	
	.main-box-group-title{
		margin-left: 30upx;
		width: 100%;
		height: 130upx;
	}
	
	.main-box-group-title>image{
		margin-top: 20upx;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		float: left;
	}
	
	.main-box-group-title>text{
		margin-top: 50upx;
		margin-left: 28upx;
		float: left;
		letter-spacing: 1px;
		font-size: 30upx;
	}
	
	
	.main-box-group-content{
		width: 100%;
		overflow: hidden;
	}
	
	.main-box-group-text{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		margin: 20upx 0;
		letter-spacing: 1px;
		font-size: 30upx;
		width: 100%;
	}
	
	
	.main-box-group-content>image{
		margin-top: 10upx;
		margin-left: 10upx;
		width: 200upx;
		height: 164upx;
		border-radius: 8px;
		float: left;
	}
	.main-box-group-three>image{
		width: 60rpx;
		height: 60rpx;
		float: right;
	}
	.main-box-group-three{
		width: 100%;
		height: 60rpx;
		overflow: hidden;
		margin-top: 30upx;
	}
</style>
