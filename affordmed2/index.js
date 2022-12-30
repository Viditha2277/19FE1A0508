const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const lis = ["primes","fibo","odd","rand","ant","ball","cat"];
var s = [];

app.get("/prefixes", async (req,res) => {
  
  var p = req.query;
  console.log(p);
  //var x = url.parse(p, true);
  var r = p.keywords.split(",")
  console.log(r);
  for (var i in r)
  {
    var x = lis.some((c) => c === r[i]);

    console.log(x);
    if(x!=[]){
        s.push({
            "keyword" : r[i],
            "status" : "found",
            "prefix" : r[i][i]
        })
    }
    else{
        s.push({
            "keyword" : r[i],
            "status" : "found",
            "prefix" : "not_applicable"
        })
    }
  }

  
  return res.json(s);

});

app.listen(3000,() => console.log("Server is up and running!!!")); 