import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieList(props){
 
    const [token]=useCookies(['mr-token']);
    const movieClicked=movie=> evr=>{
        props.movieClicked(movie)
    }
    const editClicked=movie=>{
        props.editClicked(movie);

    }
    const removeClicked=movie=>{
       API.deleteMovie(movie.id).then(()=> props.removeClicked(movie),token['mr-token'])
       .catch(error=>console.log(error));
       

    }

    return(
<div>
    <div>
        { props.movie && props.movie.map(movie=>{
      return(<div key={movie.id} className="movie-item">
        <h2 onClick={movieClicked(movie)}>{movie.title}</h2> 
        <FontAwesomeIcon icon={faEdit} onClick={()=>editClicked(movie)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>removeClicked(movie)} />
        
       
          
      </div>) 
     })} 
    </div>
</div>
    );
}

export default MovieList;

/**  
    } */