const dicomTags = require('./dicom-tags.json');

module.exports = {
    get(name, upperCase = true, prefix = '', replace = 'xx') {
        let tag = dicomTags[name] ?? null;

        if (!!tag) {
            if (!upperCase) {
                tag = tag.toLowerCase();
            }

            tag = `${prefix}${tag}`.replace(/xx/i, replace);
        }

        return tag;
    },
};