var orderDetail = new Vue({
    el: '.mytotal',
    data:{
        order_detail:{}
    },
    created:function(){
        var self = this;
        self.order_detail = JSON.parse(decodeURIComponent(window.location.search.slice(1)));
        console.log(self.order_detail.car_info.tncBrand.name);
        self.initialize();
    },
    methods:{
        savePay:function(){
            console.log(123);
            savePay();
		},
        initialize:function(){
            initialize(this);
        },
        targetTo:function(){
            targetTo();
        }
    }
});
// var payDetail = new Vue({
//     el: '.payType',
//     data:{
//         order_detail:{}
//     },
//     created:function(){
//         var self = this;
//         self.order_detail = JSON.parse(decodeURIComponent(window.location.search.slice(1)));
//         console.log(self.order_detail);
//         initialize(self);
//     },
//     methods:{
//         initialize:function(){
//             initialize(this);
//         }
//     }
// });
// function targetTo(){
//     orderDetail.order_detail.order_detail = orderDetail.order_detail.order_detail.id;
//     var data = encodeURIComponent(JSON.stringify(orderDetail.order_detail));
//     window.location.href="/tenancy/p/myOrder?"+data;
// }
function savePay(){
    if($(".paymentTabUl").find("#WECHAT").hasClass("checked")) {
        $.ajax({
            type: "GET",
            url: "/api/order/pay/" + orderDetail.order_detail.order_detail.id,
            dataType: 'json',
            success: function (res) {
                if (res.code == 0) {
                    // 支付完成要删除id的cookie
                    $.cookie("id", "", {expires: -1});
                    orderDetail.order_detail.order_detail = res.order;
                    var data = {
                        car_info: orderDetail.order_detail.car_info,
                        order_detail: orderDetail.order_detail.order_detail,
                        car_number: res.carItem.number,
                        days: orderDetail.order_detail.days
                    }
                    var order = encodeURIComponent(JSON.stringify(data));
                    window.location.href = '/tenancy/p/paySuccess?' + order;
                } else {
                    handleAjax(res);
                }
            }
        })
    }else if($(".paymentTabUl").find("#p_alipay").hasClass("checked")){
        var orderData = {
            out_trade_no:orderDetail.order_detail.order_detail.id,//订单ID 必填 不能重复
            total_amount:orderDetail.order_detail.order_detail.total_amount, //订单价格 必填
            subject:orderDetail.order_detail.car_info.tncBrand.name,//订单名 必填
            body:orderDetail.order_detail.order_detail.description,//订单描述
            product_code:"FAST_INSTANT_TRADE_PAY"
            // out_trade_no:225,//订单ID 必填 不能重复
            // total_amount:168, //订单价格 必填
            // subject:'奥迪K2',//订单名 必填
            // body:'车辆整备费:20',//订单描述
            // product_code:"FAST_INSTANT_TRADE_PAY"
        }
        $.ajax({
            type:"POST",
            url:"/myPay",
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify(orderData),
            success:function (data) {
                $("body").html(data);
            }
        })
    }else{
        layer.msg("请选择一种支付方式！",{time:1200},function(){});
    }
}
function initialize(self){
    console.log(self.order_detail.order_detail);
    $.ajax({
        type: "GET",
        url: "/api/order/getOrder/"+self.order_detail.order_detail,
        dataType:'json',
        success: function(res) {
            if(res.code == 0){
                self.order_detail.order_detail = res.order;
                console.log(self.order_detail);
                console.log("获取订单成功");
            }else{
                handleAjax(res);
            }
        }
    })
}
$(document).ready(function(){
    $(".paymentTabUl li").each(function(i) {
    $(this).click(function() {
                    if(i==0){
                        $(".paymentTabUl").find("li").eq(1).removeClass("checked"),
						$(".paymentTabUl").find("li").eq(0).addClass("checked")
                    }else{
                        $(".paymentTabUl").find("li").eq(0).removeClass("checked"),
						$(".paymentTabUl").find("li").eq(1).addClass("checked")
                    }
                })
})
$("#orderDetail").click(function(){
        orderDetail.order_detail.order_detail = orderDetail.order_detail.order_detail.id;
        var data = {
            order_detail:orderDetail.order_detail,
            index:'payPage'
        }
        var order = encodeURIComponent(JSON.stringify(data));
        this.href="/tenancy/p/myOrder?"+order;
    })
})
