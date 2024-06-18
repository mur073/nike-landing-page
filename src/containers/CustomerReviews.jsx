import { CustomerCard } from '../components';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nemo, onventore, nemo.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CustomerCard key={review.imgURL} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
