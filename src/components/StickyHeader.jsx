import React from "react";

const StickyHeader = () => {
  return (
    <header class="sticky top-0 bg-white shadow">
      <div class="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <a href="">
          <img
            src="../ck_logo.png"
            alt=""
            class="flex items-center w-auto h-10"
          />
        </a>

        {/* <div>
          <button class="btn btn-light">Skills</button>
          <button class="btn btn-light">Projects</button>
          <button class="btn btn-light">Contact</button>
        </div> */}
        <div class="flex items-center space-x-1">
          <div class="hidden space-x-1 md:inline-flex">
            <a href="#" class="btn btn-sm btn-light">
              Skills
            </a>
            <a href="#" class="btn btn-sm btn-light">
              Projects
            </a>
            <a href="#" class="btn btn-sm btn-light">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
