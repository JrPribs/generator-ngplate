'use strict';

import { Base } from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

export default class ngplate extends Base {
  constructor() {
      super();
      this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
  }

  get prompting() {
    return {
      getBasics() {
        let done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(`Welcome to the buttery ${chalk.red('ngGenPlate')} generator!`));

        let prompts = [{
          type: 'confirm',
          name: 'someOption',
          message: 'Would you like to enable this option?',
          default: true
        }];

        this.prompt(prompts, props => {
          this.props = props;
          // To access props later use this.props.someOption;
          done();
        });
      },
      writing() {
        this.fs.copy(
          this.templatePath('dummyfile.txt'),
          this.destinationPath('dummyfile.txt')
        );
        this.log(yosay(`Wrote`));
      },
      install() {
        let done = this.async();
        let prompts = [{
          type: 'confirm',
          name: 'someOption',
          message: 'Would you like to enable this option?',
          default: true
        }];
        this.prompt(prompts, props => {
          this.props = props;
          // To access props later use this.props.someOption;
          done();
        });
        this.log(yosay(`Welcome to the buttery ${chalk.red('ngGenPlate')} generator!`));
        this.installDependencies();

      }
    };
  }
}
