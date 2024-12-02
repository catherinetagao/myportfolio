import React from "react";

const Footer = () => {
  return (
    <div id="contact">
      <footer class="flex flex-col items-center justify-between px-4 py-12 mx-auto max-w-7xl md:flex-row">
        <p class="mb-8 text-sm text-center text-gray-700 md:text-left md:mb-0">
          © Copyright 2024 CTO. All Rights Reserved.
        </p>
        <div class="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/catherine-tagao-orbe-07527b33b/"
            target="_blank"
          >
            <span class="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="2500"
              viewBox="7.025 7.025 497.951 497.95"
              class="w-5 h-5"
              aria-hidden="true"
            >
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1="-974.482"
                y1="1306.773"
                x2="-622.378"
                y2="1658.877"
                gradientTransform="translate(1054.43 -1226.825)"
              >
                <stop offset="0" stop-color="#2489be" />
                <stop offset="1" stop-color="#0575b3" />
              </linearGradient>
              <path
                d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                fill="url(#a)"
              />
            </svg>
          </a>
          <a href="https://github.com/catherinetagao" target="_blank">
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.51 3.57 10.16 8.5 11.8.62.11.85-.27.85-.6 0-.3-.01-1.37-.02-2.48-3.46.75-4.19-1.67-4.19-1.67-.56-1.42-1.36-1.8-1.36-1.8-1.11-.76.08-.75.08-.75 1.23.09 1.87 1.26 1.87 1.26 1.09 1.87 2.87 1.33 3.57 1.02.11-.79.43-1.33.78-1.64-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.63-5.46 5.93.44.38.83 1.14.83 2.3 0 1.66-.01 2.99-.01 3.39 0 .34.23.72.85.6C20.43 22.66 24 18.01 24 12.5 24 5.87 18.63.5 12 .5z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
