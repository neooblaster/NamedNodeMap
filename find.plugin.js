/** Return string **/
NamedNodeMap.prototype.find = function(regExpFind){
	var output = undefined;
	
	for(var i = 0; i < this.length; i++){
		if(regExpFind.test(this[i].localName)){
			output = this[i].value;
			break;
		}
	}
	
	return output;
};

/** Return ARRAY **/
NamedNodeMap.prototype.findAll = function(regExpFind){
	var output = [];
	
	for(var i = 0; i < this.length; i++){
		if(regExpFind.test(this[i].localName)){
			output.push(this[i].value);
		}
	}
	
	return output;
};