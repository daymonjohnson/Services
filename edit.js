"use strict";
{
    let edit = {
        templateUrl: "edit.html",
        controller: function(userService){
            let vm = this;

            vm.user = userService.getUser();
            vm.update = function(){
                userService.setUser(vm.user);
            }

        }
    }
    edit.$inject = ["userService"];

    angular
        .module("profile")
        .component("edit", edit);
}