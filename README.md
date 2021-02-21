# dicom-tags

## usage

* get(name, upperCase = true, prefix = '')

    ```
    const dicomTags = require('@promedius/dicom-tags');

    dicomTags.get('Pixel Data') => '7FE00010'
    dicomTags.get('Pixel Data', true) => '7FE00010'
    dicomTags.get('Pixel Data', false) => '7fe00010'
    dicomTags.get('Pixel Data', true, 'x') => 'x7FE00010'
    dicomTags.get('Pixel Data', false, 'x') => 'x7fe00010'
    ```