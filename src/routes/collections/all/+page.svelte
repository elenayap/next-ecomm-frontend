<script>
  import humanize from 'humanize-plus';
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
 </script>
<div class="hero min-h-screen" style="background-image: url(https://iiif.micr.io/rAERt/full/1280,/0/default.jpg);">
    <div class="hero-overlay bg-opacity-40"></div>

<div class="container mt-40 mx-auto  lg:px-0"> 
  <div class="overflow-x-auto w-full" style="padding: 50px;">
     <div class="flex flex-wrap grid grid-cols-1 lg:grid-cols-4 gap-3">
        <!-- Card -->
        {#each data.image as image}
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
                <a class="btn btn-ghost" href="/collections/{image.id}">View More</a>
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

    
   
  

      

          <!-- Card
        <div class="card card-compact  glass shadow-xl w-full lg:w-auto lg:max-w-xs mx-4 mb-4">
            <figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG" alt="Terrace of a café at night" /></figure>
            <div class="card-body">
              <h2 class="card-title font-serif">Terrace of a café at night
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>This painting of a colorful outdoor view is a picturesque work, the vision of a relaxed spectator who enjoys the charm of his surrounding without any moral concern. It recalls Van Gogh's mood when he wrote that "the night is more alive and more richly colored than the day." The color is more profuse and the eye wanders along the steeped or dove-tailed edges of neighboring areas - irregular shapes fitted to each other like a jigsaw puzzle design. To divide this space for long into a large object and background themes is difficult for the eyes; the distant and nearer parts are alike distinct. The yellow of the cafe plays against the blue-black of the remote street and the violet-blue of the foreground door, and, by a paradox of composition that helps to unify the work, at the strongest point of contrast the awning's blunt corner nearest to us touches the remote blue sky. Foreshortened lines that thrust into depth, like the lintel of the door, are strictly parallel to lines like the slope of the yellow awning and the roof of the house above, which lie in planes perpendicular to the first. For this roving, unengaged vision the upward dimension is no less important and expressive than the depth.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-ghost">Buy Now</button>
              </div>
            </div>
          </div> -->







