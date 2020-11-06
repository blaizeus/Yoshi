import React from "react";
import Header from "./Header";
import Post from "./Post";
import Treats from "./Treats";
import Footer from "./Footer";


function App() 
{
    return <div className="everything">
        <Header />
        <Post 
            pos={1} 
            src="./images/yoshi.jpg" 
            title="Yoshi" 
            content="This is Yoshi. He is < 1 year old. He sleeps for most of the day but is crazy when awake. He is always having adventures!" 
        />
        <Post 
            pos={2} 
            src="./images/space-yoshi.JPG" 
            title="Space Yoshi" 
            content="Yoshi flying through space towards Earth from his home-planet, Yoshiland. His ears shoot back when in flight mode." 
        />
        <Post 
            pos={1} 
            src="./images/sink-yoshi.jpg" 
            title="Sink Yoshi" 
            content="Yoshi is always getting into trouble, going places he shouldn't. He loves the sink. As long as the tap isn't on!" 
        />
        <Post 
            pos={2} 
            src="./images/coder-yoshi.jpg" 
            title="Coder Yoshi" 
            content="Yoshi loves laptops. If he sees someone working, he gets jealous and does their work for them. He helped code this webpage." 
        />
        <Post 
            pos={1} 
            src="./images/fan-art.PNG" 
            title="Fan Art" 
            content="Yoshi has many admirers. This is one of the many fan art pieces we have received." 
        />
        
        <Treats />
        <Footer />

    </div>
}

export default App;