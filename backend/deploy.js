var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  if(error) return console.log(error);
  if(stderr) return console.log(stderr);
  return false;
}

module.exports = function (request,response) {
  response.json({ wut: 'deploy' });
  exec("sh deploy/deploy.sh", puts);
};
