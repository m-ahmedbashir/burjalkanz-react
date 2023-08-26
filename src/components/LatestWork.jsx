import GestureAnimation from "../animation/GestureAnimation";

const LatestWork = () => {
  return (
    <>
      <section className="section latest-blog bg-2">
        <div className="container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 text-color">Latest Work</span>
                  <h2 className="mt-3 content-title text-white">
                    Latest works to enrich knowledge
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-5">
                <GestureAnimation>
                  <div className="card bg-transparent border-0">
                    <img
                      src="images/blog/1.jpg"
                      alt=""
                      className="img-fluid rounded"
                    />

                    <div className="card-body mt-2">
                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white">
                          Air Condition Work
                        </a>
                      </h3>
                    </div>
                  </div>
                </GestureAnimation>
              </div>

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <GestureAnimation>
                    <img
                      src="images/blog/2.jpg"
                      alt=""
                      className="img-fluid rounded"
                    />

                    <div className="card-body mt-2">
                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white">
                          Electromechanical Work
                        </a>
                      </h3>
                    </div>
                  </GestureAnimation>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <GestureAnimation>
                    <img
                      src="images/blog/3.jpg"
                      alt=""
                      className="img-fluid rounded"
                    />

                    <div className="card-body mt-2">
                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white">
                          Carpanter Work
                        </a>
                      </h3>
                    </div>
                  </GestureAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestWork;
