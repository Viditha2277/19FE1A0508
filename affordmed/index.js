const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
//const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const lis = ["/primes","/fibo","/odd","/rand"];
var r = [];

app.get("/numbers", async (req,res) => {
  var p = req.query.url;
  console.log(p);
  //console.log(p.url.len);
  for(var i in p)
  {
    var x = url.parse(p[i],true);
    console.log(x.pathname);
    
    r.push(x);
  }
  return res.json(r);
  
});

app.listen(3000,() => console.log("Server is up and running!!!")); 
