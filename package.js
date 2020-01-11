Package.describe({
    name: 'haojia321:flash-message-toast',
    version: '0.1.10',
    summary: 'Responsive and Material Design. A package to display flash message or toast message.',
    git: 'https://github.com/haojia321/flash-message-toast',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    //api.versionsFrom('1.8.3');
    //api.use('ecmascript');
    //api.use('jquery');
    //api.use('fourseven:scss@4.10.0');
    api.mainModule('flash-message-toast.js');
    api.addFiles('flash-message-toast.css', 'client');
    api.addAssets('close.png', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('haojia321:flash-message-toast');
    api.mainModule('flash-message-toast-tests.js');
});