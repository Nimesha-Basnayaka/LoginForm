export const authApisMiddleware = {
    login:async()=> {
        try {
       const response = await fetch('http://localhost:3001/auth/login', {method: 'POST'});
       const res = await response.json();
       console.log(res)
        } catch (error) {
            console.log(error) 
        }
     
    }
}