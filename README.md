# flash-message-toast
Package for displaying flash message or toast message to the user with preset animation.

You can see demo from [Location1](http://www.haojia.space/flash-message-toast) or [Location2](https://haojia.herokuapp.com/flash-message-toast).

## Usage
    import { FlashMessage } from 'meteor/haojia321:flash-message-toast';   
    FlashMessage.show({  
        align: 'bottomCenter',  
        text: 'Hello World!'  
    });  

## API
### FlashMessage.show(options);  
Argument: options Object
* **align** _String_  
Optional. Define how you want to align your message container.   
Allowed value: 'topRight', 'topLeft', 'topCenter', 'bottomRight', 'bottomLeft' and 'bottomCenter'. Default is 'topCenter'.
* **autoHide** _Boolean_  
Optional. Define if the message will disappear automatically.  
Allowed value: true and false. Default is true.   
* **hideDelay** _Integer millisecond_  
Optional. Delay time before flash message disappears.  
Default is 2000.  
* **text** _String_  
Optional. Content of your flash message.  
Default is 'Hello World'.   
* **isHtml** Boolean  
Optional. Text will render as html content if isHtml is set to true.  
Default is false.   
* **type** _String_  
Optional. Define the type of the flash message.  
Allowed value 'info', 'error', 'success' and 'warning'. Default is 'info'.  
* **showCloseButton** _Boolean_  
Optional. Flash message will display a close button if set to true.  
Default is false.  
* **beforeShow** _function_  
Optional. function will be called before flash message is displayed on the UI.  
* **afterShow** _function_  
Optional. function will be called after flash message is displayed on the UI.  
* **beforeHide** _function_  
Optional. function will be called before flash message is removed from the UI.  
* **afterHide** _function_  
Optional. function will be called after flash message is remove from the UI.  

Returns id of the flash message dom element.

### FlashMessage.hide(id, obj);  
Argument: id String
* **id** _string_
Required. id of the flash message dom element.  

Argument: obj Object
* **beforeHide** _function_  
Optional. function will be called before flash message is removed from the UI.  
* **afterHide** _function_  
Optional. function will be called after flash message is remove from the UI.  