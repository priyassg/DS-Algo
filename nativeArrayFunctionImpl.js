Array.prototype.forEachImpl = function forEachImpl(fn){
    for(let i=0; i<this.length; i++){
        if(this[i]){
            fn(this[i], i, this);
        }
        
    }
}

Array.prototype.everyImpl = function everyImpl(fn){
    for(let i=0; i<this.length;i++){
        if(! fn(this[i], i, this)) return false
    }
    return true;
}

Array.prototype.mapImpl = function mapImpl(){

}

Array.prototype.reduceImpl = function reduceImpl(){

}



//Test Array.every
// const testEvery = [32,45, 90,72];
// function belowThreshold (el) {
//     return el < 10;
// }

// console.log(testEvery.everyImpl(belowThreshold));
// console.log(testEvery.every(belowThreshold));


//ForEachImpl
// function logArrayElements(element, index, array) {
//     console.log('a[' + index + '] = ' + element)
//   }

// [2, 5, , 9].forEachImpl(logArrayElements);
// [2, 5, , 9].forEach(logArrayElements);
// [2, 5, , 9].forEachImpl.call(['ab'],logArrayElements);
// [2, 5, , 9].forEach.call(['hg'],logArrayElements);