"use client";
import React from "react";
import Image from "next/image";
import AuthoreCard from "@/components/AuthoreCard";
import CommentSection from "@/components/CommentSection";
import { format } from "date-fns"; // Importing date-fns for date formatting

const posts = [
  {
    id: "1",
    title: "HTML Basics: Building the Web's Foundation",
    description:
      "Dive into the structure of webpages with HTML. Learn how to create content layouts and build the backbone of the internet. HTML (Hypertext Markup Language) is the core language used to create webpages. Think of it as the skeleton of a website, giving structure to the content. With HTML, you define elements like headings, paragraphs, images, and links. It's easy to start learning because HTML uses simple tags that wrap around content to define its role. For example, <h1> is used for a large heading, and <p> is used for paragraphs. Without HTML, there would be no way to organize the content that we see on the web today.\n\nWhen you first begin working with HTML, you'll learn how to create a basic webpage layout. You'll write a simple document with headings, text, images, and links to other pages. HTML is the foundation of web development, and every website you visit is built using it. As you progress, you’ll understand how HTML works in conjunction with CSS (for design) and JavaScript (for interactivity). But no matter how advanced your skills get, HTML will always be the first step to creating any webpage.",
    date: "12/20/2024",
    image: "html.png",
  },
  {
    id: "2",
    title: "CSS Magic: Styling Your Web Projects",
    description:
      "CSS (Cascading Style Sheets) is what brings beauty to the web. CSS allows you to add styles to your website, including colors, fonts, and layout techniques that make your site visually appealing. With CSS, you can control how elements are arranged, the font choices, and even add animations. Whether it's for a professional corporate website or a personal blog, CSS ensures that your site looks polished and works on different screen sizes, from mobile phones to desktops. Mastering CSS will empower you to build visually stunning websites.\n\nTo get started with CSS, you can learn how to style basic elements like paragraphs, headings, and images. The more you explore, the more you'll understand the power of CSS and its ability to create fluid layouts with Flexbox and Grid. You can also dive into advanced CSS techniques like animations and transitions to add interactivity to your website.",
    date: "12/21/2024",
    image: "css.png",
  },
  {
    id: "3",
    title: "JavaScript in Action: Dynamic Webpages",
    description:
      "JavaScript is a programming language that brings websites to life. It allows you to add interactivity, such as creating dynamic content and handling user actions. Whether it’s a form validation, a dropdown menu, or a live update feature, JavaScript makes it possible. You'll learn how to manipulate the Document Object Model (DOM), which is a structure representing the HTML elements of your page.\n\nAdditionally, JavaScript allows for asynchronous programming with features like AJAX and Fetch API, enabling real-time content updates without refreshing the page. With frameworks like React, Vue, or Angular, JavaScript has become even more powerful for building modern web applications that provide rich user experiences.",
    date: "12/22/2024",
    image: "java.png",
  },
  {
    id: "4",
    title: "AI in Everyday Life",
    description:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's here, shaping the way we live, work, and interact with the world around us. From voice assistants like Siri and Alexa to self-driving cars, AI is revolutionizing industries and improving the quality of life. In healthcare, AI helps doctors make diagnoses, while in finance, it assists with fraud detection and algorithmic trading.\n\nIn everyday applications, AI can also be found in recommendation engines, such as those on YouTube, Netflix, or Amazon, where AI analyzes your behavior to suggest products or content tailored to you. As AI continues to evolve, its impact on various sectors will only grow, creating new opportunities and challenges for humanity.",
    date: "12/23/2024",
    image: "ai.png",
  },
  {
    id: "5",
    title: "Responsive Design: Mobile-First Approach",
    description:
      "In today’s world, websites must work seamlessly across all devices, from desktop monitors to smartphones. A mobile-first approach to responsive web design ensures that your site will function well on all screen sizes. By focusing on mobile devices first, you prioritize performance and usability for users on smartphones and tablets.\n\nWith CSS media queries, you can create designs that adapt to different screen sizes, optimizing layout, font size, and even hiding or showing specific content. Responsive design is now an essential skill for web developers, ensuring your websites provide the best experience for every user.",
    date: "12/24/2024",
    image: "mobile.png",
  },
  {
    id: "6",
    title: "React.js: Crafting Modern UIs",
    description:
      "React.js is a powerful JavaScript library for building user interfaces, particularly for single-page applications. With React, you can break down complex UIs into small, reusable components. This modular approach makes it easier to manage state, data flow, and interactivity, allowing developers to build dynamic and fast applications.\n\nBy using React's virtual DOM, the framework efficiently updates only the components that need to be changed, enhancing performance. React’s ecosystem includes tools like React Router for navigation and Redux for state management, making it a popular choice for modern web development.",
    date: "12/25/2024",
    image: "react.png",
  },
  {
    id: "7",
    title: "AI Ethics: Balancing Innovation and Responsibility",
    description:
      "Delve into the ethical challenges of AI development, ensuring technology benefits humanity as a whole. AI is advancing rapidly, but with innovation comes responsibility. Developers and policymakers must ensure that AI is used for the benefit of society, avoiding biases, ensuring privacy, and ensuring that AI is transparent and accountable. How do we ensure that AI doesn't reinforce stereotypes or cause harm? These are key questions that the AI ethics movement seeks to address. Understanding the balance between innovation and responsibility is essential to ensure AI's positive impact.",
    date: "12/26/2024",
    image: "Ai et.png",
  },
  {
    id: "8",
    title: "Node.js: Revolutionizing Backend Development",
    description:
      "Node.js is a powerful runtime environment that allows developers to build fast and scalable server-side applications using JavaScript. Unlike traditional server-side languages like PHP or Python, Node.js uses a non-blocking event-driven model, making it ideal for building real-time applications and APIs. With Node.js, developers can handle thousands of concurrent requests efficiently, making it ideal for applications such as chat apps, social media platforms, and live-streaming services.\n\nNode.js has a large and vibrant ecosystem of libraries and tools that make backend development easier and more efficient. Whether you're building APIs, microservices, or full-fledged applications, Node.js can help you build robust backend systems.",
    date: "12/27/2024",
    image: "node.png",
  },
  {
    id: "9",
    title: "Understanding RESTful APIs",
    description:
      "APIs (Application Programming Interfaces) are the backbone of modern web development, allowing different systems to communicate with each other. RESTful APIs are based on the principles of Representational State Transfer (REST), a set of guidelines for creating lightweight, scalable, and efficient APIs. RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on data.\n\nBy understanding how RESTful APIs work, developers can integrate third-party services, create data-driven applications, and allow communication between different systems. Learning how to design, implement, and consume RESTful APIs is a key skill for modern web developers.",
    date: "12/28/2024",
    image: "rest.png",
  },
  {
    id: "10",
    title: "Machine Learning: A Beginner's Guide",
    description:
      "Machine learning is a subset of AI that allows systems to learn from data and improve over time without being explicitly programmed. In this beginner's guide, you’ll learn the fundamentals of machine learning, including the different types of learning (supervised, unsupervised, and reinforcement learning).\n\nMachine learning has applications across a wide range of fields, from healthcare (predicting diseases) to finance (fraud detection) to entertainment (personalized recommendations). Understanding the key concepts of machine learning and how to implement algorithms like linear regression, decision trees, and neural networks is crucial for aspiring data scientists and developers.",
    date: "12/29/2024",
    image: "ml.png",
  },
  {
    id: "11",
    title: "Cybersecurity in the Digital Age",
    description:
      "As we spend more time online, cybersecurity has become a critical issue. Cyberattacks, data breaches, and identity theft are all threats that can have severe consequences. This blog post explores the best practices for staying safe online, from using strong passwords and enabling two-factor authentication to protecting your personal data and avoiding phishing scams.\n\nCybersecurity is a growing field with many career opportunities, and understanding the basics of online safety is essential for anyone navigating the digital world.",
    date: "12/30/2024",
    image: "cyb.png",
  },
  {
    id: "12",
    title: "Data Visualization with Python",
    description:
      "Data visualization is the art of representing data in a visual format, making complex datasets easier to understand. Python provides powerful libraries like Matplotlib and Seaborn that allow you to create stunning visualizations such as bar charts, line graphs, and heatmaps. By visualizing data, you can identify trends, patterns, and outliers, which can provide valuable insights for decision-making.\n\nLearning how to visualize data using Python is an important skill for data analysts and data scientists. In this blog post, we'll explore how to use Python to create effective and visually appealing visualizations.",
    date: "12/31/2024",
    image: "data.png",
  },
  {
    id: "13",
    title: "Blockchain: Beyond Cryptocurrency",
    description:
      "Blockchain is most commonly associated with cryptocurrencies like Bitcoin, but its potential extends far beyond that. Blockchain is a decentralized and distributed ledger technology that allows for secure, transparent, and tamper-proof transactions. It has applications in fields like supply chain management, healthcare, finance, and more.\n\nBy understanding the basics of blockchain and its key components (blocks, nodes, miners), you'll gain insight into how this revolutionary technology works and how it’s transforming various industries.",
    date: "01/01/2025",
    image: "cc.png",
  },
  {
    id: "14",
    title: "The Future of Virtual Reality",
    description:
      "Virtual Reality (VR) is an immersive technology that allows users to experience and interact with computer-generated environments. From gaming and entertainment to education and healthcare, VR is making its mark in a variety of industries. As the technology evolves, VR has the potential to revolutionize how we work, play, and learn.\n\nThis post will explore the future of VR, its applications in various fields, and how advancements like 5G and improved hardware are making VR more accessible and realistic.",
    date: "01/02/2025",
    image: "ma.png",
  },
  {
    id: "15",
    title: "5G: The Next Generation of Connectivity",
    description:
      "5G is the fifth generation of mobile network technology, and it promises to revolutionize how we connect to the internet. With faster speeds, lower latency, and the ability to connect more devices, 5G will enable new technologies like the Internet of Things (IoT), autonomous vehicles, and smart cities.\n\nIn this post, we'll discuss the benefits of 5G, the challenges it faces, and the impact it will have on industries ranging from telecommunications to healthcare.",
    date: "01/03/2025",
    image: "seo.png",
  },
];

type PostProps = {
  params: Promise<{ id: string }>; // Now params is a Promise
};

export default function Post({ params }: PostProps) {
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

  // Unwrap the params Promise
  React.useEffect(() => {
    params.then((resolved) => setResolvedParams(resolved));
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const { id } = resolvedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <p className="mt-4 text-lg">Sorry, the post you're looking for doesn't exist. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={`/${post.image}`}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Posted on {formattedDate}</p>
      </div>

      <div className="mt-8">
        <AuthoreCard />
      </div>

      <div className="mt-10">
        <CommentSection postId={id} />
      </div>
    </div>
  );
}
