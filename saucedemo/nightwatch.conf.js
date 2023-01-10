module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test/features/step_definitions'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['page-object'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: 'lib/globals.js',
  
  webdriver: {},

  test_workers: {
    enabled: true
  },

  
  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },

      //end_session_on_fail: false,
      //skip_testcases_on_fail: true,
      //detailed_output: true,
      live_output: true,

      webdriver: {
        start_process: false,
        server_path: '',
        timeout_options: {timeout: 5000, retry_attempts: 0}
      },
      
      test_runner: {
        // set cucumber as the runner
        // For more info on using CucumberJS with Nightwatch, visit:
        // https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html
        type: 'cucumber',

        // define cucumber specific options
        options: {
          //set the feature path
          feature_path: 'test/features',

          // start the webdriver session automatically (enabled by default)
          //auto_start_session: true,

          // use parallel execution in Cucumber
          //parallel: 3 // set number of workers to use (can also be defined in the cli as --parallel 2
        }
      }
    },
    'cucumber-js': {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
  },
  
};
