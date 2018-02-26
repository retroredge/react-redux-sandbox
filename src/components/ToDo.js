import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({item}) => {
    console.log('ToDo item: ' + JSON.stringify(item));
    return (<li>
                {item}
            </li>)
};

ToDo.propTypes = {
    item: PropTypes.string.isRequired
};

export default ToDo;