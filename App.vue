<script>
	export default {
		onLaunch: function() {
				let that=this;
				let usurl=that.url1+"/dinghai/Switch/updateSwitch";
				uni.request({
					url: usurl,
					header:{
						"Content-Type" : "application/x-www-form-urlencoded"
					},
					method:'POST',
					data: {
						
					},
			    success: (res) => {
					console.log(res.data.flag)
					this.flg(res.data.flag)
			    },
				fail : function(err){
					
				}
			});
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	body,text,view{
		font-family: PingFang-SC-Medium;
	}
	/*每个页面公共css */
</style>
