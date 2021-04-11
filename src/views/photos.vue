<template>

     
      <div class="container">  {{userVal}} <br>
            <BlogPaste v-on:click.native="clicked()" v-on:incrmt="count" :value='3'/>
             <BlogPaste v-on:incrmt="count" />
             {{changeTime}}
             <ClassBinding  @updateVal="userUpdateVal()" :val="userVal"/>
             {{userVal}}
          </div>
          


</template>

<script>
import BlogPaste from "@/components/Blog/BlogPaste"
import ClassBinding from "@/components/ClassBinding"
     
export default {
    name:'photos',
    components:{
        BlogPaste,
        ClassBinding
    },
    data(){
        return{
             changeTime:0,
             userVal:5,
        }
       
    },
    methods:{
        count:function(){
             return this.changeTime++;
        },
        userUpdateVal:function(newVal){
           this.userVal=newVal
        }
        
       
             
      },
}
</script>
<style scoped>
.carre{
	width:200px;
	height:200px;
	background:#069;
}
</style>