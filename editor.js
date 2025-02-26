

const { TABS, TOOLS } = window.FilerobotImageEditor;
const config = {
  source: './Screenshot_1.png',
  onSave: (editedImageObject, designState) =>
    console.log('saved', editedImageObject, designState),
  annotationsCommon: {
    fill: '#ff0000',
  },
  Text: { text: 'Text here...' },
  Rotate: { angle: 90, componentType: 'slider' },
  translations: {
    profile: 'Profile',
    coverPhoto: 'Cover photo',
    facebook: 'Facebook',
    socialMedia: 'Social Media',
    fbProfileSize: '180x180px',
    fbCoverPhotoSize: '820x312px',
  },
  Crop: {
    presetsItems: [
      {
        titleKey: 'classicTv',
        descriptionKey: '4:3',
        ratio: 4 / 3,
        // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
      },
      {
        titleKey: 'cinemascope',
        descriptionKey: '21:9',
        ratio: 21 / 9,
        // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
      },
    ],
    presetsFolders: [
      {
        titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
        // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
        groups: [
          {
            titleKey: 'facebook',
            items: [
              {
                titleKey: 'profile',
                width: 180,
                height: 180,
                descriptionKey: 'fbProfileSize',
              },
              {
                titleKey: 'coverPhoto',
                width: 820,
                height: 312,
                descriptionKey: 'fbCoverPhotoSize',
              },
            ],
          },
        ],
      },
    ],
  },
  tabsIds: [ TABS.ANNOTATE, TABS.ADJUST, TABS.RESIZE, TABS.FILTERS, TABS.FINETUNE], // removed TABS.WATERMARK,
  defaultTabId: TABS.ANNOTATE, // or 'Annotate'
  defaultToolId: TOOLS.TEXT, // or 'Text'
};

// Get the image URL
// It could be hash # ID or ?url parameter.
const url = new URL(window.location.href);
const imgURL = url.searchParams.get('url');
config.source = imgURL;
console.log("config", config, "url", imgURL)

// Assuming we have a div with id="editor_container"
const filerobotImageEditor = new window.FilerobotImageEditor(
  document.querySelector('#editor-container'),
  config,
);

filerobotImageEditor.render({
  onClose: (closingReason) => {
    console.log('Closing reason', closingReason);
    filerobotImageEditor.terminate();
  },
});