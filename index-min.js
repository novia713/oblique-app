(function(){var d,c,e,f;e=require("fs");f=require("csv-parse");e.readFile("./obliquestrategies.csv",{encoding:"utf-8"},function(b,a){return f(a,{},function(b,a){return d(a[c(568,2)][2])})});c=function(b,a){null==a&&(a=0);return Math.floor(Math.random()*(b-a)+a)};d=function(b){console.log("\u001b[40m"+Array(b.length+7).join("="));console.log("== \u001b[4"+c(6,1)+"m"+b+"\u001b[40m ==");return console.log(Array(b.length+7).join("="))}}).call(this);