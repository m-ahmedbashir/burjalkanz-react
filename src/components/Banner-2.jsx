const Banner2 = () => {
  return (
    <>
      <section className="section about position-relative">
        <div className="bg-about"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 offset-md-0">
              <div className="about-item">
                <span className="h6 text-color">What we are?</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  A company of technical services
                </h2>
                <div className="about-content">
                  <h4 className="mb-3 position-relative">
                    We are Perfect Solution
                  </h4>
                  <p className="mb-5">
                    We provide services in the area of Carpentry, Plumbing &
                    Sanitary Installation, Plaster Works, Air-Conditioning and
                    many more. Helping our clients to get there work done. We
                    optimize work processes, making them complete before time.
                  </p>

                  <a href="#" className="btn btn-main btn-round-full">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
