import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllSongs } from '../services/api'

const SingleSong = () => {
    const songInfo = useParams('songInfo').songInfo
    const [songs, setSongs] = useState([])
    const [singleSong, setSingleSong] = useState({})
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    let isAuthorFind = false
    let findTitle = ''
    let findAuthor = ''

    useEffect(() => {
        findAuthorTitle()
        fetchSongs()
    }, [])

    const fetchSongs = async () => {
        const result = await getAllSongs()
        setSongs(result)
    }

    function findAuthorTitle() {

        for (let symbol of songInfo) {
            if (symbol === '&') {
                isAuthorFind = true
            }
            else if (isAuthorFind) {
                findTitle += symbol
            } else {
                findAuthor += symbol
            }

        }
        setAuthor(findAuthor)
        setTitle(findTitle)

    }


    return (
        <div>

            {
                songs?.map(
                    (song) => {
                        // console.log(author, 'author');
                        if (song.author === author && song.title === title) {
                            return <div> {song.author} {song.title}
                                <img src={song.image} alt="" width={200} />

                                <pre>
                                    {song.lyrics}
                                </pre>
                            </div>
                        }

                        // return <div> {song.author === author && song.title === title ? song.author : <></>} </div>

                        // if (song.author === author && song.title === title) {
                        //     console.log('if')
                        //     return (
                        //         <div key={song.title}> {song.author}
                        //         </div>
                        //     )
                        // }

                    }
                )
            }
        </div>
    )
}

export default SingleSong