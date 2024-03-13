import React, { useState } from "react";
import LoadingButton from "../../../components/loadingButton";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import toast from "react-hot-toast";
import api from "../../../services/api";


const Detail = ({ user }) => {
  const history = useHistory();
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);

  async function deleteData() {
    const confirm = window.confirm("Are you sure ?");
    if (!confirm) return;
    await api.remove(`/user/${user._id}`);
    toast.success("successfully removed!");
    history.push(`/user`);
  }

  return (
    <Formik
      initialValues={user}
      onSubmit={async (values) => {
        if (!isPasswordChanging) {
          delete values.password;
        }
        try {
          await api.put(`/user/${user._id}`, values);
          toast.success("Updated!");
          history.push(`/user`);
        } catch (e) {
          console.log(e);
          toast.error("Some Error!");
        }
      }}>
      {({ values, handleChange, handleSubmit, isSubmitting, setValues }) => {
        return (
          <React.Fragment>
            <div className="flex justify-between flex-wrap mt-4">
              <div className="w-full md:w-[260px] mt-[10px] md:mt-0 ">
                <div className="text-[14px] text-[#212325] font-medium	">Name</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] bg-[#F9FBFD] rounded-[10px]"
                  name="name"
                  disabled
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[260px] mt-[10px] md:mt-0">
                <div className="text-[14px] text-[#212325] font-medium	">Email</div>
                <input className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="email" value={values.email} onChange={handleChange} />
              </div>
              <div className="w-full md:w-[165px] mt-[10px] md:mt-0">
                <div className="text-[14px] text-[#212325] font-medium	">Status</div>
                <select className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" type="select" name="status" value={values.status} onChange={handleChange}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-4	space-x-3">
              <div className="w-full md:w-[260px] ">
                <div className="text-[14px] text-[#212325] font-medium">Job title</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px] bg-[#fff]"
                  name="job_title"
                  value={values.job_title}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[165px] mt-[10px] md:mt-0">
                <div className="text-[14px] text-[#212325] font-medium	">Availability</div>
                <select
                  className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]"
                  type="select"
                  name="availability"
                  value={values.availability}
                  onChange={handleChange}>
                  <option value="available">Available</option>
                  <option value="not available">Not available</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mt-4">
              <div className="w-full md:w-[260px] ">
                <div className="text-[14px] text-[#212325] font-medium	">Days worked</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]"
                  type="number"
                  name="days_worked"
                  value={values.days_worked}
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="w-full md:w-[260px] ">
                <div className="text-[14px] text-[#212325] font-medium	">Cost per day</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]"
                  type="number"
                  name="costPerDay"
                  value={values.costPerDay}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[260px] ">
                <div className="text-[14px] text-[#212325] font-medium	">Sell per day</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]"
                  type="number"
                  name="sellPerDay"
                  value={values.sellPerDay}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="text-[14px] text-[#212325] font-medium	">Description</div>
              <textarea
                className="w-full text-[14px] font-normal text-[#212325] border border-[#ced4da] mt-2 rounded-[10px] text-sm p-2  focus:outline-none focus:ring focus:ring-[#80bdff]"
                rows="12"
                name="description"
                value={values.description}
                onChange={handleChange}></textarea>
            </div>
            <div className="flex items-center mt-3">
              <input type="checkbox" id="changePasswordToggle" className="mr-2" checked={isPasswordChanging} onChange={() => setIsPasswordChanging(!isPasswordChanging)} />
              <label htmlFor="changePasswordToggle" className="text-[14px] text-[#212325] font-medium">
                Change Password
              </label>
            </div>
            {isPasswordChanging && (
              <div className="w-full md:w-[260px] mt-[10px] md:mt-0 mb-2">
                <div className="text-[14px] text-[#212325] font-medium	">New password</div>
                <input
                  className="projectsInput text-[14px] font-normal text-[#212325] bg-[#F9FBFD] rounded-[10px]"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="flex  mt-2">
              <LoadingButton className="bg-[#0560FD] text-[16px] font-medium text-[#FFFFFF] py-[12px] px-[22px] rounded-[10px]" loading={isSubmitting} onClick={handleSubmit}>
                Update
              </LoadingButton>
              <button className="ml-[10px] bg-[#F43F5E] text-[16px] font-medium text-[#FFFFFF] py-[12px] px-[22px] rounded-[10px]" onClick={deleteData}>
                Delete
              </button>
            </div>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default Detail;
