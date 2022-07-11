import React from "react";

class Content extends React.Component {
    render() {
        return (
            <>
                <section className="c-w flex flex-col align-center" style={{ marginTop: "60px" }}>
                    <div className="disclaim-title ">
                        Disclaimer
                    </div>
                    <div className="disclaim-content" style={{ width: "75%", marginTop: "25px" }}>
                        The information shared on The Peace Community Capital social media channels (Facebook, Twitter, and Discord) and peaceworldfin.com are not to be considered financial investment advice.  Any purchase in crypto currency has inherent risks. The purchase of $PET tokens constitutes an investment and provides a level of risk. There is no $PET price guarantee, from the Founders or the extended management team. All discussion of price is purely speculatory.  There is no guarantee that the Founders or the extended management team will use $PET funds to maintain a minimum price of the token.  The current token reward system is 2,000 $PET per NODE per day. The Founders and extended management reserve the right to amend the rate should the need of the protocol require. Finally, please be aware that the following factors may hinder the development of $PET: the evolution of the crypto market and the beginning of a lasting bear market, instability, congestion, any possible bugs on the Binance Network, a security breach that allows someone to manipulate (part or all) of the protocol funds despite the protocol’s security efforts, legal obstacles and changing regulations that prevent the Peace Community Capital team from completing the project, and finally technical, human, or financial failures of the DeFi yield protocols which Peace Community Capital aims to invest. There is no guarantee that these situations cannot happen in the future, as they are beyond the control of the Peace Community Capital team.                    </div>
                </section>
            </>
        );
    }
}

export default Content;