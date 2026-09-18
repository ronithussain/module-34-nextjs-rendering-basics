import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, dish_name, cuisine, image_link } = food;
  return (
    <div className="card bg-base-100 border border-gray-400 shadow-sm">
      <figure>
        <Image src={image_link} width={300} height={300} alt="foods img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{cuisine}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          
          <Link href={`/menu/${id}`}>
            <div className="badge badge-outline">Food Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
