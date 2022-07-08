import { useState } from "react";
function AlbumList() {
    let [photos, setPhotos] = useState([]); //in order to trigger a re-render , use state
    if (!photos.length) {
        getAlbums();
    }
    async function getAlbums() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1")).json();//why twice
        console.log(photos);
        setPhotos(photos);
    }
    return (
        <div>
            <table>
                <thead>
                   <tr> <td>Title</td>
                    <td>URL</td></tr>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) {
                            return <tr><td>{photo.title}</td>
                                <td>{photo.url}</td></tr>
                        })
                    }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;