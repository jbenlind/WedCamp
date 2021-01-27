import "./SplashPage.css";

function SplashPage() {
  return (
    <div className='splash'>
        <h1 className='header'>Find yourselves outdoors</h1>
        <h3 className='header-2'>Come see what's waiting for you . . .</h3>
            <div className='form-box'>
                <input type='text' className='search-field__location' placeholder='Location...'></input>
                <input type='date' className='search-field__dates'></input>
                <button className='search-button' type='button'><i className="fas fa-search"></i></button>
            </div>
    </div>
  );
}

export default SplashPage;
