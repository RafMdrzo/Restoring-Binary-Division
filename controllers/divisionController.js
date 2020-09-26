var {PythonShell} = require('python-shell');
var pyshell = new PythonShell('./controllers/script.py');

const divisionController = {
  divide: async function (req, res) {
    var dividend = req.query.dividend
    var divisor = req.query.divisor
    var answer = [];
    pyshell = new PythonShell('./controllers/script.py');

    pyshell.send(JSON.stringify([dividend,divisor]));

    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      answer.push(message)
    });

    pyshell.end(function (err) {
      if (err){
        throw err;
      };
      console.log(answer)
      res.send(answer);
      console.log('finished');
    });
  }
}

module.exports = divisionController;
