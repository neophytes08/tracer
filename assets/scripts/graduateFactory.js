graduate
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
]);