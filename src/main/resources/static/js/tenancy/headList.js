
//门店市区地址样式
$(function() {
    $("body").click(function(e) {
        var target = $(e.target);
        $("#city").css("display","none");
        $("#city2").css("display","none");
        $("#fromStore").css("display","none");
        $("#toStore").css("display","none");
        $("#fromCity2").removeClass("tnc_border");
        $("#toCity").removeClass("tnc_border");
        $("#fromStoreName").removeClass("tnc_border");
        $("#toStoreName").removeClass("tnc_border");
        $("#fromHourMinute").removeClass("tnc_border");
        $("#toHourMinute").removeClass("tnc_border");
        if( $("#fromCity2").hasClass("tnc_input_citySD2") && !($("#fromCity2").hasClass("tnc_input_citySD")) ){
            $("#fromCity2").removeClass("tnc_input_citySD2");
            $("#fromCity2").addClass("tnc_input_citySD");
        }
        if( $("#toCity").hasClass("tnc_input_citySD2") && !($("#toCity").hasClass("tnc_input_citySD")) ){
            $("#toCity").removeClass("tnc_input_citySD2");
            $("#toCity").addClass("tnc_input_citySD");
        }
        if( $("#fromStoreName").hasClass("tnc_input_citySD2") && !($("#fromStoreName").hasClass("tnc_input_citySD")) ){
            $("#fromStoreName").removeClass("tnc_input_citySD2");
            $("#fromStoreName").addClass("tnc_input_citySD");
        }
        if( $("#toStoreName").hasClass("tnc_input_citySD2") && !($("#toStoreName").hasClass("tnc_input_citySD")) ){
            $("#toStoreName").removeClass("tnc_input_citySD2");
            $("#toStoreName").addClass("tnc_input_citySD");
        }
        if( $("#fromHourMinute").hasClass("tnc_input_citySD2") && !($("#fromHourMinute").hasClass("tnc_input_citySD")) ){
            $("#fromHourMinute").removeClass("tnc_input_citySD2");
            $("#fromHourMinute").addClass("tnc_input_citySD");
        }
        if( $("#toHourMinute").hasClass("tnc_input_citySD2") && !($("#toHourMinute").hasClass("tnc_input_citySD")) ){
            $("#toHourMinute").removeClass("tnc_input_citySD2");
            $("#toHourMinute").addClass("tnc_input_citySD");
        }
        if( target.is('#fromCity2') || target.is('#city *') && !(target.is("#city span")) ){
            $("#fromCity2").addClass("tnc_border");
            $("#fromCity2").removeClass("tnc_input_citySD");
            $("#fromCity2").addClass("tnc_input_citySD2");
            $("#city").css("display", "block");
        }
        if( target.is('#fromStoreName') || target.is('#fromStore *') && !(target.is("#fromStore_Name span"))) {
            $("#fromStoreName").addClass("tnc_border");
            $("#fromStoreName").removeClass("tnc_input_citySD");
            $("#fromStoreName").addClass("tnc_input_citySD2");
            $("#fromStore").css("display", "block");
        }
        if( target.is('#toCity') || target.is('#city2 *') && !(target.is("#city2 span")) ){
            $("#toCity").addClass("tnc_border");
            $("#toCity").removeClass("tnc_input_citySD");
            $("#toCity").addClass("tnc_input_citySD2");
            $("#city2").css("display", "block");
        }
        if( target.is('#toStoreName') || target.is('#toStore *') && !(target.is("#toStore_Name span"))) {
            $("#toStoreName").addClass("tnc_border");
            $("#toStoreName").removeClass("tnc_input_citySD");
            $("#toStoreName").addClass("tnc_input_citySD2");
            $("#toStore").css("display", "block");
        }
        if( target.is('#fromHourMinute') || target.is('#layui-laydate3 *')) {
            $("#fromHourMinute").addClass("tnc_border");
            $("#fromHourMinute").removeClass("tnc_input_citySD");
            $("#fromHourMinute").addClass("tnc_input_citySD2");
        }
        if( target.is('#toHourMinute') || target.is('#layui-laydate4 *')) {
            $("#toHourMinute").addClass("tnc_border");
            $("#toHourMinute").removeClass("tnc_input_citySD");
            $("#toHourMinute").addClass("tnc_input_citySD2");
        }
    });
});

//门店市级英文字母样式
$(function () {
    //26个英文字符点击事件的颜色切换
    $("#popup_title li").click(function () {
        $(this).siblings().removeClass("cur");
        $(this).addClass("cur");
        //将对应的面板显示出来，并隐藏其他面板
        $(this).parent().siblings().children().removeClass("cur");
        if ($(this).val() === 1) {
            $(this).parent().siblings().children().eq(0).addClass("cur");
        } else if ($(this).val() === 2) {
            $(this).parent().siblings().children().eq(1).addClass("cur");
        } else if ($(this).val() === 3) {
            $(this).parent().siblings().children().eq(2).addClass("cur");
        } else if ($(this).val() === 4) {
            $(this).parent().siblings().children().eq(3).addClass("cur");
        } else if ($(this).val() === 5) {
            $(this).parent().siblings().children().eq(4).addClass("cur");
        } else if ($(this).val() === 6) {
            $(this).parent().siblings().children().eq(5).addClass("cur");
        } else if ($(this).val() === 7) {
            $(this).parent().siblings().children().eq(6).addClass("cur");
        }
    });
    //26个英文字符点击事件的颜色切换
    $("#popup_title2 li").click(function () {
        $(this).siblings().removeClass("cur");
        $(this).addClass("cur");
        //将对应的面板显示出来，并隐藏其他面板
        $(this).parent().siblings().children().removeClass("cur");
        if ($(this).val() === 1) {
            $(this).parent().siblings().children().eq(0).addClass("cur");
        } else if ($(this).val() === 2) {
            $(this).parent().siblings().children().eq(1).addClass("cur");
        } else if ($(this).val() === 3) {
            $(this).parent().siblings().children().eq(2).addClass("cur");
        } else if ($(this).val() === 4) {
            $(this).parent().siblings().children().eq(3).addClass("cur");
        } else if ($(this).val() === 5) {
            $(this).parent().siblings().children().eq(4).addClass("cur");
        } else if ($(this).val() === 6) {
            $(this).parent().siblings().children().eq(5).addClass("cur");
        } else if ($(this).val() === 7) {
            $(this).parent().siblings().children().eq(6).addClass("cur");
        }
    });
});

//门店市级取车地址样式
function fromChooseCity(cid,cname) {
    $("#fromCity2").val(cname);
    $("#fromStoreName").val("请选择取车门店");
    carInfoTab_app.idClick=-1;
    $("#toCity").val(cname);
    $("#toStoreName").val("请选择取车门店");
    carInfoTab_app.idClick2=-1;
    $("#city").css("display", "none");
    $("#fromStore_Name").css("display","none");
    $("#fromStore_Detail").css("display","none");
    $("#toStore_Name").css("display","none");
    $("#toStore_Detail").css("display","none");
    $("#fromStore_panel span").removeClass("cur-city");
    $("#toStore_panel span").removeClass("cur-city");
    $("#fromCityId").val(cid);
    $("#toCityId").val(cid);
    fromAreaLoad(cid);
    toAreaLoad(cid);
}

//门店区级取车地址样式
function fromChooseStore(aid) {
    fromStoreLoad(aid);
    $("#fromStore_Name span").removeClass("cur-city");
    $("#fromStore_Name").css("display","block");
    $("#fromStore_panel span").on({
        mouseenter: function(){
            $(this).siblings("span").removeClass("cur-city");
            $(this).addClass("cur-city");
            $("#fromStore_Name").css("display","block");
            $("#fromStore_Detail").css("display","none");
        },
        mouseleave: function(){
            $(this).siblings("span").removeClass("cur-city");
            $(this).addClass("cur-city");
            $("#fromStore_Name").css("display","block");
            $("#fromStore_Detail").css("display","none");
        },
    });
}

//门店市级还车地址样式
function toChooseCity(cid,cname) {
    $("#toCity").val(cname);
    $("#city2").css("display", "none");
    $("#toStoreName").val("请选择取车门店");
    carInfoTab_app.idClick2=-1;
    $("#toStore_Name").css("display","none");
    $("#toStore_Detail").css("display","none");
    $("#toStore_panel span").removeClass("cur-city");
    $("#toCityId").val(cid);
    toAreaLoad(cid);
}

// 门店区级还车地址样式
function toChooseStore(aid) {
    toStoreLoad(aid);
    $("#toStore_Name span").removeClass("cur-city");
    $("#toStore_Name").css("display","block");
    $("#toStore_panel span").on({
        mouseenter: function(){
            $(this).siblings("span").removeClass("cur-city");
            $(this).addClass("cur-city");
            $("#toStore_Name").css("display","block");
            $("#toStore_Detail").css("display","none");
        },
        mouseleave: function(){
            $(this).siblings("span").removeClass("cur-city");
            $(this).addClass("cur-city");
            $("#toStore_Name").css("display","block");
            $("#toStore_Detail").css("display","none");
        },
    });
}


//加载市级地址
function addrLoad () {
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listCity",
        success: function (res) {
            carInfoTab_app.city = res.data;
        }
    })
}

//初次加载门店区级信息
function storeLoadByAreaId() {
    if(getCookie("取车区级Id")!=null){
        $("#fromCityId").val(getCookie("取车区级Id"))
    }
    if(getCookie("还车区级Id")!=null){
        $("#toCityId").val(getCookie("还车区级Id"))
    }
    var fromCid = $("#fromCityId").val();
    var toCid = $("#toCityId").val();
    // console.log(fromCid);
    // console.log(toCid);
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listArea",
        data:{
            id:fromCid
        },
        success: function (res) {
            carInfoTab_app.fromArea = res.data;
        }
    });
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listArea",
        data:{
            id:toCid
        },
        success: function (res) {
            carInfoTab_app.toArea = res.data;
        }
    });
}

//加载取车区级地址
var fromAreaLoad = function (cid) {
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listArea",
        data:{
            id:cid
        },
        success: function (res) {
            carInfoTab_app.fromArea = res.data;
            if(res.data.length === 0){
                layer.msg("该市暂无门店，以总部门店为取车门店和还车门店");
                $("#fromCity2").val("肇庆市");
                $("#fromStoreName").val("天宁北店");
                $("#toCity").val($("#fromCity2").val());
                $("#toStoreName").val($("#fromStoreName").val());
                carInfoTab_app.idClick = 1;
                carInfoTab_app.idClick2 = 1;
                setCookie("取车门店id",carInfoTab_app.idClick);
                setCookie("取车门店name",$("#fromStoreName").val());
                setCookie("取车城市name",$("#fromCity2").val());
                setCookie("还车门店id",carInfoTab_app.idClick2);
                setCookie("还车门店name",$("#toStoreName").val());
                setCookie("还车城市name",$("#toCity").val());
            }
        }
    });
};

//加载还车区级地址
var toAreaLoad = function (cid) {
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listArea",
        data:{
            id:cid
        },
        success: function (res) {
            carInfoTab_app.toArea = res.data;
            if (res.data.length === 0) {
                layer.msg("该市暂无门店，以取车门店作还车门店");
                $("#toCity").val($("#fromCity2").val());
                $("#toStoreName").val($("#fromStoreName").val());
                setCookie("还车门店id",carInfoTab_app.idClick);
                setCookie("还车门店name",$("#toStoreName").val());
                setCookie("还车城市name",$("#toCity").val());
            } else {
                if ($("#fromCity2").val() !== $("#toCity").val()) {
                    layer.msg("温馨提示: 选择异地还车将收取一定费用");
                }
            }
        }
    });
};

//加载取车门店
var fromStoreLoad = function (sid) {
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listStore",
        data:{
            id:sid
        },
        success: function (res) {
            carInfoTab_app.fromStoreName = res.data;
        }
    })
};

//加载还车门店
var toStoreLoad = function (sid) {
    $.ajax({
        type: "get",
        url: "/api/storeAddress/listStore",
        data:{
            id:sid
        },
        success: function (res) {
            carInfoTab_app.toStoreName = res.data;
        }
    })
};



