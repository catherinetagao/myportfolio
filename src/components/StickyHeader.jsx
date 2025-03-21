import React from "react";

const StickyHeader = () => {
  return (
    <header class="sticky top-0 bg-white shadow z-10">
      <div class="flex items-center justify-between p-4 mx-auto max-w-7xl ">
        <a href="">
          <img
            src="../ck_logo.png"
            alt=""
            class="flex items-center w-auto h-10"
          />
        </a>
        <div class="flex items-center space-x-1">
          <div class="hidden space-x-1 md:inline-flex">
            <a href="#skills" class="btn btn-sm btn-light">
              Skills
            </a>
            <a href="#projects" class="btn btn-sm btn-light">
              Projects
            </a>
            <a href="#contact" class="btn btn-sm btn-light">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
