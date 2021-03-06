import React, {Component} from 'react';
import {connect} from 'react-redux';
import windowSize from 'react-window-size';

import NavSearch from './NavSearch';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

class NavLeft extends Component {

    render() {
        let iconFullScreen = ['feather'];
        iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        // let navItemClass = ['nav-item'];
        // if (this.props.windowWidth <= 575) {
        //     navItemClass = [...navItemClass, 'd-none'];
        // }
        // let dropdownRightAlign = false;
        // if (this.props.rtlLayout) {
        //     dropdownRightAlign = true;
        // }


        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavSearch/></li>
                </ul>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.reducer.isFullScreen,
        rtlLayout: state.reducer.rtlLayout
    }
};


export default connect(mapStateToProps, null)(windowSize(NavLeft));
