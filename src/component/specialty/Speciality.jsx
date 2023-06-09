import React from "react";
import "../specialty/speciality.css";
import spec2 from "../../img/spec2.png";
import spec1 from "../../img/spec1.png";
import test6 from "../../img/test6.jpg";
import car from "../../img/test6.jpg";

export default function Speciality() {
  return (
    <section class="overflow-hidden pb-20 bg-gray-50 sm:grid sm:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-[#111827] md:text-3xl text-4xl tracking-tight font-extrabold ">
            Services
          </h2>

          <p class="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded bg-[#111827] px-12 py-3 text-sm font-medium text-white transition hover:text-[#111827] hover:bg-[#ECECEC] focus:outline-none focus:ring focus:ring-[#111827]"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src={test6}
        class="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}
