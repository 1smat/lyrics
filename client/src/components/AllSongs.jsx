import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllSongs } from '../services/api'

const AllSongs = () => {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        fetchSongs()
    }, [])

    const fetchSongs = async () => {
        const result = await getAllSongs()
        console.log(result);
        setSongs(result)
    }

    return (
        <div>
            {
                songs.map(
                    (song) => {
                        return (
                            <div key={song.title}>
                                <Link to={`${song.author}&${song.title}`}>
                                    <span> {song.author}</span> -
                                    <span> {song.title} </span>
                                </Link>
                                <br />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default AllSongs
