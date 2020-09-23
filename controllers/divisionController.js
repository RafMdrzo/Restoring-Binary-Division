var {PythonShell} = require('python-shell');
var pyshell = new PythonShell('./controllers/script.py');

const divisionController = {
  divide: async function (req, res) {
    var dividend = req.query.dividend
    var divisor = req.query.divisor
    var answer = '';
    pyshell.send(JSON.stringify([dividend,divisor]));

    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      answer = answer + '\n' + message;
    });

    pyshell.end(function (err) {
      if (err){
        throw err;
      };

      res.send(answer);
      console.log('finished');
    });
  }
}

module.exports = divisionController;
