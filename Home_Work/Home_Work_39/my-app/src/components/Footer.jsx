import styled from 'styled-components';

const FooterContent = styled.div`
    color: #fff;
    text-align: center;
`

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <FooterContent className="footer-content">
                            © Peter Kulko, 2021
                        </FooterContent>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;