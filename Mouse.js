function Mounse(name){
    this.name = name;
    this.dead = false;
}
Mouse.prototype.die = function (){
    thisis.dead = true;
};
 module.exports = Mouse;