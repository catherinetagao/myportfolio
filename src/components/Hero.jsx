import React from "react";

const Hero = () => {
  return (
    <section class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
      <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <span class="mb-3 text-white bg-gray-900 rounded-lg p-2">
          Undergraduate IT Student & Aspiring Web Developer
        </span>
        <h1 class="mb-6 text-4xl font-bold leading-tight text-{#000000}-900 md:text-4xl lg:text-5xl">
          Catherine Orbe
        </h1>
        <p class="pr-0 mb-4 text-sm text-{#000000}-800 tracking-relaxed lg:pr-16">
          Hello! I'm currently pursuing a Bachelor of Science in Information
          Technology. I'm passionate about web development and excited to learn
          and grow in this field. I'm looking for a part-time job where I can
          apply my knowledge and improve my skills.
        </p>
      </div>
      <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <img
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          class="object-cover w-30 h-30 bg-gray-100 md:h-30"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
