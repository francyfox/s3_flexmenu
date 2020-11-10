document.addEventListener("DOMContentLoaded", function(event) {

    let window = document.documentElement.clientWidth,
        menu = document.querySelector('.menu'),
        menuOffsetWidth = menu.offsetWidth,
        menu_width = menu.scrollWidth,
        menu_folder = menu.querySelectorAll('li'),
        submenu = menu.children[0].querySelectorAll('ul'),
        MaxWidth = 0,
        TagsWidth = [];

    function options (more_text, MoreClass, MoreDrapdawnClass)
    {
        this.more_text = (more_text) ? more_text: '...',
            this.MoreClass = (MoreClass) ? MoreClass: 'more-button',
            this.MoreDrapdawnClass = (MoreDrapdawnClass) ? MoreDrapdawnClass: 'more-dropdawn';

        return this;
    }

    function RemoveOpened (folder)
    {
        folder.classList.remove('_opened');
    }

    function initFlexMenu ( options )
    {
        if (menuOffsetWidth < menu_width)
        {
            more = document.createElement('li');

            more.classList.add(options.MoreClass);
            more.innerHTML = '<a href="#">'+options.more_text+'</a><ul class=" '+options.MoreDrapdawnClass+' "></ul>';

            menu.querySelector('ul').append(more);
        }

        for (var i = 0, count = 0; i < menu_folder.length; i++)
        {

            if (menu_folder[i].parentNode.parentNode.classList.contains('menu')){
                TagsWidth[count] = menu_folder[i].offsetWidth;

                if (MaxWidth < menuOffsetWidth - more.offsetWidth){
                    MaxWidth += TagsWidth[count];
                }else{
                    more.querySelector("ul."+options.MoreDrapdawnClass).append(menu_folder[i]);
                }
                count++;
            }

            menu_folder[i].addEventListener('mouseover', function (e) {
                this.removeEventListener('mouseleave', function (){});
                this.classList.add('_opened');
            });

            menu_folder[i].addEventListener('mouseleave', function ()
            {
                var folder = this;
                setTimeout(function () {
                    RemoveOpened(folder)
                }, 800);
            });
        }

        var last = menu.children[0].childElementCount - 2;
        more.querySelector('ul.'+options.MoreDrapdawnClass).prepend(menu.children[0].children[last]);
    }

    function getReact ()
    {
        submenu.forEach(function(item, i, arr){
            console.log(item.parentElement);
            return console.log(item.parentElement.getBoundingClientRect());
            //.getBoundingClientRect()
        });
    }

    getReact();
    const opt = new options();
    initFlexMenu(opt);


});