export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with Next.js 15 and the new App Router. We'll cover everything from setup to deployment.",
    content: "Next.js 15 brings a host of new features that make building React applications easier than ever. In this post, we'll explore the App Router, Server Components, and how to leverage the latest performance improvements...",
    date: "2026-02-10",
    author: "Jane Doe",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "mastering-typescript",
    title: "Mastering TypeScript: Tips and Tricks",
    excerpt: "TypeScript has become essential for modern JavaScript development. Discover advanced patterns and best practices to level up your code.",
    content: "TypeScript offers powerful type-checking capabilities that can catch bugs before they reach production. In this comprehensive guide, we'll dive deep into generics, utility types, and conditional types...",
    date: "2026-02-08",
    author: "John Smith",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for 2026",
    excerpt: "Tailwind CSS has revolutionized how we style web applications. Learn the best practices for maintainable and scalable CSS.",
    content: "Utility-first CSS frameworks like Tailwind have changed the game. But with great power comes great responsibility. Let's explore how to organize your styles, create custom components, and avoid common pitfalls...",
    date: "2026-02-05",
    author: "Jane Doe",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: "building-restful-apis",
    title: "Building RESTful APIs with Node.js",
    excerpt: "A complete guide to designing and implementing RESTful APIs that are scalable, secure, and easy to maintain.",
    content: "REST APIs are the backbone of modern web applications. In this tutorial, we'll build a complete API from scratch, covering authentication, validation, error handling, and documentation...",
    date: "2026-02-01",
    author: "Alex Johnson",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: "intro-to-ai-coding",
    title: "How AI is Changing the Way We Code",
    excerpt: "AI coding assistants are transforming software development. Explore how to effectively use AI tools to boost your productivity.",
    content: "From code completion to entire function generation, AI is becoming an indispensable part of the developer toolkit. We'll look at best practices for working with AI assistants and when to rely on them...",
    date: "2026-01-28",
    author: "Sam Wilson",
    tags: ["AI", "Productivity", "Future of Tech"],
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((post) => post.tags.includes(tag));
}
