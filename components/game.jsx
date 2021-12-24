import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { getGamesData } from '../services/gameService'
import GameListItem from './gameListItem'

const Game = () => {

    const [gameList, setGameList] = useState([])
    const [error, setError] = useState('')

    const getGameList = async (size, page) => {
        try{
            const response = await getGamesData(size, page)
            setGameList(response.data.results)
        }
        catch(e){
            setError(e.response.data.detail)
        }
    }

    useEffect(() => {
        getGameList(20, 1)
    }, [])

    return(
        <ScrollView>
            <View>
                <Text>{error}</Text>
                {
                    gameList.map((gameList, index) => {
                        return <GameListItem 
                        gameItem={gameList} key={index}
                        />
                    })
                }
            </View>
        </ScrollView>
        
    )
}

export default Game