<template>
	<view >
		 <view class="hader-box">
			 <image @click="back" src="https://api.laotiele.com:9527/image/static/zuo.png" mode="widthFix"></image>
		 	 <text class="hader-box-text">
				修改详情
			 </text>
		 </view>
		 
		 
		 <view class="content-one">
			 <view  class="content-padding content-div">
				 <text>工作地址:</text>
				 <input type="text"  v-model="adress">
			 </view>
			 <view  class="content-padding content-div">
				 <text>预留电话:</text>
				 <input type="text"  v-model="tel">
			 </view>
			 <view  class="content-padding content-div">
				 <text>开工时间:</text>
				 <input type="text" v-model="startdate">
			 </view>
			 <view  class="content-padding content-div">
				 <text>理想工期:</text>
				 <input type="text"  v-model="workDate">
			 </view>
			 <view  class="content-padding content-div">
				 <text>工种选择:</text>
				 <input type="text"  v-model="dtype">
			 </view>
			 <view  class="content-padding content-div">
				 <text>工作内容:</text>
				 <input type="text"  v-model="workContent">
			 </view>
			 <view  class="content-padding content-div">
				 <text>人数:</text>
				 <input type="text" v-model="people">
			 </view>
			 <view class="content-padding ">
				 <text class="beiZhu">备注:</text>
				 <textarea v-model="remarks"></textarea>
			 </view>
			 <view class="exit-btn1">
				 <text class="fl">预估价格：</text>
				 <input class="fl" type="text" v-model="price">
				 <text class="fl">元</text>
			</view>
			 <button  class="exit-btn">确认修改</button>
		 </view>
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
				people:undefined,
				  // 输入的内容
				coninput : "",
				person : "",
				qdlist : [
					
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			back : function(){
			   uni.navigateBack({
			
			   });
			}
		},
	}
</script>

<style>
	.hader-box{
			width: 100%;
			height: 168upx;
			background: #F53D4A;
			display: flex;
			line-height: 120upx;
			position: fixed;
			z-index: 10;
			top: 0;
	}
	.hader-box>image{
		width: 50upx;
		margin-top: 75upx;
		margin-left: 3%;
	}
	
	.hader-box-text{
		opacity: 0.9;
		color: #fff;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	
	
	.content-one{
		width: 100%;
		height: auto;
		margin-top: 168upx;
	}
	.content-padding{
		padding: 20px 5%;
	}
	.content-div{
		
	}
	.content-div>text{
		float: left;
		width: 20%;
		font-size: 12px;
		color: #A5A5A5;
	}
	.content-div>input{
		font-size: 12px;
		width: 70%;
		float: left;
		background-color: #EEEEEE;
		color: #808080;
		padding: 0 5%;
	}
	.beiZhu{
		font-size: 12px;
		color: #A5A5A5;
	}
	.content-padding>textarea{
		color: #808080;
		background-color: #EEEEEE;
		width: 90%;
		padding: 5%;
		font-size: 12px;
		height: 175px;
		margin: 20px 0 100px 0;
	}
		
		
		.exit-btn{
			width: 100%;
			height: 120upx;
			background: #F53D4A;
			font-weight: 300;
			color: #fff;
			letter-spacing: 1px;
			line-height: 120upx;
			border-radius: 0;
			position: fixed;
			bottom: 0;
			z-index: 10;
		}
		.exit-btn1{
			width: 100%;
			height: 120upx;
			background: #EB6100;
			font-weight: 300;
			color: #fff;
			letter-spacing: 1px;
			line-height: 120upx;
			border-radius: 0;
			position: fixed;
			bottom: 120upx;
			z-index: 10;
			padding-left: 150rpx;
		}
		.exit-btn1>input{
			width: 80px;
			border-bottom: 1px solid #ffffff;
			margin: 15px 0 0 0;
		}
	.content-three{
		margin-top: 168upx;
		display: flex;
		justify-content: space-around;
	}	
		
	.content-three>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}	
		
		.content-three>view>image{
			
			width: 100upx;
			height: 100upx;
		}
		.content-two{
			margin-top: 168upx;
		}
		
	
		.content-two-div{
			width: 90%;
			padding: 2%;
			margin: 20rpx 3%;
			box-shadow: 0px 0px 6px #A4A4A4;
			overflow: hidden;
			font-size: 27rpx;
		}
		
		.content-two-div-left{
			float: left;
			width: 80%;
		}
		.content-two-div-left text{
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			display: inline-block;
		}
		.content-two-div-left-1>text:nth-child(odd){
			color: #808080FF;
			width: 25%;
		}
		.content-two-div-left-1>text:nth-child(even){
			font-size: 30rpx;
			color: #000000FF;
			width: 25%;
		}
		.content-two-div-left-2>text:nth-child(odd){
			color: #808080FF;
			width: 25%;
		}
		.content-two-div-left-2>text:nth-child(even){
			font-size: 40rpx;
			color: #F53D4AFF;
			width: 75%;
		}
		.content-two-div-left-3>text:nth-child(odd){
			
			color: #808080FF;
			width: 15%;
		}
		.content-two-div-left-3>text:nth-child(even){
			font-size: 30rpx;
			color: #000000FF;
			width: 85%;
		}
		.content-two-div-right{
			float: left;
			width: 20%;
			height: 100%;
			position: relative;
		}
		.content-two-div-right>button{
			width: 100%;
			background-color:#F53D4A ;
			color: #fff;
			font-size: 30rpx;
			padding: 0;
			position: absolute;
			top: 90rpx;
		}
		.success{
			width: 540upx;
			height: 450upx;
			margin-left: -80upx;
			margin-top: 60upx;
		}
		
		
		.fl{
			float: left;
		}
</style>
