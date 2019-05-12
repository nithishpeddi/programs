interface Shape {
    width: string;
    height: string;
    length: string;
}

// function Rectangle(options: Shape) {
//     this.width = options.width;
//     this.height = options.height;
//     this.length = options.length;

//    function hell(){
//         console.log(this.width, this.height, this.length)
//     }
// }



//  Rectangle({ width:'20', height: '30', length: '34'});

class Rectangle {
    width: string;
    height: string;
    length: string;
    constructor(thewidth: string, theheight:string, thelength:string){
this.height = theheight;
this.width = thewidth;
this.length = thelength;
    }
}