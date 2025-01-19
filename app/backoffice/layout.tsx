import Sidebar from "./sidebar";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <div className="bg-teal-400 text-black p-5">Title</div>
                <div className="p-5">{children}</div>
            </div>
            <div className="w-[300px] h-screen bg-gray-500 p-5">
                <div>Right Box</div>
                <div className="bg-white p-3 rounded-lg mt-5 text-red-500">
                    Message Box
                </div>
            </div>
        </div>
    )
}