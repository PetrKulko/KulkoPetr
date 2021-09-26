import styled from 'styled-components';
import Review from './Review/Review';


const Reviews = () => {
    return (
        <div>
            <div className="Reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <Review name='Dima' text='Lorem ipsum Dima' />
                            <Review name='Vova' text='Lorem ipsum Vova' />
                            <Review name='Olya' text='Lorem ipsum Olya' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;