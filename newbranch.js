function brandch(){
    console.log('new branch');
}
brandch.prototype.eat = function(){
    console.log('brandch is eating ')
}
module.export = brandch;