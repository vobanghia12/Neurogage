import Navbar from "../components/Navbar";
// const Home = () => {
//     return <div>home please work<Navbar></Navbar></div>
//   };
  
//   export default Home;
  

  export default function Home() {
    // let navigate = useNavigate();
  
    // function handleJuror() {
    //   navigate("/JLogin");
    // }
  
    // function handleAdmin() {
    //   navigate("/AdminLogin");
    // }
  
    return (
      <div className="bg-offWhite">
        {/* <Navbar /> */}
        <div class="flex h-screen">
          <div className="flex flex-col m-auto">
            <div className="shadow-lg rounded-lg w-[500px] p-3">
              <div className="space-y-4">
                <div className="text-6xl font-bold">Hello!</div>
                <div className="text-lg"> Please Select Account</div>
                <div className="flex flex-col space-y-4 py-4">
                  <button
                    onClick={console.log("hi")}
                    className="btn text-3xl py-4 px-3"
                  >
                    Juror
                  </button>
                  <button
                    onClick={console.log("hi")}
                    className="btn text-3xl py-4 px-3"
                  >
                    Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  