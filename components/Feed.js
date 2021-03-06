import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile.js";
import Posts from "./Posts.js";
import Stories from "./Stories.js";
import Suggestions from "./Suggestions.js";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 
    xl:max-w-6xl mx-auto ${!session && "!grid-cols-2 !max-w-3xl"}`}>
      {/* section */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
          {/* suggestions */}
        </section>
      )}
    </main>
  );
}

export default Feed;
