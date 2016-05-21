'use strict';

let chalk = require('chalk');
let Logger = require('./logger');
let Watcher = require('./watcher');

let watcher = new Watcher();

const REPO_NAME = 'mozilla';

watcher.discoverNewRepository(REPO_NAME).then((newRepositories) => {
  Logger.success(chalk.green('Index: '), 'Difference was', newRepositories);
});
