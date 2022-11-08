import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReviews = () => {
  // State
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);
  // Access Context
  const { user } = useContext(AuthContext);
  // Load My reviews from db using query
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((err) => console.log(err));
  }, [refresh]);

  console.log(myReviews.length);

  //   Handle Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setRefresh(!refresh);
          console.log(data);
          toast.success("Deleted Review");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto my-10">
      {/* Reviews Table */}
      {/* Check if theres any reviews available */}
      {myReviews.length ? (
        <>
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
                <Table.Row
                  key={review._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
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
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="p-1  hover:bg-slate-500 rounded-md text-red-600 hover:text-white"
                    >
                      <FiTrash className="text-xl   " />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      ) : (
        <div>
          <h2 className="text-2xl text-center mt-10">No Reviews found</h2>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
