/**
 * 项目JS主入口
 * 依赖layui的layer和form模块
 */
layui.define(['layer','form','element'],function (exports) {
    var layer=layui.layer,
        form=layui.form(),
        element=layui.element();

    exports('index',{}); //这里是模块输出的核心，模块名必须和use时的模块名是一致的。
});
var path={
    userInfo:"../../data/userInfo.json",
    advSite:"../../data/adv_site.json"
};

$(function () {
    function appendTable(data) {
        var $tbody=$("<tbody></tbody>");
        if(data instanceof Array) {
            $.each(data, function (index, item) {
                var $tr = $("<tr></tr>");
                $.each(item, function (index, item) {
                    var $td = $("<td></td>");
                    $td.append(item);
                    $tr.append($td);
                });
            })
        }
        else {
            var $tr=$("<tr></tr>");
            $.each(data,function (index,item) {
                if(index!="userName"){
                    var $td = $("<td></td>");
                    $td.append(item);
                    $tr.append($td);
                }
            });
        }
        $tbody.append($tr);
        return $tbody;
    }
    $.ajax({type:"GET",
        url:path.userInfo,
        data:"json",
        success:function (data) {
            var $tbody=appendTable(data);
            var $table=$(".layui-table");
            $table.append($tbody);
            console.log("加载已完成");
        }
    })
});