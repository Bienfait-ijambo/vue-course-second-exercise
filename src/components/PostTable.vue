<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Post Title</th>
      <th scope="col">Content</th>
      <th scope="col">See Post</th>
      <th scope="col">Delete Post</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.postId">
      <th scope="row">{{post.postId}}</th>
      <td>{{post.title}}</td>
      <td>{{post.content}}</td>
      <td>
      	<button @click="$emit('seePostDetails',post.postId)" class="btn btn-outline-primary btn-sm">See Post</button>
      </td>
      <td>
      	<button @click="$emit('deletePost',post.postId)" class="btn btn-danger btn-sm">DeletePost</button>
      </td>
    </tr>
   
  </tbody>
</table>
</template>
<script>

export default {
    // A prop is parameter for components
    props:['posts'],
    emits:['deletePost','seePostDetails']
}
</script>
