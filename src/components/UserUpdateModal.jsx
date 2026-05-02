import { authClient } from "@/lib/auth-client";
import React from "react";

const UserUpdateModal = () => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      image: photo,
      name: name,
    });
  };
  return (
    <div>
      <button
        className="btn w-full text-purple-500 border-purple-500"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update Profile
      </button>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-center"
      >
        <div className="bg-white p-16    rounded-2xl">
          <div className="modal-action">
            <form
              onSubmit={handleUpdate}
              method="dialog"
              className="flex flex-col gap-4"
            >
              <label className="block text-gray-700 font-bold mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="shadow  border border-gray-300 rounded w-full py-2 px-3 text-gray-700   "
                placeholder="Enter your name"
              />
              <label className="block text-gray-700 font-bold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="shadow  border border-gray-300 rounded w-full py-2 px-3 text-gray-700   "
                placeholder="Enter your photo URL"
              />

              <button
              onClick={() => document.getElementById("my_modal_5").close()}
                type="submit"
                className="btn"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserUpdateModal;
