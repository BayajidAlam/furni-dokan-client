import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ selectedCard, setSelectedCart }) => {
  const { name, resalePrice, email, picture, _id } = selectedCard;
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerphone = form.number.value;
    const meetLocation = form.meetLocation.value;

    const buyerName = user?.displayName;
    const sellerEmail = email;
    const buyerEmail = user?.email;

    const bookingData = {
      productName: name,
      price: resalePrice,
      buyerEmail,
      buyerName,
      buyerphone,
      meetLocation,
      sellerEmail,
      picture,
    };

    // send booking data to db
    fetch(`https://furni-dokan.vercel.app/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSelectedCart(null);
          handleUpdateBook(selectedCard._id);
          toast.success("Successfully Booked");
        }
      });
  };

  // set as booked
  const handleUpdateBook = (id) => {
    const body = {
      salesStatus: "sold",
    };
    fetch(`https://furni-dokan.vercel.app/setbooked/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" id="booking-model" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-model"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Your Name?</span>
              </label>
              <input
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Your Email?</span>
              </label>
              <input
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Product Name?</span>
              </label>
              <input
                defaultValue={name}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Product Price?</span>
              </label>
              <input
                defaultValue={resalePrice}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Phone Number</span>
              </label>
              <input
                type="number"
                name="number"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Meeting location</span>
              </label>
              <input
                type="text"
                name="meetLocation"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn w-full my-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingModal;
