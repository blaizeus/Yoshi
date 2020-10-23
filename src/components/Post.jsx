import React from "react";

function Post(props) 
{
    
    if (props.pos == 1) 
    {
        return <div className="container">

        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-sm-4 card">
                    <img className="card-img" src={props.src} alt="yosh" ></img>
                </div>
                <div className="col-sm-8 card">
                    <div className="card inner1">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    }
    else 
    {
        return <div className="container">

        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-sm-8 card">
                    <div className="card inner2">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.content}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-4 card">
                    <img className="card-img" src={props.src} alt="yosh" ></img>
                </div>
            </div>
        </div>

    </div>
    }

    
}

export default Post;