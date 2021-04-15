let http = require('http');
let url = require('url');
let calcs = require('./matematica.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});

    let q = url.parse(req.url, true).query;
    let txt;
    let num1 = parseInt(q.n1);
    let num2 = parseInt(q.n2);
    let result;

    if(q.opcao == "soma") {
        result = calcs.soma(num1, num2);
    }
    else if(q.opcao == "sub") {
        result = calcs.subt(num1, num2);
    }
    else if(q.opcao == "div") {
        result = calcs.div(num1, num2);
    }
    else if(q.opcao == "mult") {
        result = calcs.mult(num1, num2);
    }
    else {
        result = "Erro";
    }

    txt = "resultado : " + result;

    res.end(txt);

}).listen(3000);
