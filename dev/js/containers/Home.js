import React from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import CurrentCityInfo from '../components/CurrentCityInfo';
import Chart from '../components/Chart';


require('../../styles/index.styl');

class Home extends React.Component {

    render() {

        return (
            <div className="homeWrapper">
                <Search />
                <CurrentCityInfo />
                <Chart />
            </div>
        )
    }
}

export default connect()(Home);