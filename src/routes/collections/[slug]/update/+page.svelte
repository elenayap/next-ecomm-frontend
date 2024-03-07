<script>
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import { goto } from '$app/navigation';
    import { getTokenFromLocalStorage } from '../../../../utils/auth.js';
    import { uploadMedia } from '../../../../utils/s3-uploader.js';
   
    
    export let data;
    let clicked = false;
    
    let formErrors = {};

    // if user click update job button redirect to image page that the specific user created
    async function updatedImage() {
        goto(`/collections/${data.image.id}`);
    }
    
    
    // Function to handle update image form 
    async function updateImage(evt) {
        evt.preventDefault();
        
        const getToken = getTokenFromLocalStorage();
        const [fileName, fileUrl] = await uploadMedia(evt.target['file'].files[0]);
      
    const imageDetails = {
        image_title: evt.target['image_title'].value,
        image_price: parseInt(evt.target['image_price'].value),
        image_description: evt.target['image_description'].value,
        image_url: fileUrl
      };
    
    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/image/${data.image.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${getToken}` //must add 'Authorization': getToken to confirm job id and token authorized
            },
            body: JSON.stringify(imageDetails)
          });
    
          if (resp.status == 200) {
            updatedImage();
            clicked = true;
            // editJobSuccessAlert();
          } else {
            const res = await resp.json();
            // console.log(res)
            formErrors = res.message;
            clicked = false;
            // editJobFailedAlert();
          }
      }
    
</script>


<svelte:head>
    <script src="/aws-sdk-s3.min.js"></script>
</svelte:head>

<div class="hero min-h-screen" style="background-image: url(https://iiif.micr.io/rAERt/full/1280,/0/default.jpg);">
    <div class="hero-overlay bg-opacity-40"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">

<h1 class="font-serif font-bold text-center text-3xl mt-40">Update</h1>
<div class="flex justify-center items-center mt-8">
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form on:submit={updateImage} class="card-body">
    <div class="form flex-col lg:flex-row">
        <div class="form-control w-full lg=w-1/2 mt-100">
            <input value={data.image.image_url} class="file-input w-full max w-xs" type="file" name="file" accept="image/*">
        </div>
        <div class="form-control w-full lg=w-1/2 mt-2"></div>
    </div>
    <div class="form-control w-full">
        <label class="label" for="image_price">   
            <span class="label-text font-serif">Price</span>  
        </label>
        <input value={data.image.image_price} type="text" name="image_price" placeholder="1.99" class="input input-bordered w-full">
    </div>

    <div class="form-control w-full">
        <label class="label" for="image_title">   
            <span class="label-text font-serif">Title</span>  
        </label>
        <input value={data.image.image_title} type="text" name="image_title" placeholder="sunset" class="input input-bordered w-full">
    </div>

    <div class="form-control w-full">
        <label class="label" for="image_description">   
            <span class="label-text font-serif">Description</span>  
        </label>
        <textarea value={data.image.image_description} name="image_description" class="textarea textarea-bordered" placeholder="Beautiful Sunset in Los Angeles"></textarea>
    </div>
    <div class="form-control w-full mt-4">
        {#if clicked}
        <button class="btn btn-md" type="submit">
            <span class="loading loading-spinner hover:btn-accent"></span>
            Update Image
        </button>
        {:else}
        <button class="btn btn-md hover:btn-accent" type="submit">Update Image</button>
    {/if}
    </div>
</form>      
</div> 
</div> 
</div> 
</div> 
</div> 
