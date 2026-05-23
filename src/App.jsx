// import Layout from "./layout/Layout";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//     <Layout>
//       <Home />
//     </Layout>
//   );
// }

import React from "react";

function App() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-5 fw-bold text-primary">Bootstrap is Loaded!</h1>
        <p className="col-md-8 fs-4 mx-auto">
          Your React Vite app is now successfully utilizing Bootstrap utility
          classes.
        </p>
        <button className="btn btn-success btn-lg" type="button">
          Test Button
        </button>
      </div>

      {/* Interactive collapse test */}
      <div className="accordion" id="testAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Click to test JavaScript Interactivity
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#testAccordion"
          >
            <div className="accordion-body">
              <strong>It works!</strong> If this panel slides up and down when
              clicked, Bootstrap's JS bundle is properly hooked up.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
