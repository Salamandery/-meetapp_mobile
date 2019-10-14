import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProtoTypes from 'prop-types';

import { Container, TInput } from './style';

function Input({ style, icon, ...rest }, ref) {
    return (
        <Container style={style}>
            { icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, .6)" /> }
            <TInput {...rest} ref={ref} />
        </Container>
    );
}

Input.propTypes = {
    icon: ProtoTypes.string, 
    style: ProtoTypes.oneOfType([ProtoTypes.object, ProtoTypes.array]),
}

Input.defaultProps = {
    icon: null,
    style: {},
};

export default forwardRef(Input);