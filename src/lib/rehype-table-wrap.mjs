/**
 * Wrap every <table> in <div class="table-wrap"> so wide comparison grids
 * scroll sideways instead of overflowing the page on small screens.
 */
export default function rehypeTableWrap() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'table') {
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [child],
      };
    }
    walk(child);
    return child;
  });
}
