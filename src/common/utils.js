class Utils{
	constructor( ) {
 
	}   

    setAuth(status){
        localStorage.setItem("isAuth", status);
    }

    getAuth(){
        return JSON.parse(localStorage.getItem('isAuth')); 
    }
}

export const utils = new Utils()