import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import {getAllJobs} from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loading from "./Loading";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const {jobs, isLoading} = useSelector((store) => store.allJobs);
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>Jobs not found...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
