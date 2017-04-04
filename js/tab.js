    $(function () {

    $(".map").hide();
    $(".map:first").show();

    $(".tabList li").click(function () {
        $(".tabList li").removeClass("on");
        $(this).addClass("on");
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
        $(".map").hide();
    });
});
