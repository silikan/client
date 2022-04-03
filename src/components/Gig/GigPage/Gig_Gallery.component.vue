<template>
  <div class="flex flex-col md:p-10 m-5 sm:m-1">
    <div class="profile flex justify-between flex-col ml-5 md:ml-0 mt-10">
      <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>
          <li v-for="page in pages" :key="page.name">
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                :href="page.href"
                class="
                  ml-4
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700
                "
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.name }}</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <h1 class="mb-2 text-3xl font-medium">I will Kil Ur Mom Today yaay</h1>
      <a href="#" class="flex-shrink-0 group block mb-5">
        <div class="flex items-center">
          <div>
            <img
              class="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p
              class="
                text-sm
                font-medium
                text-gray-700
                group-hover:text-gray-900
              "
            >
              Tom Cook
            </p>
            <p
              class="
                text-xs
                font-medium
                text-gray-500
                group-hover:text-gray-700
              "
            >
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>

    <div
      id="carouselExampleControls"
      class="carousel slide relative md:mb-3 h-full md:h-auto"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            class="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            class="block w-full"
            alt="Camera"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="block w-full"
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        class="
          carousel-control-prev
          absolute
          top-0
          bottom-0
          flex
          items-center
          justify-center
          p-0
          text-center
          border-0
          hover:outline-none hover:no-underline
          focus:outline-none focus:no-underline
          left-0
        "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="
          carousel-control-next
          absolute
          top-0
          bottom-0
          flex
          items-center
          justify-center
          p-0
          text-center
          border-0
          hover:outline-none hover:no-underline
          focus:outline-none focus:no-underline
          right-0
        "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div
      class="md:flex-1 md:grid md:grid-cols-4 md:gap-10 md:items-between hidden"
    >
      <div class="w-full rounded">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          class="active cursor-pointer block w-full"
          alt="Wild Landscape"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
        />
      </div>

      <div class="w-full rounded">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="active cursor-pointer block w-full"
          alt="Wild Landscape"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="1"
          aria-current="true"
          aria-label="Slide 2"
        />
      </div>
      <div class="w-full rounded">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="active cursor-pointer block w-full"
          alt="Wild Landscape"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="2"
          aria-current="true"
          aria-label="Slide 3"
        />
      </div>
      <div class="w-full rounded">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="active cursor-pointer block w-full"
          alt="Wild Landscape"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="3"
          aria-current="true"
          aria-label="Slide 4"
        />
      </div>
    </div>
      <div class="container mx-auto sm:px-6 lg:px-8 my-10">
    <h4 class="text-lg font-bold">Lorem ipsum</h4>
    <div class="mt-5 prose prose-indigo text-gray-500">
      <p class="mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam
        illum enim iste hic deserunt dolorem fugiat iure nihil unde cum a ipsam
        neque sed dolorum explicabo consectetur, inventore dolore. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Facilis molestias itaque
        consequuntur rerum maxime nobis aliquid officia? Corrupti suscipit,
        omnis minus maiores eius voluptatum quae, laborum tenetur aliquam minima
        vitae?
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/solid";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
import "tw-elements";

export default {
  components: {
    ChevronRightIcon,
    HomeIcon,
  },
  setup() {
    return {
      pages,
    };
  },
};
</script>
