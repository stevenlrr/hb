import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class CategoryCardGrid4 extends Component {
    render() {
        const { category, cities } = this.props;

        return (
            <Fragment>
            {
                Object.values(cities).slice(0, 6).map((value, key) => {
                    const { city, state, img, uri } = value;
                    return (
                        <div className="col-lg-4 col-sm-6" key={key}>
                            <div className="category-single category--img">
                                <figure className="category--img4">
                                    <img src={img} alt="" />
                                    <figcaption className="overlay-bg">
                                        <NavLink to={uri} className="cat-box">
                                            <div>
                                                <h4 className="cat-name">{city}</h4>
                                                {/*<span className="badge badge-pill badge-success">{list} Listings</span>*/}
                                            </div>
                                        </NavLink>
                                    </figcaption>
                                </figure>
                            </div>{/*<!-- ends: .category-single -->*/}
                        </div>
                    )
                })
            }
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        category : state.category,
        cities: state.cities
    }
}
export default connect(mapStateToProps)(CategoryCardGrid4)
