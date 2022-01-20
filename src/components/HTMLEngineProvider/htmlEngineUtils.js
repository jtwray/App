import lodashGet from 'lodash/get';

const MAX_IMG_DIMENSIONS = 512;

/**
 * Compute embedded maximum width from the available screen width. This function
 * is used by the HTML component in the default renderer for img tags to scale
 * down images that would otherwise overflow horizontally.
 *
 * @param {string} tagName - The name of the tag for which max width should be constrained.
 * @param {number} contentWidth - The content width provided to the HTML
 * component.
 * @returns {number} The minimum between contentWidth and MAX_IMG_DIMENSIONS
 */
function computeEmbeddedMaxWidth(tagName, contentWidth) {
    if (tagName === 'img') {
        return Math.min(MAX_IMG_DIMENSIONS, contentWidth);
    }
    return contentWidth;
}

/**
 * Check if there is an ancestor node with name 'comment'.
 * Finding node with name 'comment' flags that we are rendering a comment.
 * @param {TNode} tnode
 * @returns {Boolean}
 */
function isInsideComment(tnode) {
    let currentNode = tnode;
    while (currentNode.parent) {
        if (currentNode.domNode.name === 'comment') {
            return true;
        }
        currentNode = currentNode.parent;
    }
    return false;
}

/**
 * Fid the reportActionID of the parent <comment> tag, or return null if none is found.
 *
 * @param {TNode} tnode
 * @returns {String|null}
 */
function getReportActionID(tnode) {
    let currentNode = tnode;
    while (currentNode.parent) {
        if (currentNode.domNode.name === 'comment') {
            return lodashGet(currentNode, 'attributes.data-report-action-id', null);
        }
        currentNode = currentNode.parent;
    }
    return null;
}

export {
    computeEmbeddedMaxWidth,
    isInsideComment,
    getReportActionID,
};
