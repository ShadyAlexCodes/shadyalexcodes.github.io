jQuery(document).ready(function() {
    var message = new Typed('#message', {
        strings: [
            'This is an example of typed.js',
            'It is a free and open source javascript library',
            'That simulates typing on any website.',
            'You can add things like &copy;',
        ],
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 4000,
        loop: true,
        cursor: false
    });
});