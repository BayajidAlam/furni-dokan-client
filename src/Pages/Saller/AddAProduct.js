import React, { useContext } from "react";
import {
  useQuery,
} from '@tanstack/react-query'
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddAProduct = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

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
    const sallerName = form.sellerName.value
    const originalPrice = form.orgPrice.value 
    const resalePrice = form.resPrice.value 
    const conditions = form.condition.value
    const catName = form.cateName.value 
    const mobile = form.mobile.value;
    const location = form.location.value 
    const description = form.description.value 
    const useingFrom = form.purchageYear.value
    const postedOn = new Date()
    const imgae = form.image.files[0]
    const email = user?.email

     // host image to imgbb 
    const formData = new FormData()
    formData.append('image',imgae)
    const url =`https://api.imgbb.com/1/upload?key=3a844d0da001165fa740ac3aec82b85f`
   
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{

      const product = {
        picture : imgData.data.url,
        resalePrice,
        originalPrice,
        name,
        location,
        useingFrom,
        sallerName,
        postedOn,
        catName,
        mobile,
        conditions,
        description,
        email,
        salesStatus :'unsold'
      }
     
      // send-server-db 
      fetch('http://localhost:5000/category',{
        method:'POSt',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
      })
      .then(res=>res.json())
      .then(resData=>{
        if(resData.acknowledged){
          form.reset()
          toast.success('Product added Successfully!')
          navigate('/dashboard/myProduct')
        }
      })
    })
  }

  return (
    <>
      <h1 className="text-2xl text-center pt-3">Add a Product</h1>
      <div className="hero">
      <div className="hero-content flex">
        <div className="card  lg:w-[700px] shadow-2xl bg-blue-100">

          <form onSubmit={handleSubmit}  className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Title</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Product Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Seller Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                defaultValue={user?.email}
                disabled
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Seller Mobile</span>
              </label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter your Mobile number"
                className="input input-bordered"
                required
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
                required
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
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Picture</span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="file-input w-full h-12"
                accept="image/*"
                required
              />

            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base ">Condition</span>
              </label>
              <select 
              name="condition"  
              className="select select-bordered"
              required
              >
                  <option defaultValue='excellent' value='excellent'>Excellent</option>
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
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text text-base ">Product Category</span>
              </label>
              <select 
              className="p-3 rounded-lg shadow border-base-200" name="cateName" 
              required
              >

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
              className="w-full rounded-lg h-20 p-2" placeholder="Description..."
              required
              ></textarea>
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
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster/>
    </div>
    </>
  );
};

export default AddAProduct;
