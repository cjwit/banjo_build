var createMenu = function() {
    var titles = $('#content').find('h2, h3');
    titles.each(function() {

        // create the link
        var link = $('<a></a>');
        var target = $(this).attr('id');
        link.text($(this).text());
        link.attr('href', "#" + target);

        // create list item and append link
        var item = $('<li></li>');
        item.append(link);

        // determine location for the link based on it's type (h2 or h3)
        if ($(this).is('h2')) {
            item.append($('<ul class="nav nav-stacked"></ul>'));
            $('#sidebar').append(item);
        } else {
            $('#sidebar>li:last-of-type ul').append(item);
        }
    });

    // homepage link
    $('#sidebar').append('<li><a href="https://cjwit.github.io" id="homepage">By Christopher Witulski</a></li>');

    // for boostrap tables
    $('table').addClass('table');

    $('body').scrollspy({
        target: '#sidebar-container',
        offset: 80
    });
}

$.get('banjo_build.md', function(text) {
    // console.log(marked(text));
    $("#content").html(marked(text));
    createMenu();
})
