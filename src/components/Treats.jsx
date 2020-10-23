import React from "react";

function Treats() 
{
    return <div className="container treats card">
        <h1>Treats for Yoshi! 🍕😋</h1>
        <p>If you like this page or you're a fan of Yoshi, you can click the button below to buy him a treat!</p>
        <form className="donate-btn" action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="VRHWQD2NLSK3W" />
            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
}

export default Treats;