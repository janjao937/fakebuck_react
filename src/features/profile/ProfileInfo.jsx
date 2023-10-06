import Avatar from "../../component/Avatar";
import AuthUserAction from "./AuthUserAction";
import ReceiverAction from "./ReceiverAction";
import RequesterAction from "./RequesterAction";
import UnknowAction from "./UnknowAction";
import FriendAction from "./FriendAction";
import { Link } from "react-router-dom";
// import {useAuth} from "../../hooks/use-auth";

const ProfileInfo = ({userProfile,statusWithAuthUser,setStatusWithAuthUser,profileFriends}) => {

  const mappingObject = {
    AUTH_USER : <AuthUserAction setStatusWithAuthUser={setStatusWithAuthUser}/>,
    UNKNOWN:<UnknowAction setStatusWithAuthUser={setStatusWithAuthUser}/>,
    FRIEND:<FriendAction setStatusWithAuthUser={setStatusWithAuthUser}/>,
    REQUESTER:<RequesterAction setStatusWithAuthUser={setStatusWithAuthUser}/>,
    RECEIVER:<ReceiverAction setStatusWithAuthUser={setStatusWithAuthUser}/>
  }
  
  // const {authUser} = useAuth();
  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar src={userProfile.profileImage} className=" h-40 outline outline-white outline-[4px]" />
      </div>
      <div className="flex-1 mb-2">

        {/* <h2 className="text-2xl font-bold">{authUser.firstName} {authUser.lastName} </h2> */}
        <h2 className="text-2xl font-bold">{userProfile.firstName} {userProfile.lastName} </h2>
        <span className="black text-gray-500 font-semibold mb-2">
          {profileFriends.length} Friends
        </span>
        <div className="flex -space-x-3">
          
          {profileFriends.map(e=>(<Link key={e.id}>
          <Avatar className="h-8"  src={e.profileImage}/>
          </Link>)
          )}
        </div>

      </div>

      <div>
        {/* <button className="bg-gray-200 px-3 py-2 rounded-lg font-semibold hover:bg-gray-300 flex gap-2 items-center">
            <PenIcon/>
            <span>Edit profile</span>
        </button> */}

        
        {/* <AuthUserAction/> */}
        {/* <UnknowAction/>
        <ReceiverAction/>
        <RequesterAction/> */}

        <div>{mappingObject[statusWithAuthUser]}</div>

      </div>
    </div>
  );
};

export default ProfileInfo;
