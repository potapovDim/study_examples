import * as path from 'path';

const getBrowsersCaps = () => {
  const browsersMap = {
    chrome: {
      browserName: 'chrome',
      // version: '80.0',
      chromeOptions: {
        args: [
          '--disable-gpu',
          '--disable-gpu-program-cache',
          '--disable-gpu-shader-disk-cache',
          '--process-per-tab',
          '--process-per-site',
          '--use-fake-device-for-media-stream',
          '--use-fake-ui-media-stream'
        ],
        prefs: {
          'profile.default_content_setting_values.media_stream_mic': 1,
          'profile.default_content_setting_values.media_stream_camera': 1,
          'profile.default_content_setting_values.notifications': 1,
          'profile.default_content_setting_values.geolocation': 1,
          download: {
            'prompt_for_download': false,
            'default_directory': path.resolve(process.cwd(), './temp'),
          }
        }
      },
    },
    firefox: {
      browserName: 'firefox',
      // version: '74.0',
      'moz:firefoxOptions': {
        prefs: {
          'media.navigator.streams.fake': true,
          'media.navigator.permission.disabled': true,
          'browser.download.folderList': 2,
          'browser.download.manager.showWhenStarting': false,
          'browser.helperApps.alwaysAsk.force': false,
          'browser.download.manager.useWindow': false,
          'browser.download.dir': path.resolve(process.cwd(), './temp'),
          'browser.helperApps.neverAsk.saveToDisk': [
            'application/octet-stream',
            'application/msword',
            'application/json',
            'text/comma-separated-values',
            'text/csv',
            'text/tab-delimited-values',
            'application/csv',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext',
            'text/plaintext',
            'application/x-www-form-urlencoded',
            'application/xlsx',
            'binary/octet-stream',
            'text/binary',
            'application/zip',
            'application/rtf'
          ].join(', ')
        }
      }
    }
  };

  const envBrowserMap = {
    firefox: ['firefox'],
    chrome: ['chrome'],
    modern: ['chrome', 'firefox']
  };

  const runBrowsers = process.env.RUN_BROWSER || 'chrome';
  return envBrowserMap[runBrowsers.trim()].map((br) => browsersMap[br]);
};

export {getBrowsersCaps};
