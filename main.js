import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
Vue.prototype.user="未登录";
Vue.prototype.setUser=function(user){
	Vue.prototype.user=user;
}
Vue.prototype.ard={
	longitude:0,
	latitude:0,
	txt:null
}
Vue.prototype.setArd=function(lnt,lat,txt){
	Vue.prototype.ard.longitude=lnt;
	Vue.prototype.ard.latitude=lat;
	Vue.prototype.ard.txt=txt;
}
Vue.prototype.lunBo=[];
Vue.prototype.setLunBo=function(arr){
	Vue.prototype.lunBo=arr
}
Vue.prototype.shijiancuo1=0;
Vue.prototype.shijiancuo2=0;
Vue.prototype.setTime1=function(i){
	Vue.prototype.shijiancuo1=i
}
Vue.prototype.setTime2=function(i){
	Vue.prototype.shijiancuo2=i
}
Vue.prototype.huiYuan111=false
Vue.prototype.setHuiyuan=function(i){
	Vue.prototype.huiYuan111=i
}
Vue.prototype.sf=true
Vue.prototype.setSf=function(i){
	Vue.prototype.sf=i
}
Vue.prototype.flg=false
Vue.prototype.flg=function(i){
	Vue.prototype.flg=(i==200?true:false)
}
// 本地地址
// Vue.prototype.url1 = "https://192.168.0.105:9527"
// Vue.prototype.WXpay = "https://192.168.0.105:8848/pay"
// 服务器地址
Vue.prototype.url1 = "https://api.laotiele.com:9527"
Vue.prototype.WXpay = "https://api.laotiele.com:8848/pay"

App.mpType = 'app'
let app = new Vue({
    ...App
})
app.$mount()
