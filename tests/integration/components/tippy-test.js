import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, focus, click, waitUntil, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { getSimpleDOMStructure } from 'dummy/tests/helpers';

module('Integration | Component | tippy', function (hooks) {
  setupRenderingTest(hooks);

  test('expected html attrs and structure', async function (assert) {
    // NOTE: appendTo defaults to "parent" for "interactive: true".
    // (https://atomiks.github.io/tippyjs/v6/all-props/#appendto)
    await render(hbs`
      <div id="trigger" tabindex="0">
        Trigger

        <Tippy @duration={{0}} @interactive={{true}} as |tippyInstance|>
          Popover

          <button type="button" {{on "click" tippyInstance.hide}}>Hide</button>
        </Tippy>
      </div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;
    const tippyId = tippy.id;

    assert.ok(tippy, 'attached tippy found');
    assert.equal(trigger, tippyInstance.reference);
    assert.equal(trigger.parentElement.children[tippyId], tippy);

    const tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style', 'tabindex', 'data-animation', 'role'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId }, [
        ['DIV', { class: 'tippy-box', 'data-state': 'visible', 'data-placement': 'bottom' }, [
          ['DIV', { class: 'tippy-content', 'data-state': 'visible' }, [
            ['DIV', {}, [
              'Popover',
              ['BUTTON', { type: 'button' }, ['Hide']]
            ]]
          ]],
          ['DIV', { class: 'tippy-arrow' }, []]
        ]]
      ]]
    ]);
  });

  test('custom target', async function (assert) {
    await render(hbs`
      <div id="trigger" tabindex="0">Trigger</div>
      <Tippy @target="#trigger" @duration={{0}}>Popover</Tippy>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;
    const tippyId = tippy.id;

    assert.ok(tippy, 'attached tippy found');
    assert.equal(trigger, tippyInstance.reference);
    assert.true(tippyInstance.state.isShown);
    assert.equal(trigger.getAttribute('aria-describedby'), tippyId);
  });

  test('yield tippyInstance.hide()', async function (assert) {
    let hidden = null;
    this.onShown = () => { hidden = false; }
    this.onHidden = () => { hidden = true; }

    await render(hbs`
      <div id="trigger" tabindex="0">
        Trigger

        <Tippy
          @duration={{0}}
          @interactive={{true}}
          @onShown={{this.onShown}}
          @onHidden={{this.onHidden}}
          as |tippyInstance|
        >
          Popover

          <button id="hide" type="button" {{on "click" tippyInstance.hide}}>Hide</button>
        </Tippy>
      </div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;

    assert.ok(tippy, 'attached tippy found');
    assert.true(tippy.isConnected);
    assert.true(hidden === false);
    assert.true(tippyInstance.state.isShown);

    await click('#hide');
    await waitUntil(() => hidden === true);
    assert.false(tippy.isConnected);
    assert.false(tippyInstance.state.isShown);
  });

  test('headless', async function (assert) {
    await render(hbs`
      <div id="trigger" tabindex="0">
        Trigger

        <TippyHeadless @duration={{0}} @appendTo="parent">
          <div class="my-popper">
            <div class="my-popper-box">
              Tooltip
            </div>
          </div>
        </TippyHeadless>
      </div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;
    const tippyId = tippy.id;

    assert.ok(tippy, 'attached tippy found');
    assert.equal(trigger, tippyInstance.reference);
    assert.equal(trigger.parentElement.children[tippyId], tippy);

    const tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId, 'data-popper-placement': 'bottom' }, [
        ['DIV', { class: 'my-popper' }, [
          ['DIV', { class: 'my-popper-box' }, [
            'Tooltip'
          ]],
        ]]
      ]]
    ]);
  });

  test('headless (interactive, YieldTippyInstance.hide)', async function (assert) {
    // NOTE: appendTo defaults to "parent" for "interactive: true".
    // (https://atomiks.github.io/tippyjs/v6/all-props/#appendto)
    await render(hbs`
      <div id="trigger" tabindex="0">
        Trigger

        <TippyHeadless @interactive={{true}} @duration={{0}} as |tippyInstance|>
          <div class="my-popper">
            <div class="my-popper-box">
              Popover
              <button id="hide" type="button" {{on "click" tippyInstance.hide}}>Hide</button>
            </div>
          </div>
        </TippyHeadless>
      </div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;
    const tippyId = tippy.id;

    assert.ok(tippy, 'attached tippy found');
    assert.equal(trigger, tippyInstance.reference);
    assert.equal(trigger.parentElement.children[tippyId], tippy);

    const tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId, 'data-popper-placement': 'bottom' }, [
        ['DIV', { class: 'my-popper' }, [
          ['DIV', { class: 'my-popper-box' }, [
            'Popover',
            ['BUTTON', { id: 'hide', type: 'button' }, ['Hide']]
          ]],
        ]]
      ]]
    ]);

    await click('#hide');
    await waitUntil(() => tippy.isConnected === false);
    assert.false(tippyInstance.state.isShown);
  });

  test('headless (yield options.content)', async function (assert) {
    this.content = 'foobar';

    await render(hbs`
      <div id="trigger" tabindex="0">
        Trigger

        <TippyHeadless
          @content={{this.content}}
          @appendTo="parent"
          @duration={{0}}
          as |tippyInstance options|
         >
          <div class="my-popper">
            <div class="my-popper-box">{{options.content}}</div>
          </div>
        </TippyHeadless>
      </div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyInstance = trigger._tippy;
    const tippy = tippyInstance.popper;
    const tippyId = tippy.id;

    assert.ok(tippy, 'attached tippy found');
    assert.equal(trigger, tippyInstance.reference);
    assert.equal(trigger.parentElement.children[tippyId], tippy);

    let tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId, 'data-popper-placement': 'bottom' }, [
        ['DIV', { class: 'my-popper' }, [
          ['DIV', { class: 'my-popper-box' }, [
            'foobar',
          ]],
        ]]
      ]]
    ]);

    this.set('content', 'updated');
    await settled();

    tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId, 'data-popper-placement': 'bottom' }, [
        ['DIV', { class: 'my-popper' }, [
          ['DIV', { class: 'my-popper-box' }, [
            'updated',
          ]],
        ]]
      ]]
    ]);
  });
});
