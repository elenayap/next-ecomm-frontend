<script>
import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { authenticateUser } from './../../../utils/auth.js';
import { goto } from '$app/navigation';

let formErrors = {};
let clicked = false;

//suceessful signup will direct back to home page
async function postSignUp() {
    goto('/');
}

//step 2: create a async function write the condition statement
async function createUser(evt) {
    evt.preventDefault()
    clicked = true;

if (evt.target['password'].value != evt.target['password-confirmation'].value) {
        formErrors['password'] = { message: 'Password confirmation does not match' };
        return;
      }

//step 1: create userData and store what required in the signup page
const userData = {
        name: evt.target['name'].value,
        email: evt.target['email'].value,
        password: evt.target['password'].value
      };

// step 3: fetch API with the error handling 
//if res.status == 200 then await authenticateUser function
//if await authenticateUser function success then call the  postSignUp() function link to home page
//else await resp.json() then the formErrors = res.data; the data is from the resp.json 
  const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (resp.status == 200) {
        const res = await authenticateUser(userData.email, userData.password);

        if (res.success) {
            postSignUp();
            // signUpAlert();
        } else {
            throw "Sign up suceeded but authentication failed";
        }
      } else {
        const res = await resp.json();
        // console.log(res)
        formErrors = res.data;
        clicked = false;
      }
    }
</script>
<div class="hero min-h-screen" style="background-image: url(https://iiif.micr.io/rAERt/full/1280,/0/default.jpg);">
    <div class="hero-overlay bg-opacity-40"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
<div class="justify-center">
<h1 class="font-serif font-bold text-center text-3xl mt-24">Sign Up</h1>
  <div class="text-center">
  </div>
  <div class="flex justify-center items-center mt-8">
      <form on:submit={createUser} class="w-screen">
          <div class="form-control w-full">
              <label class="label" for="name">
                  <span class="label-text font-serif">Name</span>
              </label>
              <input
                  type="text"
                  name="name"
                  placeholder="johndoe"
                  class="input input-bordered w-full"
              />
              {#if 'name' in formErrors}
                  <label class="label" for="name">
                      <span class="label-text-alt text-red-500">{formErrors['name'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="email">
                  <span class="label-text font-serif">Email</span>
              </label>
              <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  class="input input-bordered w-full"
                  required
              />
              {#if 'email' in formErrors}
                  <label class="label" for="email">
                      <span class="label-text-alt text-red-500">{formErrors['email'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="password">
                  <span class="label-text font-serif">Password</span>
              </label>
              <input
                  type="password"
                  name="password"
                  placeholder=""
                  class="input input-bordered w-full"
                  required
              />
              {#if 'password' in formErrors}
                  <label class="label" for="password">
                      <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="password">
                  <span class="label-text font-serif">Confirm Password</span>
              </label>
              <input
                  type="password"
                  name="password-confirmation"
                  placeholder=""
                  class="input input-bordered w-full"
                  required
              />
              {#if 'password' in formErrors}
                  <label class="label" for="password">
                      <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full mt-8">
            {#if clicked}
            <button class="btn btn-active btn-primary" type="submit">
              <span class="loading loading-spinner hover:btn-accent font-serif"></span>
              Create an Account
            </button>
                <a class="link-hover italic text-xs text-center mt-4 font-serif" href="/login">Already have an account? Click here to login instead.</a>
            {:else}
                <button class="btn btn-primary hover:btn-accent font-serif" type="submit">
                Create an Account</button>
                  <a class="link-hover italic text-xs text-center mt-4 font-serif" href="/login">Already have an account? Click here to login instead.</a>
            {/if}
        </div>
      </form>
  </div>
</div>
</div>
</div>
</div>