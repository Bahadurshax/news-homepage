const mobile_btn = document.querySelector('.mobile-btn');

mobile_btn.addEventListener('click', e => {
    let target = e.target.dataset.target;

    const menu_icon = e.target.tagName == 'BUTTON' ? e.target.firstElementChild : e.target;
    const target_menu = document.querySelector(`#${target}`);

    target_menu.classList.toggle('show');

    menu_icon.src = target_menu.classList.contains('show')
        ? 'assets/images/icon-menu-close.svg'
        : 'assets/images/icon-menu.svg';
});