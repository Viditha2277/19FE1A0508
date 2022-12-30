const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
//const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const lis = ["/primes","/fibo","/odd","/rand"];
var r = [];
var s = [];

app.get("/numbers", async (req,res) => {
  var p = req.query.url;
  console.log(p);
  //console.log(p.url.len);
  for(var i in p)
  {
    var x = url.parse(p[i],true);
    console.log(x.pathname);
    
    r.push(x.pathname);
    if(x.pathname=="/primes"){
      var e = [2, 3, 5, 7, 11, 13];
      s = s.concat(e);
    }
    if(x.pathame=="/fibo"){
      var e = [1, 1, 2, 3, 5, 8, 13, 21];
      s = s.concat(e);
    }
    if(x.pathname=="/odd"){
      var e = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
      s = s.concat(e);
    }
    if(x.pathname=="/rand"){
      var e = [5, 17, 3, 19, 76, 24, 1, 5, 10, 34, 8, 27, 7];
      s = s.concat(e);
    }
  }
  return res.json({numbers: s});
  
});

app.listen(3000,() => console.log("Server is up and running!!!")); 
