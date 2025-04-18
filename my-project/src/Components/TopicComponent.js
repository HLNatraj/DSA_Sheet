import React, { useState, useEffect } from 'react';
import '../CSS/Topic.css';
import Navbar from './Navbar';

const TopicComponent = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const topicsPerPage = 3; // How many problems per page

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8000/api/topics');
            const data = await response.json();
            setTopics(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching topics:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCheckboxChange = async (problemId, currentCompleted) => {
        try {
            const updatedCompleted = !currentCompleted;

            await fetch(`http://localhost:8000/api/topics/${problemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: updatedCompleted }),
            });

            fetchData();
        } catch (error) {
            console.error('Error updating problem status:', error);
        }
    };

    // Pagination logic
    const indexOfLastTopic = currentPage * topicsPerPage;
    const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
    const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />
            <div className="topic-container">
                <h1>Topics and Problems</h1>

                {loading ? (
                    <p>Loading topics...</p>
                ) : (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th>Subtopic</th>
                                    <th>Problem</th>
                                    <th>YouTube</th>
                                    <th>LeetCode</th>
                                    <th>Article</th>
                                    <th>Level</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTopics.map((item) => (
                                    <tr key={item.problem_id}>
                                        <td>{item.topic_name}</td>
                                        <td>{item.subtopic_name}</td>
                                        <td>{item.problem_name}</td>
                                        <td>
                                            <a href={item.youtube_link} target="_blank" rel="noopener noreferrer">
                                                Tutorial
                                            </a>
                                        </td>
                                        <td>
                                            <a href={item.leetcode_link} target="_blank" rel="noopener noreferrer">
                                                LeetCode
                                            </a>
                                        </td>
                                        <td>
                                            <a href={item.article_link} target="_blank" rel="noopener noreferrer">
                                                Article
                                            </a>
                                        </td>
                                        <td>{item.level}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={item.completed === 1}
                                                onChange={() => handleCheckboxChange(item.problem_id, item.completed)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination buttons */}
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(topics.length / topicsPerPage) }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => paginate(index + 1)}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TopicComponent;
