import moment from 'moment';
import React from 'react';
import { Card } from 'react-materialize';

const FlightDetail = ({flight}) => {
    const { arrival, departure, direction, carrier } = flight;
    const dt_format = 'hh:mm:ss'

    return (
            <Card title={`${direction.from} - ${direction.to}`}>
                {carrier}<br/>
                {moment(arrival).format(dt_format)} - {moment(departure).format(dt_format)}
            </Card>
        );
}

export default FlightDetail;
