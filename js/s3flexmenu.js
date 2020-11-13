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

    function HoverDelay (item)
    {
        var Time;

        item.addEventListener('mouseover', function (event) {
            this.classList.add('_opened');

            if (Time)
            {
                clearTimeout(Time);
            }
        });


        item.addEventListener('mouseleave', function (event)
        {
            var folder = this;
            Time = setTimeout(function () {RemoveOpened(folder);}, 800);
        });

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

            HoverDelay(menu_folder[i]);

        }

        var last = menu.children[0].childElementCount - 2;
        more.querySelector('ul.'+options.MoreDrapdawnClass).prepend(menu.children[0].children[last]);
    }


    function ReactPosition ()
    {

        submenu.forEach(function(item, i, arr)
        {

            var left = Math.ceil(item.getBoundingClientRect().left);
            var right = Math.ceil(item.getBoundingClientRect().right);

            // item.setAttribute('react-left', left);
            // item.setAttribute('react-right', right);



            //check direction

            if(left > window)
            {
                item.style.left = '100%';
                item.style.right = 'initial';
                item.setAttribute('direct', 'right');

            }else if(right > window)
            {

                item.style.right = '100%';
                item.style.left = 'initial';
                item.setAttribute('direct', 'left');

            }else if(item.getAttribute('direct') == 'left')
            {
                item.style.right = '100%';
                item.style.left = 'initial';
            }else  if(item.getAttribute('direct') == 'right')
            {
                item.style.left = '100%';
                item.style.right = 'initial';
            }

            //sometimes all your code contains stupid ifs

            var hasAttr = item.parentElement.parentElement.hasAttribute('direct');


            if(hasAttr)
            {
                var value = item.parentElement.parentElement.getAttribute('direct');
                item.setAttribute('direct', value);
            }

            if(item.getAttribute('direct') == 'left')
            {
                item.style.right = '100%';
                item.style.left = 'initial';
            }else  if(item.getAttribute('direct') == 'right')
            {
                item.style.left = '100%';
                item.style.right = 'initial';
            }

            item.classList.add('closed');
        });


        //.getBoundingClientRect()
    }


    ReactPosition ();
    const opt = new options();
    console.log(submenu);

    initFlexMenu(opt);


});