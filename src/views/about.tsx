import React from "react";

import { useHistory, useLocation } from "react-router-dom";

export interface AboutProps {}

function usePageViews() {
  let location = useLocation();
  
  React.useEffect(() => {
    console.log("location🎈", location?.pathname);
  }, [location]);
}
const About: React.SFC<AboutProps> = () => {
  usePageViews();
  const history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <div className="about">
      <p>This is the about page</p>
      <button onClick={goLogin}>Go Login</button>
    </div>
  );
};

export default About;
