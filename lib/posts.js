// lib/posts.js
import postsData from '../data/posts.json';

export function getSortedPosts() {
  // Sort posts based on publication date in descending order
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return postsData.find((post) => post.id === slug) || null;
}