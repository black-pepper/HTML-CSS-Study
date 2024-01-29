export default class TagData {
    constructor(tagType, depth) {
        this.tag = tagType;
        this.htmlProperty = {};
        this.cssProperty = {};
        this.depth = depth;
        this.children = [];
    }
}