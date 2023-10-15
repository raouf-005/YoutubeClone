const buttontooltipactive = document.querySelector('.js-record-button');
const tooltipactive = document.querySelector('.tooltip-active')

let isTooltipOpen = false;

const toggletooltip = () => {
   if (!isTooltipOpen) {
      tooltipactive.style.opacity = '0';
   } else {
      tooltipactive.style.opacity = '1';
   }

   isTooltipOpen = !isTooltipOpen;
};

buttontooltipactive.addEventListener('click',toggletooltip)
