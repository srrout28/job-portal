import Image from "next/image";
import { find, job, post, search } from "../../src/assests/Home";




export const navArr = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
      id: 2,
      title: "Jobs",
      path: "/jobs",
    },
    {
      id: 3,
      title: "Companies",
      path: "/companies",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact",
    },
    {
      id: 6,
      title: "Sign In",
      path: "/signin",
    },
  
];

export const twoSlide = [
  {
    id: 1,
    image: search,
    heading: "Search Your Job In your Area",
    subText: "Explore job opportunities in your area and find the perfect fit for your career.",
    buttonText: "Explore Jobs",
    buttonLink: "/jobs",
  },
  {
    id: 2,
    image: find,
    heading: "Find Jobs That Match Your Skills",
    subText: "Discover jobs based on your skillset and passion.",
    buttonText: "Find Jobs",
    buttonLink: "/jobs",
  },
];
export const desireJob = [
  {
    id: 1,
    image: job,
    heading: "Search Your Desired Job",
    subText: "Discover a career you are passionate about",
  },
  {
    id: 2,
    image: post,
    heading: "Post a Job Today",
    subText: "Discover the ideal candidate for your team",
    
  },
];
