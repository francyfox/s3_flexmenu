document.addEventListener("DOMContentLoaded", function(event) {

    let window = document.documentElement.clientWidth,
        menu = document.querySelector('.menu'),
        menuOffsetWidth = menu.offsetWidth,
        menu_width = menu.scrollWidth,
        tag = menu.querySelectorAll('a'),
        menu_folder = menu.querySelectorAll('li'),
        MaxWidth = 0,
        TagsWidth = [];

        more = document.createElement('li');

        more.classList.add('more-button');
        more.innerHTML = '<a href="#">...</a><ul class="more-dropdawn"></ul>';


    function RemoveOpened (folder)
    {
        folder.classList.remove('_opened');
    }

    if (menuOffsetWidth < menu_width)
    {
        menu.querySelector('ul').append(more);
    }

    for (var i = 0, count = 0; i < menu_folder.length; i++)
    {

        if (menu_folder[i].parentNode.parentNode.classList.contains('menu')){
            TagsWidth[count] = menu_folder[i].offsetWidth;

            if (MaxWidth < menuOffsetWidth - more.offsetWidth){
                MaxWidth += TagsWidth[count];
            }else{
                more.querySelector('ul.more-dropdawn').append(menu_folder[i]);
            }
            count++;
        }

        menu_folder[i].addEventListener('mouseenter', function (e) {
            this.classList.add('_opened');
        });

        menu_folder[i].addEventListener('mouseleave', function ()
        {
            var folder = this;
            setTimeout(function () { RemoveOpened(folder) }, 800); /*
             TODO: Stop timeout if mousenter
            */
        });
    }

    var last = menu.children[0].childElementCount - 2;
    more.querySelector('ul.more-dropdawn').prepend(menu.children[0].children[last]);

});