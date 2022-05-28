import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div>
        <div className="my-3 flex justify-between">
          <h3>Name : MD Rasedul Islam</h3>
          <h3>Email: mdrased1015@gmail.com</h3>
        </div>
        <div>
          <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Skills</h2>
          <ul class="mt-2 mb-10">
            <li class="px-2 mt-1">HTML</li>
            <li class="px-2 mt-1">CSS</li>
            <li class="px-2 mt-1">Bootstrap</li>
            <li class="px-2 mt-1">Tailwind CSS</li>
            <li class="px-2 mt-1">JavaScript</li>
            <li class="px-2 mt-1">React</li>
            <li class="px-2 mt-1">Node.js</li>
            <li class="px-2 mt-1">Express</li>
          </ul>
        </div>

        <section>
          {/* education  */}
          <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
          <ul class="mt-2">
            <li class="pt-2">
              <p class="flex justify-between text-sm">
                <strong class="text-base">
                  Daffodil International University
                </strong>
                2018-2022
              </p>
              <p class="flex justify-between text-sm">
                Computer Science and Engineering (CSE) <small>GPA 3.30</small>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
          <ul class="mt-1">
            <li class="py-2">
              <div class="flex justify-between my-1">
                <strong>Car House </strong>
                <p class="flex">
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    HTML
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    React
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    express
                  </span>
                </p>
              </div>
              <ul class="flex mb-2">
                <li>
                  <a
                    href="https://carhouse-9996a.web.app/"
                    class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  >
                    Live
                  </a>
                </li>
              </ul>
              <p class="text-xs">
                Car House is type of inventory management where user can mange
                car inventory to help with car house ,user can manage with
                stock,update,delete etc.
              </p>
            </li>
            <li class="py-2">
              <div class="flex justify-between my-1">
                <strong>My lawyer</strong>
                <p class="flex">
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    HTML
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    React
                  </span>
                </p>
              </div>
              <ul class="flex mb-2">
                <li>
                  <a
                    href="https://my-lawyer-f9831.firebaseapp.com/"
                    class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  >
                    Live
                  </a>
                </li>
              </ul>
              <p class="text-xs">
                You can Hire your lawyer for solution your Problem
              </p>
            </li>
            <li class="py-2">
              <div class="flex justify-between my-1">
                <strong>Phone hunter</strong>
                <p class="flex">
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    HTML
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    CSS
                  </span>
                  <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                    React
                  </span>
                </p>
              </div>
              <ul class="flex mb-2">
                <li>
                  <a
                    href="https://mega-phone.netlify.app/"
                    class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                  >
                    Live
                  </a>
                </li>
              </ul>
              <p class="text-xs">
                Information about phone ,You can find out best phone with phone
                hunter
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MyPortfolio;
