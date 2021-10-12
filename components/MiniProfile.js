function MiniProfile() {
    return (
        <div className="flex items-center justify-between ml-10 mt-14">
            <img className="rounded-full border p-[2px] w-16 h-16" src="https://thispersondoesnotexist.com/image" alt="" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">arñwe aisosf</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>

            <button className="text-sm font-semibold text-blue-400">Sign Out</button>
        </div>
    );
}

export default MiniProfile;
