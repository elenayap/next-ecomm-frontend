<script>
    import { isLoggedIn, logOut, setLogIn } from '../utils/auth.js';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { uploadMedia } from '../utils/s3-uploader.js';
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import { getTokenFromLocalStorage } from '../utils/auth.js';

    
    // let formErrors = {};
    
    function logIn() {
        // nologInAlert();
        goto("/")
    }
    let isScrolled = false;
    
    // Function to handle scroll event
    function handleScroll() {
        isScrolled = window.scrollY > 0;
    }
    // Attach scroll event listener when the component mounts
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }); 

//function to handle upload image
async function uploadImage(evt) {
    const [fileName, fileUrl] = await uploadMedia(evt.target['file'].files[0]);
    // create POST image request to backend upload image endpoint
    const token = getTokenFromLocalStorage();
   const imageData = {
        image_price: parseInt(evt.target['image_price'].value),
        image_title: evt.target['image_title'].value,
        image_description: evt.target['image_description'].value,
        image_url: fileUrl
      };
// console.log(imageData);
    const resp = await fetch (
        PUBLIC_BACKEND_BASE_URL + '/image',
        {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(imageData)
        }
    );
    const res = await resp.json();
    if (resp.status == 200) {
        goto (`/${res.id}`);
       
    } 
    // else {
        // console.error('Failed to upload image');
        // formErrors = res.data;
        
    // } 
};

</script>

<svelte:head>
    <script src="/aws-sdk-s3.min.js"></script>
  </svelte:head>


<div data-theme="forest">
<div style="display: contents ">
    <div class="{isScrolled ? 'bg-secondary-content' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <div class="navbar bg-transparent text-neutral-content">
   
        <!-- Left section (Dropdown menu) -->
        <div class="navbar-start">
            <div class="dropdown">
                <label class="btn btn-circle  swap swap-rotate ml-2 bg-transparent">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" />
                    <!-- hamburger icon -->
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <!-- close icon -->
                    <svg class="swap-on fill-current " xmlns="http://www.w3.org/2000/svg" width="28" height="30"  viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                  </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                    <li><a href="/" class="normal-case text-base font-serif">Homepage</a></li>
                    <li><a href="/collections"class="normal-case text-base font-serif">Collections</a></li>
                    <li><a href="/about"class="normal-case text-base font-serif">About us</a></li>
                </ul>
            </div>
        </div>
        <!-- Center section (Logo) -->
        <div class="flex-1 flex justify-center">
            <a href="/" class="normal-case text-base font-serif text-stone-50 bg-accent-content pl-4 pr-4 pt-2 pb-2"><img src="/abstract-art.png" alt="Logo" class="logo-image w-auto h-12 ">Art Curator</a>
        </div>
        <!-- Right section (Create Account and Log In buttons) -->
        
        <div class="navbar-end flex items-center">
            
            <!-- This block is rendered when $logIn is truthy (i.e., true) -->
            {#if $setLogIn} 
                <!-- step1: if user is logged in -->
                <a href="/" class= "link link-hover font-serif text-stone-50 text-lg mr-8" on:click={logOut}>Log Out</a>
              
                <button class= "link link-hover font-serif text-stone-50 text-lg flex items-center" onclick="my_modal_2.showModal()">
                    <img src="/image.png" alt="upload logo" class="logo-image w-auto h-6 mr-1 ">Upload Image</button>


 <div class="form flex-col lg:flex-row">
<dialog id="my_modal_2" class="modal cursor-pointer">
  <div class="modal-box w-11/12 max-w-5xl">
    <form on:submit|preventDefault={uploadImage} class="w-full">
        <div class="form flex-col lg:flex-row">
            <div class="form-control w-full lg=w-1/2 mt-2">
                <input class="file-input w-full max w-xs" type="file" name="file" accept="image/*">
                <!-- {#if 'file' in formErrors} -->
                <!-- <label class="label" for="file">
                    <span class="label-text-alt text-red-500">{formErrors['file']}</span>
                </label>
                {/if} -->
            </div>
            <div class="form-control w-full lg=w-1/2 mt-2"></div>
        </div>
        <div class="form-control w-full">
            <label class="label" for="image_price">   
                <span class="label-text font-serif">Price</span>  
            </label>
            <input type="text" name="image_price" placeholder="1.99" class="input input-bordered w-full">
        </div>
    
        <div class="form-control w-full">
            <label class="label" for="image_title">   
                <span class="label-text font-serif">Title</span>  
            </label>
            <input type="text" name="image_title" placeholder="sunset" class="input input-bordered w-full">
        </div>
    
        <div class="form-control w-full">
            <label class="label" for="image_description">   
                <span class="label-text font-serif">Description</span>  
            </label>
            <textarea name="image_description" class="textarea textarea-bordered" placeholder="Beautiful Sunset in Los Angeles"></textarea>
        </div>
        <div class="form-control w-full mt-4">
            <button class="btn btn-md">Upload</button>
        </div>
    </form>
</div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>
                         
                {:else}
                <!-- This block is rendered when $setLogIn is falsy (i.e., false)  -->
                <!-- step2: if user is not logged in -->
                <a href="/login" class="link link-hover font-serif  text-stone-50 text-lg mr-8">Log In</a>
            {/if} 
            <!-- Create Account button -->
            {#if !$setLogIn}
                <a href="/users/new" class="link link-hover font-serif text-stone-50 text-lg mr-6">Create Account</a>
            {/if}
            <!-- Theme toggle button -->
            <label class="swap swap-rotate mr-4">
                <!-- Hidden checkbox to control the state -->
                <input type="checkbox" class="theme-controller" value="forest" />
                <!-- sun icon -->
                <svg class="swap-on fill-current w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                <!-- moon icon -->
                <svg class="swap-off fill-current w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
        </div>
    </div>   
</div>
</div>
</div>

