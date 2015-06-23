angular.module("donDomain")
.factory("ChatService", ['$http',
	function($http){
		return{
			getChatLog: function() {
				return $http.get('/api/chat');
			},
			postChat: function(chatMsg){
				return $http.post('/api/chat', chatMsg);
			}
		}
	}]);