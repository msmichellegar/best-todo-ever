function sortedData () {
	var sortedData = [ 
	  	{ 
	  		todo: 'Checkbox functionality',
		    creationTime: '1',
		    completedTime: 'null' 
		},
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '2',
	    	completedTime: 'null' 
	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '3',
	    	completedTime: 'null' 
	    },
	    { 
			todo: 'Checkbox functionality',
		    creationTime: '4',
		    completedTime: 'null' 
		},
	  	{ 
	  		todo: 'Form submits on enter',
	    	creationTime: '5',
	    	completedTime: 'null' 
	    }
	];
	return sortedData;
}

function unsortedData () {
	var unsortedData = [
		{ 
			todo: 'Checkbox functionality',
		    creationTime: '4',
		    completedTime: 'null' 
		},
		{ 
	  		todo: 'Form submits on enter',
	    	creationTime: '5',
	    	completedTime: 'null' 
	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '2',
	    	completedTime: 'null' 
	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '3',
	    	completedTime: 'null' 
	    },
	    { 
	  		todo: 'Checkbox functionality',
		    creationTime: '1',
		    completedTime: 'null' 
		}
	];
	return unsortedData;
}

module.exports =  {
	sortedData: sortedData,
	unsortedData: unsortedData
}