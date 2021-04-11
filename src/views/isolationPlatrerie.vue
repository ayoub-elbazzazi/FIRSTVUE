<template>
  <div class="our-blog">
    Cette page Concerne: {{ name }} ce qui y a un Métier {{ Métier }}
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="posts-area">
                    <BlogPaste/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="sidebar">
                    <blogsidebor/>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import BlogPaste from '../components/Blog/BlogPaste.vue';
import Blogsidebor from '../components/Blog/Blogsidebor.vue';
export default {
  components: { BlogPaste ,Blogsidebor},
  name,
    Abt: "blog",
 
     data: function() {
    return {
      name: "Ayoub",
      Métier: "Devellopeur Full Stack",
    };
  },
};
</script>
