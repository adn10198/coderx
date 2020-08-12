function cat(){
    console.log('iam cat');
}
cat.prototype.eat = function(){
    console.log('eating........');
}
module.exports = cat;