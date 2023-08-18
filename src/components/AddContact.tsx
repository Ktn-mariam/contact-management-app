function AddContact() {
  return (
    <div className="bg-white p-6 rounded shadow-md mx-20 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create Contact
      </h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            First Name:
          </label>
          <input
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Last Name:
          </label>
          <input
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full border rounded py-2 px-3"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Phone No:
          </label>
          <input
            className="w-full border rounded py-2 px-3"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block">Status:</label>
          <label className="inline-flex items-center ml-5">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="status"
              value="active"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center ml-5">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="status"
              value="inactive"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddContact
