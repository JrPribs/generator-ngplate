'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ngplate = function (_Base) {
  _inherits(ngplate, _Base);

  function ngplate() {
    _classCallCheck(this, ngplate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ngplate).call(this));

    _this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
    return _this;
  }

  _createClass(ngplate, [{
    key: 'prompting',
    get: function get() {
      return {
        getBasics: function getBasics() {
          var _this2 = this;

          var done = this.async();

          // Have Yeoman greet the user.
          this.log((0, _yosay2.default)('Welcome to the buttery ' + _chalk2.default.red('ngGenPlate') + ' generator!'));

          var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
          }];

          this.prompt(prompts, function (props) {
            _this2.props = props;
            // To access props later use this.props.someOption;
            done();
          });
        },
        writing: function writing() {
          this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'));
          this.log((0, _yosay2.default)('Wrote'));
        },
        install: function install() {
          var _this3 = this;

          var done = this.async();
          var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
          }];
          this.prompt(prompts, function (props) {
            _this3.props = props;
            // To access props later use this.props.someOption;
            done();
          });
          this.log((0, _yosay2.default)('Welcome to the buttery ' + _chalk2.default.red('ngGenPlate') + ' generator!'));
          this.installDependencies();
        }
      };
    }
  }]);

  return ngplate;
}(_yeomanGenerator.Base);

exports.default = ngplate;