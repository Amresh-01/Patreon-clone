import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold text-4xl flex gap-2 justify-center items-center">Buy Me a Chai . . . .  <span><img src = "/tea.gif" width={88}></img></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
          focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
          focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5">
      </div>

      <div className="text-white">
        <h1> Your Fans Can Buy a Chai</h1>
        <div className="flex gap-5">
          <div className="item">
            <img src="/man.gif" width={88}></img>
          </div>
        </div>
      </div>
    </>
  );
}






