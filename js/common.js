
$(document).ready(()=>{

    //blog
    $.ajax({
        type: "get",
        url:"/blog",
        headers: {"Content-Type": "application/json","Access-Control-Allow-Origin" :"*"},
        success : (data) => {


            data.forEach( (v,i)=> { // i is start with 0
                switch(i+1) {
                    case 1 :
                        $(".blog_contents_1_inner > span").text(v["pubDate"]);
                        $(".blog_contents_1_inner > p").text(v["title"]);
                        $('.blog_contents_1').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_1').css("background-position","center");
                        $('.blog_contents_1').css("background-repeat","no-repeat");
                        break;
                    case 2 :
                        $(".blog_contents_2_inner > span").text(v["pubDate"]);
                        $(".blog_contents_2_inner > p").text(v["title"]);
                        $('.blog_contents_2').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_2').css("background-position","center");
                        $('.blog_contents_2').css("background-repeat","no-repeat");
                        break;
                    case 3 :
                        $(".blog_contents_3_inner > span").text(v["pubDate"]);
                        $(".blog_contents_3_inner > p").text(v["title"]);
                        $('.blog_contents_3').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_3').css("background-position","center");
                        $('.blog_contents_3').css("background-repeat","no-repeat");
                        break;
                    case 4 :
                        $(".blog_contents_4_inner > .see_more_1").text(v["pubDate"]);
                        $(".blog_contents_4_inner > p").text(v["title"]);
                        $('.blog_contents_4').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_4').css("background-position","center");
                        $('.blog_contents_4').css("background-repeat","no-repeat");
                        break;
                    case 5 :
                        $(".blog_contents_5_inner > .see_more_1").text(v["pubDate"]);
                        $(".blog_contents_5_inner > p").text(v["title"]);
                        $('.blog_contents_5').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_5').css("background-position","center");
                        $('.blog_contents_5').css("background-repeat","no-repeat");
                        break;
                    case 6 :
                        $(".blog_contents_6_inner > .see_more_1").text(v["pubDate"]);
                        $(".blog_contents_6_inner > p").text(v["title"]);
                        $('.blog_contents_6').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_6').css("background-position","center");
                        $('.blog_contents_6').css("background-repeat","no-repeat");
                        break;

                }

            });
        },
        error : (error) =>{
            console.log(error);
        }
    })
    //blog end.
    //mail start

    $("#submit_btn").click(() => {
        const name = $("#studentName").val(),
            contact = $("#studentContact").val(),
            from = $("#studentEmail").val(),
            contents = $("#studentContents").val(),
            level = $("#studentLevel").val();
        if (name == "" || contact == "" , from == "" || contents == "" || level == "") {
            alert("학생의 정보를 모두 입력해 주세요");
            return;
        }

        if(!validateEmail(from)) {
            alert("연락 가능한 이메일을 작성해주세요");
            return ;
        }

        $.ajax({
            type: "POST",
            url: "/mail",
            data: JSON.stringify({
                "name": name,
                "contact": contact,
                "contents": contents,
                "from": from,
                "level": level
            }),
            headers : {"Content-Type" : "application/json"},
            success: data =>
                alert(data),
            error : error =>
                alert(error.responseJSON.message+' 관리자에게 문의해 주세요')

        })


    })



    //mail end.
})
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}