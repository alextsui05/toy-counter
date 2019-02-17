## Summary

Toy project to implement a counter increment API

### Goals

* Native Javascript only

## Changes

* bundle init
* bundle install --path vendor/bundle
* Lock in rails version in Gemfile
* bundle exec rails new .

```
Ruby Sass is deprecated and will be unmaintained as of 26 March 2019.

* If you use Sass as a command-line tool, we recommend using Dart Sass, the new
  primary implementation: https://sass-lang.com/install

* If you use Sass as a plug-in for a Ruby web framework, we recommend using the
  sassc gem: https://github.com/sass/sassc-ruby#readme

* For more details, please refer to the Sass blog:
  http://sass.logdown.com/posts/7081811
```

I want to use sassc-rails, but it depends on sassc which is locked to ffi 1.9,
which is older than 1.10 (latest).

Running `bundle update` bumps ffi down a minor version and it works.

Weird hiccup with sqlite 1.4 so fixed to 1.3.x

## Impression

* It's a little hard to reason about what `this` refers to in Javascript.
* This took a whole day to do. I'm pretty bad at this.
* I have a very nice and clean feeling having done it with pure Javascript.
* How do I make a general `req` function? I cheated by making a closure from
  the data on the current page.
* How do I load javascripts on certain pages only?
