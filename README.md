<div align="center">
  <img src="https://github.com/nag5000/ember-tippy/raw/master/logo.svg" alt="Logo" height="105">
</div>

<div align="center">
  <h1>Tippy.js for Ember</h1>
</div>

[![npm version](https://badge.fury.io/js/ember-tippy.svg)](https://badge.fury.io/js/ember-tippy)
[![CI](https://github.com/nag5000/ember-tippy/actions/workflows/ci.yml/badge.svg?branch=master&event=push)](https://github.com/nag5000/ember-tippy/actions/workflows/ci.yml)

This is an Ember wrapper for [Tippy.js](https://github.com/atomiks/tippyjs) with easy to use
modifier and component.

- Ember-tippy ❤️ Octane. No observers. No computeds. 0% Ember Classic.
- Powered by modern and up to date [Tippy.js](https://github.com/atomiks/tippyjs) and [Popper.js v2](https://popper.js.org/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.25 or above
* Ember CLI v3.25 or above
* ember-auto-import v2 or above


Dependencies
-----------------------------------------------------------------------------

* tippy.js ^6.0.0. It's a peer dependency. The default addon blueprint will add tippy.js to
  your package.json during install.
* ember-auto-import ^2.0.0
* ember-modifier ^2.0.0


Installation
------------------------------------------------------------------------------

```
ember install ember-tippy
```


Demo and Usage
------------------------------------------------------------------------------

This addon provides a modifier `{{tippy}}` and a component `<Tippy>`.

Here are some basic usage examples:

``` hbs
<button {{tippy "I'm a Tippy tooltip!"}}>My Button</button>
```

``` hbs
<button>
  My Button
  <Tippy>I'm a <b>Tippy</b> tooltip!</Tippy>
</button>
```

You can see the demos and all the examples here: https://nag5000.github.io/ember-tippy/.


Supported Features
------------------------------------------------------------------------------

ember-tippy supports [all tippy.js options](https://atomiks.github.io/tippyjs/v6/all-props/).

[Singleton](https://atomiks.github.io/tippyjs/v6/addons/#singleton) is supported via
`<TippySingleton>` component.

[Headless Tippy](https://atomiks.github.io/tippyjs/v6/headless-tippy/) is supported via
`<HeadlessTippy>` component.

All the [Plugins](https://atomiks.github.io/tippyjs/v6/plugins/) also should work:
just use them the same way as for vanilla tippy.js.

Please see the demos and examples here: https://nag5000.github.io/ember-tippy/.


API
------------------------------------------------------------------------------

Please see the [API](API.md).


Build-time Config and Imports
------------------------------------------------------------------------------

ember-tippy does not import any 
[optional extra stuff](https://atomiks.github.io/tippyjs/v6/getting-started/#optional-extra-imports)
from tippy, except 
[Tippy Core CSS](https://atomiks.github.io/tippyjs/v6/getting-started/#1-package-manager).

If you don't want to bundle Tippy Core CSS, you can disable it by using 
`shouldIncludeTippyCoreCss: false` in ember-tippy build-time config.

If you want to use tippy's built-in custom themes, arrows or animations, please refer to 
[this example](https://nag5000.github.io/ember-tippy/#themes). Configurable bundling of optional
extra tippy stuff at build-time could be implemented in the future.

`<TippySingleton>` also imports 
[`createSingleton`](https://atomiks.github.io/tippyjs/v6/addons/#singleton).
If you don't use this component and you are on embroider, it should be tree-shaken.

Below is the ember-tippy build-time config with defaults:

``` js
// ember-cli-build.js
let app = new EmberApp(defaults, {
  '@embroider/macros': {
    setConfig: {
      'ember-tippy': {
        shouldIncludeTippyCoreCss: true,
      },
    },
  },
});
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
