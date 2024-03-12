<script>
  import humanize from 'humanize-plus';
  import { paginate, LightPaginationNav } from 'svelte-paginate'
//this export let data is link to src/+page.js
   export let data;

  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
    if (showModal) {
      document.getElementById('my_modal_3').showModal();
    } else {
      document.getElementById('my_modal_3').close();
    }
  }

//step 1: Page pagination 
let images = data.image
let currentPage = 1
let pageSize = 8  //8 image cards per page
$: paginatedItems = paginate({ items: images, pageSize, currentPage })


 </script>
<div class="hero min-h-screen bg-white">
    <!-- <div class="hero-overlay bg-opacity-90"></div> -->

<div class="container mt-40 mx-auto  lg:px-0"> 
  <div class="overflow-x-auto w-full" style="padding: 50px;">
     <div class="flex flex-wrap grid grid-cols-1 lg:grid-cols-4 gap-3">
        <!-- Card -->
        <!-- {#each data.image as image}  -->
        <!-- step 2: -->
        {#each paginatedItems as image} 
        <div class="card card-compact  glass shadow-xl w-full lg:w-auto lg:max-w-xs mx-4 mb-4">
            <figure>
              <img class=" w-full h-96" src={image.image_url} alt={image.image_title}>
            </figure>
            <div class="card-body">
              <h2 class="card-title font-serif">{image.image_title.slice(0,40)}
              </h2>
              <div class="mt-4 text-xs">{image.image_description.slice(0,250)}...</div>
              <div class="text-sm">USD {humanize.formatNumber(image.image_price)}</div>
              <div class="card-actions justify-end">
                <a class="btn btn-ghost" href="/collections/{image.id}">View</a>
              </div>
            </div>
          </div> 
<!-- Modal box -->
<!-- <dialog id="my_modal_3" class="modal">
  <div class="modal-box w-11/12 max-w-7xl">
    <div class="modal-body">
          <h2 class="text-2xl">{image.image_title}</h2>
        <div class="text-right">
          <p class="badge badge-warning badge-lg text-neutral text-lg font-semibold mr-8">USD {humanize.formatNumber(image.image_price)}</p>
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5" on:click={toggleModal}>✕</button>
        </div>
      </div>
      <div class="mt-4">
        <img src={image.image_url} alt={image.image_title} class="w-full h-40">
      </div>
      <div class="mt-4">
        <p class="text-neutral text-lg">{image.image_description}</p>
      </div>
      <div class="mt-4 flex justify-center">
        <button class="btn btn-secondary">Edit</button>
        <button class="btn btn-secondary mx-4">Delete</button>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
</dialog>    -->
{/each}
</div>
</div>
</div>
</div>

<!-- Step 3:Page  pagination -->
<LightPaginationNav
totalItems="{images.length}"
pageSize="{pageSize}"
currentPage="{currentPage}"
limit="{1}"
showStepOptions="{true}"
on:setPage="{(e) => currentPage = e.detail.page}"
/>  
   
  

      






