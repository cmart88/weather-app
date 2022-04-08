function Home() {
  return (
    <div>
      <h1 className='text-4xl mb-11 grid '>Welcome to my weather app</h1>
      <div className='card   '>
        <input
          type='text'
          placeholder='Search Your City'
          className='bg-black-400 font-black-500 border border-2 border-black rounded-md d-block ml-auto mr-auto'
        />
        <button
          type='submit'
          className='bg-black text-white mt-1 border rounded-lg ml-5 mr-5 d-block'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
