import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col, Input} from 'react-materialize';
import FlightDetail from './FlightDetail';


class SelectCompany extends Component {
    constructor(props) {
        super(props);
        this.state = { flights: [] };
    }

    handleChange(e) {
        this.setState({flights: _.filter(this.props.flights, {'carrier': e.target.value })});
    }


    render() {

        let renderList = this.state.flights.length > 0 ?
            this.state.flights.map(item => <FlightDetail key={item.id} flight={item}/>) :
            this.props.flights.map(item => <FlightDetail key={item.id} flight={item}/>);

        return (
            <div>
                <Row>
                    <Col s={6}>
                        <Input s={12} type='select' label="Company Select" defaultValue="" onChange={this.handleChange.bind(this)}>
                            <option></option>
                            {_.uniqBy(this.props.flights, 'carrier').map(item =>
                                <option key={item.id} value={item.carrier}>{item.carrier}</option>
                            )}
                        </Input>
                    </Col>
                </Row>
                <Row>
                    { renderList }
                </Row>
            </div>
        );
    }
}
function mapStateToProps(props) {
    return {flights: props}
}

export default connect(mapStateToProps)(SelectCompany);
