window.onload = function(){
    var xmlHttp;

    function createXMLHttpRequest() {
        if(window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } else if(window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
    }

    function call() {
        createXMLHttpRequest();
        var url = "blog";
        xmlHttp.onreadystatechange = loader;
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }

    function loader() {
        if(xmlHttp.readyState == 4) {
            if(xmlHttp.status == 200) {
                var v = JSON.parse(xmlHttp.responseText);
                console.log(v);
                console.log(v[0]["title"]);
                $(".blog_hover_1 > span").text(v[0]["pubDate"]);
                $(".blog_hover_1 > p").text(v[0]["title"]);
                $('.blog_contents_1 > img').attr("src","./img/"+v[0]['thumbnail']+"");
                $('.blog_hover_wrap_1 > a').attr("href",v[0]['link']);

                $(".blog_hover_2 > span").text(v[1]["pubDate"]);
                $(".blog_hover_2 > p").text(v[1]["title"]);
                $('.blog_contents_2 > img').attr("src","/img/"+v[1]['thumbnail']+"");
                $('.blog_contents_2 > a').attr("href",v[1]['link']);

                $(".blog_hover_3 > span").text(v[2]["pubDate"]);
                $(".blog_hover_3 > p").text(v[2]["title"]);
                $('.blog_contents_3 > img').attr("src","./img/"+v[2]['thumbnail']+"");
                $('.blog_contents_3 > a').attr("href",v[2]['link']);
            }
        }
    }

    call();

    //blog
    // $.ajax({
    //     type: "get",
    //     url:"/blog",
    //     headers: {"Content-Type": "application/json","Access-Control-Allow-Origin" :"*"},
    //     success : function(data) {
    //
    //
    //
    //         data.forEach( (v,i)=> { // i is start with 0
    //
    //             switch(i+1) {
    //                 case 1 :
    //                     $(".blog_hover_1 > span").text(v["pubDate"]);
    //                     $(".blog_hover_1 > p").text(v["title"]);
    //                     $('.blog_contents_1 > img').attr("src","./img/"+v['thumbnail']+"");
    //                     // $('#blogThumbnail1').css("background-position","center");
    //                     // $('#blogThumbnail1').css("background-repeat","no-repeat");
    //                     $('.blog_hover_wrap_1 > a').attr("href",v['link']);
    //                     break;
    //                 case 2 :
    //                     $(".blog_hover_2 > span").text(v["pubDate"]);
    //                     $(".blog_hover_2 > p").text(v["title"]);
    //                     $('.blog_contents_2 > img').attr("src","/img/"+v['thumbnail']+"");
    //                     $('#blogThumbnail1').css("background-position","center");
    //                     $('#blogThumbnail1').css("background-repeat","no-repeat");
    //                     $('.blog_contents_2 > a').attr("href",v['link']);
    //                     break;
    //                 case 3 :
    //                     $(".blog_hover_3 > span").text(v["pubDate"]);
    //                     $(".blog_hover_3 > p").text(v["title"]);
    //                     $('.blog_contents_3 > img').attr("src","./img/"+v['thumbnail']+"");
    //                     // $('.blog_contents_3').css("background-position","center");
    //                     // $('.blog_contents_3').css("background-repeat","no-repeat");
    //                     $('.blog_contents_3 > a').attr("href",v['link']);
    //                     break;
    //
    //             }
    //
    //         });
    //     },
    //     error : function(error) {
    //         alert(error);
    //     }
    // })
    //blog end.
    //mail start

    $("#submit_btn").click( function() {
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
            success: function(data) {
                alert(data)
            },
            error : function (error) {
                alert(error.responseJSON.message + ' 관리자에게 문의해 주세요')
            }

        })


    })



    //mail end.
};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}