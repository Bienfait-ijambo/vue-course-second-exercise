<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h1>{{post.title}}</h1>
                        <br>
                        <p>
                          {{ post.content }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>

        </div>
    </div>
</template>
<script>
import PostTable from '@/components/PostTable.vue'
import { mapState, mapActions } from 'pinia'
import { usePostStore } from '@/stores/postStore.js'
export default {
  components: {
    PostTable
  },
  computed: {
    ...mapState(usePostStore, ['post'])
  },
  methods: {
    ...mapActions(usePostStore, ['seePostDetail']),
  
  
  },
  async mounted() {
    const postId=this.$route.params?.id
    await this.seePostDetail(postId)
  }
}
</script>
