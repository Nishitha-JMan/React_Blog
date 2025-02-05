/* import React, { useState } from 'react';

const AddBlogPage = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {
            author,
            title,
            content,
            image,
        };

        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        storedBlogs.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(storedBlogs));

        setAuthor('');
        setTitle('');
        setContent('');
        setImage('');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author Name"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Blog Content"
                    className="p-2 border rounded-md w-full"
                    required
                ></textarea>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlogPage;
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const AddBlogPage = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {
            author,
            title,
            content,
            image,
        };

        // Save new blog to localStorage
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        storedBlogs.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(storedBlogs));

        // Clear form fields
        setAuthor('');
        setTitle('');
        setContent('');
        setImage('');

        // Navigate to the blogs page after adding the blog
        navigate('/blogs');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author Name"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Blog Content"
                    className="p-2 border rounded-md w-full"
                    required
                ></textarea>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Blog
                </button>
            </form>
        </div>

    );
};

export default AddBlogPage;
