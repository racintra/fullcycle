const http = require('http');
const mysql = require('mysql');
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'appdb',
  charset: 'utf8'
};

const pool = mysql.createPool(config);

var reo ='<html><head><title>Full Cycle Rocks!</title></head><body><h1>Full Cycle Rocks!</h1>{${table}}</body></html>';

function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;

    con.query(sql, (err, res, cols)=>{
      if(err) throw err;

      var table ='';

      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ res[i].name +'</td></tr>';
      }
      table ='<table border="1"><tr><th>Nome</th></tr>'+ table +'</table>';

      con.release();

      return cb(table);
    });
  });
}

const connection = mysql.createConnection(config)

const sql_create = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key (id))`;

const sql_insert = `INSERT INTO people(name) values('Ana Luisa')`;

connection.query(sql_create)
connection.query(sql_insert)

connection.end()

let sql ='SELECT name FROM people';

const server = http.createServer((req, res)=>{
  setResHtml(sql, resql=>{
    reo = reo.replace('{${table}}', resql);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write(reo, 'utf-8');
    res.end();
  });
});

server.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
});