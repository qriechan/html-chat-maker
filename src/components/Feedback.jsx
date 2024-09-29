import React, { useState } from 'react';

const Feedback = () => {
    const [suggestionText, setSuggestionText] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!suggestionText) {
            setNotification('Please enter your feedback.');
            return;
        }

        try {
            const res = await fetch('/api/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'suggestion-text': suggestionText }),
            });

            const data = await res.json();
            setNotification(data.notification);

        } catch (err) {
            console.error('Error submitting feedback:', err);
        }
    };

    return (
        <div>
            <h2>Submit Feedback</h2>
            <p>Do you have any suggestions? Find any bugs? Please list them down here!</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={suggestionText}
                    onChange={(e) => setSuggestionText(e.target.value)}
                    placeholder="Enter feedback..."
                    rows="10"
                    cols="50"
                    className='suggestion'
                />
                <br />
                <button type="submit" className='suggestion-submit'>Send</button>
            </form>
            {notification && <p className='notif'>{notification}</p>}
        </div>
    );
};

export default Feedback;
