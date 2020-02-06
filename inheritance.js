/*
    Class Inheritance
    Not recommended
*/
class GuitarAmp{
    constructor({cabinet = 'spruce', distortion = 1, volume = 0} = {}){
        Object.assign(this, {cabinet, distortion, volume});
    }
    playGuitar(){

    }
}

class BassAmp extends GuitarAmp{
    constructor(options = {}){
        super(options);
        this.lowCut = options.lowCut;
    }
}

class ChannelStrip extends BassAmp{
    constructor(options = {}){
        super(options);
        this.inputLevel = options.inputLevel;
    }
    channelStripFunction(){
        
    }
}


const bassAmp = new BassAmp();
console.log(Object.keys(bassAmp));

const channelStrip = new ChannelStrip();
console.log(Object.keys(channelStrip));

const guitarAmp = new GuitarAmp();
console.log(Object.keys(guitarAmp));

/* 
    Above Class Inheritance using Prototype
*/

function GuitarAmp2({cabinet = 'maple', distortion = 0, volume = 1} ={}){
    this.cabinet = cabinet;
    this.distortion = distortion;
    this.volume = volume;
}

function BassAmp2(options = {}){
    GuitarAmp2.call(this);
    this.lowCut = options.lowCut;
}
BassAmp2.prototype = Object.create(GuitarAmp2.prototype);
BassAmp2.prototype.constructor = BassAmp2;

function ChannelStrip2(options = {}){
    BassAmp2.call(this);
    this.inputLevel = options.inputLevel;
}

ChannelStrip2.prototype = Object.create(BassAmp2.prototype);
ChannelStrip2.prototype.constructor = ChannelStrip2;

const ch2 = new ChannelStrip2();
console.log(ch2);

const b2 = new BassAmp2();
console.log(b2);

/* 
    How to do composition instead
*/
const distortion = {distortion: 0};
const cabinet = {cabinet: 'maple'};
const volume = {volume : 1};
const lowCut = {lowCut: 1};
const inputLevel = {inputLevel : 9};

const GuitarAmp3 = function GuitarAmp(options){
    return Object.assign({}, cabinet, distortion, volume, options);
}

const BassAmp3 = function BaseAmp(options){
    return Object.assign({}, lowCut, volume, cabinet, options);
}

const ChannelStrip3 = function ChannelStrip(options){
    return Object.assign({}, cabinet, volume, lowCut, inputLevel, options);
}

const g = GuitarAmp3({
    distortion: 8,
    cabinet: 'wood',
});

console.log(g);

const b = BassAmp3({
    distortion: '7'
})

console.log(b);