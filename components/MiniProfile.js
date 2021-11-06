function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/39064426_1973644069417349_2756720232042070016_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=65WGwHaL2psAX_O1oFf&_nc_ht=scontent.fsof5-1.fna&oh=880cf2709cdd5fb19f906e96707483d8&oe=6194072F"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">kristian</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
