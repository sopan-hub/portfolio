'use client';

import { useEffect } from 'react';
import { Codepen, GitFork, Bot, Users, Edit, FileText, MessageSquare } from 'lucide-react';

const HeroSection = () => {

  useEffect(() => {
    const target = {
      clicked: 0,
      currentFollowers: 90,
      btn: document.querySelector("a.btn"),
      fw: document.querySelector("span.followers")
    };

    const follow = () => {
      if (!target.btn || !target.fw) return;
      target.clicked += 1;
      target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
    
      if (target.clicked % 2 === 0) {
        target.currentFollowers -= 1;
        target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
      }
      else {
        target.currentFollowers += 1;
      }
    
      target.fw.textContent = target.currentFollowers.toString();
      target.btn.classList.toggle("following");
    }

    const btn = document.querySelector("a.btn");
    if (btn) {
      btn.addEventListener('mousedown', follow);
    }
    
    return () => {
      if (btn) {
        btn.removeEventListener('mousedown', follow);
      }
    }

  }, []);


  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background"></div>
      <div className="profile-card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <img src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png" alt="Sopan Patil" />
        </div>
        <div className="name">
          <a href="https://github.com/sopan-hub" target="_blank" rel="noopener noreferrer">Sopan Patil</a>
          <h6 title="Followers"><Users className="inline-block h-4 w-4" /> <span className="followers">90</span></h6>
        </div>
        <div className="button">
          <a href="#" className="btn">Follow <Users className="inline-block h-4 w-4" /></a>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6><Edit className="inline-block h-4 w-4" /> Projects</h6>
            <p>3</p>
          </div>
          <div className="ds projects">
            <h6><FileText className="inline-block h-4 w-4" /> Certificates</h6>
            <p>4</p>
          </div>
          <div className="ds posts">
            <h6><MessageSquare className="inline-block h-4 w-4" /> Posts</h6>
            <p>0</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skill <i className="fa fa-code" aria-hidden="true"></i></h6>
          <div className="skill html">
            <h6><Codepen className="inline-block h-4 w-4" /> React </h6>
            <div className="bar bar-html">
              <p>95%</p>
            </div>
          </div>
          <div className="skill css">
            <h6><Bot className="inline-block h-4 w-4" /> Genkit </h6>
            <div className="bar bar-css">
              <p>90%</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><GitFork className="inline-block h-4 w-4" /> Git </h6>
            <div className="bar bar-js">
              <p>85%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
