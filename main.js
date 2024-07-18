const showSideBar = document.querySelector('[data-showSideBar]')
const hideSideBar = document.querySelector('[data-hideSideBar]')
const sideBar = document.querySelector('[data-sideBar]')
showSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    sideBar.classList.remove('d-none');
});
hideSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    sideBar.classList.add('d-none');
});