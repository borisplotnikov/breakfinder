export default function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="container-fluid">
        <h2 className="py-2 text-center">Header</h2>
      </header>

      <main className="container flex-grow-1">
        <div className="row g-3 mb-3">
          <section className="col-12 col-md-4">
            <div>1</div>
          </section>

          <section className="col-12 col-md-8 d-flex flex-column gap-3">
            <div className="d-flex gap-3">
              <div className="w-100">2</div>
              <div className="w-100">3</div>
            </div>

            <div className="d-flex gap-3">
              <div className="w-100">
                <button className="btn w-100">4</button>
              </div>
              <div className="w-100">
                <button className="btn w-100">5</button>
              </div>
            </div>

            <div>6</div>
          </section>
        </div>
      </main>

      <footer className="container-fluid">
        <h2 className="py-2 text-center">Footer</h2>
      </footer>
    </div>
  );
}
