<template>
	<view>
		<view class="hader-box">
					 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <text class="hader-box-text">评价</text>
		</view>
		
		
		<view class="info1">
			<view class="info1-title">评价： </view>
			
		    <view class="info1-inp">
				<textarea v-model="pj" placeholder="效果非常好,师傅热心解答我的问题" />
			</view>
		</view>
		
		<view class="zhaoPian">
			<view class="show-sel-img" v-for="(item,index) in imgArr" :key=index style="position: relative;">
				 <image :src="item"></image>
				 <text @click="delimg(index)" style="position: absolute;top: 10upx;right: 0;opacity: 0.8;color: gray;">✕</text>
			 </view>
			<view class="send-img" @click="sel_img">
				<image class="send-img-image" src="https://api.laotiele.com:9527/image/static/zhaoxiangji.png"></image>
				<text class="send-img-text">图片</text>
			</view>
		</view>
		
		<view class="info2">
			 <view @click="changesty(index)" :key="index" class="info2-icon" v-for="(item,index) in icongroup" :style="{'background': (item.judge ? '#F53D4A;color:#fff':'#fff;color: #A4A4A4;')}">{{item.name}}</view>
		</view>
		
		
		<view class="info3">
			<view class="star-group">
				<text style="font-size: 14px;color: #707070;letter-spacing: 1px;float: left;margin-left: 40upx;">响应速度：</text>
				<view class="star-group-show">
					<image v-for="(item,index) in group1" :key="index" :src="item" @click="chagroup1(index)"></image>
				</view>
			</view>
			
			
			<view class="star-group">
				<text style="font-size: 14px;color: #707070;letter-spacing: 1px;float: left;margin-left: 40upx;">处理速度：</text>
				<view class="star-group-show">
					<image v-for="(item,index) in group2" :key="index" :src="item" @click="chagroup2(index)"></image>
				</view>
			</view>
			
			<view class="star-group">
				<text style="font-size: 14px;color: #707070;letter-spacing: 1px;float: left;margin-left: 40upx;">回复速度：</text>
				<view class="star-group-show">
					<image v-for="(item,index) in group3" :key="index" :src="item" @click="chagroup3(index)"></image>
				</view>
			</view>
			
			
			<view class="star-group">
				<text style="font-size: 14px;color: #707070;letter-spacing: 1px;float: left;margin-left: 40upx;">效率评星：</text>
				<view class="star-group-show">
					<image v-for="(item,index) in group4" :key="index" :src="item" @click="chagroup4(index)"></image>
				</view>
			</view>
		
		</view>
		
		<button class="exit-btn" @click="end">提交评价</button>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pj:null,
				group1  : ["https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png"],
			    group2  : ["https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png"],
			    group3  : ["https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png"],
			    group4  : ["https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png","https://api.laotiele.com:9527/image/static/star.png"],
			    icongroup : [
					{name : "技能熟练",judge : false},
					{name : "热心负责",judge : false},
					{name : "完全速度快",judge : false},
					{name : "风雨无阻",judge : false},
					{name : "收拾废材",judge : false},
					{name : "经久耐用",judge : false}
				],
				
				group1num:undefined,
				group2num:undefined,
				group3num:undefined,
				group4num:undefined,
				imgArr:[],
				reqImg:[],
				upData:[],
				id:"1",
				uid:null
			}
		},
		onLoad(id) {
		   this.id=id.id;
		   this.uid=id.uid;
		},
		methods: {
			end:function(){
				uni.showLoading({
					title:"正在发布",
					mask: true
				})
				if(this.pj!=null&&typeof this.group1num=="number" && typeof this.group2num=="number"&& typeof this.group3num=="number"&& typeof this.group4num=="number"){
					let that=this;
					let usurl=that.url1+"/dinghai/comment/comment/insertComment";
					uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								userid:that.uid,
								commentImg:JSON.stringify(that.upData),
								commentScore:(that.group1num+that.group2num+that.group3num+that.group4num)/4,
								commentContent:that.pj,
								label:JSON.stringify(that.icongroup),
								sid:Number(that.id),
								username:that.user.name
							},
					    success: (res) => {
							if(res.statusCode==200){
								uni.showToast({
									icon:"none",
									title:"发布成功"
								})
								uni.redirectTo({
									url:"../mes/geRenPingJia/geRenPingJia"
								})
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
						title:"请完整填写",
						icon:"none"
					})
				}
			},
			back : function(){
			   uni.navigateBack({
			  
			   });
			},
			
			// 选中标签时触发的事件
			changesty : function(index){
				console.log(this.icongroup[index].judge);
				 if(this.icongroup[index].judge == true){
					 this.icongroup[index].judge = false;
				 }else{
					 this.icongroup[index].judge = true;
				 }
			},
			
			chagroup1 : function(index){
				
				this.group1 = [];
				this.group1num=index
				for(var i = 0;i<=index;i++){
					this.group1.push("https://api.laotiele.com:9527/image/static/star_r.png");
				}
				for(var i= index;i<4;i++){
					this.group1.push("https://api.laotiele.com:9527/image/static/star.png");
				}	
			},
			
			chagroup2 : function(index){
				this.group2 = [];
				this.group2num=index
				
				for(var i = 0;i<=index;i++){
					this.group2.push("https://api.laotiele.com:9527/image/static/star_r.png");
				}
				for(var i= index;i<4;i++){
					this.group2.push("https://api.laotiele.com:9527/image/static/star.png");
				}	
			},
			sel_img : function(){
				var that = this;
				if(this.imgArr.length>=9){
					uni.showToast({
						title:"最多上传9张图",
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
							   // uni.getFileSystemManager().readFile({
							   //     filePath: res.tempFilePaths[0], //选择图片返回的相对路径
							   //     encoding: 'base64', //编码格式
							   //     success: res => { //成功的回调
								  //  let KuoZhan=thatRes.tempFilePaths[0].split(".")
								  //  console.log(KuoZhan[KuoZhan.length-1])
							   //         let base64 = 'data:image/'+KuoZhan[KuoZhan.length-1]+';base64,' + res.data //不加上这串字符，在页面无法显示的哦
							   // 			that.imgroup.push(base64);
										// that.reqImg.push(res.data);
										// console.log(that.imgroup,that.reqImg,that.imgArr)
							   //     },
								  //  fail:res=>{
									 //   console.log(1)
								  //  }
							   // })
								let uploadTask=uni.uploadFile({
							    url: that.url1+'/dinghai/Img/Img', //仅为示例，非真实的接口地址
								filePath:thatRes.tempFilePaths[0],
							    name: 'files',
								fileType:"image",
							    success: (uploadFileRes) => {
							        if(uploadFileRes.statusCode===200){
										that.imgArr.push(thatRes.tempFilePaths[0]);
										that.upData.push(uploadFileRes.data)
										console.log(that.upData)
										
									}else{
										uni.showToast({
											title: '上传图片失败请重试',
											icon:"none"
										});
									}
								}
								});
								uploadTask.onProgressUpdate((res) => {
									console.log('上传进度' + res.progress);
									console.log('已经上传的数据长度' + res.totalBytesSent);
									console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
								});
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
			
			delimg : function(index){
				this.imgArr.splice(index,1);
				this.upData.splice(index,1);
			},
			
			chagroup3 : function(index){
				this.group3 = [];
				this.group3num=index
				
				for(var i = 0;i<=index;i++){
					this.group3.push("https://api.laotiele.com:9527/image/static/star_r.png");
				}
				for(var i= index;i<4;i++){
					this.group3.push("https://api.laotiele.com:9527/image/static/star.png");
				}	
			},
			
			chagroup4 : function(index){
				this.group4 = [];
				this.group4num=index
				
				for(var i = 0;i<=index;i++){
					this.group4.push("https://api.laotiele.com:9527/image/static/star_r.png");
				}
				for(var i= index;i<4;i++){
					this.group4.push("https://api.laotiele.com:9527/image/static/star.png");
				}	
			},
		 }
}
</script>

<style>
	
	page{
		background: #F1F1F1;
	}
	
	.send-img{
		width: 225upx;
		height: 225upx;
		background: #eaeaea;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.send-img-image{
		width: 140upx;
		height: 120upx;
	}
	
	.send-img-text{
		color: #808080;
		font-size: 30upx;
	}
	
	.show-sel-img{
		width: 225upx;
		height: 225upx;
		float: left;
	}
	.show-sel-img>image{
		width: 100%;
		height: 100%;
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
		margin-left: 280upx;
	}
	
	.info1{
		width: 90%;
		margin: 230upx 5% 0 5%;
	}
	.info1-title{
		color: #A4A4A4;
		font-size: 30upx;
		margin-bottom: 10upx;
	}
	
	.info1-inp{
		width: 90%;
	    height: 300upx;
		background: #fff;
		font-size: 30upx;
		padding: 20upx 5%;
		letter-spacing: 1px;
	}
	.info1-inp>textarea{
		width: 100%;
		height: 100%;
	}
	.info2{
		width: 90%;
		height: 180upx;
		padding: 20upx;
		margin: 36upx auto 0;
	}
	
	.info2-icon{
		width: auto;
		height: 40upx;
		background: #fff;
		color: #A4A4A4;
		font-size: 30upx;
		border-radius: 6px;
		letter-spacing: 1px;
		line-height: 40upx;
		text-align: center;
		padding: 4px;
		float: left;
		margin-left: 50upx;
		margin-top: 30upx;
	}
	
	
	.info3{
		width: 90%;
		background: #fff;
		font-size: 30upx;
		letter-spacing: 1px;
		margin: 20upx 5%;
		
	}
	
	.star-group{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
	}
	
	.star-group-show>image{
		margin-left: 40upx;
		width: 36upx;
		height: 36upx;
	}
	
	.exit-btn{
		width: 90%;
		height: 70upx;
		background: #F53D4A;
		font-weight: 300;
		color: #fff;
		letter-spacing: 1px;
		line-height: 70upx;
		border-radius: 8px;
		margin-top: 80upx;
		margin-bottom: 80upx;
	}
	.zhaoPian{
		width: 675upx;
		margin: 0 auto;
	}
</style>
