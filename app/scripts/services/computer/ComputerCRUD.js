angular.module("computer")
	.factory('ComputerCRUD', ['CRUDService', '$timeout',function(CRUDService,$timeout){
		var computers = [];
		var onlineComputers = [];
		var computerCRUD = {
			computers : computers,
			onlineComputers: onlineComputers,
			getAllComputers : function(result){
					var url='http://10.200.138.73:8080/earlybird/agent/allagents';
					
					CRUDService.getData(url,function(data){
						computers = data;
					});

					this.computers = computers;
		    		return computers;				    
				},
			getOnlineComputers : function(){
					if(computers.length==0){
						computers=this.getAllComputers();
					}
					if(computers.length>0){
						onlineComputers = computers.filter(function(v,i){
							return v.is_agent_online == true
						});
					}
					// console.log('result function:'+computers);
					return onlineComputers;
				}
		}
		 return computerCRUD;
	}]);