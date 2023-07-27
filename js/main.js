const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

container.addEventListener('mousemove', function (e) {
    const containerRange = container.getBoundingClientRect();
    const follower = circle.getBoundingClientRect();

    const leftLimit = containerRange.left + follower.width / 2;
    const rightLimit = containerRange.right - follower.width / 2;
    const topLimit = containerRange.top + follower.height / 2;
    const bottomLimit = containerRange.bottom - follower.height / 2;

    let left = e.clientX - containerRange.left - follower.width / 2;
    let top = e.clientY - containerRange.top - follower.height / 2;

    left = Math.max(left, 0);
    left = Math.min(left, rightLimit - leftLimit);

    top = Math.max(top, 0);
    top = Math.min(top, bottomLimit - topLimit);

    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
});

container.addEventListener('mouseout', function (e) {
    circle.style.left = '30%';
    circle.style.top = '30%';
});

const pointer = anime({
    autoplay: false,
    targets: '.circle',
    duration: 200,
    easing: 'cubic-bezier( 0.2 , 1.75 , 0.6 , 0.56 )',
});

container.onmouseenter = pointer.restart;
