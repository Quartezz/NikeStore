import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg-max-w-lg info-text">
          Explore the Nike store's special offer section for fantastic discounts
          on a wide range of athletic gear, stylish apparel, and cutting-edge
          footwear, all designed to elevate your game and style without breaking
          the bank.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover exclusive savings in the Nike store's special offer section
          and fulfill your unique style with premium athletic gear, stylish
          apparel, and cutting-edge footwear at prices that won't disappoint
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
