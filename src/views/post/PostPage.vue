<template>
  <div class="container">
    <div class="col-md-2"></div>
    <div class="col-md-9">
      <button>Total Posts :{{ countPost }}</button>
      <br/>
      <PostForm/>
      <br/>
      <PostTable :posts="posts"
       @deletePost="deleteArticle" 
       @seePostDetails="seeArticleDetail" />
    </div>
    <div class="col-md-1"></div>
  </div>
</template>
<script>
import PostTable from '@/components/PostTable.vue'
import PostForm from '@/components/PostForm.vue'

import { mapState, mapActions } from 'pinia'
import { usePostStore } from '@/stores/postStore.js'
export default {
  components: {
    PostTable,
    PostForm
  },
  computed: {
    ...mapState(usePostStore, ['posts', 'countPost'])
  },
  methods: {
    ...mapActions(usePostStore, ['fetchPost', 'deletePost']),
    async deleteArticle(postId) {
      if (confirm('do you want to delete this post?')) {
        await this.deletePost(postId)
      }
    },
    async seeArticleDetail(postId) {
    //   await this.seePostDetail(postId)
    this.$router.push('/post/' + postId)
    }
  },
  async mounted() {
    await this.fetchPost()
  }
}
</script>
