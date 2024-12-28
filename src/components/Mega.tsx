import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "HTML: The Core of Web Development",
      description: "Understand the basics of HTML and how it forms the skeleton of every webpage you interact with daily.",
      date: "2024-12-20",
      imageUrl: "html.webp",
    },
    {
      id: '2',
      title: "CSS: Elevating Visual Appeal",
      description: "Learn the art of styling web projects with CSS, making layouts dynamic and visually captivating.",
      date: "2024-12-21",
      imageUrl: "css.webp",
    },
    {
      id: '3',
      title: "JavaScript Essentials: Beyond Basics",
      description: "Discover how JavaScript transforms static pages into interactive, engaging web experiences.",
      date: "2024-12-22",
      imageUrl: "java.webp",
    },
    {
      id: '4',
      title: "AI: Revolutionizing Modern Living",
      description: "Dive into the transformative impact of AI on industries and how it’s reshaping our future.",
      date: "2024-12-23",
      imageUrl: "ai.jpeg",
    },
    {
      id: '5',
      title: "Responsive Design: Adapting to All Screens",
      description: "Master the principles of responsive design to ensure your websites look flawless on any device.",
      date: "2024-12-24",
      imageUrl: "mobile.jpeg",
    },
    {
      id: '6',
      title: "React.js: Building Tomorrow’s UIs",
      description: "Learn how React simplifies the process of creating reusable, scalable, and dynamic user interfaces.",
      date: "2024-12-25",
      imageUrl: "reacts.png",
    },
    {
      id: '7',
      title: "AI Ethics: Responsibility in Innovation",
      description: "Uncover the ethical dilemmas AI poses and how to navigate them while advancing technology.",
      date: "2024-12-26",
      imageUrl: "Ai e.webp",
    },
    {
      id: '8',
      title: "Node.js: Backend Simplified",
      description: "Explore how Node.js powers efficient and scalable server-side development for modern applications.",
      date: "2024-12-27",
      imageUrl: "nodes.jpg",
    },
    {
      id: '9',
      title: "RESTful APIs: Connecting the Dots",
      description: "Understand how APIs enable seamless communication between applications in the digital ecosystem.",
      date: "2024-12-28",
      imageUrl: "rests.png",
    },
    {
      id: '10',
      title: "Getting Started with Machine Learning",
      description: "An easy-to-follow guide to understanding machine learning concepts and their real-world impact.",
      date: "2024-12-29",
      imageUrl: "ms.jpeg",
    },
    {
      id: '11',
      title: "Cybersecurity Basics: Stay Protected",
      description: "Learn key strategies to safeguard your data and navigate the digital world securely.",
      date: "2024-12-30",
      imageUrl: "cb.jpeg",
    },
    {
      id: '12',
      title: "Visualizing Data with Python",
      description: "Transform data into actionable insights using powerful Python libraries for visualization.",
      date: "2024-12-31",
      imageUrl: "pt.png",
    },
    {
      id: '13',
      title: "Cloud Computing Explained",
      description: "Discover how cloud computing enables flexibility, scalability, and innovation in the digital age.",
      date: "2024-11-01",
      imageUrl: "cd.png",
    },
    {
      id: '14',
      title: "Progressive Web Apps: The Future of Web",
      description: "Combine the best of web and mobile to create fast, offline-ready, and engaging PWAs.",
      date: "2024-10-02",
      imageUrl: "hy.jpeg",
    },
    {
      id: '15',
      title: "SEO Fundamentals for Developers",
      description: "Boost your website’s reach and ranking with cutting-edge SEO strategies tailored for developers.",
      date: "2024-10-03",
      imageUrl: "co.jpeg",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-blue-600 animate-bounce">
        Exploring the Realms of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
