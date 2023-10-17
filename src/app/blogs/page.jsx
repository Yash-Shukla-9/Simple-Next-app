import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      Blogs page
      <Link href="/:id">
        <button>Go to more</button>
      </Link>
    </div>
  );
};

export default Blogs;
