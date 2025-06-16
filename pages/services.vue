<template>
    <main>
        <div
            id="services-banner"
            class="p-custom d-flex flex-column align-items-center justify-content-center gap-4"
        >
            <h1 class="fw-bold display-4">Our Services</h1>
            <h3 class="fst-italic text-center">Strategic. Purposeful. Built for Results.</h3>
        </div>

        <div id="smm" class="container">
            <!-- SMM Services -->
            <div class="row my-5 gap-3 gap-lg-0">
                <div class="container-fluid">
                    <div class="row py-4 mb-5 rounded-5 bg-light">
                        <div class="col-md-6 mb-5 mb-md-0 d-flex justify-content-center">
                            <img
                                class="img-fluid service-image"
                                loading="lazy"
                                src="@/assets/images-optimized/social-media2.svg"
                                alt=""
                            />
                        </div>
                        <div
                            class="col-md-6 d-flex flex-column justify-content-center service-text px-4"
                        >
                            <h1 class="mb-3 fw-bold">Social Media Management</h1>
                            <p class="mb-5 mx-auto">
                                Build a strong online presence with consistent, on-brand, and
                                strategic content. We don’t just post for the sake of posting—we
                                build your brand voice, engage your audience, and support your
                                growth with purpose-driven strategies.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- SMM Service 1 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fs-2 text-primary fw-bold">Basic</h5>
                                <h4 class="text-muted">£150/month</h4>
                                <p class="card-text">
                                    Ideal for small businesses or individuals new to social media
                                </p>
                            </div>
                            <ul>
                                <li>Create 12 posts per month (3 per week)</li>
                                <li>Platform management (1 platform)</li>
                                <li>Caption writing</li>
                                <li>Hashtag and trend research</li>
                                <li>Basic content strategy</li>
                                <li>Basic post graphic design</li>
                                <li>1 reel or video per week</li>
                                <li>Basic engagement support</li>
                                <li>Done-for-you post uploads</li>
                                <li>1-to-1 support from Charlotte</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>

                <!-- SMM Service 2 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fs-2 text-primary fw-bold">Standard</h5>
                                <h4 class="text-muted">£250/month</h4>
                                <p class="card-text">
                                    Ideal for growing businesses looking to expand their presence
                                </p>
                            </div>
                            <ul>
                                <li>16 posts per month (4 per week)</li>
                                <li>Platform management (up to 2 platforms)</li>
                                <li>Captions and content strategy</li>
                                <li>Hashtag research and planning</li>
                                <li>Custom post design</li>
                                <li>1 monthly content calendar</li>
                                <li>2 reels or videos per week</li>
                                <li>2 stories per week</li>
                                <li>Monthly performance report</li>
                                <li>2 hours of community management (replies, comments, DMs)</li>
                                <li>Done-for-you uploads</li>
                                <li>1-to-1 support from Charlotte</li>
                                <li>Page growth focus</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>

                <!-- SMM Service 3 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <h5 class="card-title fs-2 text-primary fw-bold">Premium</h5>
                            <h4 class="text-muted">£350/month</h4>
                            <p class="card-text">
                                Ideal for established brands seeking a consistent and cohesive
                                digital presence
                            </p>
                            <ul>
                                <li>20 posts per month (5 per week)</li>
                                <li>Platform management (up to 3 platforms)</li>
                                <li>Advanced caption writing with engagement tactics</li>
                                <li>Hashtag strategy and regular updates</li>
                                <li>Branded graphic design</li>
                                <li>Monthly content calendar</li>
                                <li>3 reels or videos per week</li>
                                <li>3 stories per week</li>
                                <li>3 hours of active community management</li>
                                <li>Bi-weekly performance reporting</li>
                                <li>Done-for-you post uploads</li>
                                <li>1-to-1 support from Charlotte</li>
                                <li>Page growth strategy</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="web-dev" class="container my-5 py-5">
            <!-- Web Development Services -->
            <div class="row mb-4 gap-3 gap-lg-0">
                <div class="container-fluid">
                    <div class="row py-4 mb-5 rounded-5 bg-light">
                        <div
                            class="col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center text-end service-text px-4"
                        >
                            <h1 class="mb-3 fw-bold">Website Design & Development</h1>
                            <p class="mb-5 mx-auto" style="max-width: 800px">
                                Professional, responsive, and conversion-focused websites tailored
                                to your business goals. Your website should work for you—not against
                                you. We design sites that not only look great, but also help convert
                                visitors into customers.
                            </p>
                        </div>

                        <div
                            class="col-md-6 order-1 order-md-2 mb-5 mb-md-0 d-flex justify-content-center"
                        >
                            <img
                                class="img-fluid service-image"
                                loading="lazy"
                                src="@/assets/images-optimized/web-design2.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <!-- Website Service 1 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fs-2 text-primary fw-bold">Basic</h5>
                                <h4 class="text-muted">£299 (One-Time Payment)</h4>
                                <p class="card-text">
                                    Ideal for startups or small businesses looking for a clean and
                                    effective online presence.
                                </p>
                            </div>
                            <ul>
                                <li>Custom website design (up to 5 pages)</li>
                                <li>Mobile responsive layout</li>
                                <li>Basic SEO optimization</li>
                                <li>Contact form integration</li>
                                <li>Google Maps and social media links</li>
                                <li>Basic analytics setup</li>
                                <li>1 month of post-launch support</li>
                                <li>1 year of free hosting</li>
                                <li>Custom domain name setup</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>

                <!-- Website Service 2 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fs-2 text-primary fw-bold">Standard</h5>
                                <h4 class="text-muted">£599 (One-Time Payment)</h4>
                                <p class="card-text">
                                    Perfect for businesses ready to upgrade to a more functional,
                                    conversion-friendly site.
                                </p>
                            </div>
                            <ul>
                                <li>Custom website design (up to 10 pages)</li>
                                <li>Fully responsive layout</li>
                                <li>Advanced SEO setup</li>
                                <li>Contact and booking forms</li>
                                <li>Blog and image gallery features</li>
                                <li>Testimonials display</li>
                                <li>Optional course or event booking system</li>
                                <li>Google Maps and social media links</li>
                                <li>Analytics setup</li>
                                <li>2 months of post-launch support</li>
                                <li>3 months of maintenance</li>
                                <li>1 year of free hosting</li>
                                <li>Custom domain name setup</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>

                <!-- Website Service 3 -->
                <div class="col-12 col-lg-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="card border-0 rounded-5 py-2 shadow-sm">
                        <div class="card-body p-4 d-flex flex-column justify-content-between">
                            <h5 class="card-title fs-2 text-primary fw-bold">Premium</h5>
                            <h4 class="text-muted">£899 (One-Time Payment)</h4>
                            <p class="card-text">
                                Built for brands ready for a full-scale, high-converting online
                                solution.
                            </p>
                            <ul>
                                <li>Custom website design (up to 15 pages)</li>
                                <li>Mobile responsive and scalable layout</li>
                                <li>Advanced on-page and off-page SEO</li>
                                <li>Smart contact, inquiry, and scheduling forms</li>
                                <li>Blog, gallery, case studies, and review integration</li>
                                <li>Multi-language support (if needed)</li>
                                <li>Membership or private access areas</li>
                                <li>Custom forms (e.g., quote requests)</li>
                                <li>Google Maps and social links</li>
                                <li>Advanced analytics and monthly insights</li>
                                <li>3 months of post-launch support</li>
                                <li>6 months of website maintenance</li>
                                <li>1 year of free hosting</li>
                                <li>Domain name setup and email configuration</li>
                            </ul>
                            <router-link
                                to="/contact#contact-section"
                                class="btn btn-outline-dark rounded-pill px-4 py-2 align-self-start"
                                >I'M INTERESTED</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="card border-0 rounded-5 py-2 shadow-sm py-4 mb-5">
                <h5 class="text-center text-primary fw-bold mb-3">Optional Add-Ons</h5>

                <div class="row g-2 px-5">
                    <ul class="col-12 col-md-6 col-lg-3">
                        <li>Online payment integration – £80</li>
                        <li>Custom logo design – £70</li>
                    </ul>
                    <ul class="col-12 col-md-6 col-lg-3">
                        <li>E-commerce setup – £100</li>
                        <li>Blog setup – £100</li>
                    </ul>
                    <ul class="col-12 col-md-6 col-lg-3">
                        <li>Live chat feature – £100</li>
                        <li>Monthly maintenance – £40/month</li>
                    </ul>
                    <ul class="col-12 col-md-6 col-lg-3">
                        <li>Additional hosting year – £50</li>
                        <li>Extra domain – £60</li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            id="service-note"
            class="text-light p-5 d-flex flex-column justify-content-center align-items-center gap-4"
        >
            <img
                src="@/assets/images-optimized/web-design3.svg"
                alt="web design"
                class="img-fluid webdesign-img"
            />
            <p class="text-center fs-4 mb-5 pb-5">
                All our website design packages are
                <span class="fw-bold"
                    >fully customisable based on your goals, business needs, and budget.</span
                >
                Whether you're starting small or ready to scale, we'll tailor the perfect solution
                for you.
            </p>

            <img
                src="@/assets/images-optimized/web-design4.svg"
                alt="web design"
                class="img-fluid webdesign-img"
            />
            <p class="text-center fs-4">
                <span class="fw-bold">Every website is manually coded</span> by our skilled web
                developer to ensure clean structure, fast performance, and complete flexibility —
                giving you a professional, high-quality site that truly represents your brand.
            </p>

            <div class="mt-5">
                <p>
                    Have questions about our services? Check out our
                    <router-link to="/faq" class="text-warning fw-bold">FAQ page</router-link> for
                    answers.
                </p>
            </div>
        </div>
        <div class="container text-center py-5">
            <img
                src="@/assets/images-optimized/question.svg"
                alt="web design"
                class="img-fluid callout-img"
            />
            <p class="display-6 mb-4">Interested in working with us?</p>
            <router-link to="/contact" class="btn btn-primary rounded-pill px-4 fs-4"
                >Get in touch</router-link
            >
        </div>
    </main>
</template>

<style scoped>
#services-banner {
    min-height: 400px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 218, 218, 0.8)),
        url(@/assets/images-optimized/service-3.webp);
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */

    padding-top: 5rem;
    padding-bottom: 5rem;
}

#service-note {
    background-color: #855356;
    min-height: 500px;
}

.service-image {
    max-width: 400px;
}

.webdesign-img {
    max-width: 300px;
}

@media (max-width: 768px) {
    .service-image {
        max-width: 200px;
    }

    .service-text {
        text-align: center !important;
    }
}

.card {
    background-color: #fce6e7;
}

#web-dev,
#smm {
    scroll-margin-top: 80px;
}
</style>
