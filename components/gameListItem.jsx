import { Image, Text, View, StyleSheet, Linking  } from "react-native"
import React from 'react'
import { environment } from "../environments/environment";

const styles = StyleSheet.create({
    container: {
        maxWidth: '90%',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: '#202020',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#202020',
    },
    item: {
        marginRight: 5,
        marginLeft: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        marginTop: 5
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginTop: 5
    },
    img: {
        width: 200, 
        height: 200
    }
  });

const GameListItem = ({gameList}) => {
    const url = environment.GameDetailUrl

    const { 
        background_image, name, released, genres, slug
      } = gameList;

    return(
        <View style={styles.container} >
            <View style={styles.item}>
                <Image 
                    source={{uri: `${background_image}`}}
                    style={styles.img} 
                />
                <Text 
                    style={styles.title}
                    onPress={() => { Linking.openURL(`${url}/${slug}`)}}
                >{name}</Text>
                <Text style={styles.text}>Release date: {released}
                </Text>
                <Text style={styles.text}>Genres: {genres.map((g) => {
                    return(
                        <>
                            <Text>{g.name} </Text>
                        </>
                    )
                })}</Text>
            </View>
        </View>
    )
}

export default GameListItem