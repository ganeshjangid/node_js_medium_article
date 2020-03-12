// const http=require('http');

// const server=http.createServer((req,res)=>{
//     const url=req.url;
//     const method=req.method;

//     if(url === "/"){
//         res.write("<html>");
//         res.write("<head><title>Test code</title></head>");
//         res.write("<body>");
//         res.write("<form action='/message' method='POST'><input type='text' name='message' /> <br> <input type='submit' name='submit' value='submit'></form>");
//         res.write("</body>");
//         res.write("<html>");
//     }

//     if(url === "/message" && method === "POST"){
//         console.log("Helloi");
        
//         req.on('data',(chunk)=>{
//             console.log(chunk);

//         });
        
//     }; 

// });

// server.listen("6985",()=>console.log('Sever is running on PORT no 6985'));




var http=require('http');
var fs=require('fs');
var serrver=http.createServer((req,res)=>{
console.log(req.url);

var url=req.url;
var method=req.method;
if(url==='/')
{
    res.setHeader('content-type','text/html');
   res.write('<html><body><form action="/message" method="post"><input type="text" name="message"><button type="submit" >send</button></form></body></html>'); 
   res.end();
}

if(url==='/message'&& method==='POST')
{
    console.log("Heelo");
    
    var body=[]; 
    req.on('data',(chunk)=>{
    console.log(chunk);
    body.push();

  })
  req.on('end',()=>{
     var parseddata=Buffer.concat(body).toString(); 
     console.log(parseddata);
  })
}

})
serrver.listen(5000);
