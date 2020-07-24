function render(element, container) {
  let node;
  if (typeof element === "string") {
    node = createTextNode(element);
  } else {
    node = createNode(element);
    patchProps(node, element.props);
  }
  container.appendChild(node);
}

function createTextNode(str) {
  return document.createTextNode(str);
}

function patchProps(node, props) {
  props &&
    Object.keys(props).forEach((key) => {
      if (key === "className") {
        node.className = props[key];
      } else {
        node.setAttribute(key, props[key]);
      }
    });
}

function createNode(element) {
  const node = document.createElement(element.type);
  const children = [].concat(element.children);
  children.forEach((child) => {
    render(child, node);
  });
  return node;
}

export default {
  render,
};
