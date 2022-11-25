import React from 'react'
import { useRef } from 'react'
import axios from 'axios'

const AddSong = () => {
    const form = useRef('')
    const inputImage = useRef('')
    const url = 'http://127.0.0.1:8080/add'

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(form.current)

        let file = inputImage.current['files'][0]

        formData.append('fileToUpload', file)

        axios.post(url, formData)
    }
    return (
        <>
            <h1>AddSong</h1>
            <form
                ref={form}
                onSubmit={handleSubmit}
                encType='multipart/form-data'>
                <label htmlFor='author'>
                    Author :
                    <input type='text' name='author' id='author' />
                </label>
                <br />
                <label htmlFor='title'>
                    Title :
                    <input type='text' name='title' id='title' />
                </label>
                <br />
                <label htmlFor='lyrics'>
                    Lyrics :
                    <br />
                    <textarea
                        type='text'
                        id='lyrics'
                        cols={50}
                        rows='20'
                        name='lyrics'
                    />
                </label>
                <br />
                <label htmlFor='lyrics'>
                    Image :
                    <input
                        type='file'
                        name='image'
                        id='image'
                        ref={inputImage}
                    />
                </label>

                <input type='submit' />
            </form>
        </>
    )
}

export default AddSong
