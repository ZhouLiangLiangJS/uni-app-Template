<template>
	<view style="background: #EBEBEB;">
		<view class="hader-box">
			<image mode="widthFix" src="https://api.laotiele.com:9527/image/static/zuo.png" @click="back"></image>
			<text class="hader-box-text">个人评价</text>
		</view>
		<view class="fenLei">
			<view @click="flag=true">
				<image  v-show="flag" src="https://api.laotiele.com:9527/image/static/gongrenPingJia.png" mode="widthFix"></image>
				<text :style="flag?'color:#000':''">工人相关</text>
			</view>
			<view @click="flag=false">
				<image v-show="!flag" src="https://api.laotiele.com:9527/image/static/ShangDian.png" mode="widthFix"></image>
				<text :style="!flag?'color:#000':''" >商家相关</text>
			</view>
		</view>
		<view  v-show="flag" class="main-box">
			<view class="main-box-my">
				<view class="main-box-my-image">
					<image :style="flag?'border-radius: 100%;':''" :src="useUser.imgage" mode="aspectFill"></image>
				</view>
				<view class="main-box-my-main">
					<view class="main-box-my-main-top">
						<view>
							<text>{{useUser.name}}</text>
						</view>
						<view>
							<image v-for="count in xingJi" :key="count" src="https://api.laotiele.com:9527/image/static/xingYiDian.png" mode="widthFix"></image>
							<image v-for="count in (5-xingJi)" :key="count" src="https://api.laotiele.com:9527/image/static/xingWiDian.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="main-box-my-main-top">
						<view>
							<!-- <text>贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸贴墙纸v</text> -->
						</view>
						<view>
							<text style="color: #A5A5A5; font-size: 25upx;">综合评分 {{xingJi*2}} 分</text>
						</view>
					</view>
					<view>
						<text style="color: #A5A5A5; font-size: 25upx;">工人电话：</text>
						<text>{{useUser.tel}}</text>
					</view>
				</view>
				<view class="main-box-my-beiZhu">
					<!-- 专业贴墙纸三十年，承包各种墙面美化工作，为您打
					造完美的家专业贴墙纸三十年，承包各种墙面美化工作，为您打
					造完美的家专业贴墙纸三十年，承包各种墙面美化工作，为您打
					造完美的家专业贴墙纸三十年，承包各种墙面美化工作，为您打
					造完美的家专业贴墙纸三十年，承包各种墙面美化工作，为您打
					造完美的家 -->
				</view>
				<!-- <view class="main-box-my-tel">
					<image src="https://api.laotiele.com:9527/image/static/dianHua.png" mode="widthFix"></image>
				</view> -->
			</view>
			<view class="main-box-that" v-for="(item,i) in arr" :key="i" v-if="item.sid==0?true:false">
				<view class="main-box-that-top">
					<view class="main-box-that-top-left">
						<image src="https://api.laotiele.com:9527/image/static/mesimg/user.png" mode="widthFix"></image>
					</view>
					<view class="main-box-that-top-right">
						<view>{{item.username}}</view>
						<view>
							<text style="font-size: 25upx; color: #5A5A5A;">{{item.commentDate.split("T")[0]}} 发布 </text>
							<image v-for="count in item.commentScore" :key="count" src="https://api.laotiele.com:9527/image/static/xingYiDian.png" mode="widthFix"></image>
							<image v-for="count in (5-item.commentScore)" :key="count" src="https://api.laotiele.com:9527/image/static/xingWiDian.png" mode="widthFix"></image>
							
						</view>
					</view>
				</view>
				<view class="main-box-that-bottom">
					<text>
						{{item.commentContent}}
					</text>
				</view>
				<view>
					<image style="width: 33.3%;height: 200upx;" v-for="(child,o) in item.commentImg" :key='o' :src="url1+'/image/'+child" mode=""></image>
				</view>
			</view>
		</view>
		
		
		<view  v-show="!flag" class="main-box">
			<view class="main-box-my">
				<view class="main-box-my-image">
					<image :src="useUser.imgage" mode="aspectFill"></image>
				</view>
				<view class="main-box-my-main">
					<view class="main-box-my-main-top">
						<view>
							<text>{{useUser.name}}</text>
						</view>
						<view>
							<image v-for="count in xingJi" :key="count" src="https://api.laotiele.com:9527/image/static/xingYiDian.png" mode="widthFix"></image>
							<image v-for="count in (5-xingJi)" :key="count" src="https://api.laotiele.com:9527/image/static/xingWiDian.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="main-box-my-main-top">
						<view>
							<!-- <text>专业室内设计</text> -->
						</view>
						<view>
							<text style="color: #A5A5A5; font-size: 25upx;">综合评分 {{xingJi*2}} 分</text>
						</view>
					</view>
					<view>
						<text style="color: #A5A5A5; font-size: 25upx;">商家电话：</text>
						<text>{{useUser.tel}}</text>
					</view>
				</view>
				<view class="main-box-my-beiZhu"> 
				<!-- 专业设计师团队，多次获得装饰设计大奖，一心为您设计更好的家。                        -->
				</view>
				<!-- <view class="main-box-my-tel">
					<image src="https://api.laotiele.com:9527/image/static/dianHua.png" mode="widthFix"></image>
				</view> -->
			</view>
			<view class="main-box-that" v-for="(item,i) in arr" :key="i" v-if="item.sid!=0?true:false">
				<view class="main-box-that-top">
					<view class="main-box-that-top-left">
						<image :src="useUser.imgage" mode="aspectFill"></image>
					</view>
					<view class="main-box-that-top-right">
						<view>{{item.username}}</view>
						<view>
							<text style="font-size: 25upx; color: #5A5A5A;">{{item.commentDate.split("T")[0]}} 发布 </text>
							<image v-for="count in item.commentScore" :key="count" src="https://api.laotiele.com:9527/image/static/xingYiDian.png" mode="widthFix"></image>
							<image v-for="count in (5-item.commentScore)" :key="count" src="https://api.laotiele.com:9527/image/static/xingWiDian.png" mode="widthFix"></image>
							
						</view>
					</view>
				</view>
				<view class="main-box-that-bottom">
					<text>
						{{item.commentContent}}
					</text>
				</view>
				<view>
					<image style="width: 33.3%;height: 200upx;" v-for="(child,o) in item.commentImg" :key='o' :src="url1+'/image/'+child" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:true,
				xingJi:5,
				useUser:this.user,
				arr:[],
				url1:this.url1,
				useUrl:this.url1
			}
		},
		onLoad(options) {
		    this.get()
		},
		methods: {
			get:function(){
				let that=this;
				let usurl=that.url1+"/dinghai/comment/selectWorkComment";
				uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							userid:that.user.uid
						},
				    success: (res) => {
						console.log(res)
						if(res.statusCode==200){
							that.arr=res.data.flag
							for(let i=0; i<that.arr.length;i++){
								that.arr[i].commentImg=JSON.parse(that.arr[i].commentImg);
								that.arr[i].commentScore=Math.round(that.arr[i].commentScore)
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
			},
			back:function(){
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	.bg{
		width: 100%;
		position: fixed;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		background: #F53D4A;
		position: fixed;
		top: 0;
		z-index: 10;
	}
	
	.hader-box>image{
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 60%;
		left: 20upx;
		transform: translateY(-50%);
	}
	
	.hader-box-text{
		color: white;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.fenLei{
		position: fixed;
		top: 168upx;
		width: 100%;
		height: 60upx;
		box-shadow: 0 0 5px #CCCCCC;
		z-index: 10;
		background-color: #fff;
	}
	.fenLei image{
		width: 30upx;
		height: 40upx;
		position: absolute;
		left: 80upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.fenLei>view{
		width: 50%;
		display: inline-block;
		height: 100%;
		text-align: center;
		position: relative;
	}
	.fenLei>view>text{
		line-height: 60upx;
		color: #A5A5A5;
		font-size: 30upx;
	}
	.main-box{
		margin-top: 228upx;
		padding: 30upx 30upx;
		font-size: 30upx;
		min-height: 100vh;
	}
	.main-box-my{
		background-color: #fff;
		width: 94%;
		overflow: hidden;
		padding: 20upx  3%;
		border-radius:20upx;
	}
	.main-box-my-image{
		width: 25%;
		height: 150upx;
		float: left;
		position: relative;
	}
	.main-box-my-image>image{
		width: 130upx;
		height: 130upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.main-box-my-main{
		width: 75%;
		height: 150upx;
		float: left;
	}
	.main-box-my-main>view{
		float: left;
	}
	.main-box-my-main>.main-box-my-main-top{
		width: 50%;
		height: 100upx;
	}
	.main-box-my-main>.main-box-my-main-top>view>text{
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.main-box-my-main-top image{
		width: 30upx;
		height: 30upx;
	}
	.main-box-my-main-top>view{
		width: 100%;
		height: 50%;
	}
	.main-box-my-beiZhu{
		width: 100%;
		float: left;
		margin-top: 30upx;
	}
	.main-box-my-tel{
		height: 60upx;
		width: 100%;
		float: left;
		margin:20upx 0;
	}
	.main-box-my-tel>image{
		width: 60upx;
		height: 60upx;
		float: right;
		margin-right: 40upx;
	}
	.main-box-that{
		width: 94%;
		padding: 20upx 3%;
		overflow: hidden;
		background-color: #fff;
		border-radius: 20upx;
		margin-top: 30upx;
	}
	.main-box-that-top{
		height: 100upx;
		width: 100%;
	}
	.main-box-that-top-left,.main-box-that-top-right{
		height: 100%;
		float: left;
	}
	.main-box-that-top-left{
		width: 15%;
		position: relative;
	}
	.main-box-that-top-left>image{
		width: 60upx;
		height: 60upx;
		position: absolute;
		border-radius: 100%;
		left: 50%;
		transform: translate(-50%,0);
		
	}
	.main-box-that-top-right{
		width: 85%;
	}
	.main-box-that-top-right>view{
		width: 100%;
		height: 50%;
	}
	.main-box-that-top-right>view>text{
		margin-right: 30upx;
	}
	.main-box-that-top-right>view>image{
		width: 30upx;
		height: 30upx;
	}
	.main-box-that-bottom{
		width: 85%;
		margin-top: 20upx;
		float: right;
		margin-bottom: 40upx;
	}
</style>
