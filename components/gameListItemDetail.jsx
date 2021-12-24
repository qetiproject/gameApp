import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'

const GameListItemDetail = (gameItem) => {
    
    const item = gameItem.route.params
    const {name, genres, parent_platforms, released, background_image} = item

    const styles = StyleSheet.create({
        text: {
            fontSize: 20
        },
        img: {
            width: '100%',
            height: 300
        }
    })
    return(
        <ScrollView>
            <View>
                <Image style={styles.img} source={{ uri: background_image}} />
                <Text style={styles.text}>{name}</Text>
                <View>
                    <Text style={styles.text}>Genres: {genres.map((g) => {
                    return <Text style={styles.text}>{g.name} </Text>
                })}</Text>
                </View>
                <View>
                    <Text style={styles.text}>Platforms: {parent_platforms.map((p) => {
                    return <Text style={styles.text}> {p.platform.name} </Text>
                })}</Text>
                </View>
                <Text style={styles.text}>Released Date: {released}</Text>
            </View>
        </ScrollView>
    )
}

export default GameListItemDetail