import React from 'react'
import './App.css'
const App = () => {
  return (
    <>
      <div className="parent">
        <div className="parent-left">
          <img src="https://blaash.io/wp-content/uploads/2021/05/logo.png" className="image" />
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Revenue</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Shoppable video</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Story</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Live Commerce</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3>Playlist Manager</h3><select><option> Product playlist</option></select>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> One click post</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Calendar</h3>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/6489/6489396.png" className="icon-1" />
            <h3> Hire Influencer</h3>
          </div>
        </div>
        <div className="parent-right">
          <nav>
            <div className="main-nav">
              {/* Left section with Design Studio */}
              <div className="left-nav">
                <h1>Design Studio</h1>
              </div>
              {/* Right section with additional items */}
              <div className="right-nav">
                {/* Product Tour */}
                <button className="product-tour">Product Tour</button>
                {/* Support Dropdown */}
                <div className="dropdown">
                  <button className="dropbtn">Support</button>
                  <div className="dropdown-content">
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Live Chat</a>
                  </div>
                </div>
                {/* Search Project (Search Bar) */}
                <input type="text" className="search-bar" placeholder="Search Project" />
                {/* Alert Button */}
                <button className="alert-btn">🔔</button>
                {/* Avatar and Account Dropdown */}
                <div className="account">
                  <img src="https://via.placeholder.com/40" className="avatar" alt="Avatar" />
                  <div className="account-dropdown">
                    <button className="account-btn">Account</button>
                    <div className="account-dropdown-content">
                      <a href="#">Profile</a>
                      <a href="#">Settings</a>
                      <a href="#">Logout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="inner">
            <div className="home">
              <div className="product-playlist">
                <h2>Product Playlists</h2>
                <div className="playlist-grid">
                  <div className="playlist-item playlist-item-1">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                  <div className="playlist-item playlist-item-2">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                  <div className="playlist-item playlist-item-3">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                  <div className="playlist-item playlist-item-4">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                  <div className="playlist-item playlist-item-5">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                  <div className="playlist-item playlist-item-6">
                    <span className="desc">Product Playlists Name (5 Videos)</span>
                  </div>
                </div>
              </div>
            </div>
            <aside className="asid">
              <div className="aside-top">
                <button className="aside-btn">🔗 Generate Code</button>
              </div>
              <div className="aside-bottom">
                <div className="sidebar flex-end">
                  <h3>Thumbnail Title</h3>
                  <input type="search" placeholder="Get Sporty in Style" />
                  <br />
                  <label>Video status:
                    <input type="radio" name="status" defaultChecked /> Active
                    <input type="radio" name="status" /> Inactive
                  </label>
                  <div className="product-list">
                    <h4>Product List</h4>
                    <div className="box">
                      <div className="small-icon">
                        <img src="https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg?size=626&ext=jpg&ga=GA1.1.1290701903.1725380045&semt=ais_hybrid" className="small-icon-1" />
                        <p className="small-desc">Video Title Name (4:05:60, Products Attached: 5)</p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="small-icon">
                        <img src="https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg?size=626&ext=jpg&ga=GA1.1.1290701903.1725380045&semt=ais_hybrid" className="small-icon-1" />
                        <p className="small-desc">Video Title Name (4:05:60, Products Attached: 5)</p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="small-icon">
                        <img src="https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg?size=626&ext=jpg&ga=GA1.1.1290701903.1725380045&semt=ais_hybrid" className="small-icon-1" />
                        <p className="small-desc">Video Title Name (4:05:60, Products Attached: 5)</p>
                      </div>
                    </div>
                  </div>
                  <button className="update-btn"> 🔄 Update Playlist</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default App