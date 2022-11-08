import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReviews = () => {
  // State
  const [myReviews, setMyReviews] = useState([]);
  // Access Context
  const { user } = useContext(AuthContext);
  // Load My reviews from db using query
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(myReviews);

  const res = {
    _id: "636a820acb0a228436ce13d9",
    service_id: "5",
    service_name: "Desk",
    reviewer_name: "Victoria justice",
    reviewer_img:
      "https://i.pinimg.com/736x/40/9b/ce/409bce40cba42429ea5c024ee754a0c4.jpg",
    reviewer_email: "victoria@justice.com",
    reviewer_ratings: 4,
    reviewer_review: "This is my first feedback",
    reviewer_origin: "Google",
    reviewer_added: "10:21:30 PM 8/11/2022",
  };

  return (
    <div className="container mx-auto my-10">
      {/* Reviews Table */}
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Service name</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
          <Table.HeadCell>Review</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {myReviews.map((review) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {review.service_name}
              </Table.Cell>
              <Table.Cell>{review.reviewer_ratings}</Table.Cell>
              <Table.Cell>{review.reviewer_review}</Table.Cell>
              <Table.Cell>{review.service_price}</Table.Cell>
              <Table.Cell>
                <button className="p-1  hover:bg-slate-500 rounded-md text-green-600 hover:text-white">
                  <FiEdit className="text-xl " />
                </button>
              </Table.Cell>
              <Table.Cell>
                <button className="p-1  hover:bg-slate-500 rounded-md text-red-600 hover:text-white">
                  <FiTrash className="text-xl   " />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyReviews;
