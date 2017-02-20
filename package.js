Package.describe({
    name: 'haojia321:flash-message-toast',
    version: '0.0.9',
    summary: 'Responsive and Material Design. A package to display flash message or toast message.',
    git: 'https://github.com/haojia321/flash-message-toast',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2.7');
    api.use('ecmascript');
    api.use('jquery');
    api.use('fourseven:scss@3.13.0');
    api.mainModule('flash-message-toast.js');
    api.addFiles('flash-message-toast.scss', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('haojia321:flash-message-toast');
    api.mainModule('flash-message-toast-tests.js');
});
