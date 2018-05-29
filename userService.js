"use strict";
{
    function userService(){
    let user = {
        name: "Daymon Johnson",
        contact: "daymonjohnson75@yahoo.com",
        bio: "Tall and skinny."
    }
    const getUser = function(){
        return user;
    };

    const setUser = function(newUser){
        user = newUser;
    };
    return{
        getUser,
        setUser
    }
}
    angular
        .module("profile")
        .factory("userService", userService);
}