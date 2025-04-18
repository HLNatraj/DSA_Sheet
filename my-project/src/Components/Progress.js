import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import '../CSS/Progress.css';  // Optional

const Progress = () => {
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/progress');
                const data = await response.json();
                setProgressData(data);
            } catch (error) {
                console.error('Error fetching progress:', error);
            }
        };

        fetchProgress();
    }, []);

    const getPercentage = (completed, total) => {
        if (total === 0) return 0;
        return ((completed / total) * 100).toFixed(2);
    };

    return (
        <div>
            <Navbar />
            <div className="progress-container">
                <h1>Progress Overview</h1>
                {progressData.length === 0 ? (
                    <p>Loading progress...</p>
                ) : (
                    progressData.map((item) => (
                        <div key={item.level} className="progress-item">
                            <h3>{item.level}</h3>
                            <p>{getPercentage(item.completed_count, item.total_count)}% Completed ✅</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Progress;
