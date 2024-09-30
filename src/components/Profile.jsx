import React, { useEffect, useState } from 'react';

const Profile = ({ userId, userName, onLogout }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [imageName, setImageName] = useState('');
    const [images, setImages] = useState([]);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        fetchUserImages();
    }, []);

    const fetchUserImages = async () => {
        const res = await fetch(`/api/UserImages?userId=${userId}`);
        const data = await res.json();
        setImages(data.images);
    };

    const handleAddImage = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/UserImages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, imageUrl, imageName }),
        });
        const data = await res.json();
        setNotification(data.notification);
        fetchUserImages(); 
    };

    return (
        <div>
            <h2>Welcome, {userName}</h2>
            <h3>Upload an image</h3>
            <form onSubmit={handleAddImage}>
                <input
                    type="text"
                    className='user-image-upload'
                    placeholder="Image Name"
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    required
                /><br />
                <input
                    type="text"
                    className='user-image-upload'
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                /><br />
                <button type="submit" className='image-submit'>Add Image</button>
            </form>

            {notification && <p className='notif'>{notification}</p>}

            <h3>Your images</h3>
            <div className="image-grid">
                {images.map((image) => (
                    <div key={image.id} className="image-card">
                        <img src={image.image_url} alt={image.name} />
                        <p>{image.name}</p>
                    </div>
                ))}
            </div>

            <button onClick={onLogout} className='image-submit'>Log Out</button> 

        </div>
    );
};

export default Profile;
