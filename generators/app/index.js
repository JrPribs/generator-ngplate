'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the top-notch ' + chalk.red(
                'Electron Angular Material') +
            ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'appTitle',
            message: 'What would you like to call this application?',
            store: true
        }, {
            type: 'input',
            name: 'packageDescription',
            message: 'What is this application going to do?',
            store: true
        }, {
            type: 'input',
            name: 'gitRepo',
            message: 'What is the github repository url?',
            store: true
        }, {
            type: 'input',
            name: 'packageAuthor',
            message: 'Who is the application author?',
            store: true
        }, {
            type: 'input',
            name: 'licenceType',
            message: 'What type of license is this application under?',
            store: true
        }, {
            type: 'confirm',
            name: 'isPrivate',
            message: 'Would you like the bower.json private value to be set to true?',
            store: true
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function() {

        this.fs.copy(
            this.templatePath('main.js'),
            this.destinationPath('main.js')
        );

        this.fs.copy(
            this.templatePath('preload.js'),
            this.destinationPath('preload.js')
        );

        this.fs.copy(
            this.templatePath('home.html'),
            this.destinationPath('partials/home.html')
        );

        this.fs.copy(
            this.templatePath('home.html'),
            this.destinationPath('partials/home.html')
        );

        this.fs.copy(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'), {
                //appTitle: this.props.appTitle.replace(/ /g, '').toLowerCase(), //make this camel case in the future
                appTitle: this.props.appTitle.toLowerCase()
                    .replace(/ (.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    }) + 'App',
                title: this.props.appTitle
            }
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                packageName: this.props.appTitle.replace(/ /g,
                    '-').toLowerCase(),
                packageDescription: this.props.packageDescription,
                gitRepo: this.props.gitRepo,
                packageAuthor: this.props.packageAuthor,
                licenceType: this.props.licenceType
            }
        );

        this.fs.copyTpl(
            this.templatePath('bower.json'),
            this.destinationPath('bower.json'), {
                packageName: this.props.appTitle.replace(/ /g,
                    '-').toLowerCase(),
                packageDescription: this.props.packageDescription,
                packageAuthor: this.props.packageAuthor,
                licenceType: this.props.licenceType,
                isPrivate: this.props.isPrivate
            }
        );

        this.fs.copyTpl(
            this.templatePath('app.js'),
            this.destinationPath('js/app.js'), {
                appTitle: this.props.appTitle.toLowerCase()
                    .replace(/ (.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    }) + 'App',
                appControllers: this.props.appTitle.toLowerCase()
                    .replace(/ (.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    }) + 'Controllers'
            }
        );

        this.fs.copyTpl(
            this.templatePath('controllers.js'),
            this.destinationPath('js/controllers.js'), {
                appControllers: this.props.appTitle.toLowerCase()
                    .replace(/ (.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    }) + 'Controllers'
            }
        );

        this.fs.copyTpl(
            this.templatePath('tests/controllerTests.js'),
            this.destinationPath('tests/controllerTests.js'), {
                appControllers: this.props.appTitle.toLowerCase()
                    .replace(/ (.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    }) + 'Controllers'
            }
        );
    },

    install: function() {
        this.installDependencies();
    }
});
