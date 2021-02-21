const dicomTags = require('./dicom-tags.json');

module.exports = {
    get(name, upperCase = true, prefix = '') {
        let tag = dicomTags[name] ?? null;

        if (!!tag) {
            if (!upperCase) {
                tag = tag.toLowerCase();
            }

            tag = `${prefix}${tag}`;
        }

        return tag;
    },
};