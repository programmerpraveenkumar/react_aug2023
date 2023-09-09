export default function Header(){
    return(
        <>
          <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span>
              Rent4u
            </span>
          </a>

          <div class="navbar-collapse" id="">
            <div class="user_option">
              <a href="">
                Login
              </a>
            </div>
            <div class="custom_menu-btn">
              <button onclick="openNav()">
                <span class="s-1"> </span>
                <span class="s-2"> </span>
                <span class="s-3"> </span>
              </button>
            </div>
            <div id="myNav" class="overlay">
              <div class="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="car.html">Cars</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact Us</a>
                <a href="#">Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
        </>
    )
}