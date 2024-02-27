<script>
import { isLoggedIn, logOut,setLogIn } from '../utils/auth.js';
import {goto} from '$app/navigation'; 

function logIn() {
    // nologInAlert();
    goto("/")
}
</script>


<div class = "navbar bg-cyan-700 bg-secondary-content ">
    <div class = "flex-1"> 
        <a href = "/" class="btn btn-ghost normal-case text-2xl text-stone-50"><img src="/art.png" alt="Logo" class="logo-image w-auto h-12">Art Curator</a>
    </div>
   

 <!-- if log in click post a upload image button link to upload image -->
<!-- {#if $setLogIn}   
        <button class="btn btn-ghost btn-primary" on:click={()=> goto("/")}>Upload Image</button>
    {:else} 
            <button class="btn btn-outline btn-primary" on:click={logIn}>Upload Image</button>
           
{/if} -->

<div class = "flex-none"> 
<!-- write a condition statement for login/logout button -->
 <!-- call the store name in the condition, use $ sign to refer to store-->
 <!-- using conditional rendering with {#if ... :else ...}, 
the condition is implicitly checking if the value is truthy. -->
    {#if $setLogIn} <!-- This block is rendered when $logIn is truthy (i.e., true) -->  
<!-- step1:if user log in = true (mean logged in) will triggle the button "log out" -->
    <ul class="btn btn-oghost btn-primary ml-4 text-stone-50">
        <li>
            <button on:click={logOut}><a href= "/">Log Out</a></button>
        </li>   
    </ul>
    <!-- step2: else if the user log in = false (mean no log in) then the log in button shows -->
    {:else} <!-- This block is rendered when $setLogIn is falsy (i.e., false) -->
    <ul class="btn btn-ghost btn-primary ml-4 text-stone-50">
        <li>
            <button> <a href= "/login">Log In</a></button>          
        </li>     
    </ul>
    {/if}

    {#if !$setLogIn}
    <button class="btn btn-ghost btn-primary ml-4 text-stone-50">
            <a href= "/users/new">Create Account</a></button> 
    {/if}

    <!-- Theme toggle button -->
    <label class="swap swap-rotate">
  
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="forest" />
        
        <!-- sun icon -->
        <svg class="swap-on fill-current w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        <!-- moon icon -->
        <svg class="swap-off fill-current w-6 h-6 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>

</div>
</div>