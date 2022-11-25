import React from "react";
import {
  useQuery,
} from '@tanstack/react-query'

const AddAProduct = () => {

  // load data for category option 
  const {data:categories=[]} = useQuery({
    queryKey: ['categorys'],
    queryFn: () => fetch('http://localhost:5000/categorys')
    .then(res=>res.json())
    
  })


  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value 
    const originalPrice = form.orgPrice.value 
    const resalePrice = form.resPrice.value 
    const conditions = form.condition.value
    const catName = form.cateName.value 
    const mobile = form.mobile.value;
    const location = form.location.value 
    const description = form.description.value 
    const useingFrom = form.purchageYear.value
    const postedOn = new Date()
    
  }

  return (
    <>
      <h1 className="text-2xl text-center pt-3">Add a Product</h1>
      <div className="hero min-h-screen">
      <div className="hero-content flex">
        <div className="card  lg:w-[700px] shadow-2xl bg-blue-100">

          <form onSubmit={handleSubmit}  className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Mobile</span>
              </label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter your Mobile number"
                className="input input-bordered"
              />

            </div>
             
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Original Price</span>
              </label>
              <input
                type="number"
                name="orgPrice"
                placeholder="Enter original price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Resale Price</span>
              </label>
              <input
                type="number"
                name="resPrice"
                placeholder="Enter price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base ">Condition</span>
              </label>
              <select name="condition"  className="select select-bordered">
                  <option defaultValue='excellent' value='excellent' disabled >Excellent</option>
                  <option value='good'>Good</option>
                  <option value="fair">Fair</option>
              </select>
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                className="input input-bordered"
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text text-base ">Product Category</span>
              </label>
              <select className="p-3 rounded-lg shadow border-base-200" name="cateName" >

                {
                  categories.map((category,i)=><option
                  key={i}
                  value={category.catName}>{category.catName}</option>)
                }
                
           
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Description</span>
              </label>
              <textarea 
              name="description" 
              className="w-full rounded-lg h-20 p-2" placeholder="Description..."></textarea>
            </div>

    

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Year of purchage</span>
              </label>
              <input
                type="date"
                name="purchageYear"
                placeholder="Enter your location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddAProduct;
