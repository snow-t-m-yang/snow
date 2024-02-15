export type Blog = {
  title: string;
  src: string;
  date: string;
  author: string;
  catagory: string;
  id: string;
  tag?: string[];
};

const blogs: Blog[] = [
  {
    title: "Web Application 101",
    src: "https://www.robinwieruch.de/web-applications/",
    date: "02-15-2024",
    author: "Robin Wieruch",
    catagory: "web",
    id: crypto.randomUUID(),
    tag: ["beginner"],
  },
  {
    title: "A (Mostly) Complete Guide to React Rendering Behavior",
    src: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
    date: "02-15-2024",
    author: "Mark Erikson",
    catagory: "frontend",
    id: crypto.randomUUID(),
    tag: ["react", "javascript", "advanced"],
  },
  {
    title: "Should you go beyond Relational Databases?",
    src: "https://blog.teamtreehouse.com/should-you-go-beyond-relational-databases",
    date: "02-15-2024",
    author: "Treehouse",
    catagory: "backend",
    id: crypto.randomUUID(),
    tag: ["database"],
  },
];

export default blogs;
