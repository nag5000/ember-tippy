import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, focus, blur, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { htmlSafe } from '@ember/string';

import { getSimpleDOMStructure } from 'dummy/tests/helpers';

module('Integration | Modifier | tippy', function (hooks) {
  setupRenderingTest(hooks);

  test('expected html attrs and structure', async function (assert) {
    await render(hbs`
      <div id="trigger" tabindex="0"
        {{tippy content="Tooltip" appendTo="parent" duration=0}}
      >Trigger</div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyId = trigger.getAttribute('aria-describedby');
    assert.ok(tippyId, 'trigger has an attached tippy');

    const tippy = find('#' + tippyId);
    assert.ok(tippy, 'attached tippy found');

    assert.equal(trigger.parentElement.children[tippyId], tippy);
    assert.equal(trigger.innerHTML, 'Trigger');
    assert.equal(tippy.textContent, 'Tooltip');

    const tippyInstance = trigger._tippy;
    assert.ok(tippyInstance, 'tippyInstance');
    assert.equal(tippyInstance.popper, tippy, 'tippyInstance.popper');
    assert.equal(tippyInstance.reference, trigger, 'tippyInstance.reference');

    const tippyDOMStruct = getSimpleDOMStructure([tippy], {
      excludeAttrs: ['style', 'tabindex', 'data-animation', 'role'],
    });

    assert.deepEqual(tippyDOMStruct, [
      ['DIV', { 'data-tippy-root': '', id: tippyId }, [
        ['DIV', { class: 'tippy-box', 'data-state': 'visible', 'data-placement': 'bottom' }, [
          ['DIV', { class: 'tippy-content', 'data-state': 'visible' }, ['Tooltip']],
          ['DIV', { class: 'tippy-arrow' }, []]
        ]]
      ]]
    ]);
  });

  test('htmlSafe content', async function (assert) {
    this.content = htmlSafe('Tool<b id="b">tip</b>');
    await render(hbs`
      <div id="trigger" tabindex="0"
        {{tippy content=this.content appendTo="parent" duration=0}}
      >Trigger</div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyId = trigger.getAttribute('aria-describedby');
    assert.ok(tippyId, 'trigger has an attached tippy');

    const tippy = find('#' + tippyId);
    assert.ok(tippy, 'attached tippy found');

    assert.equal(tippy.textContent, 'Tooltip');
    assert.equal(find('#b').textContent, 'tip');
  });

  test('content as positional param', async function (assert) {
    await render(hbs`
      <div id="trigger" tabindex="0"
        {{tippy "Tooltip" appendTo="parent" duration=0}}
      >Trigger</div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyContent = find('.tippy-content');
    assert.equal(tippyContent.textContent, 'Tooltip');
  });

  test('options hash', async function (assert) {
    await render(hbs`
      <div id="trigger" tabindex="0"
        {{tippy options=(hash content="Tooltip" appendTo="parent" duration=0)}}
      >Trigger</div>
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    const tippyContent = find('.tippy-content');
    assert.equal(tippyContent.textContent, 'Tooltip');
  });

  test('destroy', async function (assert) {
    this.doRender = true;
    this.onInstancesWillDestroy = (instances) => {
      instances.forEach(inst => {
        assert.step('willDestroy:' + inst.reference.textContent);
      });
    };

    await render(hbs`
      {{#if this.doRender}}
        <div id="trigger" tabindex="0"
          {{tippy "Tooltip"
            appendTo="parent"
            duration=0
            onInstancesWillDestroy=this.onInstancesWillDestroy
          }}
        >Trigger</div>
      {{/if}}
    `);

    const trigger = find('#trigger');
    await focus(trigger);

    let tippyId = trigger.getAttribute('aria-describedby');
    assert.ok(tippyId, 'trigger has an attached tippy');

    let tippyContent = find('.tippy-content');
    assert.equal(tippyContent.textContent, 'Tooltip');

    this.set('doRender', false);

    tippyId = trigger.getAttribute('aria-describedby');
    assert.equal(tippyId, null);

    tippyContent = find('.tippy-content');
    assert.equal(tippyContent, null);

    assert.verifySteps(['willDestroy:Trigger']);
  });

  test('custom targets', async function (assert) {
    this.onInstancesCreate = (instances) => {
      instances.forEach(inst => {
        assert.step('onCreate:' + inst.reference.textContent);
      });
    };

    this.content = (reference) => reference.getAttribute('data-tooltip');

    await render(hbs`
      <div class="t t1" tabindex="0" data-tooltip="Tooltip1">Trigger1</div>
      <div class="t t2" tabindex="0" data-tooltip="Tooltip2">Trigger2</div>
      <div class="t t3" tabindex="0" data-tooltip="Tooltip3">Trigger3</div>
      <span
        {{tippy
          content=this.content
          target=".t"
          appendTo="parent"
          duration=50
          delay=(array 0 50)
          onInstancesCreate=this.onInstancesCreate
        }}
      ></span>
    `);

    assert.verifySteps([
      'onCreate:Trigger1',
      'onCreate:Trigger2',
      'onCreate:Trigger3',
    ]);

    const t1 = find('.t1');
    const t2 = find('.t2');
    const t3 = find('.t3');

    await focus(t1);
    assert.deepEqual(
      findAll('.tippy-content').map(x => x.textContent),
      ['Tooltip1']
    );

    await focus(t2);
    assert.deepEqual(
      findAll('.tippy-content').map(x => x.textContent),
      ['Tooltip1', 'Tooltip2']
    );

    await focus(t3);
    assert.deepEqual(
      findAll('.tippy-content').map(x => x.textContent),
      ['Tooltip1', 'Tooltip2', 'Tooltip3']
    );

    await waitUntil(() => {
      const contentElements = findAll('.tippy-content');
      return contentElements.length === 1 && contentElements[0].textContent === 'Tooltip3';
    }, { timeoutMessage: 'Tooltip3 only' });

    await blur(t3);
    await waitUntil(() => find('.tippy-content') === null, {
      timeoutMessage: 'no tooltip'
    });
  });

  test('singleton', async function (assert) {
    let singletonId;

    this.content = (reference) => reference.getAttribute('data-tooltip');

    this.onInstancesCreate = (instances, { singleton }) => {
      instances.forEach(inst => {
        assert.step('onCreate:' + inst.reference.textContent);
      });

      assert.step('singleton:' + singleton?.id);
      singletonId = singletonId ?? singleton?.id;
    };

    this.n = new Array(3).fill(1);

    await render(hbs`
      <TippySingleton @appendTo="parent" @delay={{array 0 50}} @duration={{50}} as |ts|>
        {{#each this.n as |_ i|}}
          <div
            class="t{{i}}"
            tabindex="0"
            data-tooltip="Tooltip{{i}}"
            {{tippy content=this.content singleton=ts onInstancesCreate=this.onInstancesCreate}}
          >Trigger{{i}}</div>
        {{/each}}
      </TippySingleton>
    `);

    assert.verifySteps([
      'onCreate:Trigger0',
      `singleton:${singletonId}`,
      'onCreate:Trigger1',
      `singleton:${singletonId}`,
      'onCreate:Trigger2',
      `singleton:${singletonId}`,
    ]);

    const t0 = find('.t0');
    const t1 = find('.t1');
    const t2 = find('.t2');

    await focus(t0);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip0']);

    await focus(t1);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip1']);

    await focus(t2);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip2']);

    await blur(t2);
    await waitUntil(() => find('.tippy-content') === null, {
      timeoutMessage: 'no tooltip'
    });
  });

  test('singleton: inline form of TippySingleton', async function (assert) {
    this.instances = [];

    this.content = (reference) => reference.getAttribute('data-tooltip');

    this.onInstancesCreate = (instances, { singleton }) => {
      instances.forEach(inst => {
        assert.step('onCreate:' + inst.reference.textContent);
      });

      assert.step('singleton:' + singleton?.id);

      this.set('instances', this.instances.concat(instances));
    };

    this.n = new Array(3).fill(1);

    await render(hbs`
      {{#each this.n as |_ i|}}
        <div
          class="t{{i}}"
          tabindex="0"
          data-tooltip="Tooltip{{i}}"
          {{tippy content=this.content onInstancesCreate=this.onInstancesCreate}}
        >Trigger{{i}}</div>
      {{/each}}

      <TippySingleton
        @instances={{this.instances}}
        @appendTo="parent"
        @delay={{array 0 50}}
        @duration={{50}}
      />
    `);

    assert.verifySteps([
      'onCreate:Trigger0',
      `singleton:undefined`,
      'onCreate:Trigger1',
      `singleton:undefined`,
      'onCreate:Trigger2',
      `singleton:undefined`,
    ]);

    const t0 = find('.t0');
    const t1 = find('.t1');
    const t2 = find('.t2');

    await focus(t0);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip0']);

    await focus(t1);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip1']);

    await focus(t2);
    assert.deepEqual(findAll('.tippy-content').map(x => x.textContent), ['Tooltip2']);

    await blur(t2);
    await waitUntil(() => find('.tippy-content') === null, {
      timeoutMessage: 'no tooltip'
    });
  });
});
