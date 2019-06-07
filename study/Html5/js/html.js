$(document).ready(function () {
    for (const key in list[0]) {
        const el = list[0][key];
        if (typeof (el) == 'string') {
            $('.content').append('<h3>' + el)
        } else {
            for (let i = 0; i < el.length; i++) {
                $('.content').append(`<h4 id="` + el[i].id + `">` + el[i].title).append('<table>');
                $('.Oul').append(`<li><a href="#` + el[i].id + `">` + el[i].title + `</a></li>`)
                if (el[i].id == i) {
                    for (let j = 0; j < el[el[i].id].content.page.length; j++) {
                        $('.content>table:eq(' + el[i].id + ')').append('<tr>');
                        $('.content>table:eq(' + el[i].id + ')>tr:eq(' + j + ')').append('<th>' + el[el[i].id].content.page[j].key);
                        $('.content>table:eq(' + el[i].id + ')>tr:eq(' + j + ')').append('<th>' + el[el[i].id].content.page[j].value);
                    }
                }
            }
        }
    }
    $(window).bind("scroll", function () {
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
        console.log(top)
        if (Math.round(top) > 100) {
            $('.toTop').css({
                'display': 'block'
            })
            $('.list').css({
                'display': 'block'
            })
        }
        if (Math.round(top) < 100) {
            $('.toTop').css({
                'display': 'none'
            })
            $('.list').css({
                'display': 'none'
            })
        }
        $('.toTop').click(function () {
            $('html , body').scrollTop(0);
        })
    });
    $('.btn').click(function () {
        if (window.localStorage) {
            localStorage.value = $('#return').html();
            location.href = '../../index.html'
        } else {
            alert('不支持Html5')
        }
    })
})