import styles from '@components/SectionIPFSCampPage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Link from './Link';
import React from 'react';
import GutterContainer from '@root/components/GutterContainer';

export default function SectionCamppage({ upcomingEvents }) {
  return (
    <div className={styles.pageContainer}>
      <GutterContainer>
      <div style={{ display: 'grid', rowGap: '8rem' }}>
        <section>
          <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp 2024" className={styles.imageClass} style={{ paddingBottom: '2rem' }}/>
          <header className={styles.header} style={{ paddingBottom: '4rem' }}>
            <div className={styles.headerText}>
              <h3 className={styles.h3}>IPFS is more than just a ‘conference’; it’s a global movement of builders and visionaries committed to creating a better web. </h3>
              <p>Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.</p>
              <div className={styles.rainbowBorderWrapper}>
                <div className={styles.innerContent}>
                  <div className={styles.diptychHalf}>CAMP 2024 
                  Tokyo, Japan</div>
                  <div className={styles.diptychHalf}>October 10 - 20, 
                  2024</div>
                </div>
              </div>
            </div>
            <div className={styles.topSquiggleContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 564 457" fill="none">
                <path 
                    d="M120.782 32.3641C120.782 32.3641 1.58132 63 40.1581 119.934C78.7345 176.868 422.805 132.753 447.428 218.508C459.666 261.127 410.739 275.773 364.08 289.127C316.63 302.709 273.007 352.037 295.73 390.707C340.904 467.586 466.655 329.914 531.557 424.09" 
                    stroke="url(#paint0_linear_778_2)" 
                    strokeWidth="63.9167" 
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_778_2" x1="554.599" y1="466.891" x2="47.6704" y2="4.44691" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#08ADE3"/>
                    <stop offset="0.5" stopColor="#CDAB37"/>
                    <stop offset="1" stopColor="#E01C33"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>
          </header>
          <div className={styles.videoTitle}>
              <h3 className={styles.h3}> IPFS Þing 2022 - Recap </h3>
          </div>
          <div className={styles.mediaContainer}>
            <VideoPlayer src={'/media/ipfs-camp-2022.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.TWENTY_ONE_BY_NINE} />
          </div>
          <div className={styles.videoSquiggleContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 564 457" fill="none">
              <path 
                  d="M120.782 32.3641C120.782 32.3641 1.58132 63 40.1581 119.934C78.7345 176.868 422.805 132.753 447.428 218.508C459.666 261.127 410.739 275.773 364.08 289.127C316.63 302.709 273.007 352.037 295.73 390.707C340.904 467.586 466.655 329.914 531.557 424.09" 
                  stroke="url(#paint0_linear_778_2)" 
                  strokeWidth="63.9167" 
                  strokeLinecap="round"
              />
              <defs>
                  <linearGradient id="paint0_linear_778_2" x1="554.599" y1="466.891" x2="47.6704" y2="4.44691" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#08ADE3"/>
                  <stop offset="0.5" stopColor="#CDAB37"/>
                  <stop offset="1" stopColor="#E01C33"/>
                  </linearGradient>
              </defs>
              </svg>
          </div>
        </section>
        <h1 className={styles.centeredSectionTitle}>
              Get Involved
        </h1>
        <div className={styles.getInvolvedColumns}>
          <div className={styles.involvementColumn}>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Become a Speaker</h4>
              </div>
            </div>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Lead a Track/Talk</h4>
              </div>
            </div>
          </div>
          <div className={styles.involvementColumn}>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Apply to be a Scholar</h4>
              </div>
            </div>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Apply for Expo Space</h4>
              </div>
            </div>
          </div>
          <div className={styles.involvementColumn}>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Become a Key Organizer</h4>
              </div>
            </div>
            <div className={styles.rainbowBorderWrapper}>
              <div className={styles.involvementContent}>
                <h4>Volunteer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionTitle}>
            Past Camp Events
          </h1>
          <div className={styles.imageAndTextWrapper}>
            <img src="/media/ipfs-camp-2024.png" alt="Image 1" />
            <div className={styles.impactText}>
              2022 Impact
            </div>
          </div>
        </div>
        <section className={styles.campEvents}>
        <div className={styles.statsColumnLeft}>
          <div className={styles.lineOne}>
            <h2>
              <span className={styles.greaterRainbowText}>17 </span> <span className={styles.whiteText}>Tracks</span>
            </h2>
            <h2> 
              <span className={styles.greaterRainbowText}>100+ </span> <span className={styles.whiteText}>Speakers</span>
            </h2>
          </div>
          <div className={styles.lineTwo}>
            <h2> 
              <span className={styles.greaterRainbowText}>5400 </span> <span className={styles.whiteText}>Participants</span>
            </h2>
          </div>
        </div>
        <div className={styles.statsColumnRight}>
          <h4>
            <span className={styles.lesserRainbowText}>34 </span> <span className={styles.whiteText}>IPFS Scholars</span>
          </h4>
          <h4>
            <span className={styles.lesserRainbowText}>30 </span> <span className={styles.whiteText}>Countries</span>
          </h4>
          <h4>
            <span className={styles.lesserRainbowText}>20 </span> <span className={styles.whiteText}>Volunteers</span>
          </h4>
        </div>
        </section>
        <section className={styles.faqSection}>
          <h1 className={styles.sectionTitle} style={{ paddingBottom: '2rem' }}>
            FAQs
          </h1>
          <div className={styles.faqColumns}>
            <div className={styles.faqLeft}>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
            </div>
            <div className={styles.faqRight}>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
              <div className={styles.faqBorderWrapper}>
                <div className={styles.faqContent}>
                  <h4>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit?</h4>
                  <div className={styles.plusSymbol}>+</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </GutterContainer>
      <section className={styles.campYearbookSection}>
          <div className={styles.yearbookTitle}>Camp Yearbook</div>
          <div className={styles.buttonsContainer}>
            <button className={styles.yearButton}>Camp 2022</button>
            <button className={styles.yearButton}>Camp 2019</button>
          </div>
        </section>
    </div>
  );
}
