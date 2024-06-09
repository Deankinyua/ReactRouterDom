import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  // const { id } = useParams();
  const careerData: any = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {careerData.title}</h2>
      <p>Starting salary: {careerData.salary}</p>
      <p>Location: {careerData.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
