const chalk = require('chalk');
let names = ['Marie', 'Amjad', 'Thomas', 'Nordine'];


function saynames() {

    console.log(chalk.blue(`${names[0]}`));
    console.log(chalk.green(`${names[1]}`));
    console.log(chalk.yellow(`${names[2]}`));
    console.log(chalk.red(`${names[3]}`));

}


module.exports = saynames;
