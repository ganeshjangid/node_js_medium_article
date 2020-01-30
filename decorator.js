class Medium{
    constructor(writer){
        this.writer=writer;
    }

    getWriter(){
        return this.writer;
    }
}

const medium=new Medium('ganesh');

const fakeMedium={
    writer:"Fake News",
    getWriter:medium.getWriter()
};

console.log(medium.getWriter());
console.log(fakeMedium.getWriter);

