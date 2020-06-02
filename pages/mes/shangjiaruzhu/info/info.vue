<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">商家基本信息</text>
		</view>
	
		
		<view class="info1">
			<view class="inp-style">
				<text class="inp-style-left">商家名称： </text>
				<input v-model="shopname" class="inp-style-right" type="text" placeholder="请输入商家名称" maxlength="12">
			</view>
			
			<view style="clear: both;"></view>
			
			<view class="inp-style">
				<text class="inp-style-left">行业分类： </text>
				<picker class="inp-style-right" @change="bindPickerChange" :value="index" :range="array" style="width: auto;float: left;">
					<text style="margin-top: 6upx;float: left;">{{types}}</text>
				</picker>
			</view>
			<view style="clear: both;"></view>
			
			<view class="inp-style">
				<text class="inp-style-left">店铺介绍： </text>
				<input v-model="introduce" class="inp-style-right" type="text" placeholder="描述最多50个字" maxlength="50">
			</view>
			<view style="clear: both;"></view>
		</view>
		
		
		<view class="info2" @click="map">
			<!-- <view class="inp-style">
				<text class="inp-style-left">关键字： </text>
				<input class="inp-style-right" type="text" placeholder="搜索关键字" maxlength="10">
			</view> -->
			
			<view style="clear: both;"></view>

			
			<view class="inp-style"  >
				<text class="inp-style-left">位置选择： </text>
				<text class="inp-style-right" style="width: 400upx;">{{dz}}</text>
			</view>
			<view style="clear: both;"></view>
		</view>
		
		
		<view class="info3">
			<view class="inp-style">
				<text class="inp-style-left">详细地址： </text>
				<input class="inp-style-right" v-model="adress" type="text" style="width: 400upx;">
			</view>
			<view style="clear: both;"></view>
		</view>
		
		
		<!-- <view class="sel_img" style="margin-top: 40upx;padding: 0 10%;">
			<view class="sel_img_title">
				<text style="font-size: 30upx;letter-spacing: 1px;">上传商铺图片： </text>
				<text style="font-size: 30upx;letter-spacing: 1px;margin-left: 10upx;color: #A5A5A5;">最多六张</text>
			</view>
			
			<view v-for="(item,index) in imgroup" :key='index' style=" position: relative; width: 106upx;height: 106upx;border-radius: 4px;float: left;margin-top: 24upx;margin-left: 20upx;">
				<image style="width: 100%;height: 100%;" :src="item"></image>
				<view @click="del(index)" style="position: absolute;top: -20upx; right: -20upx;font-size: 30upx;">❌</view>
			</view>
			
			<view @click="sel_img" class="add-img" style="float: left;">
				<text>+</text>
			</view>
			
			<view style="clear: both;"></view>
		</view> -->
	
	<view class="exit-btn" @click="sq">申请开通</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				 array: ['装修', '建材','家具','家纺'],
				 index: 0,
				 imgroup : [],
				 types:"装修",
				 jing:null,
				 wei:null,
				 dz:"",
				 shopname:"",
				 introduce:"",
				 adress:"",
				 img:""
			}
		},
		onLoad(img) {
		   this.img=img.image
		},
		methods: {
			map:function(){
				var that = this;
				
				uni.chooseLocation({
				    success: function (res) {
						
						var tmp = res;
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);		
						if(res.address!=''){
							that.dz=res.address;
							that.jing=res.longitude;
							that.wei=res.latitude;
						}else{
							uni.showToast({
								title: '请选择地点',
								icon : "none",
							});
						}
				    }
				});
			},
			del:function(i){
				this.imgroup.splice(i,1);
			},
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			sq:function(){
				
				if(this.jing!=null&&this.wei!=null&&this.dz!=""&&this.shopname!=""&&this.introduce!=""&&this.adress!=""){
					let that=this;
					let usurl=that.url1+"/dinghai/shop/addshop";
					uni.showLoading({
						title:"正在开通",mask: true
					})
					uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								shopname:that.shopname,
								adress:that.dz+that.adress,
								introduce:that.introduce,
								uid:that.user.uid,
								type:that.types,
								Longitude:that.jing,
								Latitude:that.wei,
								shopImg:that.img
							},
					    success: (res) => {
							
								console.log(res)
							if(res.statusCode==200){
								// console.log(res)
								if(res.data.code==200){
									uni.showToast({
										title:"开通成功",
										icon:"none"
									})
									uni.navigateBack({
										delta:2
									})
								}else{
									uni.showToast({
										title:"开通失败",
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
				}else{
					uni.showToast({
						icon:"none",
						title:"请完整填写"
					})
				}
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        },
			bindPickerChange: function(e) {
			            this.index = e.target.value;
					    this.types = this.array[this.index];
			        },
					
					
					  // 选择图片,最多6张
					sel_img : function(){
						var that = this;
						console.log(typeof that.imgroup[0])
						if(this.imgroup.length>=6){
							uni.showToast({
								title:"最多上传6张图",
								icon:"none"
							})
							
						}else{
							uni.chooseImage({
							   count: 1, //默认9
							   sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
							   sourceType: ['album'], //从相册选择
							   success: function (res) {
								   console.log(res.tempFilePaths,res);
								   let thatRes=res;
								   if(/(.jpg|.JPG|.jpeg|.JPEG|.PNG|.png)$/.exec(res.tempFilePaths[0])){
									   uni.getFileSystemManager().readFile({
									       filePath: res.tempFilePaths[0], //选择图片返回的相对路径
									       encoding: 'base64', //编码格式
									       success: res => { //成功的回调
										   let KuoZhan=thatRes.tempFilePaths[0].split(".")
										   console.log(KuoZhan[KuoZhan.length-1])
									           let base64 = 'data:image/'+KuoZhan[KuoZhan.length-1]+';base64,' + res.data //不加上这串字符，在页面无法显示的哦
									   			that.imgroup.push(base64);
									       }
									   })
								   }else{
									   uni.showToast({
									   	icon:"none",
										title:"上传格式错误！请上传jpg，jpeg，png格式的图片"
									   })
								   }
							   }
							});
						}
					},
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
		margin-left: 200upx;
	}
	
	.info1,.info2,.info3{
		width: 94%;
		box-shadow: 0px 0px 5px #ccc;
		border-radius: 8px;
		margin-left: 20upx;
		margin-top: 30upx;
		font-size: 30upx;
		letter-spacing: 1px;
	}
	.info1{
		margin-top: 190upx !important;
	}
	
	
	.inp-style{
		margin-top: 20upx;
	}
	
	.inp-style-left{
		margin-left: 30upx;
		margin-top: 6upx;
		float: left;
	}
	
	.inp-style-right{
		float: left;
	}
	
	
	.exit-btn{
		width: 100%;
		height: 100upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 100upx;
		text-align: center;
		margin-top: 100upx;
		position: fixed;
		bottom: 0;
		z-index: 10;
	}
	
	.add-img{
		margin-top: 24upx;
		width: 100upx;
		height: 100upx;
		border: 2px solid #A5A5A5;
		line-height: 100upx;
		text-align: center;
		color: #A4A4A4;
		margin-left: 20upx;
		
	}
	
</style>
