$(document).ready(function(){
    //alert("content loaded");
    $('tr').on("click", function(){
        let str = this.id;
        let content = $("#" + str).html();
        $('#right-pane').html(content);
    })
})
