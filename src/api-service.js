const TOKEN="f4136c8a15e73530edf6660d0062813362f6a02b";

export class API {
  static LoginUser(body,token){
    return fetch(`http://127.0.0.1:8000/auth/`,{
         method:'POST',
         headers:{
           'Content-Type':'application/json',
         }, 
         body:JSON.stringify (body ),
       }).then(resp=>resp.json())
     }
     registerUser
     static registerUser(body){
      return fetch(`http://127.0.0.1:8000/api/users/`,{
           method:'POST',
           headers:{
             'Content-Type':'application/json',
           }, 
           body:JSON.stringify (body ),
         }).then(resp=>resp.json())
       }




    static updateMovie(mov_id,body,token){
       return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`,{
            method:'PUT',
            headers:{
              'Content-Type':'application/json',
              'Authorization':`Token ${TOKEN} `
            }, 
            body:JSON.stringify (body ),
          }).then(resp=>resp.json())
        }
        static createMovie(body,token){
            return fetch(`http://127.0.0.1:8000/api/movie/`,{
                 method:'POST',
                 headers:{
                   'Content-Type':'application/json',
                   'Authorization':`Token ${TOKEN} `
                 }, 
                 body:JSON.stringify (body ),
               }).then(resp=>resp.json())
             }
             static deleteMovie(mov_id,token){
              return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`,{
                   method:'DELETE',
                   headers:{
                     'Content-Type':'application/json',
                     'Authorization':`Token ${TOKEN} `
                   }
                
                 })
               }


               

    }
