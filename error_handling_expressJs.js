const express=require('express');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT || 6985;
    }

    routes(){
        this.app.get('/',(req,res,next)=>{
            throw new Error('Something went wrong');
            res.send("Welcome to main router");
        });

        this.app.get("/about",(req,res)=>{
            res.send("This is the about route!");
        });

        this.app.use((req,res,next)=>{
            // res.status(404).send({
            //     status:404,
            //     error:'Not Found'
            // });
            const error=new Error("Not Found");
            error.status=404;
            next(error);
        });
    }

    middlewareErrorHandle(){
        // this.app.use((error,req,res,next)=>{
        //     console.error(error.stack);
        //     res.status(500).send('Something wrong');
        // });

        this.app.use((error,req,res,next)=>{
            res.status(error.status || 500)
            .send({
                error:{
                    status:error.status || 500,
                    message:error.message || 'Internal server error'
                }
            });
        });

    }

    creatServerData(){
        this.routes();
        this.middlewareErrorHandle();
        this.app.listen(this.port,() =>
            console.log(`This server is running on PORT ${this.port}`)
        );
    }
}

const createServer=new Server();
createServer.creatServerData();