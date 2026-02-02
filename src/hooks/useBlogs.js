import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';


export const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const blogsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setBlogs(blogsData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching blogs: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { blogs, loading };
};
