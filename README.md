sublime-text-2-package
======================

A SproutCore package for Sublime Text 2.

This package includes several useful SproutCore specific snippets and 
integration with [JSHint](http://www.jshint.com/).

To use this package you must first install [jshint](https://github.com/jshint/jshint) 
and ensure that `jshint` is in your environment path.

1. Install node-jshint using npm

    $ npm install -g jshint

1. Install the SproutCore package using Package Control in Sublime Text 2

  1. `⇧⌘P` *or* `⇧⌃P` (Linux/Windows)
  2. select `Package Control: Install Package`
  3. select `SproutCore`

## JSHint

This package runs `jshint` on all JavaScript files on every save.  This allows you 
to catch errors early before going to the browser and testing.  It also allows
you to catch potentially dangerous code like implied globals and redeclared
variables.

JSHint also enforces a very standard clean style of JavaScript, which is what
the SproutCore framework adheres too.  While you may initially find the style 
warnings to be annoying, following them is easy and in the end it makes for
easily recognizable and shareable code. 

As part of the JSHint integration, this package also includes a default 
.jshintrc file that it uses to add the SproutCore specific globals.

## Snippets

There are several snippets available to significantly reduce the amount of
typing you need to do.  To use a snippet, start typing the keyword and select
the appropriate snippet to insert useful predefined code.  You can then use
the `tab` key to jump between the configurable aspects of the snippet to 
modify it very quickly without using the mouse.

* `SCButtonView` - An SC.ButtonView template.
* `SCLabelView` - An SC.LabelView template.
* `SCListView` - An SC.ListView template.
* `SCRecord` - An SC.Record template with several attributes and a `primaryKey`.
* `SCState` - An SC.State template with enterState and exitState.
* `SCScrollView` - An SC.ScrollView template.
* `SCTextFieldView` - An SC.TextFieldView template.
* `SCView` - An SC.View template.
* `SCView (Class)` - An SC.View as a Class template with render and update.
* `SCBinding` - A oneWay binding. 
* `childViews` - Adds childViews property.
* `childViewLayout` - Adds childViewLayout & childViewLayoutOptions properties.
* `for` - A forward `for` loop using `.get('length')` & `.objectAt()`
* `for` - A reverse `for` loop using `.get('length')` & `.objectAt()`
* `function (observes)` - A .observes function.
* `function (property)` - A .property function.
* `function (cacheable)` - A .property.cacheable function.
