const express = require('express')
const app = express()
const port = 3000

const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'desafiodb'
};

const mysql =  require('mysql')


app.get('/', (req, res) => {
   
    var response = '</p><p><h1>Full Cycle Rocks!</h1></p><p> '

    const connection = mysql.createConnection(config)

    var nome = req.query.nome
    
    if ( !nome ) {
        nome = "NovoNome" + Math.floor(Math.random() * 1000000000).toString();
    }
       
    const sql = "INSERT INTO people(name) values (?)"
    connection.query(sql,nome)

    response +='</p><p>- Lista de nomes cadastrada no banco de dados.</p>'
    console.log(response)

    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        Object.keys(result).forEach(function(key) {
          var row = result[key];
          response += `<p>${row.name}</p>`

        });

        response += '<p>'
        res.send(response)

        connection.end()

      });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))