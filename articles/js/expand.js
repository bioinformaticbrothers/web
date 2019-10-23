$(function() {
    $(".expand").on( "click", function() {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");
    });
});
function gotoarticle(page) {
    // $(id).load('articles.html#01');
    // $(id).next().slideToggle(200);
    // $expand = $(this).find(">:first-child");
    window.location.href = page;

}

$(function () {
    // console.log(window.location.hash);
    if(window.location.hash)
        $(window.location.hash).load(window.location.hash.substring(1));
        $(window.location.hash).next().slideToggle(200);
        $expand = $(this).find(">:first-child");
});