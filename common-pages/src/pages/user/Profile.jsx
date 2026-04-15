const Profile = () => {
  return (
    <div className="profile-container">

      <div className="profile-card">

        {/* HEADER */}
        <div className="profile-header">
          <div className="avatar">V</div>

          <div>
            <h2 className="profile-name">Varnika</h2>
            <p className="profile-email">varnika@email.com</p>
          </div>
        </div>

        {/* STATS */}
        <div className="profile-stats">
          <div>
            <h3>12</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>5</h3>
            <p>Completed</p>
          </div>
          <div>
            <h3>3</h3>
            <p>In Progress</p>
          </div>
        </div>

        {/* ACTION */}
        <button className="profile-btn">Edit Profile</button>

      </div>

    </div>
  );
};

export default Profile;