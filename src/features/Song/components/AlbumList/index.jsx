import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired,

};

function AlbumList({albumList}) {
    // console.log(albumList)
    return (
        <ul className="">
            {albumList.map(album => (
                <li key = {album.id}>
                    <Album album={album}/>
                </li>
            ))}
            
        </ul>


    );
}

export default AlbumList;