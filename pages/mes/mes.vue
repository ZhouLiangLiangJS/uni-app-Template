<template>
	<view>
		 <view class="hader-box">
		 		<text class="hader-box-text">个人中心</text>
		 </view>
		 
		 
		 <view class="login-header-box" @click="goinfo">
			  <image v-if="flagHuiYuan" src="../../static/zzzzzzzzzzzzzzzz/hg.png" style="width: 50upx;height: 50upx;transform: rotate(40deg);position: absolute;left: 390upx;bottom: 200upx;" mode="aspectFill"></image>
			  <image  :src="useUser.imgage" style="width: 120upx;height: 120upx;border-radius: 50%;margin-bottom: 30upx;" mode="aspectFill"></image>
			  <text :style="!flagHuiYuan?'color:#fff':'color:#FDC855'">{{flagHuiYuan?'尊贵VIP：':''}}{{useUser==='未登录'?'未登录':useUser.name}}</text>
			  <image style="position: absolute; bottom: -5upx;width: 100%;" src='https://api.laotiele.com:9527/image/static/bolang.png' mode="widthFix"></image>
			  <view class="geRenPingJia" @click="PingJia()">个人评价</view>
			  <image @click.stop="qianbao" style="position: absolute; bottom: 50upx;width: 80upx;height: 80upx;right: 20upx;" src='https://api.laotiele.com:9527/image/static/qian2.png' mode="widthFix"></image>
		 </view>
		 
		 <view class="mes-one">
			 <view class="mes-one-group" @click="ft" v-if='flg'>
				 <image src="https://api.laotiele.com:9527/image/static/mesimg/meft.png"></image>
				 <text>我的发帖</text>
			 </view>
			 
			 <view class="mes-one-group" @click="sf">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/mesf.png"></image>
			 		<text>我的身份</text>
			 </view>
			 
			 <view class="mes-one-group" @click="dz" >
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/medz.png"></image>
			 		<text>收货地址</text>
			 </view>
			 
			 <view class="mes-one-group" @click="tg">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/metg.png"></image>
			 		<text>我的推广</text>
			 </view>
			 
			 <view class="mes-one-group" @click="sz">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/mesz.png"></image>
			 		<text>设置</text>
			 </view>
			 
			 <view class="mes-one-group" @click="hy" >
			 		<image src="https://api.laotiele.com:9527/image/static/huiyuan.png"></image>
			 		<text>会员充值</text>
			 </view>
			 
			 <view class="mes-one-group" @click="rz" v-if='flg'>
			 		<image src="https://api.laotiele.com:9527/image/static/shangjiaruzhu.png"></image>
			 		<text>商家入驻</text>
			 </view>
			 
			 <view class="mes-one-group" @click="guanLi" v-if='flg'>
			 		<image src="https://api.laotiele.com:9527/image/static/guanLi.png"></image>
			 		<text>商家管理</text>
			 </view>
			 
			 
		 </view>
		 
		 <view class="mes-two" style="height: 180upx;">
		 	<view class="mes-two-group" @click="zgz" style="height: 100%;">
		 			<image src="https://api.laotiele.com:9527/image/static/mesimg/zhaogongzhong.png"></image>
		 			<text>招工中</text>
		 	</view>
			 
			 <view class="mes-two-group" @click="sgz" style="height: 100%;">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/shigongzhong.png"></image>
			 		<text>施工中</text>
			 </view>	
				  
			 <!-- <view class="mes-two-group" @click="dys">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/daiyanshou.png"></image>
			 		<text>待验收</text>
			 </view> -->		 
				   
		     <view class="mes-two-group" @click="dfk" style="height: 100%;">
		     		<image src="https://api.laotiele.com:9527/image/static/mesimg/daifukuan.png"></image>
		     		<text>待付款</text>
		     </view>	
			 
			 <view class="mes-two-group" @click="yjshu" style="height: 100%;">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/yijieshu.png"></image>
			 		<text>已结束</text>
			 </view>	 
			 
		     <!-- <view class="mes-two-group" @click="dpl">
		     		<image src="https://api.laotiele.com:9527/image/static/mesimg/daipinglun.png"></image>
		     		<text>待评论</text>
		     </view>	 -->
			
			
		 </view>
		 
		 <view class="mes-three" style="height: 180upx;margin-bottom: 20upx;">
		 	  <view class="mes-three-group" @click="yqd">
		 	  		<image src="https://api.laotiele.com:9527/image/static/mesimg/daiyanshou.png"></image>
		 	  		<text>已抢单</text>
		 	  </view>
			  
			 <view class="mes-three-group" @click="jxz">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/jinxingzhong.png"></image>
			 		<text>进行中</text>
			 </view>
			 
			 <view class="mes-three-group" @click="ywc">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/yiwancheng.png"></image>
			 		<text>已完成</text>
			 </view>
			 
			 <view class="mes-three-group" @click="yjs">
			 		<image src="https://api.laotiele.com:9527/image/static/mesimg/yijieshu.png"></image>
			 		<text>已结算</text>
			 </view>
				   
		 </view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				useUser : this.user,
				useUrl:this.url1,
				flagHuiYuan:false,
				flg:this.flg
			}
		},
		onLoad() {
			if(this.user=='未登录'){
				uni.navigateTo({
					url:'../login/index/index'
				})
			}
		},
		onShow() {
			this.useUser=this.user;
			let that=this;
				let usurl=that.url1+"/dinghai/user/selectAll";
				uni.request({
					url: usurl,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
					data: {
						uid:that.user.uid
					},
			    success: (res) => {
					if(res.data.flag!=500){
						that.flagHuiYuan=((res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false)
					}else{
						that.flagHuiYuan=false
					}
			    },
				fail : function(err){
					
				}
			});
		},
		methods: {
			qianbao:function(){
				if(this.useUser==="未登录"){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					uni.navigateTo({
						url:'jine/jine'
					})
				}
				
			},
			guanLi:function(){
				if(this.useUser==="未登录"){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					uni.navigateTo({
						url : "shangjiaruzhu/shangpin/shangpin"
					})
				}
				
			},
			goinfo : function(){
				if(this.useUser==="未登录"){
					uni.navigateTo({
						url : "../login/index/index"
					})
				}else{
					uni.navigateTo({
						url : "shezhi/info/info"
					})
				}
			},
			
		   ft : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   	uni.navigateTo({
			   		  url : "fatie/fatie?name=我的发帖"
			   	})
			   }
			   
		   },
		   
		   sf : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   	uni.navigateTo({
			   		  url : "shenfen/shenfen?name=我的身份"
			   	})
			   }
		   			   
		   },
		   
		   dz : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	  url : "dizhi/dizhi"
			   })
			   }
		   			   
		   },
		   
		   tg : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	  url : "tuiguang/tuiguang?name=我的推广"
			   })
			   }
		   			   
		   },
		   
		   sz : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	  url : "shezhi/shezhi?name=设置"
			   })
			   }
		   			   
		   },
		   
		   zgz : function(){
			    if(this.useUser==="未登录"){
			    	uni.navigateTo({
			    		url:'../login/index/index'
			    	})
			    }else{
			    uni.navigateTo({
			    	 url : "gongdan/zhaogongzhong/zhaogongzhong"
			    })
			    }
			   
		   },
		   
		   sgz : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/shigongzhong/shigongzhong"
			   })
			   }
			   
		   },
		   
		   dys : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/daiyanshou/daiyanshou"
			   })
			   }
			   
		   },
		   
		   dfk : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/daifukuan/daifukuan"
			   })
			   }
			   
		   },
		   
		   dpl : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	url : "gongdan/daipinglun/daipinglun"
			   })
			   }
			    
		   },
		   
		   yjshu : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/yijieshu/yijieshu"
			   })
			   }
			   
		   },
		   
		   yqd : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	  url : "gongdan/yiqiangdan/yiqiangdan"
			   })
			   }
			   
		   },
		   
		   jxz : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/jinxingzhong/jinxingzhong"
			   })
			   }
			   
		   },
		   
		   ywc : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	url : "gongdan/yiwancheng/yiwancheng"
			   })
			   }
			    
		   },
		   
		   yjs : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "gongdan/yijiesuan/yijiesuan"
			   })
			   }
			   
		   },
		   
		   
		   rz : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	  url : "shangjiaruzhu/shangjiaruzhu"
			   })
			   }
			   
		   },
		   
		   hy : function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "huiyuan/huiyuan"
			   })
			   }
			   
		   },
		   PingJia:function(){
			   if(this.useUser==="未登录"){
			   	uni.navigateTo({
			   		url:'../login/index/index'
			   	})
			   }else{
			   uni.navigateTo({
			   	 url : "geRenPingJia/geRenPingJia"
			   })
			   }
			   
		   }
		   
		   // gologin : function(){
			  //  if(uni.getStorageSync('userinfo') == ""){
				 //   uni.navigateTo({
				 //   	  url:'../login/index/index'
				 //   });
			  //  }else{
				 //   uni.navigateTo({
				 //   	  url : "shezhi/shezhi"
				 //   });
			  //  }
		   // }
		   
		},
		watch:{
			useUser(val){
				let that=this;
					let usurl=that.url1+"/dinghai/user/selectAll";
					uni.showLoading({  mask: true,   title: '正在加载'  });
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							uid:that.user.uid
						},
				    success: (res) => {
						uni.showToast({
							title:"加载成功"
						});
						if(res.statusCode==200){
							if(res.data.flag!=500){
								that.flagHuiYuan=((res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false)
							}else{
								that.flagHuiYuan=false
							}
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"服务器错误",
							icon:"none"
						});
					}
				});
			}
		}
	}
</script>

<style>
	@import url("mes.css");
</style>
