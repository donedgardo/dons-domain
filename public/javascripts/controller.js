angular.module("donDomain")
.controller('MainCtrl', [ '$scope', function ($scope){
	self = this;
	$scope.test = "Nav bar";
}])
.controller('ChatCtrl', ['ChatService', '$scope', function(ChatService, $scope){
	self = this;
	self.chat= [];
	
	self.getChat = function(){

	 	ChatService.getChatLog().then(function(resp){
		  self.chat = resp.data;
		});
	 };
	
	self.getChat();

	$scope.sendChatMsg = function(){
		if($scope.input_message){
			var chatMsg = {"msg": $scope.input_message, "date": new Date()};
			ChatService.postChat(chatMsg).then(function(resp){
				console.log('postChat successful');
				self.getChat();
			});
			
			$scope.input_message = "";
		}
	};
}]);