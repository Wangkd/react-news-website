import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCNewsDetails from './components/pc_news_details';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router>
                        <div>
                            <Route exact path="/" component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        </div>
                    </Router>
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex />
                </MediaQuery>
            </div>

        );
    };
}

ReactDOM.render(<Root />, document.getElementById('mainContainer'));
