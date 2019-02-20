module.exports = {
    document: {
        createElement: name => `document.createElement(${name})`,
        createTextNode: text => `document.createTextNode(${text})`,
        createDocumentFragment: () => 'document.createDocumentFragment()',
        createElementNsSvg: name => `document.createElementNS(${name})`
    },
    elem: {
        appendChild: (parent, child) => `${parent}.appendChild(${child})`,
        setAttribute: (elem, key, value) => `${elem}.setAttribute(${key}, ${value})`
    }
};