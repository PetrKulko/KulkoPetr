import styled from 'styled-components';

const HeaderMain = styled.div`
    background-color: #db72f1;
    padding: 20px 0;
`

const NavMenu = styled.div`
    ul{
        list-style: none;
        display: flex;

        & li a{
            display: block;
            color: #333;
            font-size: 14px;
            padding: 0 15px;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 600;
        }
    }

  @media(max-width: 700px){
    ul{
        flex-direction: column;
        align-items: center;
    }
  }
`

const Header = () => {
    return (
        <HeaderMain>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <NavMenu>
                            <ul>
                                <li> <a href="/">Home</a></li>
                                <li> <a href="/about">About</a></li>
                                <li> <a href="#">News</a></li>
                            </ul>
                        </NavMenu>
                    </div>
                </div>
            </div>
        </HeaderMain>
    );
}

export default Header;