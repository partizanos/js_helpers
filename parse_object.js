const isObject = val => typeof val === 'object' && !Array.isArray(val);

const paths = (obj = {}) =>
  Object.entries(obj)
    .reduce(
      (product, [key, value]) =>
        isObject(value) ?
        product.concat([
          [key, paths(value)] 
          // adds [root, [children]] list
        ]) :
        product.concat([key]), 
        // adds [child] list
      []
    )

const addDelimiter = (a, b) =>
  a ? `${a}.${b}` : b;

const pathToString = ([root, children]) =>
  children.map(
    child =>
      Array.isArray(child) ?
      addDelimiter(root, pathToString(child)) :
      addDelimiter(root, child)
  )
  .join('\n');

const input = {
  aProperty: {
    aSetting1: 1,
    aSetting2: 2,
    aSetting3: 3,
    aSetting4: 4,
    aSetting5: 5
  },
  bProperty: {
    bSetting1: {
      bPropertySubSetting: true
    },
    bSetting2: "bString"
  },
  cProperty: {
    cSetting: "cString"
  }
};
