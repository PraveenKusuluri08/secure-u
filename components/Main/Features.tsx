import Image from "next/image";
import React from "react";
import RememberPasswordIcon from "@/public/password.svg"
const Features = () => {
  return (
    <div id="features">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-16 text-3xl font-bold">
            Features
          </h2>
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                <Image className="h-6 w-6 dark:bg-white dark:text-white" src={RememberPasswordIcon} alt={"Remember_Password"}/>
              </div>
              <h5 className="mb-4 text-lg font-bold">Support 24/7</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Laudantium totam quas cumque pariatur at doloremque hic quos
                quia eius. Reiciendis optio minus mollitia rerum labore facilis
                inventore voluptatem ad, quae quia sint. Ullam.
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Safe and solid</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                omnis praesentium, expedita nobis!
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Extremely fast</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                ullam beatae hic voluptatibus dolores exercitationem? Facilis
                debitis aspernatur amet nisi?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;

{
  /* <li>Remember Password</li>
<li>Generate Password</li>
<li>Multo Factor Auth</li>
<li>Web Monitoring</li> */
}
