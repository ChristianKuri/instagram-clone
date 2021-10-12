import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className="bg-white border rounded-sm my-7">
            {/** Header */}
            <div className="flex items-center p-5">
                <img className="object-contain w-12 h-12 p-1 mr-3 border rounded-full" src={userImg} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/** Image */}
            <img className="object-cover w-full" src={img} alt="" />

            {/** Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="postBtn" />
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn" />
                </div>

                <BookmarkIcon className="postBtn" />
            </div>

            {/** Caption */}
            <div className="p-5 truncate">
                <span className="mr-1 font-bold">{username}</span>
                <span>{caption}</span>
            </div>

            {/** Comments */}

            {/** Input box */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input type="text" className="flex-1 border-none outline-none focus:ring-0" placeholder="Add a comment" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    );
}

export default Post;
