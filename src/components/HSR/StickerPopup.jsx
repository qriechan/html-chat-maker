import React from 'react'
import stickerIDs from './StickerIDs';

function StickerPopup({ stickerIDs, onStickerClick }) {

    return (
    <>
    <div className='sticker-popup'>
        {stickerIDs.map((sticker, index) => (
            <div key={index} className="sticker-item"
                onClick={() => onStickerClick(sticker.stickerId)}>
            <img src={sticker.stickerURL} alt={sticker.stickerId} className="sticker-image" />
            <p className="sticker-id">{sticker.stickerId}</p>
            </div>
        ))}
    </div>
    </>
    )
}

export default StickerPopup