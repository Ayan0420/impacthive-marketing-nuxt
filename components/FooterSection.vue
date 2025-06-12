<template>
    <footer class="bg-white text-dark pt-5 pb-4">
      <div class="container">
        <div class="row gy-4">
          <!-- Company Info -->
          <div class="col-md-6">
            <img class="img-fluid" width="300" src="@/assets/images-optimized/impactHive-logo.webp" alt="">
            <p class="text-muted fs-5 my-2">
              Empowering brands through innovative social media strategies. Let’s grow your online presence together.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div class="col-md-3">
            <h6 class="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-decoration-none text-muted">Home</router-link></li>
              <li><router-link to="/services" class="text-decoration-none text-muted">Services</router-link></li>
              <li><router-link to="/about" class="text-decoration-none text-muted">About</router-link></li>
              <li><router-link to="#" class="text-decoration-none text-muted">Contact</router-link></li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div class="col-md-3">
            <h6 class="text-uppercase fw-semibold mb-3">Connect With Us</h6>
            <div class="d-flex gap-3">
              <a href="#" class="text-dark fs-5"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-dark fs-5"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-dark fs-5"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="text-dark fs-5"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
  
        <hr class="border-muted my-4" />
  
        <!-- Copyright -->
        <div class="text-center small text-muted">
          &copy; {{ new Date().getFullYear() }} ImpactHive Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'ImpactHiveFooter'
  }
  </script>
  
  <style scoped>
  footer a:hover {
    color: #3f2b28 !important; /* Bootstrap primary */
    transition: color 0.3s ease;
  }
  </style>
  