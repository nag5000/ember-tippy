API
------------------------------------------------------------------------------

## `{{tippy}}` Modifier

```hbs
<button {{tippy "I'm a Tippy tooltip!" placement="right"}}>My Button</button>
```


### `args.positional[0]`

- Type: `String` | [`SafeString`](https://api.emberjs.com/ember/3.28/functions/@ember%2Ftemplate/htmlSafe) | `HTMLElement`
- Default: `''`

[Tippy content](https://atomiks.github.io/tippyjs/v6/all-props/#content).

It's alias for `args.named.content`.

`SafeString` is Ember `htmlSafe` string, it automatically sets
[`allowHTML: true`](https://atomiks.github.io/tippyjs/v6/all-props/#allowhtml).


### `args.named.options`

- Type: `Object`
- Default: `null`

All options via single argument. Alias for `args.named`.


### `args.named`

- Type: `Object`
- Default: `{}`

[tippy.js options](https://atomiks.github.io/tippyjs/v6/all-props/) + ember-tippy 
options (see below).


### ember-tippy options

#### `target`

- Type: `String` | `Element` | `Element[]` | `NodeList`
- Default: `this.element` (in context of modifier)

[tippy.js target(s)](https://atomiks.github.io/tippyjs/v6/constructor/#target-types)


#### `onInstancesCreate`

- Type: `Function(tippyInstances[], data: Object)`<sup>1</sup>
- Default: `null`

Invoked once all tippy instances for specified target(s) have been created.

<sup>1</sup> `data.singleton` [Singleton instance](https://atomiks.github.io/tippyjs/v6/addons/#singleton)


#### `onInstancesDidUpdate`

- Type: `Function(tippyInstances[], data: Object)`<sup>1</sup>
- Default: `null`

Invoked after all tippy instances for specified target(s) have been updated.

<sup>1</sup> `data.singleton` [Singleton instance](https://atomiks.github.io/tippyjs/v6/addons/#singleton)


#### `onInstancesWillDestroy`

- Type: `Function(tippyInstances[], data: Object)`<sup>1</sup>
- Default: `null`

Invoked before all tippy instances for specified target(s) have been destroyed.

<sup>1</sup> `data.singleton` [Singleton instance](https://atomiks.github.io/tippyjs/v6/addons/#singleton)


#### `singleton`

- Type: `Object`
- Default: `null`

[Singleton](https://atomiks.github.io/tippyjs/v6/addons/#singleton) target.


## `<Tippy>` Component

```hbs
<button>
  My Button

  <Tippy @placement="right" as |tippyInstance|>
    I'm a Tippy tooltip!
  </Tippy>
</button>
```


### Content in block and inline form

In block form the inner content is used as `HTMLElement` 
[tippy content](https://atomiks.github.io/tippyjs/v6/all-props/#content).

Also `@content` can be used in inline form.


### `{{yield tippyInstance}}` in block form

For example, you can use it to hide interactive tippies (popovers): 

```hbs
<button>
  My Button

  <Tippy @interactive={{true}} as |tippyInstance|>
    I'm a Tippy popover!
    <button type="button" {{on "click" tippyInstance.hide}}>Hide</button>
  </Tippy>
</button>
```

See https://atomiks.github.io/tippyjs/v6/tippy-instance/ for details.


### `@options`

- Type: `Object`
- Default: `null`

All options via single argument. Alias for `<args>`.


### `<args>`

- Type: `Object`
- Default: `{}`

[tippy.js options](https://atomiks.github.io/tippyjs/v6/all-props/) + ember-tippy 
options (see below).


### ember-tippy options

#### `@target`

- Type: `String` | `Element` | `Element[]` | `NodeList`
- Default: parent element

[tippy.js target(s)](https://atomiks.github.io/tippyjs/v6/constructor/#target-types)


The rest of the ember-tippy options are the same as for the `{{tippy}}` modifier.


## `<HeadlessTippy>` Component

``` hbs
<button>
  My Button

  <TippyHeadless @placement="right" as |tippyInstance|>
    <div class="my-popper">
      <div class="my-popper-box">
        I'm a headless Tippy tooltip!
      </div>
    </div>
  </TippyHeadless>
</button>
```

The use of this component is similar to the block form of `<Tippy>` component. 
The main difference is that the inner content will be used to render the entire tooltip, not just
its content. Also you can provide your own `@render` function and use inline form of the component.
See https://atomiks.github.io/tippyjs/v6/headless-tippy/ for details.


### ember-tippy options

#### `onUpdate`

- Type: `Function(prevProps, nextProps)`
- Default: `null`

Callback whenever `.setProps()` or `.setContent()` is called when using `<HeadlessTippy>`.
See https://atomiks.github.io/tippyjs/v6/headless-tippy/ for details.


The rest of the ember-tippy options are the same as for the `<Tippy>` component.
