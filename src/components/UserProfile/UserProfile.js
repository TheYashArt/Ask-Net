import "./UserProfile.css";
import image from "../../Assets/ProfilePage.png";
import axios from "axios";
import { useEffect, useState } from "react";

function UserProfile({ userInfo }) {
  const [userdata, setUserdata] = useState(null);
  const [userdataupdate, setUserdataupdate] = useState({
    FirstName: "",
    Lastname: "",
    Email: "",
    mobile: "",
  });

  const QuestionAsked = 10;
  const QuestionAnswered = 5;

  // Fetch User Data when Component Loads
  useEffect(() => {
    axios
      .get(`http://localhost:4200/UserInformation?UserName=${userInfo?.UserName}`)
      .then((response) => {
        if (response.data.length > 0) {
          setUserdata(response.data[0]); // Store user data
          setUserdataupdate(response.data[0]); // Set initial values for editing
        }
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, [userInfo]); // Run this effect when `userInfo` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdataupdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (!userdata) return;

    try {
      axios.put(
        `http://localhost:4200/UserInformation/${userdata.id}`,
        userdataupdate
      );
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.error("Update Error:", error);
      alert("Failed to update profile");
    }
  };

  if (!userdata) {
    return <p>Loading profile...</p>; // Avoid rendering errors before data loads
  }

  return (
    <div className="UserProfile">
      <div className="UserProfileMainDiv">
        <div className="UserProfileImageDiv">
          <img width={"150px"} src={image} alt="Profile" className="UserProfileImage" />
        </div>

        <div className="UserProfileDetailsDiv">
          <div className="UserProfileName">
            <div className="UserProfileNameLabel">
              <div className="UserNamelabel">First Name</div>
              <div className="UserName">
                <input
                  type="text"
                  name="FirstName"
                  onChange={handleChange}
                  value={userdataupdate.FirstName}
                  className="UserNameInput"
                />
              </div>
            </div>

            <div className="UserProfileNameLabel">
              <div className="UserNamelabel">Last Name</div>
              <div className="UserName">
                <input
                  type="text"
                  name="Lastname"
                  onChange={handleChange}
                  value={userdataupdate.Lastname}
                  className="UserNameInput"
                />
              </div>
            </div>
          </div>

          <div className="UserProfileName">
            <div className="UserProfileNameLabel">
              <div className="UserNamelabel">Email</div>
              <div className="UserName">
                <input
                  type="email"
                  name="Email"
                  onChange={handleChange}
                  value={userdataupdate.Email}
                  className="UserNameInput"
                />
              </div>
            </div>

            <div className="UserProfileNameLabel">
              <div className="UserNamelabel">Mobile Number</div>
              <div className="UserName">
                <input
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                  value={userdataupdate.mobile}
                  className="UserNameInput"
                />
              </div>
            </div>
          </div>

          <div className="UserProfileName">
            <div className="UserProfileQuestionsDiv">
              <div className="UserNameLabel">Total Questions Asked</div>
              <div className="UserNameLabel QuestionAsked">{QuestionAsked}</div>
            </div>

            <div className="UserProfileQuestionsDiv">
              <div className="UserNameLabel">Total Questions Answered</div>
              <div className="UserNameLabel QuestionAsked">{QuestionAnswered}</div>
            </div>
          </div>

          <div className="UserProfileSaveButton">
            <button className="UserProfileButton" onClick={handleClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
