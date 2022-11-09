import { Modal, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthProvider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useTitleChange from "../../hooks/useTitleChange";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const MyReviews = () => {
  useTitleChange("My Reviews");
  // State
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState({});
  const [refresh, setRefresh] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // Access Context
  const { user } = useContext(AuthContext);

  // Load My reviews from db using query
  useEffect(() => {
    fetch(
      `https://rifat-carpenter-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  //   Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rifat-carpenter-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setRefresh(!refresh);
              console.log(data);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // Handle Edit
  const handleEdit = (review) => {
    // Open Modal
    setShowEditModal(true);
    // Set selected review
    setSelectedReview(review);
  };

  // HandleUpdateReview on Modal and update on Mongodb
  const handleUpdateReview = (event) => {
    event.preventDefault();
    const ratings = 4; // needs change
    const review_desc = event.target.customerReview.value;

    const updateDoc = { ratings, review_desc };
    fetch(
      `https://rifat-carpenter-server.vercel.app/reviews/${selectedReview._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateDoc),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setRefresh(!refresh);
          toast.success("Review Updated");
        }
      })
      .catch((err) => console.log(err));

    // Close Modal After Clicking Update
    setShowEditModal(false);
  };

  return (
    <div className="container mx-auto my-10">
      {/* Reviews Table */}
      {/* Check if theres any reviews available */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
                        <button
                          onClick={() => handleEdit(review)}
                          className="p-1  hover:bg-slate-500 rounded-md text-green-600 hover:text-white"
                        >
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
        </>
      )}

      {/* Modal for Edit */}
      <Modal
        show={showEditModal}
        size="lg"
        popup={true}
        onClose={() => setShowEditModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={handleUpdateReview}
            className="grid grid-cols-1 md:grid-cols-6 gap-4"
          >
            {/* Profile Image */}
            <div className="self-center md:col-span-2">
              <img
                src={user?.photoURL}
                className="w-32 h-32 object-cover rounded-full"
                alt=""
              />
            </div>
            {/* Edit ratings & Review */}
            <div className="flex flex-col gap-3 md:col-span-4">
              {/* Stars */}
              <div className="flex items-center justify-between w-full">
                <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
                <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
                <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
                <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
                <AiOutlineStar className="text-3xl" />
              </div>
              {/* Feedback Field */}
              <div className="flex flex-col">
                <label htmlFor="customerReview" className="text-sm mb-2">
                  Update your feedback
                </label>
                <textarea
                  id="customerReview"
                  name="customerReview"
                  rows="4"
                  cols="40"
                  placeholder="Your Feedback goes here"
                  defaultValue={selectedReview.reviewer_review}
                  onChange={(e) =>
                    setSelectedReview({
                      ...selectedReview,
                      reviewer_review: e.target.value,
                    })
                  }
                  className="border-woodDark border-2 active:border-woodLight outline-none rounded-md"
                ></textarea>
              </div>
              {/* update brn */}
              <button
                type="submit"
                className="border border-woodLight py-2 px-4 text-woodLight hover:bg-woodDark hover:text-white rounded-md"
              >
                Update Review
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyReviews;
