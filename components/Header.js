import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function header() {
    return (
        <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="flex justify-between max-w-6xl mx-5 bg-white xl:mx-auto">
                {/* Left - Logo */}
                <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
                    <Image src="/images/instagram_logo.png" layout="fill" objectFit="contain" />
                </div>

                <div className="relative flex-shrink-0 w-10 cursor-pointer lg:hidden">
                    <Image src="/images/insta-logo.png" layout="fill" objectFit="contain" />
                </div>

                {/* Middle - Search Input field */}
                <div className="max-w-xs ">
                    <div className="relative p-3 mt-1 rounded-md">
                        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5" />
                        </div>
                        <input className="block w-full pl-10 text-sm border-gray-300 rounded-md bg-gray-50 focus:ring-black focus:border-black" type="text" placeholder="search" />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden" />

                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="rotate-45 navBtn" />
                        <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-2 animate-pulse">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img src="https://thispersondoesnotexist.com/image" alt="profile pic" className="h-10 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default header;
