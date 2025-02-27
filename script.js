function moveElement(element, distance, speed) {
    var start = null;
    var duration = speed * distance;
    var step = function(timestamp) {
       if (!start) start = timestamp;
       var progress = timestamp - start;
       var move = easeInOutQuad(progress, 0, distance, duration);
       element.style.transform = 'translateX(' + move + 'px)';
       if (progress < duration) {
         requestAnimationFrame(step);
       }
    };
    requestAnimationFrame(step);
   }
   
   function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
   }
   
   var cat = document.querySelector('.cat');
   var rat = document.querySelector('.rat');
   
   moveElement(cat, 200, 2);
   moveElement(rat, 200, 2.5);