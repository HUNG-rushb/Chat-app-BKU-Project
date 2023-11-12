import Academy from '../page/Academy/Academy.jsx';
import Login from '../page/Authentication/Login.jsx';
import Register from '../page/Authentication/Register.jsx';
import Contest from '../page/Contest/Contest.jsx';
import ContestDetail from '../page/Contest/Tab/ContestDetail/ContestDetail.jsx';
import ContestManagement from '../page/ContestManagement/ContestManagement.jsx';
import Courses from '../page/Courses/Courses.jsx';
import CoursesManagement from '../page/CoursesManagement/CoursesManagement.jsx';
import UploadCourses from '../page/CoursesManagement/UploadCourses/UploadCourses.jsx';
import Explore from '../page/Explore/Explore.jsx';
import Home from '../page/Home/Home.jsx';
import LeaderBoard from '../page/LeaderBoard/LeaderBoard.jsx';
import MessagePage from '../page/Message/MessagePage.jsx';
import NotFound from '../page/NotFound/404NotFound.jsx';
import Notification from '../page/Notification/Notification.jsx';
import Profile from '../page/Profile/Profile.jsx';
import EditProfile from '../page/Profile/Tabs/Biography/EditProfile.jsx';
import TagSearchResult from '../page/TagSearchResult/SearchTagResult.jsx';
// admin
import ReportManagement from '../page/ReportManagement/ReportManagement.jsx';
import Statistic from '../page/Statistic/Statistic.jsx';
import StoryDetail from '../page/Stories/Story/StoryDetail.jsx';
// import UploadImageDetail from '../page/UploadImage/UploadDetail/UploadImageDetail.jsx';
import UploadImage from '../page/UploadImage/UploadImage.jsx';
import UploadStory from '../page/UploadStory/UploadStory.jsx';

const routes = [
  // user route
  {
    path: '/login',
    element: <Login />,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/register',
    element: <Register />,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/',
    element: <Home />,
    exact: true,
    isPrivate: true,
  },
];

export default routes;
