export default class TagData {
    constructor(tagType, depth, parent) {
        this.tag = tagType;
        this.htmlProperty = {};
        this.cssProperty = {};
        this.depth = depth;
        this.children = [];
        this.parent = parent;
    }
}