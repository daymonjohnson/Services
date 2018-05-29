"use strict";
{
    let pro = {
        templateUrl: "profile.html",
        controller: function(userService){
            let vm = this;

            vm.user = userService.getUser();
        }
    }

    pro.$inject = ["userService"];
    angular
        .module("profile")
        .component("pro", pro);
}