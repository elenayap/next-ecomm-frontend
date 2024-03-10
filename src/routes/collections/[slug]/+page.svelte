<script>
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import SvelteMarkdown from 'svelte-markdown';
    import humanize from 'humanize-plus';
    import { goto } from '$app/navigation';
    import { getUserId, getTokenFromLocalStorage } from '../../../utils/auth.js'
    

//this export let data is link to src/+page.js
    export let data;
    let clicked = false;
// edit job brings to image page with specific user id update page
   function editImage() {
    goto(`/collections/${data.image.id}/update`); 
}
// to check is data and getuserId tally or not
// console.log("data:", data);
// console.log('user ID:', getUserId());
    function deletedImage() {
     goto('/collections/all');
}

async function deleteUserImage(){
    const getToken = getTokenFromLocalStorage();
    clicked = true;

const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/image/${data.image.id}`, {
        method:'DELETE',
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken}`   //must add 'Authorization': getToken to confirm job id and token authorized
        }, 
      });

      if (resp.status == 200) {
        deletedImage();
      } else {
        const res = await resp.json();
        console.log(res)
        // formErrors = res.message;
        clicked = false;
      }
 }



//payment function
 async function checkOutImage(id) {  //id = imageid
  // console.log(data.image.id)
  const resp = await fetch (PUBLIC_BACKEND_BASE_URL + `/payment`, {
        method:'POST',
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({id})
      });
      const res = await resp.json();
      window.location = res // res is go back to success url or cancel url set on backend
  }
 
  
    

 
  

</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content flex-col lg:flex-row mt-40">
        <img src={data.image.image_url} alt="Image" class="w-3/5 rounded-lg shadow-2xl"/>
        <div class="flex flex-row  mt-8 w-2/5">
            <div class="max-w w-full">
            <h1 class="text-3xl font-bold mb-5">{data.image.image_title}</h1>
            <h2 class="text-xl font-bold mb-5">Description</h2>
            <SvelteMarkdown source={data.image.image_description}/>
            <h2 class="text-xl font-thin mt-10 mb-5">Price</h2> 
            <p>USD {humanize.formatNumber(data.image.image_price)}</p>
            <div class="flex flex-col  mt-5">
            <button type="submit" on:click={checkOutImage(data.image.id)} class="btn btn-outline rounded">Buy Now</button>
            <div class="flex flex-col  mt-5">
<!-- to make only user who create the job can see edit button -->
    {#if data.image.userId == getUserId() }
    <button on:click={editImage} class="btn btn-outline rounded">EDIT</button>
    {/if}
    <div class="flex flex-col  mt-5">
    <!-- to make only user who create the job can see delete button -->
    {#if data.image.userId == getUserId() }
    <button on:click={deleteUserImage} class="btn btn-outline rounded">DELETE</button>
    {/if}
</div>
</div>
</div>
</div>
</div>
</div>
</div>



