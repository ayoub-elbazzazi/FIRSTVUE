<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <select >
      <option v-for=" (post,index) in posts " :key="index" value="post.id" > {{ post.title}}</option>
    </select>
    <button @click="getAxios">Get Axios</button>
    <Blogsidebor />
    <Contact  />
    <BlogPaste />
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
<script>
// @ is an alias to /src
import axios from 'axios';
import BlogPaste from "@/components/Blog/BlogPaste.vue";
import Blogsidebor from "@/components/Blog/Blogsidebor.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "home",
  components: {
    Blogsidebor,
    Contact,
    BlogPaste,
  },
  data() {
    return {
      product1: [
        {
          id: 1,
          nom: "aaa",
        },
        {
          id: 2,
          nom: "ttt",
        },
      ],
      posts: [],
    };
  },
   
  methods: {
   
    getAxios: function() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts=response.data;
      });
    },
  },
};
</script>
