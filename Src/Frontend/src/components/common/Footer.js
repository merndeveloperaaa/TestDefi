const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="row">
                     <div className="col-md-3 col-sm-6 col-xs-6 footer-logo">
                        <img className="img-spin logo-img" src="/img/logo.png" alt="" /><br/>
                        <span id="brand-name" className="logo-title" data-nsfw-filter-status="swf">Powered by <strong>Peace</strong><br/>Website Builder</span>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-6 mobile-hidden">
                        <div className="footer-widget">
                            <h5>About</h5>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Term of</a></li>
                                <li><a href="#">Legal info Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1 mobile-hidden">
                        <div className="footer-widget">
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="#">**********</a></li>
                                <li><a href="#">info@peacetokenfinance.in</a></li>
                                <li className="mt-2"><a href="#">**********</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="footer-widget">
                            <h5>Subscribe our Newsletter</h5>
                            <p style={{opacity: 0.6}}>You should not miss any updates of our new products and services and all the astonishing offers we bring for you.</p>
                            <form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col subscribe-widget text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" />
                                    <button className="btn-subscribe">Subscribe</button>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={() => window.open("", "_self")}>
                                        <span className="copy">&copy; 2022 PEACE - ALl right Reserved</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

