<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Writing — Brooks Mitchell</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="src/style.css" />
</head>
<body>

  <nav class="site-nav">
    <a href="index.html" class="nav-logo">
      <img src="src/images/logo_transparent.png" alt="Brooks Mitchell" />
    </a>
    <button class="nav-toggle" aria-label="Menu">
      <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <div class="blog-header">
    <h1>Writing</h1>
    <p>AEC tech, AI adoption in construction, and the business of building.</p>
  </div>

  <div class="posts" style="padding-bottom:4rem;">
    <a href="blog/aec-industry-crash-course.html" class="post-item">
      <div>
        <span class="post-title">AEC Industry Crash Course</span>
        <p style="font-size:0.82rem; font-weight:300; color:var(--text-dim); margin-top:0.3rem;">A primer on how the architecture, engineering, and construction industry actually works — for tech people trying to sell into it.</p>
      </div>
      <span class="post-meta">Coming soon</span>
    </a>
    <a href="blog/aec-mini-mba.html" class="post-item">
      <div>
        <span class="post-title">AEC Mini-MBA — AI Specialization</span>
        <p style="font-size:0.82rem; font-weight:300; color:var(--text-dim); margin-top:0.3rem;">What AI implementation actually looks like on the ground in construction and design firms.</p>
      </div>
      <span class="post-meta">Coming soon</span>
    </a>
    <a href="blog/q2-review.html" class="post-item">
      <div>
        <span class="post-title">Q2 Review and Summary — Wonky Markets and Data Centers</span>
        <p style="font-size:0.82rem; font-weight:300; color:var(--text-dim); margin-top:0.3rem;">A look at what moved in AEC tech last quarter and what it signals for the rest of the year.</p>
      </div>
      <span class="post-meta">Coming soon</span>
    </a>
  </div>

  <!-- ── EMAIL CAPTURE ── -->
  <section id="subscribe" style="border-top:1px solid var(--border);">
    <p class="section-label">Stay updated</p>
    <div class="email-capture">
      <h3>New posts to your inbox</h3>
      <p>No cadence pressure. When something worth reading is ready, you'll get it.</p>
      <form class="email-form">
        <input type="email" name="email" placeholder="your@email.com" required />
        <button type="submit">Subscribe</button>
        <span class="form-msg"></span>
      </form>
    </div>
  </section>

  <footer>
    <p>© 2026 Brooks Mitchell</p>
    <p><a href="index.html" style="color:var(--text-dim); text-decoration:none;">← Home</a></p>
  </footer>

  <script src="src/nav.js"></script>
  <script src="src/email.js"></script>
</body>
</html>
