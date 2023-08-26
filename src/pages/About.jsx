const About = () => {
  return (
    <>
      <section class="page-title bg-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block text-center">
                <span class="text-white">About Us</span>
                <h1 class="text-capitalize mb-4 text-lg">Our Company</h1>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="index.html" class="text-white">
                      Home
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <span class="text-white">/</span>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-white-50">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section about-2 position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="about-item pr-3 mb-5 mb-lg-0">
                <span class="h6 text-color">What we are</span>
                <h2 class="mt-3 mb-4 position-relative content-title">
                  A company of technical services
                </h2>
                <p class="mb-5">
                  We provide services in the area of Carpentry, Plumbing &
                  Sanitary Installation, Plaster Works, Air-Conditioning and
                  many more. Helping our clients to get there work done. We
                  optimize work processes, making them complete before time.
                </p>

                <a href="#" class="btn btn-main btn-round-full">
                  Get started
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="about-item-img">
                <img src="images/about/home-7.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
