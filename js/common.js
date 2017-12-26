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
                        $(".blog_hover_1 > span").text(v["pubDate"]);
                        $(".blog_hover_1 > p").text(v["title"]);
                        //$('.blog_contents_1').css("background-image","url(./img/"+v['thumbnail']+")");
                        $('.blog_contents_1').css("background-position","center");
                        $('.blog_contents_1').css("background-repeat","no-repeat");
                        $('.blog_hover_wrap_1 > a').attr("href",v['link']);
                        break;
                    case 2 :
                        $(".blog_hover_2 > span").text(v["pubDate"]);
                        $(".blog_hover_2 > p").text(v["title"]);
                        //$('.blog_contents_2').css("background-image","url(./img/"+v['thumbnail']+")");
                        $('.blog_contents_2').css("background-position","center");
                        $('.blog_contents_2').css("background-repeat","no-repeat");
                        $('.blog_contents_2 > a').attr("href",v['link']);
                        break;
                    case 3 :
                        $(".blog_hover_3 > span").text(v["pubDate"]);
                        $(".blog_hover_3 > p").text(v["title"]);
                        //$('.blog_contents_3').css("background-image","url(./img/"+v['thumbnail']+")");
                        $('.blog_contents_3').css("background-position","center");
                        $('.blog_contents_3').css("background-repeat","no-repeat");
                        $('.blog_contents_3 > a').attr("href",v['link']);
                        break;
                    case 4 :
                        $(".blog_hover_4 > .see_more_1").text('2017/12/12');
                        $(".blog_hover_4 > p").text('For What do we teach?');
                        $('.blog_contents_4 > img').css("src","img/columbia1.jpg");
                        // $('.blog_contents_4').css("background-position","center");
                        // $('.blog_contents_4').css("background-repeat","no-repeat");
                        $('.blog_contents_4 > a').attr("href",'https://blog.naver.com/jbsat/221161483851');

                        /*
                        lagecy
                        console.log("blog_hover_4",v['pubDate']);
                        $(".blog_hover_4 > .see_more_1").text(v["pubDate"]);
                        $(".blog_hover_4 > p").text(v["title"]);
                        $('.blog_contents_4').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_4').css("background-position","center");
                        $('.blog_contents_4').css("background-repeat","no-repeat");
                        $('.blog_contents_4 > a').attr("href",v['link']);*/
                        break;
                    case 5 :
                        $(".blog_hover_5 > .see_more_1").text('2016/11/30');
                        $(".blog_hover_5 > p").text('2016 Winter AP 수업');
                        // $('.blog_contents_5').css("background-image","url(/img/apjbedu.jpg)");
                        // $('.blog_contents_5').css("background-position","center");
                        // $('.blog_contents_5').css("background-repeat","no-repeat");
                        $('.blog_contents_5 > a').attr("href",'https://blog.naver.com/jbsat/220874238729');

                        /*
                        lagecy
                        console.log("blog_hover_5",v['pubDate']);
                        $(".blog_hover_5 > .see_more_1").text(v["pubDate"]);
                        $(".blog_hover_5 > p").text(v["title"]);
                        $('.blog_contents_5').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        $('.blog_contents_5').css("background-position","center");
                        $('.blog_contents_5').css("background-repeat","no-repeat");
                        $('.blog_contents_5 > a').attr("href",v['link']);
                        */
                        break;
                    case 6 :

                        $(".blog_hover_6 > .see_more_1").text('2017/4/25');
                        $(".blog_hover_6 > p").text('부산 SAT, JB를 만나면 참 쉬워요');
                        $('.blog_contents_6').css("background-image","url(/img/newsatprep.jpg)");
                        $('.blog_contents_6').css("background-position","center");
                        $('.blog_contents_6').css("background-repeat","no-repeat");
                        $('.blog_contents_6 > a').attr("href",'https://blog.naver.com/jbsat/220991756792');

                        //lagecy
                        // console.log("blog_hover_6",v['pubDate']);
                        // $(".blog_hover_6 > .see_more_1").text(v["pubDate"]);
                        // $(".blog_hover_6 > p").text(v["title"]);
                        // $('.blog_contents_6').css("background-image","url(./blogThumbnail/"+v['thumbnail']+")");
                        // $('.blog_contents_6').css("background-position","center");
                        // $('.blog_contents_6').css("background-repeat","no-repeat");
                        // $('.blog_contents_6 > a').attr("href",v['link']);
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