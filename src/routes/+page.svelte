<script>

</script>

<div class="hero min-h-screen" style="background-image: url(https://iiif.micr.io/rAERt/full/1280,/0/default.jpg);">
    <div class="hero-overlay bg-opacity-40"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mt-40 mb-5 text-6xl font-bold font-serif">Discover Masterpieces: Your Gateway to the World of Art</h1>
        <p class="mb-5 text-lg font-serif">Immerse yourself in the beauty of art with our curated collection spanning diverse genres and eras. From classical masterpieces to contemporary marvels, embark on a journey of discovery and appreciation.</p>
        <a href="/collections/all"class="btn btn-success text-lg font-serif w-40">Collections</a>
      </div>
    </div>
  </div>


  <div class="max-w-screen-xl mt-20 mx-auto lg:px-0">
    <div class="mb-10 text-6xl font-serif">
       <a>Hightlights</a>
    </div>
<!-- Carosel with next/prev button -->
<div class="carousel w-full pb-48">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://c4.wallpaperflare.com/wallpaper/547/188/59/boat-classic-art-reflection-stars-wallpaper-preview.jpg" class="w-full" style="background-image"/>
    <div class="absolute bottom-0 left-0 right-0 flex justify-center py-2 gap-6">
      <a href="#slide4" class="btn btn-circle opacity-50">❮</a> 
      <a href="#slide2" class="btn btn-circle opacity-50">❯</a>
    </div>
    <div class="absolute bottom-0 left-0 p-12 text-white">
      <p class="text-4xl font-serif">Starry Night Over the Rhône</p>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Van-Gogh-Wallpaper-HD-Free-download.jpg" class="w-full" />
    <div class="absolute bottom-0 left-0 right-0 flex justify-center py-2 gap-6">
      <a href="#slide1" class="btn btn-circle opacity-50">❮</a> 
      <a href="#slide3" class="btn btn-circle opacity-50">❯</a>
    </div>
    <div class="absolute bottom-0 left-0 p-12 text-white">
      <p class="text-4xl font-serif">Wheat Field with Cypresses</p>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://wallpapercave.com/wp/WsAnDgR.jpg" class="w-full" />
    <div class="absolute bottom-0 left-0 right-0 flex justify-center py-2 gap-6">
      <a href="#slide2" class="btn btn-circle opacity-50">❮</a> 
      <a href="#slide4" class="btn btn-circle opacity-50">❯</a>
    </div>
    <div class="absolute bottom-0 left-0 p-12 text-white">
      <p class="text-4xl font-serif">The Night Café</p>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" class="w-full" />
    <div class="absolute bottom-0 left-0 right-0 flex justify-center py-2 gap-6">
      <a href="#slide3" class="btn btn-circle opacity-50">❮</a> 
      <a href="#slide1" class="btn btn-circle opacity-50">❯</a>
    </div>
    <div class="absolute bottom-0 left-0 p-12 text-white">
      <p class="text-4xl font-serif">Starry Night</p>
    </div>
  </div>
  
</div>
</div>




















<!-- <div class = "container mt-3 lg:mt-10 mx-auto px-2 lg:px-0">
    <div class = "flex justify-end">
        <label for = "upload-image-modal" class= "btn btn-ghost gap-2">
            <svg xmlns = "http://www.ww3.org/2000/svg" class = "h-6 w-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" stroke-width = "1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
            </svg>
            "Upload Image"
        </label>
    </div>
<div class="grid grid-rows-1 lg:grid-cols-3 gap-4">
    <div class = "card bg-base-100 shadow-x1">
        <figure class="h-60">
            <img src ="https://media.architecturaldigest.com/photos/5ae22663eafdee4e6e6c3e83/16:9/w_2560%2Cc_limit/Monet%2520NG4240-A5.jpg" alt= "water lily">
        </figure>
        <div class="card-body">
            <h2 class = "card-title">
                "Water Lilies"
                <div class ="badge badge-secondary">NEW</div>
            </h2>
            <p>Claude Monet</p>
            <div class ="card-action item-end justify-end">
                <h3 class="text-x1 font-thin mr-4"> 
                    "USD"
                    "10000"
                </h3>
                <button data-price="10000" data-id="1" class="btn"> BUY NOW</button>
            </div>
    </div>

    <div class = "card bg-base-100 shadow-x1">
        <figure class="h-60">
            <img src ="https://i.guim.co.uk/img/media/f09d56f330b45fd125686370cd13b51f701b8bc7/31_31_2353_1539/master/2353.jpg?width=620&quality=85&auto=format&fit=max&s=20867f8d2d3f502cb3614547d5eed630" alt= "london fog">
        </figure>
        <div class="card-body">
            <h2 class = "card-title">
                "London Fog"
                <div class ="badge badge-secondary">NEW</div>
            </h2>
            <p>Claude Monet</p>
            <div class ="card-action item-end justify-end">
                <h3 class="text-x1 font-thin mr-4"> 
                    "USD"
                    "10000"
                </h3>
                <button data-price="10000" data-id="1" class="btn"> BUY NOW</button>
            </div>
    </div>
</div>

<input type="checkbox" id="upload-image=modal" class="modal-toggle">
<label for = "upload-image=modal" class = "modal cursor-pointer">
    <label class ="modal-box w-11/12 max-w-5x1" for>
    <form class="w-full">
        <div class="flex flex-col lg:flex-row">
            <div class="form-control w-full lg:w-1/2">
            <input class="file-input w-full max-w-xs" type="file" name="file">
            </div>
            <div class="w-full lg:w-1/2"></div>
        </div>
        <div class="form-control w-full>
            <label class= "label" for ="price">
                <span class="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="1.96" class="input input-border w-full">
        </div>
        <div class="form-control w-full>
            <label class="label" for ="title">
                <span class="label-text">Title</span>
            </label>
            <input type="text" name="title" placeholder="sunset" class="input input-border w-full">
        </div> 
        <div class="form-control w-full>
            <label class="label" for="description">
                <span class="label-text">TDescription</span>
            </label>
            <textarea name="description" class="textarea teaxtarea-bordered" placeholder="Beautiful Sunset in San Marino"></textarea>
        </div>    
        <div class="form-control w-full mt-4"> 
            <button class="btn btn-md">Upload</button>
        </div>
        </form>  
    </label>
</label>
<input type="checkbox" id="checkout-modal" class="modal-toggle">
<label for="checkout-modal" class="modal cursor-pointer">
    <label class="modal-box relative" for> 
        <div class="text-center mb-8">
            <h3 class="text-x1 font-thin">
                "Submit payment for USD"
                "Undefined"
            </h3>
        </div>
        <form id="payment-form">
            <div id="payment-element"></div>
            <div class="form-control w-full mt-4">
                <button id="submit" class="btn btn-md">Confirm Payment</button>
            </div>
            <div class="mt-2 text-red-500"></div>
        </form>
        <div class="mt-10 italic font-thin">
            <p>"You can test payment with card number 4242 4242 4242 4242,any expiration after today and any 3 digit CVV."</p>
            <p class="mt-2">You can also test for failed transaction with card number 4000 0000 0000 9979</p>
            <p class="mt-2">"For every more test card numbers:"
                <a target="_blank" href="https://stripe.com/docs/testing#declined-payments">https://stripe.com/docs/testing#declined-payments</a>   
            </p>
        </div>
    </lable>
</label>
</div>
<section class="flex my-8 mt-20 w-100 justify-center">
    <p class="flex font-thin">@ Art Curutor</p>
</section>
<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0px; top:0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); overflow:hidden; white-space: nowrap; width: 1px; height: 1px;">
</div>
</div> -->
<!-- <iframe name="__privateStripeMetricsController2270" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" aria-hidden="true" tabindex="-1" style="border: none !important; margin:0 px !importantl padding: 0px !important; width: 1px !important; min-width: 100% ! important; overflow: hidden !important; display: block !important; visibility: hidden !important; height: 1px !important; pointer-events: none !important; user-select: none !important;">
    #document ()
</iframe> -->

<!-- </body>
</html> -->
