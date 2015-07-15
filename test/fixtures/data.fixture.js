function sortedData () {
	var sortedData = [ 
	  	{ 
	  		todo: 'Checkbox functionality',
		    creationTime: '1',
		    completedTime: 'null',
		    key: 'myzc0sy8pvi'
		},
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '2',
	    	completedTime: 'null',
	    	key: 'myzc0sy8pvp'

	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '3',
	    	completedTime: 'null',
	    	key: 'myzc0sy8pvr'
 
	    },
	    { 
			todo: 'Checkbox functionality',
		    creationTime: '4',
		    completedTime: 'null',
		    key: 'myzc0sy8pvq'
 
		},
	  	{ 
	  		todo: 'Form submits on enter',
	    	creationTime: '5',
	    	completedTime: 'null',
		    key: 'myzc0sy8pvk'
	    }
	];
	return sortedData;
}

function unsortedData () {
	var unsortedData = [
		{ 
			todo: 'Checkbox functionality',
		    creationTime: '4',
		    completedTime: 'null',
		    key: 'myzc0sy8pvq' 
		},
		{ 
	  		todo: 'Form submits on enter',
	    	creationTime: '5',
	    	completedTime: 'null',
	    	key: 'myzc0sy8pvk' 
	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '2',
	    	completedTime: 'null',
	    	key: 'myzc0sy8pvp' 
	    },
	  	{ 
	  		todo: 'Checkbox functionality',
	    	creationTime: '3',
	    	completedTime: 'null',
	    	key: 'myzc0sy8pvr'

	    },
	    { 
	  		todo: 'Checkbox functionality',
		    creationTime: '1',
		    completedTime: 'null',
		    key: 'myzc0sy8pvi'

		}
	];
	return unsortedData;
}

module.exports =  {
	sortedData: sortedData,
	unsortedData: unsortedData
}