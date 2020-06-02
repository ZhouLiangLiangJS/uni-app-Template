<template>
	<view>
		 <view class="hader-box">
		 			 <image src="https://api.laotiele.com:9527/image/static/zuo.png" class="hader-box-back" @click="back"></image>
					 <view class="top-nav-right">
					 	<image class='top-find-leftic' src='https://api.laotiele.com:9527/image/static/find.png'></image>
					 	<input v-model="inpcont" maxlength="10" class='hinput' placeholder-class="phcolor" @input="inp" placeholder="搜索" confirm-type="search" @confirm="find"></input>
					 </view>
		 </view>
		 
		 
		 <view class="hot-find-box">
			 <view class="hot-find-box-title">热门搜索</view>
			 <view class="hot-find-con-gruop">
				<text>装修效果图</text>
				<text>装修报价表</text>
				<text>装修效果图</text>
			 </view>
		 </view>
		 
		 
		 
		 <view class="history-find-box">
			 <view class="history-find-title">
				 <view class="history-find-title-left">历史搜索</view>
				 <view class="history-find-title-right" @click="clearhisr">
					 <text>清空历史记录</text>
					 <image src="https://api.laotiele.com:9527/image/static/shanchu.png" style="width: 35upx;height: 35upx;margin-top: 8upx;"></image>
				 </view>
				 <view style="clear: both;"></view>
			 </view>
			 
			 <view class="hot-find-con-gruop">
			 	 <text v-for="(item,index) in history" :key='index'>{{item}}</text>
			 </view>
		 </view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				   //输入的内容
			    inpcont : "",
				   //历史搜索
				history : []
			}
		},
		onShow() {
			if(uni.getStorageSync('history') == ""){
				
			}else{
				this.history = uni.getStorageSync('history');
			}
		    
		},
		methods: {
			   // 返回首页
			back : function(){
			   uni.navigateBack({
			
			   });
			},
			   
			   
			inp : function(e){
				this.inpcont = e.detail.value;
			},
			
			find : function(){
				if(this.inpcont == ""){
				   uni.showToast({
				   	 title : "搜索不可以为空！",
					 icon : "none"
				   })
				}else{
					uni.navigateTo({
						url:'findEnd/findEnd?name='+this.inpcont
					})
					// 往搜索历史里插入内容
					this.history.splice(20)
				   this.history.push(this.inpcont);
				   uni.setStorageSync('history',this.history);
				   this.inpcont = "";
				}
				
			},
			   // find函数结束
			
			
			
			clearhisr : function(){
				var that = this;
				uni.showModal({
				        title: '请选择',
				        content: '是否要清空历史记录',
				        cancelText:'清空',
				        confirmText:'取消',
				        success(res){
				          if(res.cancel){
							  that.history = [];
							  uni.showToast({
							  	title: '已清空历史记录',
								icon : "success"
							  });
							  uni.clearStorageSync("history");
				             console.log("点击了确定");
				          }else if(res.confirm){
				             console.log("点击了取消");
				          }
				        }
				      });
			},
			  // clearhisr函数结束
			
		}
	}
</script>

<style>
	@import url("find.css");
	
</style>
