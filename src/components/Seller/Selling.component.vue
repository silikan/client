
<template>
  <div class="bg-white">
    <main>
      <!-- Category section -->
      <section
        aria-labelledby="category-heading"
        class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div
          class="
            px-4
            sm:px-6 sm:flex sm:items-center sm:justify-between
            lg:px-8
            xl:px-0
          "
        >
          <h2
            id="category-heading"
            class="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Browse by Category
          </h2>
          <a
            href="#"
            class="
              hidden
              text-sm
              font-semibold
              text-indigo-600
              hover:text-indigo-500
              sm:block
            "
            >all categories<span aria-hidden="true"> &rarr;</span></a
          >
        </div>

        <div class="mt-4 flow-root">
          <div class="-my-2">
            <div
              class="
                box-content
                py-2
                relative
                h-80
                overflow-x-auto
                xl:overflow-visible
              "
            >
              <div
                class="
                  absolute
                  min-w-screen-xl
                  px-4
                  flex
                  space-x-8
                  sm:px-6
                  lg:px-8
                  xl:relative
                  xl:px-0
                  xl:space-x-0
                  xl:grid
                  xl:grid-cols-5
                  xl:gap-x-8
                "
              >
                <a
                  v-for="category in categories"
                  :key="category.name"
                  :href="category.href"
                  class="
                    relative
                    w-56
                    h-80
                    rounded-lg
                    p-6
                    flex flex-col
                    overflow-hidden
                    hover:opacity-75
                    xl:w-auto
                  "
                >
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      :src="category.imageSrc"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="
                      absolute
                      inset-x-0
                      bottom-0
                      h-2/3
                      bg-gradient-to-t
                      from-gray-800
                      opacity-50
                    "
                  />
                  <span
                    class="
                      relative
                      mt-auto
                      text-center text-xl
                      font-bold
                      text-white
                    "
                    >{{ category.name }}</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 px-4 sm:hidden">
          <a
            href="#"
            class="
              block
              text-sm
              font-semibold
              text-indigo-600
              hover:text-indigo-500
            "
            >Browse all categories<span aria-hidden="true"> &rarr;</span></a
          >
        </div>
      </section>

      <!-- Featured section -->
      <section
        aria-labelledby="social-impact-heading"
        class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
      >
        <div class="relative rounded-lg overflow-hidden">
          <div class="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            class="
              relative
              bg-gray-900 bg-opacity-75
              py-32
              px-6
              sm:py-40 sm:px-12
              lg:px-16
            "
          >
            <div
              class="
                relative
                max-w-3xl
                mx-auto
                flex flex-col
                items-center
                text-center
              "
            >
              <h2
                id="social-impact-heading"
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                <span class="block sm:inline">Handymen</span>
              </h2>
              <p class="mt-3 text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                illum ipsum laboriosam tenetur maxime, enim libero impedit illo
                odio sequi fugiat sit beatae repellendus sunt officia quidem
                eius at quibusdam..
              </p>
              <a
                href="#"
                class="
                  mt-8
                  w-full
                  block
                  bg-white
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  text-base
                  font-medium
                  text-gray-900
                  hover:bg-gray-100
                  sm:w-auto
                "
                >Check All Handymen</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Collection section -->
      <section
        aria-labelledby="collection-heading"
        class="
          max-w-xl
          mx-auto
          pt-24
          px-4
          sm:pt-32 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <h2
          id="collection-heading"
          class="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Latest Gigs
        </h2>
        <p class="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div
          class="
            mt-10
            space-y-12
            lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8
          "
        >
          <a
            v-for="collection in collections"
            :key="collection.name"
            :href="collection.href"
            class="group block"
          >
            <div
              aria-hidden="true"
              class="
                aspect-w-3 aspect-h-2
                rounded-lg
                overflow-hidden
                group-hover:opacity-75
                lg:aspect-w-5 lg:aspect-h-6
              "
            >
              <img
                :src="collection.imageSrc"
                :alt="collection.imageAlt"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <h3 class="mt-4 text-base font-semibold text-gray-900">
              {{ collection.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ collection.description }}
            </p>
          </a>
        </div>
      </section>

      <!-- Featured section -->
      <section
        aria-labelledby="comfort-heading"
        class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <div class="relative rounded-lg overflow-hidden">
          <div class="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            class="
              relative
              bg-gray-900 bg-opacity-75
              py-32
              px-6
              sm:py-40 sm:px-12
              lg:px-16
            "
          >
            <div
              class="
                relative
                max-w-3xl
                mx-auto
                flex flex-col
                items-center
                text-center
              "
            >
              <h2
                id="comfort-heading"
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Simple productivity
              </h2>
              <p class="mt-3 text-xl text-white">
                Endless tasks, limited hours, a single piece of paper. Not
                really a haiku, but we're doing our best here. No kanban boards,
                burndown charts, or tangled flowcharts with our Focus system.
                Just the undeniable urge to fill empty circles.
              </p>
              <a
                href="#"
                class="
                  mt-8
                  w-full
                  block
                  bg-white
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  text-base
                  font-medium
                  text-gray-900
                  hover:bg-gray-100
                  sm:w-auto
                "
                >Shop Focus</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Sale",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];
const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export default {
  components: {},
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      currencies,
      navigation,
      categories,
      collections,
      footerNavigation,
      mobileMenuOpen,
    };
  },
};
</script>
