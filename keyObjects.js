//constructor
function sKey(kbKey, value){
	this.kbKey = kbKey;
	this.flag = true;
	this.value = value;
};

var sKey0 = new sKey('z','#3C');
var sKey1 = new sKey('s','#3Cs');
var sKey2 = new sKey('x','#3D');
var sKey3 = new sKey('d','#3Ds');
var sKey4 = new sKey('c','#3E');
var sKey5 = new sKey('v','#3F');
var sKey6 = new sKey('g','#3Fs');
var sKey7 = new sKey('b','#3G');
var sKey8 = new sKey('h','#3Gs');
var sKey9 = new sKey('n','#4A');
var sKey10 = new sKey('j','#4As');
var sKey11 = new sKey('m','#4B');
var sKey12 = new sKey('q','#4C');
var sKey13 = new sKey('2','#4Cs');
var sKey14 = new sKey('w','#4D');
var sKey15 = new sKey('3','#4Ds');
var sKey16 = new sKey('e','#4E');
var sKey17 = new sKey('r','#4F');
var sKey18 = new sKey('5','#4Fs');
var sKey19 = new sKey('t','#4G');
var sKey20 = new sKey('6','#4Gs');
var sKey21 = new sKey('y','#5A');
var sKey22 = new sKey('7','#5As');
var sKey23 = new sKey('u','#5B');
var sKey24 = new sKey('i','#5C');
var sKey25 = new sKey('9','#5Cs');
var sKey26 = new sKey('o','#5D');

var numKeys = 27;
var synthKeys = [];
var k;
for (k=0;k < numKeys; k++) {
    synthKeys[k] = eval("sKey" + k);
}
