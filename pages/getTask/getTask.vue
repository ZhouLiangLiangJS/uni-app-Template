<template>
	<view>
		 <view class="hader-box">
		 	 <text class="hader-box-text" v-for="(item,index) in typegroup"  :key=index  @click="swtich(index)" :style="{'border-bottom': (item.judge ? '1px solid #fff;':'none')}">
				 {{item.name}}
			 </text>
		 </view>
		 
		 
		 <view v-if="judgepage == 2" class="content-one">
			 <view  class="content-padding content-div">
				 <text>工作地址:</text>
				 <input type="text"  v-model="adress" placeholder="请输入工作地址,例如:河南省郑州市....">
			 </view>
			 <view  class="content-padding content-div">
				 <text>预留电话:</text>
				 <input type="number"  v-model="tel" placeholder="请输入您的手机号,例如:157******04">
			 </view>
			 <view  class="content-padding content-div">
				 <text>开工时间:</text>
				 <input type="text" v-model="startdate" placeholder="请输入开工时间,例如:2019.11.20">
			 </view>
			 <view  class="content-padding content-div" >
				 <text>理想工期:</text>
				 <input type="text"  v-model="workDate" placeholder="请输入需要预期工作多少天,例如:10天">
			 </view>
			 <view  class="content-padding content-div">
				 <text>工种选择:</text>
				 <input type="text"  v-model="dtype" placeholder="请输入需要什么样的工人,例如:砌墙工">
			 </view>
			 <view  class="content-padding content-div">
				 <text>工作内容:</text>
				 <input type="text"  v-model="workContent" placeholder="请输入工作内容,例如:主要负责喷漆刷墙">
			 </view>
			<!-- <view  class="content-padding content-div">
				 <text>人数:</text>
				 <input type="number" v-model="people">
			 </view> -->
			 <view class="content-padding ">
				 <text class="beiZhu">备注:</text>
				 <textarea v-model="remarks" placeholder="备注内容"></textarea>
			 </view>
			 <view class="exit-btn1">
				 <text class="fl">预估价格：</text>
				 <input class="fl" type="number" v-model="price">
				 <text class="fl">元</text>
			</view>
			 <button class="exit-btn" @click="release">发布招工</button>
		 </view>
		 
		 
		 
		 
		 <view class="content-two" v-else-if="judgepage == 1">
		     <view  class="content-two-div" v-for="(item,i) in qdlist"  :key="i" v-if="item.orderstate==0?item.num!=item.people?true:false:false">
				 <view class="content-two-div-left">
					 <view class="content-two-div-left-1">
						 <text>服务类型：</text>
						 <text>{{item.type}}</text>
						 <text>工作内容：</text>
						 <text>{{item.workContent}}</text>
					 </view>
					 <view class="content-two-div-left-1">
						 <text>开工时间：</text>
						 <text>{{item.startdate}}</text>
						 <text>理想工期：</text>
						 <text>{{item.workDate}}</text>
					 </view>
					 <view class="content-two-div-left-3">
					 	<text>地址：</text>
					 	<text>{{item.adress}}</text>
					 </view>
					 <view class="content-two-div-left-3">
					 	<text>备注：</text>
					 	<text>{{item.remarks}}</text>
					 </view>
					 <view class="content-two-div-left-2">
					 	<text>预估价格：</text>
					 	<text>{{item.price}}元</text>
					 </view>
				 </view>
				 <view class="content-two-div-right">
					 <button @click="qiangDan(i)">
						 抢单
					 </button>
				 </view>
			 </view>
		 </view>
		 <audio :src="'https://api.laotiele.com:9527/image/dingDan.mp3'" ></audio>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:undefined,
				remarks:undefined,
				workContent:undefined,
				dtype:undefined,
				workDate:undefined,
				startdate:undefined,
				tel:undefined,
				adress:undefined,
				people:1,
				  // 输入的内容
				coninput : "",
				person : "",
				judgepage : 1,
				  // 判断抢单列表是否有值
				judgehava : true,
				typegroup : [
					{name : "开始抢单",judge : true},
					{name : "发布抢单",judge : false}
				],
				qdlist : [
					
				],
				hy:this.huiYuan111
			}
		},
		onLoad() {
			
		},
		onShow(){
			this.getRenGong();
			this.time1()
		},
		onPullDownRefresh(){
			this.getRenGong()
		},
		methods: {
			time1:function(){
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
						console.log(res)
						if(res.data.flag!=500){
							that.setTime1(res.data.aa.rolestart+res.data.aa.roletime)
							// setInterval(()=>{
							// 	that.setTime2(res.data.flag++)
							// },1000)
							that.setTime2(res.data.flag)
							that.setHuiyuan((res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false)
							that.hy=(res.data.aa.rolestart+res.data.aa.roletime)>=res.data.flag?true:false
						}else{
							that.setHuiyuan(false)
						}
				    },
					fail : function(err){
						uni.showToast({
							title:"服务器错误",
							icon:"none"
						});
					}
				});
			},
			qiangDan:function(i){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					console.log(this.hy)
					if(this.hy){
						let that=this;
						console.log(that.qdlist[i].id)
							let usurl=that.url1+"/dinghai/order/insertWorkOrder";
							uni.showLoading({  mask: true,   title: '正在抢单'  });
							uni.request({
								url: usurl,
								header:{
									"Content-Type" : "application/x-www-form-urlencoded"
								},
								method:'POST',
								data: {
									id:that.qdlist[i].id,
									useruid:that.user.uid,
									utel:that.user.tel,
									wuid:that.qdlist[i].useruid
								},
						    success: (res) => {
								if(res.statusCode==200){
									uni.navigateTo({
										url:"../mes/gongdan/yiqiangdan/yiqiangdan"
									})
								}else{
									uni.showToast({
										title:"网络错误",
										icon:"none"
									});
								}
						    },
							fail : function(err){
								uni.showToast({
									title:"网络错误",
									icon:"none"
								});
							}
						});
					}else{
						uni.showModal({
							fail() {
								
							},
							success(cont) {
								console.log(cont)
								if(cont.confirm){
									uni.navigateTo({
										url:'../mes/huiyuan/huiyuan'
									})
								}
							},
							content:'工人会员才可以抢单哦！确定要需要充值会员吗？',
							title:"温馨提示"
						})
					}
				}
			},
			swtich : function(index){
				for(var i =0;i<this.typegroup.length;i++){
					this.typegroup[i].judge = false;
				}
				this.typegroup[index].judge = true;
				
				this.judgepage = index+1;
			},
			
			//获取工人订单
			getRenGong:function(){
				let that=this;
					let usurl=that.url1+"/dinghai/order/selectAllOrder";
					uni.showLoading({  mask: true,   title: '正在加载'  });
					uni.request({
						url: usurl,
						header:{
							"Content-Type" : "application/x-www-form-urlencoded"
						},
						method:'POST',
						data: {
							
						},
				    success: (res) => {
						uni.showToast({
							title:"加载成功"
						});
						this.qdlist=res.data.flag
						console.log(this.qdlist)
						uni.stopPullDownRefresh()
				    },
					fail : function(err){
						uni.showToast({
							title:"服务器错误",
							icon:"none"
						});
						uni.stopPullDownRefresh()
					}
				});
			
			},
			release : function(){
				if(this.user=='未登录'){
					uni.navigateTo({
						url:'../login/index/index'
					})
				}else{
					uni.showLoading({  mask: true,   title: '正在加载'  });
					console.log(this.people,'=====',this.price)
					let that=this;
					if(this.remarks!=undefined&&this.price!=undefined&&this.people!=undefined&&this.adress!=undefined&&this.tel!=undefined&&this.startdate!=undefined&&this.workDate!=undefined&&this.dtype!=undefined&&this.workContent!=undefined){
						uni.request({
						    url: that.url1+"/dinghai/order/insertOrder",
							header:{
								"Content-Type" : "application/x-www-form-urlencoded"
							},
							method:'POST',
						    data: {
						        remarks:that.remarks,
								price:that.price,
								people:that.people,
								adress:that.adress,
								tel:that.tel,
								startdate:that.startdate,
								workDate:that.workDate,
								type:that.dtype,
								workContent:that.workContent,
								useruid:that.user.uid
						    },
						    success: (res,err) => {
								if(res.statusCode===200){
									uni.showToast({
										title : "发布成功",
										icon : "success"
									});
									uni.navigateTo({
										url:"../mes/gongdan/zhaogongzhong/zhaogongzhong"
									})
									that.price="";
									that.remarks="";
									that.workContent="";
									that.dtype="";
									that.workDate="";
									that.startdate="";
									that.tel="";
									that.adress="";
									// that.people="";
									console.log(res);
									that.judgepage=1;
									that.typegroup=[
										{name : "开始抢单",judge : true},
										{name : "发布抢单",judge : false}
									],
									that.getRenGong()
									
								}else{
									uni.showToast({
										title : "您的网络打了个盹！请稍后再试",
										icon:"none"
									});
									console.log(err)
								}
						    },
							fail : function(err){
								uni.showToast({
									title : "发布失败，服务器错误",
									icon:"none"
								});
								console.log(err);
							}
						});
					}else{
						uni.showToast({
							title : "请完整的填写您的信息和内容",
							icon : "none"
						});
					}
				}
				console.log()
			},
			// 抢单函数
		}
	}
</script>

<style>
	@import url("getTask.css");
</style>
