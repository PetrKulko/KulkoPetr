import React from 'react';
import styled from 'styled-components';

const BannerBg = styled.div`
    background-size: cover;
    height: 100vh;
    padding: 200px 0;
`

const Text = styled.div`
    background: orange;
    font-size: 20px;
    padding: 20px;
    max-width: 600px;
    border-radius: 10px;
    color: #fff;
`

const Banner = () => {
    return (
        <BannerBg className="BGban">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <Text className="text">
                            Lorem ipsum dollar Lorem ipsum dollar Lorem ipsum dollar Lorem ipsum dollarLorem ipsum dollar Lorem ipsum dollarLorem ipsum dollarLorem ipsum dollar
                        </Text>
                    </div>
                </div>
            </div>
        </BannerBg>
    );
}

export default Banner;