jQuery(document).ready(function() {
    var message = new Typed('#message', {
        strings: [
            'I am a developer...',
            'I am a software engineer...',
            'I am a musician...',
            'I am always learning...',
            'Find me on <br><a href="https://github.com/ShadyAlexCodes">Github</a> | <a href="https://twitter.com/ShadyAlexCodes">Twitter</a> | <a href="https://discord.gg/prEeXGn">Discord</a>',
        ],
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 4000,
        loop: false,
        cursor: true
    });
});