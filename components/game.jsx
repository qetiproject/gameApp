import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
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
        getGameList(2, 1)
    }, [])

    return(
        <View>
            <Text>{error}</Text>
            {
                gameList.map((gameList, index) => {
                    return <GameListItem 
                    gameList={gameList} key={index}
                    />
                })
            }
        </View>
    )
}

export default Game