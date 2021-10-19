import Stories from "./Stories.js";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 
    xl:max-w-6xl max-auto">
      {/* section */}
      <section className="col-span-2">
      {/* stories */}
        <Stories />
      </section>
      {/* posts */}

      {/* section 2 */}
      <section>

      </section>
      {/* mini profile */}
      {/* suggestions */}
    </main>
  );
}

export default Feed;
