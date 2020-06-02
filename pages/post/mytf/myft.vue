<template>
	<view v-if="pageshow">
		<view class="hader-box">
			<image @click="f1()" src="https://api.laotiele.com:9527/image/static/zuo.png" mode="widthFix" class="zuo"></image>
			<text class="hader-box-text">发帖</text>
		</view>
		
		
		<view class="post-person-box">
			 <text class="post-person-text">发帖人：</text>
			 <text class="post-person-inp" >{{name}}</text>
			 <text class="post-person-send" :style="{'opacity': (judge ? '1.0':'0.6')}" @click="post">发布</text>
		</view>
		
		
		<view class="post-person-box" style="height: 180upx;">
			 <text class="post-person-text">内容：</text>
			 <textarea v-model="coninput" @input="coninp" class="post-person-inp" placeholder="输入想要发布的帖子" style="width: 560upx;height: 180upx;margin-top: 10upx;" />
		</view>
		
		<view style="width: 100%;height: auto;margin-left: 30upx;">
		     <view class="show-sel-img" v-for="(item,index) in imgArr" :key=index style="position: relative;">
				 <image :src="item" mode="aspectFill"></image>
				 <text @click="delimg(index)" style="position: absolute;top: -20upx;right: -20upx;opacity: 0.8;color: gray;z-index: 9;">❌</text>
			 </view>
			<view class="send-img" @click="sel_img">
				<image class="send-img-image" src="https://api.laotiele.com:9527/image/static/zhaoxiangji.png"></image>
				<text class="send-img-text">图片</text>
			</view>
		</view>
			
	</view>
	
	
	<view v-else>
		<view class="hader-box">
			
				<image @click="f1()" src="https://api.laotiele.com:9527/image/static/zuo.png" mode="widthFix" class="zuo"></image>
				
					 <text class="hader-box-text">发帖</text>
		</view>
		
		<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
			<view class="success">
				<image src="https://api.laotiele.com:9527/image/static/tz-success.png"></image>
			</view>
			<text style="margin-top: 60upx;">
				恭喜您！ 发帖成功
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageshow : true,
				judge : false,
				coninput : "",
				personinput : this.user.name||"未登陆",
				name:this.user.name||"未登陆",
				imgArr:[],
				upData:[],
				i:0
			}
		},
		onLoad() {
			
		},
		onShow(){
			this.pageshow = true;
			
			if(this.personinput == "" || this.coninput == ""){
				this.judge = false;
			}
	
		},
		methods: {
			f1:function(){
				uni.navigateBack({});
			},
			post : function(){
				if(this.judge == false){
					uni.showToast({
						title : "请完整填写发帖人和帖子内容！",
						icon : "none"
					});
				}else{
					let that=this;
					let usurl=that.url1+"/dinghai/Posted/Posted/insertPosted";
						uni.showLoading({  mask: true,   title: '正在发送'  });
						uni.request({
							url: usurl,
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
							data: {
								userImg:that.user.imgage,
								postedImg:JSON.stringify(that.upData),
								userId:that.user.uid,
								postedContent:that.coninput,
								username:that.name
							},
					    success: (res) => {
							console.log(res)
							uni.showToast({
								title : "发布成功",
								icon : "success"
							});
							this.coninput = "";
							this.personinput = "";
							this.pageshow = false;
					    },
						fail : function(err){
							uni.showToast({
								title:"您的网络开了小差哦！请稍后再试",
								icon:"none"
							});
						}
					});
					
				}
			},
			   // post函数结束
		    personinp : function(e){
				if(this.coninput != "" && e.detail.value !=""){
					this.judge = true;
				}else{
					this.judge = false;
				}
			},
			     // personinp函数结束
		    coninp : function(e){
				if(this.personinput != "" && e.detail.value !=""){
					this.judge = true;
				}else{
					this.judge = false;
				}
			},
			     // coninp函数结束
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
									console.log(uploadFileRes)
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
			
			//sel_img函数结束
			
			  // 删除现在选中的图片
		   delimg : function(index){
			   this.imgArr.splice(index,1)
			   this.upData.splice(index,1)
		   }
		}
	}
</script>

<style>
	.zuo{
		position: absolute;
		left: 20upx;
		top: 75upx;
		width: 40upx;
	}
	.hader-box{
		width: 100%;
		height: 168upx;
		line-height: 200upx;
		background: #F53D4A;
		text-align: center;
		color: #fff;
	}
	
	.post-person-box{
	    width: 100%;
		height: 260upx;
		margin-top: 20upx;
		padding: 20upx;
	}
	
	.post-person-text{
		margin-left: 40upx;
		float: left;
		font-size: 30upx;
	}
	
	.post-person-inp{
		color: #808080;
		font-size: 30upx;
		float: left;
	}
	
	.post-person-send{
		font-size: 35upx;
		border-radius: 20upx;
		padding: 4upx 18upx;
		background: #F53D4A;
		color: white;
		float: right;
		margin-right: 30upx;
	}
	
	.opy{
		opacity: 0.6;
	}
	
	.no-opy{
		opacity: 1;
	}
	
	.send-img{
		width: 220upx;
		height: 204upx;
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
		font-size: 35upx;
	}
	
	.show-sel-img{
		width: 220upx;
		height: 204upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		float: left;
	}	
	
	.show-sel-img>image{
		width: 100%;
		height: 100%;
	}
</style>
