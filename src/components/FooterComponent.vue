<template>
    <footer class="footer">
      <div class="footer-container">
    
        <div class="footer-links">
          <nav class="footer-menu">
            <a href="/" class="footer-menu-link">Home</a>
            <a href="/projects" class="footer-menu-link">Projects</a>
          </nav>
          <div class="social-icons">
            <a href="https://github.com/mihned01" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/github-brands.svg" alt="GitHub" class="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/mihaela-ned/" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/linkedin-brands.svg" alt="LinkedIn" class="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style>
  .footer {
    background-color: #2d2d2d;
    color: #ceb199;
    padding: 40px 20px;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .footer-menu {
    display: flex;
    gap: 20px;
  }
  
  .footer-menu-link {
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    color: #ceb199;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-menu-link:hover {
    color: #ffffff;
  }
  
  .social-icons {
    display: flex;
    gap: 20px;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .footer-icon {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .footer-icon:hover {
    transform: scale(1.2);
    filter: brightness(1.5);
  }

  @media (max-width: 768px) {
  .footer-container {
    flex-direction: column; 
    align-items: center;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }

  .footer-menu {
    flex-direction: row; 
    justify-content: center;
    gap: 20px;
  }
}
  </style>