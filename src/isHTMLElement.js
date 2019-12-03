/**
 * whether input isHTMLElement
 */
export default function isHTMLElement(node) {
  return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
}