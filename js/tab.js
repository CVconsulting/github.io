    $(function () {

    $(".map:first").show();

    $(".tabList li").click(function () {
        $(".tabList li").removeClass("on");
        $(this).addClass("on");
        $(".map").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
    });
});
