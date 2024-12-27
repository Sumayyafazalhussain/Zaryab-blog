import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "HTML Basics: Building the Web's Foundation",
      description: "Dive into the structure of webpages with HTML. Learn how to create content layouts and build the backbone of the internet.",
      date: "2024-12-20",
      imageUrl: "html.png",
    },
    {
      id: '2',
      title: "CSS Magic: Styling Your Web Projects",
      description: "Discover how CSS brings life to web designs with stunning colors, layouts, and animations for any device.",
      date: "2024-12-21",
      imageUrl: "css.png",
    },
    {
      id: '3',
      title: "JavaScript in Action: Dynamic Webpages",
      description: "Learn how JavaScript adds interactivity to your websites, from dynamic forms to real-time updates.",
      date: "2024-12-22",
      imageUrl: "java.png",
    },
    {
      id: '4',
      title: "AI in Everyday Life",
      description: "Explore how artificial intelligence is transforming industries like healthcare, finance, and transportation.",
      date: "2024-12-23",
      imageUrl: "ai.png",
    },
    {
      id: '5',
      title: "Responsive Design: Mobile-First Approach",
      description: "Learn how to design websites that look perfect on any screen size, from desktops to smartphones.",
      date: "2024-12-24",
      imageUrl: "mobile.png",
    },
    {
      id: '6',
      title: "React.js: Crafting Modern UIs",
      description: "Discover the power of React.js for building seamless, scalable, and modern user interfaces.",
      date: "2024-12-25",
      imageUrl: "react.png",
    },
    {
      id: '7',
      title: "AI Ethics: Balancing Innovation and Responsibility",
      description: "Delve into the ethical challenges of AI development, ensuring technology benefits humanity as a whole.",
      date: "2024-12-26",
      imageUrl: "Ai et.png",
    },
    {
      id: '8',
      title: "Node.js: Revolutionizing Backend Development",
      description: "Learn how Node.js enables developers to build fast, scalable, and efficient server-side applications.",
      date: "2024-12-27",
      imageUrl: "node.png",
    },
    {
      id: '9',
      title: "Understanding RESTful APIs",
      description: "Learn how APIs enable seamless communication between different systems in modern web applications.",
      date: "2024-12-28",
      imageUrl: "rest.png",
    },
    {
      id: '10',
      title: "Machine Learning: A Beginner's Guide",
      description: "An introductory guide to understanding machine learning concepts and their applications in real-world problems.",
      date: "2024-12-29",
      imageUrl: "ml.png",
    },
    {
      id: '11',
      title: "Cybersecurity in the Digital Age",
      description: "Protect yourself online with essential cybersecurity tips and learn about common vulnerabilities.",
      date: "2024-12-30",
      imageUrl: "cyb.png",
    },
    {
      id: '12',
      title: "Data Visualization with Python",
      description: "Transform raw data into compelling stories with Python libraries like Matplotlib and Seaborn.",
      date: "2024-12-31",
      imageUrl: "data.png",
    },
    {
      id: '13',
      title: "Cloud Computing: Transforming Storage",
      description: "Understand how cloud computing enables businesses to scale, innovate, and collaborate more effectively.",
      date: "2024-11-01",
      imageUrl: "cc.png",
    },
    {
      id: '14',
      title: "Progressive Web Apps: The Future of Mobile",
      description: "Explore how PWAs blend web and mobile experiences, offering fast and offline-ready applications.",
      date: "2024-10-02",
      imageUrl: "ma.png",
    },
    {
      id: '15',
      title: "SEO Strategies for Developers",
      description: "Master search engine optimization techniques to improve your website's visibility and traffic.",
      date: "2024-10-03",
      imageUrl: "seo.png",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the Worlds of AI and Technology
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
