export class Recipe{
    public name : string | undefined;    
    public description : string | undefined;    
    public imagePath : string | undefined;

    constructor(name:string,desc:string,imagePath : string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

// Basic Blueprint for each recipe and initailize through constructor
