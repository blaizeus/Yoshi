import React from "react";

function Post(props) 
{
    
    if (props.pos == 1) 
    {
        return <div className="post">
            
            <div className="img-block">
                <img className="post-img" src={props.src} alt="yosh" ></img>
            </div>
            <div className="text-block">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            
        </div>

    }










    else 
    {
        return <div className="post left">
        <div className="text-block">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
        <div className="img-block">
            <img className="post-img" src={props.src} alt="yosh" ></img>
        </div>
        
    </div>
    }

    
}

export default Post;