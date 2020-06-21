function Cat(){
    thisis.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
};
module.exports = Cat;