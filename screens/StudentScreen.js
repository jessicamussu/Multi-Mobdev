import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const students = [
    { name: 'Bumi', imageUrl: 'https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png' },
    { name: 'Matahari', imageUrl: 'https://www.pinclipart.com/picdir/big/86-861633_big-image-gambar-matahari-dan-bintang-clipart.png' },
    { name: 'Bulan', imageUrl: 'https://img2.pngdownload.id/20171220/zqq/moon-png-5a3ad93db91f66.39102419151380614175838479.jpg' }
];

const StudentScreen = () => {
    return (
        <FlatList
            data={students}
            renderItem={({ item }) =>
                <View style={styles.textStyle}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: item.imageUrl }}
                    />
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.fakultas}
                    </Text>
                </View>
            }

            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
        alignItems: 'center'
    }
});

export default StudentScreen;