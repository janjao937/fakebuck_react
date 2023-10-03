import Avatar from "../../component/Avatar";
import AuthUserAction from "./AuthUserAction";
// import {useAuth} from "../../hooks/use-auth";

const ProfileInfo = () => {
  // const {authUser} = useAuth();
  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar className=" h-40 outline outline-white outline-[4px]" />
      </div>
      <div className="flex-1 mb-2">

        {/* <h2 className="text-2xl font-bold">{authUser.firstName} {authUser.lastName} </h2> */}
        <h2 className="text-2xl font-bold">Banana Doe </h2>
        <span className="black text-gray-500 font-semibold mb-2">
          6 Friends
        </span>
        <div className="flex -space-x-3">
          <Avatar className="h-8" />
          <Avatar className="h-8" />
        </div>

      </div>

      <div>
        {/* <button className="bg-gray-200 px-3 py-2 rounded-lg font-semibold hover:bg-gray-300 flex gap-2 items-center">
            <PenIcon/>
            <span>Edit profile</span>
        </button> */}
        <AuthUserAction/>
      </div>
    </div>
  );
};

export default ProfileInfo;
