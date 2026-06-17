# HTTP-Server
 
A custom HTTP server written in C, built from scratch as part of a 1st semester project. Currently serves static web content and will be expanded with more features over time.
 
## Project Structure
 
```
MyServer/
├── httpserver.c       # Core HTTP server implementation
├── httpserver         # Compiled binary
├── home.html          # Main page
├── product.html       # Product page
├── shoewear.html      # Shoewear page
├── tech-products.html # Tech products page
├── Assets/            # Images and fonts
├── Components/        # Reusable HTML components
├── JS/                # JavaScript files
└── Styles/            # CSS stylesheets
```
 
## Features
 
- Serves static HTML, CSS, JS, and asset files
- Written in pure C with no external dependencies
## Getting Started
 
### Build
 
```bash
gcc httpserver.c -o httpserver
```
 
### Run
 
```bash
./httpserver
```
 
Then open your browser and go to `http://localhost:8080`
 
## Roadmap
 
- [x] Serve static files
- [ ] Handle GET requests
- [ ] Handle POST requests
- [ ] Routing system
- [ ] Dynamic content support
- [ ] Multi-threading for concurrent connections
## Author
 
**Muhammad Subhani**  
[GitHub](https://github.com/Muhammad-Subhani)
 
