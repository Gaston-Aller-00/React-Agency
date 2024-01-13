import React from "react";
import Maecenas from "../assets/maecenas.png";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto"></div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                Dignissim Maecenas just gets no intrusive trouble. Maecenas
                lobortis is like a dui, and the laughter is always like a
                potato. Proin eu enim metus. Vivamus sed libero ornare,
                tristique quam in, gravida enim. Nullam ut molestie arcu, at
                hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                molestie mi blandit. Suspendisse cursus tellus sed augue
                ultrices, quis tristique nulla sodales. Suspendisse eget lorem
                eu turpis vestibulum pretium. Suspendisse potenti. Quisque
                malesuada enim sapien, vitae placerat ante feugiat eget. Quisque
                vulputate odio neque, eget efficitur libero condimentum id.
                Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src={company1} alt="" className="cursor-pointer" />
                  <img src={company2} alt="" className="cursor-pointer" />
                  <img src={company3} alt="" className="cursor-pointer" />
                  <img src={company4} alt="" className="cursor-pointer" />
                  <img src={company5} alt="" className="cursor-pointer" />
                  <img src={company6} alt="" className="cursor-pointer" />
                  <div className="flex gap-8 items-center">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutralBlack"
                    >
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
