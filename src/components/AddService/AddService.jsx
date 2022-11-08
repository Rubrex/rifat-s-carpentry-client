import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useTitleChange from "../../hooks/useTitleChange";

const AddService = () => {
  useTitleChange("Add Service");
  // Handle Add Service
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const service_title = form.sName.value;
    const service_img = form.imageLink.value;
    const service_price = form.price.value;
    const service_description = form.desc.value;

    const addService = {
      service_id: "1",
      service_rating: "4",
      service_added: "02/06/2022",
      service_title,
      service_img,
      service_price,
      service_description,
    };
    console.log(addService);
    // Send new Service to the database
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New Service added successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="flex flex-col gap-4 max-w-[500px] p-14 border-slate-300 border mx-auto rounded-md"
      >
        {/* Name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Service Name" />
          </div>
          <TextInput
            id="name1"
            type="text"
            name="sName"
            placeholder="Service Name"
            required={true}
          />
        </div>
        {/* Service Image Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="imageLink" value="Service Picture" />
          </div>
          <TextInput
            id="imageLink"
            type="text"
            name="imageLink"
            placeholder="Link to the image"
            required={true}
          />
        </div>
        {/* Service Price */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            id="price"
            type="text"
            name="price"
            placeholder="price"
            required={true}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="desc" className="text-sm mb-2">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            cols="50"
            placeholder="Service description"
            className="border-woodDark border-2 active:border-woodLight outline-none rounded-md"
          ></textarea>
        </div>

        <Button
          type="submit"
          color="orange"
          className=" bg-woodDark hover:bg-woodLight text-white"
        >
          Add Service
        </Button>
      </form>
    </div>
  );
};

export default AddService;
