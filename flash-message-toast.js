// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See flash-message-toast-tests.js for an example of importing.
export const name = 'flash-message-toast';

(function() {
    export const FlashMessage = {};

    var styleMap = {
        topRight: 'topAlign rightAlign',
        topLeft: 'topAlign leftAlign',
        topCenter: 'topAlign centerAlign',
        bottomRight: 'bottomAlign rightAlign',
        bottomLeft: 'bottomAlign leftAlign',
        bottomCenter: 'bottomAlign centerAlign',
        success: 'flashMessageSuccess',
        info: 'flashMessageToast',
        error: 'flashMessageError',
        warning: 'flashMessageWarning'
    };

    var animationStyleMap = {
        topCenter: {
            show: 'flashMessageSlideDownToShow',
            hide: 'flashMessageSlideUpToHide'
        },
        topRight: {
            show: 'flashMessageSlideLeftToShow',
            hide: 'flashMessageSlideRightToHide'
        },
        topLeft: {
            show: 'flashMessageSlideRightToShow',
            hide: 'flashMessageSlideLeftToHide'
        },
        bottomCenter: {
            show: 'flashMessageSlideUpToShow',
            hide: 'flashMessageSlideUpDownToHide'
        },
        bottomRight: {
            show: 'flashMessageSlideLeftToShow',
            hide: 'flashMessageSlideRightToHide'
        },
        bottomLeft: {
            show: 'flashMessageSlideRightToShow',
            hide: 'flashMessageSlideLeftToHide'
        }
    };
    //align: topRight topLeft topCenter bottomRight bottomLeft bottomCenter
    //autoHide: boolean
    //hideDelay: ms
    //text: string
    //type: string[info, error, success, warning]
    FlashMessage.show = function(obj) {
        var css = styleMap[obj.align] + ' ' + animationStyleMap[obj.align].show;
        var id = new Date().getTime() + 'flashMessage';
        var hideDelay = obj.hideDelay || 2000;
        var text = obj.text || 'hello world';
        var type = styleMap[obj.type] || styleMap.info;
        var autoHide = obj.autoHide || true;
        var html = [];
        html.push('<div id="', id, '" class="flashMessageOverlay ', css, '" data-align-type="', obj.align, '">');
        html.push('<div class="flashMessageWrapper">');
        html.push('<div class="flashMessage ', type, '">');
        html.push(text);
        html.push('</html>');
        html.push('</html>');
        html.push('</html>');
        $('body').append(html.join(''));
        if (autoHide) {
            setTimeout(function() {
                FlashMessage.hide(id, obj);
            }, hideDelay);
        }
        return id;
    };
    FlashMessage.hide = function(id) {
        var timeout = parseFloat($('#' + id + '> .flashMessageWrapper').css('animationDuration').substring(0, $('#' + id + '> .flashMessageWrapper').css('animationDuration').length - 1)) * 1000;
        var alignType = $('#' + id).data('align-type');
        if (alignType) {
            $('#' + id).removeClass(animationStyleMap[alignType].show).addClass(animationStyleMap[alignType].hide);
        }
        setTimeout(function() {
            $('#' + id).remove();
        }, timeout);
    };
})();
