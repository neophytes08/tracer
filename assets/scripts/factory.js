myadmin
		.factory('getUrl',[
			function factory(){
				return {
					url: '/tracer/index.php',
					header: {
						headers: {
							'Content-Type' : 'application/x-www-form-urlencoded'
						}
					}
				}
			}
	])
		.factory('getKey', [
			function factory(){
				return {
					key: 'nJvtT8OV5B57QzmMJt5RVw'
				}
			}
		]);