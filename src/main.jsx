import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Root() {
  const [view, setView] = useState('start');

  const dayViews = ['day1', 'day2', 'day3'];
  const isDayView = dayViews.includes(view);
  const currentDay = {
    day1: {
      label: 'DAY 1',
      title: 'The first time I saw you',
      accent: '#f9a8d4',
      description: [
        'As you know we meet today, I saw you at the entrance of ogb and I knew it was you immediately and you were looking so tall 😂 and beautiful, I like you.',
        'I really do, I enjoyed our time spent today, I enjoyed watch Instagram with you and I was happy to use style to be holding your hands 😂 your hands are so fine and elegant and your fingers are so slim, sexy and tender.',
        'I want to hold your hands forever, I mean it.',
        'And I don\'t know you kept on making long faces whenever I complimented you 😂😂 but when I see you I must get that hug from you and give you that kick and let\'s meet next week Monday.',
        'Sweet girl, you\'re so sweet and you really like walking fast 😂 and you\'re so slim and small I just feel like squeezing you 😫😫😫💓 anyway I\'m glad I was able to see you, you\'re so lovely and I\'m glad I held your hands and I don\'t know why you kept on bringing your lips close to my face for me to kiss 😂😂😂😂 I couldn\'t get enough out of looking at it you have fine pink lips I don\'t really think you need lip combo, please send me your video 🥺 muah 😚',
        'I would be really happy if you did.',
        'I noticed behind your stubbornness you\'re actually nice 😂 very very sweet actually, you have me your earpod 🥹 that\'s so sweet, you allowed me to sit close to you and let our legs touch 😂 but I was looking for your trouble with my leg sha anyway when you were leaving I was really sad and I was holding your hands I didn\'t want to let go of you 🥺 I wanted to pull you in for a hug but the ring of your hand stopped me I didn\'t want to injure you and you and your friends where shouting ahan ahan 😂😂 anyway sha let me know your reply.',
      ],
    },
    day2: {
      label: 'DAY 2',
      title: 'You caught my heart',
      accent: '#60a5fa',
      description: [
        'Awwwnnn my beautiful Peace, I can\'t believe you can be this sweet 😂🥹. I saw you from afar and I was like "that is Peace, let me go and meet her," but you were walking too fast 😂. And then I wanted to shout your name but I was shy. Then I decided to walk faster, almost running till I finally caught up with you.',
        'And then you were na like "let me see the hair," then I showed you and you touched it and my heart started beating fast but I was happy sha. Anyway, then I wanted to just grab you and squeeze you 😂.',
        'But before that, I saw you in keke going to coke villa. Then I shouted your name but you didn\'t answer. Then I just said let me leave it 😂. Then you came down and ran with your small legs to one brown benz. I was na like "no need to go and meet her" 😂.',
        'Then I saw your text that you were going out. Anyway, I was happy to see you and hold your small fine yellow hands.',
      ],
    },
    day3: {
      label: 'DAY 3',
      title: 'My heart was healed',
      accent: '#f472b6',
      description: [
        'Heyyyyy, I was so happy to give you my shirt. I hope you wear it every night before you sleep and every time you\'re cold. Anyway, I\'m so sorry about your hands. I hope the clothes you\'ll be washing today won\'t make it worse. Anyway, be fine dear.',
        'So then I saw you again entering keke. Then I shouted your name. Then you told me that you were going but you\'ll be back. Then I was na like "I will be going home soon." Every time you\'re always entering keke 😂. This fine girl can\'t trek.',
        'And so the third time I saw you, it was from far actually. You were in front of ogb and then you na ran inside. So I ran too 😂 to come and see you. Then we spoke. My heart was healed from my pain. And then I held your hands 😂.',
        'But you were looking so pretty. I am surprised your lipstick was still on your lips by that time. I thought it would have dried. Anyway, take care of yourself dear. Think about me always.',
      ],
    },
  }[view] || {};

  const backgroundImage = isDayView ? "url('/2.png')" : "url('/1.png')";

  const screenStyle = {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage,
    backgroundPosition: isDayView ? 'center top' : 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: view === 'start' ? 'center' : 'flex-start',
    alignItems: 'center',
    position: 'relative',
    padding: 'clamp(1.5rem, 5vh, 4rem) 1rem clamp(1.5rem, 6vh, 3.5rem)',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: view === 'day1' ? 'rgba(15, 23, 42, 0.18)' : 'rgba(255, 255, 255, 0.08)',
    zIndex: 1,
    pointerEvents: 'none',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '840px',
    borderRadius: '28px',
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    padding: 0,
    zIndex: 2,
    color: '#111827',
  };

  const buttonStyle = {
    fontFamily: 'Charm, serif',
    fontSize: '1.05rem',
    fontWeight: 700,
    padding: '0.95rem 1.8rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const textStyle = {
    fontFamily: 'Charm, serif',
    textAlign: 'center',
    margin: 0,
  };

  return (
    <React.StrictMode>
      {view === 'app' ? (
        <App />
      ) : (
        <div style={screenStyle}>
          <div style={overlayStyle} />

          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1000 }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1
                style={{
                  fontFamily: 'Charm, serif',
                  fontSize: 'clamp(2.6rem, 5vw, 3.7rem)',
                  fontWeight: 900,
                  color: view === 'day1' ? '#ffffff' : '#111827',
                  letterSpacing: '0.15em',
                  margin: 0,
                  textShadow: view === 'day1' ? '0 2px 24px rgba(0,0,0,0.35)' : '0 2px 10px rgba(255,255,255,0.95)',
                }}
              >
                WELCOME PEACE
              </h1>
            </div>

            <div style={cardStyle}>
              {view === 'start' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <button
                    onClick={() => setView('experience')}
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      background: 'linear-gradient(135deg, #2563eb, #93c5fd)',
                      color: '#fff',
                      boxShadow: '0 18px 45px rgba(37, 99, 235, 0.24)',
                    }}
                  >
                    Our experience together
                  </button>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ ...textStyle, fontSize: 'clamp(2rem, 4vw, 2.4rem)', color: '#1f2937' }}>
                      Are you ready?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <button
                        onClick={() => setView('app')}
                        style={{
                          ...buttonStyle,
                          background: '#111827',
                          color: '#fff',
                          boxShadow: '0 12px 30px rgba(17, 24, 39, 0.2)',
                          minWidth: '140px',
                        }}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setView('app')}
                        style={{
                          ...buttonStyle,
                          background: '#ec4899',
                          color: '#fff',
                          boxShadow: '0 12px 30px rgba(236, 72, 153, 0.25)',
                          minWidth: '140px',
                        }}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {view === 'experience' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ ...textStyle, color: '#2563eb', fontSize: '1.1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Our experiences
                    </p>
                    <h2 style={{ fontFamily: 'Charm, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', margin: 0 }}>
                      Each day we have seen each other
                    </h2>
                  </div>

                  <button
                    onClick={() => setView('day1')}
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      textAlign: 'left',
                      background: 'rgba(248, 113, 113, 0.1)',
                      border: '1px solid rgba(244, 114, 182, 0.45)',
                      color: '#be185d',
                      padding: '1.3rem 1.5rem',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Day 1
                    </span>
                    <span style={{ fontFamily: 'Charm, serif', fontSize: '1.7rem', fontWeight: 900 }}>
                      A special beginning
                    </span>
                  </button>

                  <button
                    onClick={() => setView('day2')}
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      textAlign: 'left',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.45)',
                      color: '#1d4ed8',
                      padding: '1.3rem 1.5rem',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Day 2
                    </span>
                    <span style={{ fontFamily: 'Charm, serif', fontSize: '1.7rem', fontWeight: 900 }}>
                      Another memory
                    </span>
                  </button>

                  <button
                    onClick={() => setView('day3')}
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      textAlign: 'left',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.45)',
                      color: '#b45309',
                      padding: '1.3rem 1.5rem',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Day 3
                    </span>
                    <span style={{ fontFamily: 'Charm, serif', fontSize: '1.7rem', fontWeight: 900 }}>
                      One more day
                    </span>
                  </button>

                  <p style={{ ...textStyle, color: '#475569', fontSize: '1rem' }}>
                    Day 2 and Day 3 are now available and use the same picture from Day 1.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setView('start')}
                      style={{
                        ...buttonStyle,
                        background: '#fff',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                        color: '#111827',
                        minWidth: '140px',
                      }}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setView('app')}
                      style={{
                        ...buttonStyle,
                        background: '#2563eb',
                        color: '#fff',
                        minWidth: '140px',
                      }}
                    >
                      Continue to app
                    </button>
                  </div>
                </div>
              )}

              {isDayView && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ ...textStyle, color: view === 'day1' ? '#ffffff' : currentDay.accent, fontSize: '1rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      {currentDay.label}
                    </p>
                    <h2 style={{ fontFamily: 'Charm, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: 0 }}>
                      {currentDay.title}
                    </h2>
                  </div>

                  <div style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '24px', padding: '1.75rem', lineHeight: 1.8, color: view === 'day1' ? '#f8fafc' : currentDay.accent, fontSize: '1.02rem', boxShadow: '0 24px 60px rgba(0, 0, 0, 0.18)' }}>
                    {currentDay.description.map((paragraph, index) => (
                      <p key={index} style={{ marginTop: index === 0 ? 0 : '1rem' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <a
                    href="https://wa.link/cwbohz"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...buttonStyle,
                      width: '100%',
                      background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '1.1rem 1.6rem',
                      boxShadow: '0 18px 45px rgba(59, 130, 246, 0.24)',
                      textDecoration: 'none',
                    }}
                  >
                    Click here to reply Peace
                  </a>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setView('experience')}
                      style={{
                        ...buttonStyle,
                        background: '#fff',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                        color: '#111827',
                        minWidth: '140px',
                      }}
                    >
                      Back to days
                    </button>
                    <button
                      onClick={() => setView('app')}
                      style={{
                        ...buttonStyle,
                        background: '#2563eb',
                        color: '#fff',
                        minWidth: '140px',
                      }}
                    >
                      Continue to app
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
