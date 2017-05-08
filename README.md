# Uno Zero, a ghost theme

## Overview

`Uno Zero` is a ghost theme derivated from [Dale Anthony's Uno](https://github.com/daleanthony/uno). The theme features a minimal, responsive design with a cover page, disqus comment integration, font icons and various color options.

I customized some unexpected behaviors and added some miss features for my own flavor. I also added some new pages to extend the usage of my own blog.

## Features

#### Cover page

There is a beautiful full screen landing page for you to display a cover image with blur effect.

#### Responsive and Animation

Uno Zero is following the responsive design and works well in mobile devices. Thanks to the [Animate.css](http://daneden.github.io/animate.css/), which makes some fancy animations possible.

#### Disqus comments and Font Awesome

Integrate comment system with [Disqus](https://disqus.com). [Font Awesome](http://fontawesome.io) is implemented either.

#### SCSS

Uno Zero is built on SCSS, you can style this theme with the SCSS files, then compile to CSS, which makes the styling much easier.

#### Code highlight

[highlight.js](http://highlightjs.org) is used as the code highlight engine of this theme. You can get a clean and good-look code block in your tech blog.

## Usage

#### Install

You should already set up a [ghost blog](https://ghost.org). If you are not prepared yet, please refer to the official [installation page](http://docs.ghost.org/installation/).

When you get ready, just download this repo as .zip file, then simply upload this theme to your ghost blog.

#### Disqus

You need to know your `short name` of Disqus. Add it to `disqus_shortname` in `comments.hbs` and then replace the `{{!-- {{> comments}} --}}` with `{{> comments}}` in `post.hbs` to enable Disqus for your blog.

## Development

In order to develop or make changes to the theme you will need to have the sass compiler and bourbon both installed.

To check installation run the following commands from a terminal and you should see the `> cli output` but your version numbers may vary.

#### SASS

```bash
sass -v
> Sass 3.4.23 (Selective Steve)
```

If you need help to install SASS, follow the instructions from the [Sass install page](http://sass-lang.com/install)

#### Bourbon
```bash
bourbon version
> Bourbon 4.3.4
```

If you need help to install Bourbon, follow the installation instructions on the [Bourbon website](http://bourbon.io)

#### Go go dev

Once installation is verified we will need to mount bourbon to `scss` folder.

From the theme root run the following command:

```
bourbon install --path assets/scss
```

Now we have bourbon inside the `scss` folder. We can now use the sass cli command to watch the scss files so that it will recompile them automatically whenever you make changes to any scss file.

```
sass --watch assets/scss/uno.scss:assets/css/uno.css
>>>> Sass is watching for changes. Press Ctrl-C to stop.
```

Make sure you are in the root of the theme project folder when you run the command above.

## Licence

Great thanks to [Dale Anthony](https://github.com/daleanthony) and his [Uno](https://github.com/daleanthony/uno). Uno Zero is based on Uno, and contains heaps of modifications on layouts, animations, styles and some more features which I could not remember clearly.

Uno Zero is followed with Uno and be licensed as [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/). See the link for more information.