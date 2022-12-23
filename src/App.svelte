<script>
  //code for App.svelte
  // json-server --watch db.json
  import { onMount } from 'svelte';
   let posts=[],title="",author="",id=0,msg=""
   onMount(load);
   async function load(){
     const res = await fetch('http://localhost:3000/posts')
     posts = await res.json();
     if (res.status != 200) {
       msg = 'Can not load post list'
     }
   }
   async function create(){
     console.log({ title, author })
     const res = await fetch('http://localhost:3000/posts', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({title,author})
     });
     if (!res.ok) {
       msg = 'create user fail '+res.status
       return
     }
     load()
 }
 async function del(sel_id) {
		const res = await fetch('http://localhost:3000/posts/' + sel_id, {
     method: 'DELETE' 
    });
		if (!res.ok) {
			msg = 'delete user fail '+res.status
			return
		}
    else{
      id = 0
      msg = ''
      const noBtn = document.getElementById('po');
      // @ts-ignore
      noBtn.checked = false;
    }
		load()
	}
	async function update() {
		const res = await fetch('http://localhost:3000/posts/' + id, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title,author})
		});
		if (!res.ok) {
			msg = 'update user fail '+res.status
			return
		}
		load()

	}
 async function sel(sel_id){
   let p  = posts.find((o)=>o.id==sel_id)
   if(p){
     id= p.id
     title=p.title
     author=p.author
     msg=`Post ${id} selected`
   }

 }

 </script>
 <h1>Add Your Favorite Books</h1>
 <div>
   <input placeholder="Title" bind:value={title}>
   <input placeholder="Author" bind:value={author}>  
   <button on:click={create} disabled={!title||!author}>Create</button>
   <button on:click={update} disabled={!title||!author||id==0}>Update {id}</button>
 </div>
 {#each posts as post}
   <div>
     <input type="radio" id="po" on:click={()=>sel(post.id)}>
     <button id="" on:click={() => del(post.id)}>x</button>  
     {post.title}({post.author}) 
   </div>
 {/each}
 <div>{msg}</div>