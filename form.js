class Form{
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','70px');
        this.button.style('height','40px');
        this.button.style('font-size','25px');
        this.button.style('background-color','pink');
    }

    display(){
        this.button.position(700,350);
    }
}