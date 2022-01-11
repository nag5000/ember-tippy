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

- Type: `Function(tippyInstances[])`
- Default: `null`

Invoked once all tippy instances for specified target(s) have been created.


#### `onInstancesDidUpdate`

- Type: `Function(tippyInstances[])`
- Default: `null`

Invoked after all tippy instances for specified target(s) have been updated.


#### `onInstancesWillDestroy`

- Type: `Function(tippyInstances[])`
- Default: `null`

Invoked before all tippy instances for specified target(s) have been destroyed.


#### `singleton`

- Type: `Object`
- Default: `null`

A singleton link yielded by `<TippySingleton>` to attach a tippy to the
[Singleton](https://atomiks.github.io/tippyjs/v6/addons/#singleton).
It's not a tippy singleton instance.


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


## `<TippySingleton>` Component

``` hbs
<TippySingleton @placement="right" as |tippySingleton|>
  <button {{tippy "Tooltip 1" singleton=tippySingleton}}>My Button 1</button>
  <button {{tippy "Tooltip 2" singleton=tippySingleton}}>My Button 2</button>
  <button {{tippy "Tooltip 3" singleton=tippySingleton}}>My Button 3</button>
</TippySingleton>
```


### `{{yield tippySingleton}}` in block form

A singleton link (it's not a tippy singleton instance) to attach a regular tippy instance to
the singleton.


### `@options`

- Type: `Object`
- Default: `null`

All options via single argument. Alias for `<args>`.


### `<args>`

- Type: `Object`
- Default: `{}`

[tippy.js options](https://atomiks.github.io/tippyjs/v6/all-props/) +
[tippy.js singleton options](https://atomiks.github.io/tippyjs/v6/addons/#overrides) +
ember-tippy options (see below).


### ember-tippy options

#### `instances`

- Type: `Object[]`
- Default: collected by yielded singleton link in block form

You can use this with inline form of `<TippySingleton>` component to create a singleton from
existing tippy instances.


#### `onSingletonCreate`

- Type: `Function(tippySingletonInstance)`
- Default: `null`

Invoked once tippy singleton instance has been created.


#### `onSingletonDidUpdate`

- Type: `Function(tippySingletonInstance)`
- Default: `null`

Invoked after tippy singleton instance has been updated.


#### `onSingletonWillDestroy`

- Type: `Function(tippySingletonInstance)`
- Default: `null`

Invoked before tippy singleton instance has been destroyed.
