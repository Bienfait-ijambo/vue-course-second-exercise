<template>
    
<form @submit.prevent="createArticle">
    <!-- {{ post }} -->
	<div class="form-group">
		<label>Post-title</label>
		<input type="text" v-model="post.title" class="form-control"/>
	</div>
	<div class="form-group">
		<label>Post-content</label>
		<textarea class="form-control" v-model="post.content"   rows="2"></textarea>
	</div>
	<div class="form-group">
		<button class="btn btn-success">Create Post</button>
	</div>
</form>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { usePostStore } from '@/stores/postStore.js'
export default {
    data(){
        return{
            post:{
                title:"",
                content:"",
            }
        }
    },
    methods:{
        ...mapActions(usePostStore,['createPost','fetchPost']),
        async createArticle(){
            await this.createPost(this.post)
            this.initInputs()
            await this.fetchPost()
            // const [createPostData,_]=await Promise.all([this.createPost(this.post),this.fetchPost()])
        },
        initInputs(){
            this.post.title=""
            this.post.content=""

        }
    }
}
</script>
