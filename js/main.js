// WINDOW OBJECT

// 1. INNER Window Height & Width
document.getElementById('inner-height').innerHTML = window.innerHeight;
document.getElementById('inner-width').innerHTML = window.innerWidth;

// 2. Entire Screen Height & Width
document.getElementById('screen-height').innerHTML = window.screen.height;
document.getElementById('screen-width').innerHTML = window.screen.width;

// 3. ScreenX & ScreenY
document.getElementById('screen-x').innerHTML = window.screenX;
document.getElementById('screen-y').innerHTML = window.screenY;

// 4. Location
document.getElementById('location').innerHTML = window.location.pathname;

// 5. PageYOffset & PageXOffset
document.getElementById('y-offset').innerHTML = window.pageYOffset;
document.getElementById('x-offset').innerHTML = window.pageXOffset;

// 6. METHODS
window.alert('Hello User!');
window.console.log('I am in the console!');