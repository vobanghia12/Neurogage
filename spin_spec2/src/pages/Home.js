import Navbar from "../components/Navbar";
import "../app12.css";
// const Home = () => {
//     return <div>home please work<Navbar></Navbar></div>
//   };
  
//   export default Home;
  

  export default function Home() {
    return (
      <div className = "admin">
          <h1 className="dashboard-title">
              Welcome!
              Are You a user or Admin
          </h1>
          <div className = "overall">
              {/* {users.map((user,i) => {
                  return (
                      <CurrentUser 
                          key={i}
                          id={user._id}
                          name={user.name}
                      />
                  );
              })} */}
          </div>
          <h1 className="dashboard-title">
              Events Viewer
          </h1>
      </div>
  );
  
  }
  