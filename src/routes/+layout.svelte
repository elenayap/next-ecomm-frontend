<script>
    import "../app.css";
    import Navigatebar from './header.svelte'; 
    import Footer from './footer.svelte';
    import NewAlert from './alert.svelte'; // import this so the component can use in every pages
  </script>
  <Navigatebar />
  <div>
  <NewAlert />
  <slot />
</div>
  <Footer />