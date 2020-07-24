function createElement(type, props, ...children) {
  if (typeof type === "string") {
    delete props.__self;
    delete props.__source;
    return createVNode(type, props, children);
  }
}

function createVNode(type, props, children) {
  return {
    type,
    props,
    children,
  };
}

export default {
  createElement,
};
