let options = {
    rootMargin: '0px',
    threshold: 0.5
}

setTimeout(() => {
    let val = 0;
    let containerOneTarget = document.querySelector("#container-one");
    let containerTwoTarget = document.querySelector("#container-two");
    let containerThreeTarget = document.querySelector("#container-three");

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log('intersecting');
                if (val == 0) {
                    containerOneTarget.classList.add('container-unhide');
                    val++;
                } else if (val == 1) {
                    containerTwoTarget.classList.add('container-unhide');
                    val++;
                } else {
                    containerThreeTarget.classList.add('container-unhide');
                }
            }
        });
    }, options);
    observer.observe(containerOneTarget);
    observer.observe(containerTwoTarget);
    observer.observe(containerThreeTarget);
}, 0);

// let observer = new IntersectionObserver(callback, options)
// observer.observe(options.root);

/* 
    See if interacting with first or last item
    Trigger boolean for checking if at start or end
    in order to enable vertical scroll
*/
