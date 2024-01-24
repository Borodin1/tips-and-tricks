import { makeAutoObservable } from 'mobx';

export class TagStore {
    tagId = null;
    tagName = '';

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
        this.rootStore = rootStore;
    }

    setSelectedTagId(nextTag)  {
        this.tagId = nextTag;
    }

    setSelectedTagName(tagName) {
        this.tagName = tagName;
    }

    get selectedTagId() {
        return this.tagId;
    }

    get selectedTagName() {
        return this.tagName;
    }
}
