
   let videotemplatehtml='';
   videopreview.forEach((videoelement)=>{     
   const videohtml=`
         <div class="video-preview">
            <div class="thumnail-frame">
               <img class="thumnail"  src="./thumnails/${videoelement.image}" alt="">
               <div class="video-time">${videoelement.time}</div>
            </div>
            <div class="under-thumnail">
               <div class="logo-frame">
                  <img class="channel-logo" src="./channellogo/${videoelement.channel.logo}" alt="">
               </div>
               <div class="description-frame">
                  <p class="video-title">${videoelement.title}</p>
                  <p class="channel-name">${videoelement.channel.name}</p>
                  <p class="video-stats">${videoelement.stats}</p>
               </div>
            </div>
         </div>`
   videotemplatehtml+=videohtml
});
   console.log(videotemplatehtml)
   document.querySelector('.js-video-template')
      .innerHTML=videotemplatehtml
