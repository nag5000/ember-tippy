export function getSimpleDOMStructure(elements, options) {
  const arr = [];

  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      arr.push([
        element.tagName,
        Array.from(element.attributes).reduce((acc, val) => {
          if (!options.excludeAttrs.includes(val.name)) {
            acc[val.name] = val.value;
          }
          return acc;
        }, {}),
        getSimpleDOMStructure(element.childNodes, options),
      ]);
    } else if (element instanceof Text) {
      const text = element.textContent.trim();
      if (text) {
        arr.push(text);
      }
    }
  });

  return arr;
}
