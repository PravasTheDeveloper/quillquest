interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string; // Assuming it's a string, you can change the type as needed
    category: string;
    thumbnail: string;
}

const PostData: Post[] = [
    {
        id: 1,
        title: "Sample Post 1",
        content: "This is the content of the sample post.",
        author: "John Doe",
        date: "2022-01-15", // Replace with the actual date format you're using
        category: "Technology",
        thumbnail: "url_to_thumbnail_image_1"
    },
    {
        id: 2,
        title: "Sample Post 2",
        content: "This is another sample post.",
        author: "Jane Doe",
        date: "2022-01-16", // Replace with the actual date format you're using
        category: "Tips & Tricks",
        thumbnail: "url_to_thumbnail_image_2"
    },
    // Add more posts as needed
];

export default PostData;
