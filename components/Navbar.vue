<template>
<nav :class="['navbar navbar-expand-lg fixed-top',  isTransparent ? 'bg-transparent fw-bold' : 'bg-light shadow']">
  <div class="container">
    <router-link class="navbar-brand" to="/">
        <img class="img-fluid image-width" src="@/assets/images-optimized/impactHive-logo.webp" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul :class="['navbar-nav ms-auto', isToggled ? 'bg-light p-3 rounded-2' : '']">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/services">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/faq">F.A.Q.</router-link>
        </li>
        <span class="vr mx-3 d-none d-lg-block" ></span>
        <li class="mt-3 mt-lg-0">
          <router-link to="/contact" id="book" class="ms-lg-2 btn btn-primary rounded-pill px-4 shadow-sm text-dark fw-bold">BOOK NOW</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const isTransparent = ref(true);
const isToggled = ref(false);

const toggleNavbar = () => {
  isToggled.value = !isToggled.value;
};

const handleScroll = () => {
  isTransparent.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // console.log(isTransparent.value)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<style scoped>
  .bg-transparent {
    transition: all 0.1s ease-in-out;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .bg-transparent .image-width {
    width: 200px;
    transition: all 0.2s ease-in-out;
  }

  .bg-transparent  .nav-link {
    color: #000000;
  }

  .bg-light {
    transition: all 0.2s ease-in-out;
  }
  
  .bg-light .image-width {
    width: 120px;
    transition: all 0.2s ease-in-out;
  }
  .active {
    color: #543a36 !important;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 4px
  }

  #book {
    background-color: #fce6e7;
    border-color: #fce6e7;
    transition: all 0.2s ease-in-out;
  }

  #book:hover {
    background-color: #ae6d71;
    border-color: #ae6d71;
    color: #ffffff !important;
    transform: scale(1.05);
  }

  .bg-light #book {
    background-color: #ae6d71;
    border-color: #ae6d71;
    color: #ffffff !important;
    transition: all 0.2s ease-in-out;
  }

  .bg-light #book:hover {
    background-color: #543a36;
    border-color: #543a36;
    color: #ffffff !important;
    transform: scale(1.05);
  }
</style>