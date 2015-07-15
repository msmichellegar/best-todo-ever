function compareTime (a, b) {
	if(a.creationTime > b.creationTime){
		return 1;
	}
	if(a.creationTime < b.creationTime){
		return -1;
	};
	return 0;
}

module.exports = compareTime;
