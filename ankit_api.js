const axios = require('axios');
var c=[]
var d=[]
axios.get("http://saral.navgurukul.org/api/courses").then(resp=>{
    let data = resp.data
    for (i in data){
        if(data[i].length !==0){
            var e=0
            for (j of data[i]){
                c.push(e+".   "+j["name"])
                e++  
                d.push(j["id"]) }
    }}for (i of c){
    console.log(i)}
    var prompt = require('prompt-sync')();
    let n = Number(prompt('Enter the Number:-     '));
    let vv=d[n]
    axios.get("http://saral.navgurukul.org/api/courses/"+vv+"/exercises").then(resp=>{
        var data=resp.data
        for (i in data){
            var l=1
            var c={}
            for (j of data[i]){
                for (k in j){
                if(j["childExercises"]!==[]){
                    var e= l+".   "+j["name"]
                    c[l]=j["slug"]
                    var m=1
                    console.log(e)
                    for (i in j["childExercises"]){
                        var f=(l)+"."+(m)+".  "+j["name"]
                        console.log(f)
                        c[(l)+"."+(m)]=j["slug"]
                    m++
                    }  
                }else{
                var e= l+".   "+j["name"]
                c[l]=j["slug"]}
                break  }
        l++}}
        let n = Number(prompt('Enter the Number:-     '));
            for (i in c){
            if(i==n){
                axios.get("http://saral.navgurukul.org/api/courses/"+vv+"/exercise/getBySlug?slug="+c[i]).then(resp=>{
             var g= resp.data
            console.log(g["content"])
             }) }}})})
