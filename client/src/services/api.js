export async function getAllSongs() {
    const url = `http://localhost:8080/songs`

    return await fetch(url).then((res) => res.json())
}
