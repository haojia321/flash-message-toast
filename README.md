# flash-message-toast
Package for displaying flash message or toast message to the user with preset animation.

You can see `demo` from here.

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
Allowed value: 'topRight', 'topLeft', 'topCenter', 'bottomRight', 'bottomLeft' and 'bottomCenter'.
* **autoHide** _Boolean_  
Optional. Define if the message will disappear automatically.  
Allowed value: true and false. Default is true.   
* **hideDelay** _Integer millisecond_  
Optional. Delay time before flash message disappears.  
Default is 2000.  
* **text** _String_  
Optional. Content of your flash message.  
Default is 'Hello World'.
* **type** _String_  
Optional. Define the type of the flash message.  
Allowed value 'info', 'error', 'success' and 'warning'. Default is 'info'.  

Returns id of the flash message dom element.

### FlashMessage.hide(id);  
Argument: id String
* **id** _string_
Required. id of the flash message dom element.