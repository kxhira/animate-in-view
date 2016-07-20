# animate-in-view

animation that is fired as soon as an element appears in the user's viewport.


## Requirement
- jQuery 1.8+

## Demo

[demo](https://kxhjp09.github.io/animate-in-view/example/all.html)

## Install

	bower install animate-in-view --save

## Usage

1. Include the stylesheet and the scripts on your document's `<head>`

  ```html
  <link rel="stylesheet" href="./bower_components/animate.css/animate.min.css">
  <script src="./bower_components/jquery/dist/jquery.min.js"></script>
  <script src="./bower_components/jquery.inview.bindable/jquery.inview.min.js"></script>
  <script src="./bower_components/animate-in-view/animate-in-view.js"></script>
  ```

1. Add animation-trigger-element which has "animate-inview-watch" class.  
   Animation is fired when this element appears in viewport.

1. Add animation-element which has "animate-inview" class.  
   animation-element should be a child of animation-trigger-element.  
   You must set animate.css class-name on "data-animate-inview-class" attribute.  

Example:
  ```html
  <div class="animate-inview-watch">
  	<img class="animate-inview" data-animate-inview-class="slideInRight" src="img/image.png">
  </div>
  ```

## Options

### animation-element
#### data-animate-inview-delay
You can set delay time(ms).  
Animation starts "data-animate-inview-delay" milli seconds after animation-trigger-element appears in viewport.  

Example:  
  ```html
  <div class="animate-inview-watch">
  	<img class="animate-inview" data-animate-inview-delay="300" data-animate-inview-class="slideInRight" src="img/image.png">
  </div>
  ```

## Animations

[check out animate.css](https://github.com/daneden/animate.css)

## Licence

[MIT](https://github.com/kxhjp09/animate-in-view/blob/master/LICENSE)

## Author

[kxhjp09](https://github.com/kxhjp09)