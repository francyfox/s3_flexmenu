document.addEventListener("DOMContentLoaded", function(event) {

    let window = document.documentElement.clientWidth,
        menu = document.querySelector('.menu'),
        menuOffsetWidth = menu.offsetWidth,
        menu_width = menu.scrollWidth,
        tag = menu.querySelectorAll('a'),
        menu_folder = menu.querySelectorAll('li'),

        more = document.createElement('li');

        more.classList.add('more-button');
        more.innerHTML = '<ul class="more-dropdawn"></ul>'

    for (var i = 0; i < menu_folder.length; i++)
    {
        menu_folder[i].addEventListener('mouseenter', function (e) {
            this.classList.add('_opened');
        });

        function RemoveOpened (folder)
        {
            folder.classList.remove('_opened');
        }

        menu_folder[i].addEventListener('mouseleave', function ()
        {
            var folder = this;
            setTimeout(function () { RemoveOpened(folder) }, 800); /*
             TODO: Stop timeout if mousenter
            */
        });



    }

    function AddMore ()
    {
        if (menuOffsetWidth < menu_width)
        {
            console.log('flexmenu activated');
        }
    }

    AddMore();
});