import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProtoTypes from 'prop-types';

import { 
    Container, 
    Card, 
    Subscribe, 
    Banner, 
    Info, 
    Title, 
    TextInfo,
    Group,
    FList 
} from './style';

function FlatList({ func, style, item, titleButton, icon, ...rest }) {

    const RenderItem = ({item}) => {  
        return (
            <Container style={style}>
                <Card>
                    <Banner source={{uri: `${item.banner.url}`}}/>
                    <Info>
                        <Title>{item.name}</Title>
                        <Group>
                            <Icon name="event" size={20} color="#999" />
                            <TextInfo>{item.formattedDate}</TextInfo>
                        </Group>
                        <Group>
                            <Icon name="place" size={20} color="#999" />
                            <TextInfo>{item.location}</TextInfo>
                        </Group>
                        <Group>
                            <Icon name="person" size={20} color="#999" />
                            <TextInfo>Organizador: {item.user.name}</TextInfo>
                        </Group>
                    </Info>
                    <Subscribe onPress={e=>func(item.id)}>
                        {titleButton}
                    </Subscribe>
                </Card>
            </Container>
        );
    }

    return (
        <FList {...rest}
            data={item}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={RenderItem}
        />
    );
}

FlatList.propTypes = {
    icon: ProtoTypes.string, 
    titleButton: ProtoTypes.string, 
    item: ProtoTypes.oneOfType([ProtoTypes.object, ProtoTypes.array]),
    style: ProtoTypes.oneOfType([ProtoTypes.object, ProtoTypes.array]),
    func: ProtoTypes.func
}

FlatList.defaultProps = {
    titleButton: null,
    icon: null,
    func: null,
    style: {},
    item: {},
};

export default FlatList;