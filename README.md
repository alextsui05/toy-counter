## Summary

Toy project to implement a counter increment API

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
