export const tramite = {
  updateNestedProperties: function updateNestedProperties(obj, updates) {
    function deepAssign(target, source) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          if (typeof source[key] === "object" && source[key] !== null) {
            target[key] = deepAssign(target[key] || {}, source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
    return deepAssign(Object.assign({}, obj), updates);
  },
};

export const random = {
  nome: function () {
    let data = Math.random().toString(36).slice(2);
    return data;
  },
};
