import './App.css';

function App() {
  return (
    <div>
      <main>

        <header className='p-[1rem] bg-[#38a7a1] flex justify-between shadow-xl'>
          <a href="" className="font-bold text-[2rem]">MyBlog</a>
          <nav className='font-bold text-[1.6rem] px-5 space-x-3'>
            <a href="">Login</a>
            <a href="">Register</a>
          </nav>
        </header>

        <div className='columns-1 max-w-[80%] m-auto md:columns-2 gap-3'>
          <div className=''>
          <img src='https://techcrunch.com/wp-content/uploads/2023/06/reddit-logo-broken.jpg?w=730&crop=1' alt='Reddit Problem'></img>
          </div>

          <div className=''>
            <h2>
              Reddit CEO lashes out on protests, moderators and third-party apps
            </h2>
            <p>
              Reddit CEO Steve Huffman is not backing down amid protests against API changes made by the platform. In interviews with The Verge, NBCNews and NPR, Huffman defended business decisions made by the company to charge third-party apps saying the API wasn’t designed to support these clients.
              The Reddit co-founder also talked about protesting moderators, changing site rules, and profitability in these interviews. The platform is facing one of the strongest backlashes from the community, but the CEO seemingly doesn’t want to budge.
            </p>

          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
