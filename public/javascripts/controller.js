angular.module("donDomain")
.controller('MainCtrl', [ '$scope', function ($scope){
	self = this;
	$scope.test = "Nav bar";
}])
.controller('ChatCtrl', ['$scope', function($scope){
	self = this;
	self.chat= [];
	
	$scope.sendChatMsg = function(){
		if($scope.input_message){
			console.log("Pushing msg to chat list");
			self.chat.push(this.input_message);
			$scope.input_message = "";
		}
	};
}]);