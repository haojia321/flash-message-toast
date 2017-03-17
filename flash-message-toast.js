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
            hide: 'flashMessageSlideDownToHide'
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
    //align: topRight topLeft topCenter bottomRight bottomLeft bottomCenter. default topCenter
    //autoHide: boolean
    //hideDelay: ms
    //text: string
    //isHtml: boolean
    //type: string[info, error, success, warning]
    //beforeShow: function
    //afterShow: function
    //beforeHide: function
    //afterHide: function
    //showCloseButton: boolean default false
    FlashMessage.show = function(obj) {
        var css = getFlashMessageCssClass(obj);
        var id = new Date().getTime() + 'flashMessage';
        var hideDelay = obj.hideDelay || 2000;
        var text = obj.text || 'hello world';
        var type = styleMap[obj.type] || styleMap.info;
        var autoHide = obj.autoHide == undefined ? true : obj.autoHide;
        var html = [];
        html.push('<div id="', id, '" class="flashMessageToast flashMessageOverlay ', css, '" data-align-type="', obj.align, '">');
        html.push('<div class="flashMessageWrapper">');
        html.push('<div class="flashMessage ', type);
        if (obj.showCloseButton) {
            html.push(' hasCloseButton');
        }
        html.push('">');
        if (obj.showCloseButton) {
            html.push('<a class="flashMessageClose" data-id="', id, '" tabindex="0"></a>');
        }
        if (obj.isHtml) {
            html.push(text);
        } else {
            html.push($('<div/>').text(text).html());
        }
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        if (obj.beforeShow) {
            obj.beforeShow.call(this, id, obj);
        }
        var a = $('body').append(html.join(''));
        $('#' + id + ' .flashMessageClose').on('click', function(e) {
            e.preventDefault();
            FlashMessage.hide(id, obj);
        });
        var animationDuration = parseFloat($('#' + id + '> .flashMessageWrapper').css('animationDuration').substring(0, $('#' + id + '> .flashMessageWrapper').css('animationDuration').length - 1)) * 1000;

        if (obj.afterShow) {
            setTimeout(function() {
                obj.afterShow.call(this, id, obj);
            }, animationDuration);
        }
        if (autoHide) {
            setTimeout(function() {
                FlashMessage.hide(id, obj);
            }, hideDelay + animationDuration);
        }
        return id;
    };
    FlashMessage.hide = function(id, obj) {
        if (!$('#' + id).hasClass('lockFlashMessageToast')) {
            $('#' + id).addClass('lockFlashMessageToast');
            if (obj.beforeHide) {
                obj.beforeHide.call(this, id, obj);
            }
            var animationDuration = parseFloat($('#' + id + '> .flashMessageWrapper').css('animationDuration').substring(0, $('#' + id + '> .flashMessageWrapper').css('animationDuration').length - 1)) * 1000;
            var alignType = $('#' + id).data('align-type');

            if (alignType) {
                var removeClass = animationStyleMap[alignType] ? animationStyleMap[alignType].show : null;
                var addClass = animationStyleMap[alignType] ? animationStyleMap[alignType].hide : null;
                $('#' + id).removeClass(removeClass).addClass(addClass);
            }
            setTimeout(function() {
                $('#' + id).remove();
                if (obj.afterHide) {
                    obj.afterHide.call(this, id, obj);
                }
            }, animationDuration);
        }
    };

    function getFlashMessageCssClass(obj) {
        var alignCss = styleMap[obj.align] || styleMap['topCenter'];
        var animationCss = animationStyleMap[obj.align] ? animationStyleMap[obj.align].show : animationStyleMap['topCenter'].show;
        return alignCss + ' ' + animationCss;
    }
})();
