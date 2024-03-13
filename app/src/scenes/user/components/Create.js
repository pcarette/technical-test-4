import React, { useState } from 'react'
import LoadingButton from '../../../components/loadingButton';
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik } from "formik";
import api from "../../../services/api";


const Create = () => {
    const [open, setOpen] = useState(false);
  
    const history = useHistory();
  
    return (
      <div style={{ marginBottom: 10 }}>
        <div className="text-right">
          <button className="bg-[#0560FD] text-[#fff] py-[12px] px-[22px] w-[170px] h-[48px]	rounded-[10px] text-[16px] font-medium" onClick={() => setOpen(true)}>
            New user
          </button>
        </div>
        {open ? (
          <div className=" absolute top-0 bottom-0 left-0 right-0  bg-[#00000066] flex justify-center p-[1rem] z-50 " onClick={() => setOpen(false)}>
            <div
              className="w-full md:w-[60%] h-fit  bg-[white] p-[25px] rounded-md"
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <Formik
                initialValues={{}}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    values.status = "active";
                    values.availability = "not available";
                    values.role = "ADMIN";
                    const res = await api.post("/user", values);
                    if (!res.ok) throw res;
                    toast.success("Created!");
                    setOpen(false);
                    history.push(`/user/${res.data._id}`);
                  } catch (e) {
                    console.log(e);
                    toast.error("Some Error!", e.code);
                  }
                  setSubmitting(false);
                }}>
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <React.Fragment>
                    <div>
                      <div className="flex justify-between flex-wrap">
                        <div className="w-full md:w-[48%] mt-2">
                          <div className="text-[14px] text-[#212325] font-medium	">Name</div>
                          <input className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="name" value={values.name} onChange={handleChange} />
                        </div>
                        <div className="w-full md:w-[48%] mt-2">
                          <div className="text-[14px] text-[#212325] font-medium	">Email</div>
                          <input className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="email" value={values.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap mt-3">
                        {/* Password */}
                        <div className="w-full md:w-[48%] mt-2">
                          <div className="text-[14px] text-[#212325] font-medium	">Password</div>
                          <input className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="password" value={values.password} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
  
                    <br />
                    <LoadingButton
                      className="mt-[1rem]  bg-[#0560FD] text-[16px] font-medium text-[#FFFFFF] py-[12px] px-[22px] rounded-[10px]"
                      loading={isSubmitting}
                      onClick={handleSubmit}>
                      Save
                    </LoadingButton>
                  </React.Fragment>
                )}
              </Formik>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  
  export default Create;