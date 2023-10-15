const hamburgers = document.querySelectorAll('.js-hamburger-button');
const sidebar = document.getElementById('sidebar');

let isSidebarOpen = false;

const toggleSidebar = () => {
   if (!isSidebarOpen) {
      sidebar.style.transform = 'translateX(0)';
   } else {
      sidebar.style.transform = 'translateX(-270px)';
   }

   isSidebarOpen = !isSidebarOpen;
};


hamburgers.forEach((hamburger) => {
   hamburger.addEventListener('click', toggleSidebar);
});
