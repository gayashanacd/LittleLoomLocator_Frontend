class Utils{
	constructor( ) {
 
	}   

    setAuth(status){
        localStorage.setItem("isAuth", status);
    }

    getAuth(){
        return JSON.parse(localStorage.getItem('isAuth')); 
    }

    setUser(user){
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user')); 
    }

    wait(time){        
        return new Promise((resolve) => {        
            setTimeout(function() { resolve() }, time)              
        })                
    }
}

export const utils = new Utils()