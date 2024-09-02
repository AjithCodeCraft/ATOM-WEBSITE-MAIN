  // Adjust the path based on where you save the CSS file

"use client";
// import './scroll.css';
import '../styles/scroll.css'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ overwrite: 'auto' });

    // Set up the images and blockquotes for flipping animations
    gsap.set(".left-content > *", { transformStyle: "preserve-3d", backfaceVisibility: "hidden" });

    const contentMarkers = gsap.utils.toArray(".contentMarker");

    contentMarkers.forEach(marker => {
      marker.content = document.querySelector(`#${marker.dataset.markerContent}`);
      
      if (marker.content.tagName === "IMG") {
        gsap.set(marker.content, { transformOrigin: "center" });
        
        marker.content.enter = function() {
          gsap.fromTo(marker.content, { autoAlpha: 0, rotationY: -90 }, { duration: 0.5, autoAlpha: 1, rotationY: 0, ease: "power2.out" });
        }
      } else if (marker.content.tagName === "BLOCKQUOTE") {
        gsap.set(marker.content, { transformOrigin: "left center" });
        
        marker.content.enter = function() {
          gsap.fromTo(marker.content, { autoAlpha: 0, rotationY: 50 }, { duration: 0.5, autoAlpha: 1, rotationY: 0, ease: "power2.out" });
        }
      }
      
      marker.content.leave = function() {
        gsap.to(marker.content, { duration: 0.3, autoAlpha: 0 });
      }
    });

    const ST = ScrollTrigger.create({
      trigger: ".content-container",
      start: "top top",
      end: "bottom bottom",
      onUpdate: getCurrentSection,
      pin: ".left-content"
    });

    function getCurrentSection() {
      let newContent;
      const currScroll = window.scrollY;

      contentMarkers.forEach(marker => {
        if (currScroll > marker.offsetTop) {
          newContent = marker.content;
        }
      });

      if (newContent && (lastContent == null || !newContent.isSameNode(lastContent))) {
        if (lastContent) {
          lastContent.leave();
        }
        newContent.enter();
        lastContent = newContent;
      }
    }

    let lastContent;
    const media = window.matchMedia("screen and (max-width: 600px)");
    ScrollTrigger.addEventListener("refreshInit", checkSTState);
    checkSTState();

    function checkSTState() {
      if (media.matches) {
        ST.disable();
      } else {
        ST.enable();
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <h1 className="header-section">Scroll down for pinned content animation</h1>

      <div className="content-container">
        <div className="left-content">
          <img id="img1" className="imageToShow" src="https://images.unsplash.com/photo-1586410073908-5f314173d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400" alt="kitty" />
          <img id="img2" className="imageToShow" src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400" alt="kitty" />
          <blockquote id="text1" className="textToShow" cite="https://www.youtube.com/watch?v=PKffm2uI4dk">
            <p>Cat ipsum dolor sit amet, attack the child i show my fluffy belly but it's a trap!</p>
            <footer>— Fluffy, the kitten <cite>Sad Cat Diary</cite></footer>
          </blockquote>
          <img id="img3" className="imageToShow" src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUxODczMTl8&ixlib=rb-4.0.3&q=80&w=400" alt="kitty" />
        </div>

        <div className="right-content">
          {/* Content with markers */}
          <p className="contentMarker" data-marker-content="img1">...</p>
          <p className="contentMarker" data-marker-content="img2">...</p>
          <p className="contentMarker" data-marker-content="text1">...</p>
          <p className="contentMarker" data-marker-content="img3">...</p>
        </div>
      </div>

      <h1 className="header-section">That's it!</h1>

      <a className="gsap-logo" target="_blank" href="https://gsap.com/docs/v3">
        <img src="https://assets.codepen.io/16327/gsap-logo-light.svg" alt="" />
      </a>
    </>
  );
};

export default Scroll;
