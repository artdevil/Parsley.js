// All these options could be overriden and specified directly in DOM using
// `data-parsley-` default DOM-API
// eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
// eg: `data-parsley-stop-on-first-failing-constraint="false"`

define('parsley/defaults', function () {
  return {
    // ### General

    // Default data-namespace for DOM API
    namespace: 'data-parsley-',

    // Supported inputs by default
    inputs: 'input, textarea, select',

    // Excluded inputs by default
    excluded: 'input[type=button], input[type=submit], input[type=reset]',

    // Stop validating field on highest priority failing constraint
    priorityEnabled: true,

    // ### UI
    // Enable\Disable error messages
    uiEnabled: true,

    // key events treshold before validation
    validationTresshold: 3,

    // Focused field on form validation error. 'fist'|'last'|'none'
    focus: 'first',

    // `$.Event()` that will trigger validation. eg: `keyup`, `change`..
    trigger: false,

    // Class that would be added on every failing validation Parsley field
    errorClass: 'parsley-error',

    // Same for success validation
    successClass: 'parsley-success',

    // Return the `$element` that will receive these above success or error classes
    classHandler: function (ParsleyField) {},

    // Return the `$element` where errors will be appended
    errorsContainer: function (ParsleyField) {},

    // ul elem that would receive errors' list
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',

    // li elem that would receive error message
    errorTemplate: '<li></li>'
  };
});
