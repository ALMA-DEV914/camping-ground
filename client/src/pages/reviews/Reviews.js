import React from "react";
import ButtonAppBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ThoughtList from "../../components/thought/ThoughtList";
import ThoughtForm from "../../components/thought/ThoughtForm";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../../utils/queries";

export default function Reviews() {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();
  return (
    <div>
      <ButtonAppBar />

      <div className="container div-reviews">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`row ${loggedIn && "col-lg-12"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="thougthList">
             <div className="alert"> <span>Sharing your experience staying at a park or campground is a great way to help out fellow campers. We think good reviews are helpful, inclusive, and constructive. Even if you had a bad experience, please be nice. Signup or login to write some post or reviews...</span></div>
              <ThoughtList
                thoughts={thoughts}
                title="Some Reviews from our Customers"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
