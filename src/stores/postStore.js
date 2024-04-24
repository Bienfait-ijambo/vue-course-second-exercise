import { defineStore } from 'pinia'
export const usePostStore = defineStore('post', {
  // data function
  state: () => ({
    posts: [],
    countPost: 0,
    post: {}
  }),
  // computed
  getters: {},
  // methods
  actions: {
    async fetchPost() {
      const res = await fetch('http://localhost:3000/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      this.posts = data
      this.countPost = data.length
    },
    async deletePost(postId) {
      const res = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      await this.fetchPost()
      console.log(data?.message)
    },
    async seePostDetail(postId) {
      const res = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      if (data.length > 0) {
        this.post = data[0]
      }
    },
    async createPost(post) {
        const res = await fetch(`http://localhost:3000/posts`, {
          method: 'POST',
          body: JSON.stringify(post),
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        console.log(data.message)
        
      }
  }
})
