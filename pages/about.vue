<template>
    <main>
        <div id="about-banner" class="p-custom d-flex flex-column align-items-center justify-content-center gap-4">
            <h1 class="fw-bold display-4">About Us</h1>
            <h3 class="fst-italic text-center">Driven by Purpose, Designed for Impact</h3>
        </div>

        <div class="container fs-5 my-5">
            <div class="row ">
                <div class="mb-5 col-md-4">
                    <div class="img-wrapper">
                        <img src="@/assets/images-optimized/about-charlotte.webp" class="img-fluid rounded-5 responsive-crop" alt="Charlotte Image">
                    </div>
                </div>
                <div class="col-md-8 d-flex flex-column justify-content-center px-5">
                    <p class="fs-3">
                        Hi, I’m Charlotte—founder of <span class="text-primary fw-bold">ImpactHive Marketing.</span> 
                    </p>
                    <p>
                        After working hands-on with small businesses for over four years in social media management and website design, I saw a clear need: small business owners wanted to grow online, but they were often overwhelmed, underserved, or unsure of where to begin. That’s why I started ImpactHive—to bring clarity, creativity, and strategy to small brands that deserve to be seen and heard.
                    </p>
                    <p>
                        What began as a one-woman mission has grown into a close-knit team of digital creatives, strategists, and developers who share a common goal: helping small business owners across the United Kingdom thrive in the digital space. We believe marketing should be purposeful, results-driven, and empowering—not confusing or out of reach.
                    </p>
                </div>
            </div>
        </div>

        <div id="mission" class="d-flex flex-column align-items-center justify-content-center py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 rounded-0 p-5 text-light fs-5 blur-bg ms-auto">
                        <p>
                            At <span class="fw-bold">ImpactHive</span>, we’re not just another marketing agency. We become part of your business journey.
                        </p>
                        <p> 
                            We take the time to understand your story, your audience, and your goals. Then we craft tailored solutions—whether that’s a standout Instagram presence or a website that actually converts visitors into customers.
                        </p>
                        <p>
                            We stand for integrity, collaboration, and growth. We’re here to help you stop second-guessing your digital strategy and start making a real impact with confidence.
                        </p>
                        <p class="fw-bold">
                            Your business deserves to be more than just online. It deserves to stand out.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            
        </div>
        <div class="container text-center py-5">
            <img src="@/assets/images-optimized/contact.svg" alt="web design" class="img-fluid callout-img">
            <p class="display-6 mb-4">
                Let’s build something powerful together.
            </p>
            <router-link to="/contact" class="btn btn-primary rounded-pill px-4 fs-4">Get in touch</router-link>
        </div>
    </main>
    
</template>


<style scoped>

.p-custom {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

#about-banner {
    min-height: 400px;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 218, 218, 0.8)), 
        url(@/assets/images-optimized/home-image-4.webp);
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
    
    padding-top: 5rem;
    padding-bottom: 5rem;
}

#mission {
    min-height: 600px;
    background-image: 
        linear-gradient(rgba(102, 85, 83, 0.7), rgba(102, 85, 83, 0.7)), 
        url(@/assets/images-optimized/about-2.webp);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.blur-bg  {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
}

.img-wrapper {
  width: 100%;
  height: auto;
  overflow: hidden;
}

/* Default: no crop */
.responsive-crop {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Crop only on md and below */
@media (max-width: 768px) {
  .img-wrapper {
    height: 400px; /* crop height at md+ */
  }

  .responsive-crop {
    height: 100%;
    object-fit: cover;
    object-position: center -50px;
  }
}

</style>