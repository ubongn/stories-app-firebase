import "./App.css";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img src="logo192.png" alt="App Logo" className="app__logo" />
        <h1>Shorts</h1>
      </div>
      <div className="app__videos">
        <VideoCard
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="NUG"
          avatarSrc="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
          song="I am a Windows PC"
          likes={950}
          shares={200}
        />
        <VideoCard
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="Ubong"
          avatarSrc="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
          song="I am a good PC"
          likes={850}
          shares={150}
        />
      </div>
    </div>
  );
}

export default App;
