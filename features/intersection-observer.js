let options = {
  rootMargin: '0px',
  threshold: 0
}
let observer = new IntersectionObserver((entity) => {
  const { isIntersecting } = entity[0];
  if (isIntersecting) {
    console.log('in')
  }}
  , options);

let target = document.querySelector('#lazy');
observer.observe(target);
