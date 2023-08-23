// VIDEO LOADING

// const introVideo = document.querySelector('.intro video')

// introVideo.addEventListener('loadeddata', function() {
//       var videos = [].slice.call(document.querySelectorAll("video.lazy"));

//         var videoObserver = new IntersectionObserver(function(entries, observer) {
//           entries.forEach(function(video) {
//               // video.poster = video.dataset.poster;
//               for (var source in video.target.children) {
//                 var videoSource = video.target.children[source];
//                 if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
//                   videoSource.src = videoSource.dataset.src;
//                 }
//               }
    
//               video.target.load();
//               video.target.classList.remove("lazy");
//               videoObserver.unobserve(video.target);
//           });
//         });
    
//         videos.forEach(function(video) {
//           videoObserver.observe(video);
//         });
// })






let scroll;
scroll = window.scrollY;


// Fold bt + Offer sticker

let showingFoldBt = true;
const foldBt = document.querySelector('.fold_bt')

window.addEventListener("scroll", function(e){
  scroll = window.scrollY;

  // if(showingFoldBt == true) {
  //     if(scroll > 100) {
  //       foldBt.classList.add('hide')
  //       showingFoldBt = false;
  //     }
  // } else if(scroll < 100) {
  //   foldBt.classList.remove('hide')
  //   showingFoldBt = true;
  // }

  
  if(scroll > 100) {
    foldBt.classList.add('hide')
    showingFoldBt = false;
  } else {
    foldBt.classList.remove('hide')
    showingFoldBt = true;
  }

});





















// TINY SLIDER 2

// fixedWidth: window.innerWidth * 0.8,










