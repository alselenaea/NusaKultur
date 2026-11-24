"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, Search, MapPin, CalendarDays, Compass, Users, Bookmark,
  Globe2, Menu, X, ChevronDown, Sparkles, ShieldCheck, Languages,
  Map, Clock3, Heart, Instagram, ArrowUpRight, Leaf, Award, MessageCircle
} from "lucide-react";

const experiences = [
  { id: 1, title: "The Art of Angklung", place: "Saung Angklung Udjo, Bandung", region: "West Java", category: "Workshop", date: "Daily · 10:00 AM", price: "From Rp85.000", image: "photo-1513364776144-60967b0f800f", tag: "Community favourite", description: "Discover the sound of bamboo and learn to play in an intimate workshop led by local artists." },
  { id: 2, title: "Batik: A Living Canvas", place: "Kampung Batik Laweyan, Surakarta", region: "Central Java", category: "Craft", date: "Sat, 30 Nov · 09:00 AM", price: "From Rp120.000", image: "photo-1582735689369-4fe89db7114c", tag: "Hands-on craft", description: "Learn the meaning behind traditional motifs and create your own batik piece with artisans." },
  { id: 3, title: "Flavours of Minangkabau", place: "Padang, West Sumatra", region: "West Sumatra", category: "Culinary", date: "Sun, 1 Dec · 11:00 AM", price: "From Rp150.000", image: "photo-1555939594-58d7cb561ad1", tag: "Taste local stories", description: "Cook family recipes and explore the stories, spices and traditions behind Minang cuisine." },
  { id: 4, title: "Balinese Offering Workshop", place: "Ubud, Bali", region: "Bali", category: "Workshop", date: "Daily · 08:30 AM", price: "From Rp95.000", image: "photo-1537996194471-e657df975ab4", tag: "Respectful learning", description: "Understand the symbolism of canang sari and learn from a Balinese community host." },
  { id: 5, title: "Toraja Heritage Walk", place: "Kete Kesu, Tana Toraja", region: "South Sulawesi", category: "Heritage", date: "Fri, 6 Dec · 08:00 AM", price: "From Rp175.000", image: "photo-1518548419970-58e3b4079ab2", tag: "Local storytelling", description: "Explore traditional tongkonan houses and hear local perspectives on Torajan heritage." },
  { id: 6, title: "Sasando Music & Stories", place: "Kupang, East Nusa Tenggara", region: "East Nusa Tenggara", category: "Performance", date: "Sat, 7 Dec · 04:00 PM", price: "From Rp75.000", image: "photo-1516280440614-37939bbacd81", tag: "Live performance", description: "Experience the distinctive sound of sasando and meet the musicians preserving it." }
];

const communities = [
  { name: "Sundanese Circle", region: "West Java", members: "2.4k", detail: "Language, arts, food and everyday stories from Tatar Sunda.", initials: "SU", color: "sage" },
  { name: "Minang Diaspora", region: "West Sumatra", members: "1.8k", detail: "Stay connected through traditions, recipes and community gatherings.", initials: "MI", color: "clay" },
  { name: "Javanese Heritage", region: "Central Java", members: "3.1k", detail: "Share Javanese language, philosophy, arts and cultural knowledge.", initials: "JA", color: "gold" },
  { name: "Bali Cultural Roots", region: "Bali", members: "1.2k", detail: "A space for Balinese heritage, ceremonies and cultural exchange.", initials: "BA", color: "olive" }
];

const categories = ["All", "Workshop", "Craft", "Culinary", "Heritage", "Performance"];

export default function Home() {
  const [active, setActive] = useState("Discover");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [joined, setJoined] = useState<string[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filtered = useMemo(() => experiences.filter(item =>
    (category === "All" || item.category === category) &&
    `${item.title} ${item.place} ${item.region} ${item.category}`.toLowerCase().includes(search.toLowerCase())
  ), [category, search]);

  const join = (name: string) => {
    setJoined(old => old.includes(name) ? old.filter(x => x !== name) : [...old, name]);
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setActive("Discover")}>
          <span className="brand-mark">N</span>
          <span>Nusa<span className="brand-light">Kultur</span><small>INDONESIA, IN EVERY STORY</small></span>
        </a>
        <nav className="desktop-nav">
          <button className={active === "Discover" ? "nav-link active" : "nav-link"} onClick={() => setActive("Discover")}>Discover</button>
          <button className={active === "Connect" ? "nav-link active" : "nav-link"} onClick={() => setActive("Connect")}>Connect</button>
          <a className="nav-link" href="#about">Our purpose</a>
        </nav>
        <div className="header-actions">
          <button className="language"><Globe2 size={15}/> EN <ChevronDown size={13}/></button>
          <button className="sign-in" onClick={() => setNotice("Sign-in is a demo feature. Account access can be connected in the next development phase.")}>Sign in</button>
          <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      {mobileOpen && <div className="mobile-nav"><button onClick={() => {setActive("Discover");setMobileOpen(false)}}>Discover</button><button onClick={() => {setActive("Connect");setMobileOpen(false)}}>Connect</button><a href="#about" onClick={() => setMobileOpen(false)}>Our purpose</a></div>}

      {notice && <div className="notice"><span>{notice}</span><button onClick={() => setNotice("")}><X size={16}/></button></div>}

      {active === "Discover" ? (
        <>
          <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="eyebrow light"><span></span> A JOURNEY THROUGH INDONESIAN HERITAGE</div>
              <h1>Every culture has<br/>a story worth <em>sharing.</em></h1>
              <p>Go beyond the destination. Discover the traditions, people and living heritage that make Indonesia extraordinary.</p>
              <button className="hero-cta" onClick={() => document.getElementById("experiences")?.scrollIntoView({behavior:"smooth"})}>Explore experiences <ArrowRight size={17}/></button>
            </div>
            <div className="hero-caption"><span>01 / 05</span><i></i><span>THE ARCHIPELAGO, THROUGH LOCAL EYES</span></div>
            <div className="hero-side-note">CULTURE IS ALIVE. KEEP IT MOVING.</div>
          </section>

          <section className="search-wrap">
            <div className="search-intro"><span>BEGIN YOUR JOURNEY</span><strong>Find your cultural connection.</strong></div>
            <div className="search-box"><Search size={19}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search places, traditions, experiences..."/><button onClick={() => document.getElementById("experiences")?.scrollIntoView({behavior:"smooth"})}>Explore <ArrowRight size={15}/></button></div>
          </section>

          <section className="section intro-section" id="about">
            <div className="section-kicker">MORE THAN A DESTINATION <span>✳</span></div>
            <div className="intro-grid">
              <h2>Meet Indonesia<br/>through its <em>people.</em></h2>
              <div className="intro-copy"><p>NusaKultur brings Indonesia's living heritage closer to everyone. Find meaningful cultural experiences, learn the stories behind traditions, and connect with communities who keep them alive.</p><a href="#experiences" className="text-link">Discover our approach <ArrowUpRight size={16}/></a></div>
            </div>
            <div className="stat-row"><div><strong>17,000<span>+</span></strong><small>ISLANDS TO EXPLORE</small></div><div><strong>1,300<span>+</span></strong><small>ETHNIC GROUPS</small></div><div><strong>700<span>+</span></strong><small>LOCAL LANGUAGES</small></div><div className="stat-note">One archipelago.<br/><em>Countless stories.</em></div></div>
          </section>

          <section className="experience-section" id="experiences">
            <div className="section section-inner">
              <div className="section-heading"><div><div className="section-kicker">CURATED WITH LOCAL COMMUNITIES</div><h2>Experiences worth<br/><em>remembering.</em></h2></div><p>Small moments. Deep connections. Explore Indonesia through the knowledge and warmth of its local hosts.</p></div>
              <div className="filters">{categories.map(c => <button key={c} className={category===c?"filter active-filter":"filter"} onClick={() => setCategory(c)}>{c}</button>)}</div>
              <div className="experience-grid">
                {filtered.map(item => <article className="experience-card" key={item.id}>
                  <div className="experience-image" style={{backgroundImage:`url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85)`}}>
                    <span className="image-tag">{item.tag}</span>
                    <button className={saved.includes(item.id)?"save saved":"save"} onClick={() => setSaved(old => old.includes(item.id)?old.filter(x=>x!==item.id):[...old,item.id])} aria-label="Save experience"><Bookmark size={17} fill={saved.includes(item.id)?"currentColor":"none"}/></button>
                  </div>
                  <div className="card-content"><div className="card-meta"><span>{item.category}</span><span>·</span><span>{item.region}</span></div><h3>{item.title}</h3><div className="location"><MapPin size={14}/>{item.place}</div><p>{item.description}</p><div className="card-bottom"><span><Clock3 size={14}/>{item.date}</span><strong>{item.price}</strong></div><button className="card-link" onClick={() => setNotice(`${item.title}: booking details are coming soon. This prototype demonstrates the discovery experience.`)}>View experience <ArrowUpRight size={15}/></button></div>
                </article>)}
              </div>
              {filtered.length===0 && <div className="empty">No experiences found. Try another keyword or category.</div>}
            </div>
          </section>

          <section className="guide-band">
            <div className="guide-image"></div><div className="guide-copy"><div className="section-kicker light">TRAVEL WITH UNDERSTANDING</div><h2>Be a guest.<br/><em>Not just a visitor.</em></h2><p>Culture deserves curiosity and respect. Our cultural guides help you understand local etiquette, context and the meaning behind every experience.</p><div className="guide-points"><span><ShieldCheck/> Community-reviewed insights</span><span><Languages/> Bahasa Indonesia · English · Russian</span></div><button className="outline-cta" onClick={() => setNotice("The cultural guide preview is coming soon.")}>Explore cultural guides <ArrowRight size={16}/></button></div>
          </section>
        </>
      ) : (
        <>
          <section className="connect-hero">
            <div className="section-kicker light">YOUR ROOTS. YOUR PEOPLE. YOUR STORIES.</div>
            <h1>Heritage connects<br/>us, wherever <em>we are.</em></h1>
            <p>A place for Indonesians to find their cultural community, share knowledge and keep traditions close, even from afar.</p>
            <div className="connect-search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find a culture, language or hometown..."/></div>
          </section>
          <section className="section community-section">
            <div className="section-heading"><div><div className="section-kicker">FIND YOUR CIRCLE</div><h2>There is a place<br/>for <em>your story.</em></h2></div><p>Meet people who share your heritage. Exchange stories, practise your language and take part in community gatherings.</p></div>
            <div className="community-grid">{communities.filter(c=>`${c.name} ${c.region} ${c.detail}`.toLowerCase().includes(search.toLowerCase())).map(c=><article className="community-card" key={c.name}><div className={`community-art ${c.color}`}><span>{c.initials}</span><small>EST. IN CULTURE</small></div><div className="community-info"><div className="community-meta"><span>{c.region}</span><span><Users size={13}/>{c.members} members</span></div><h3>{c.name}</h3><p>{c.detail}</p><button className={joined.includes(c.name)?"joined-btn":"join-btn"} onClick={()=>join(c.name)}>{joined.includes(c.name)?"Joined ✓":"Join community"} <ArrowRight size={15}/></button></div></article>)}</div>
            <div className="community-note"><MessageCircle/><div><strong>Your community, your voice.</strong><p>Community members can organise language circles, cultural classes and local gatherings. Events can also be discovered by visitors on the Discover calendar.</p></div></div>
          </section>
        </>
      )}

      <section className="passport">
        <div className="passport-icon"><Award size={34}/></div><div><div className="section-kicker light">COLLECT MOMENTS, NOT JUST MILES</div><h2>Your cultural passport<br/><em>starts here.</em></h2><p>Every workshop, gathering and story adds a new stamp to your journey.</p></div><button onClick={()=>setNotice("Your cultural passport will be available when accounts are enabled.")}>Discover the passport <ArrowRight size={16}/></button><div className="passport-stamp">NUSA<br/>KULTUR<br/><span>✳</span><small>INDONESIA</small></div>
      </section>

      <footer><div className="footer-main"><a className="brand footer-brand" href="#"><span className="brand-mark">N</span><span>Nusa<span className="brand-light">Kultur</span><small>INDONESIA, IN EVERY STORY</small></span></a><p>Discover the soul of Indonesia.<br/>Connect with the people who keep it alive.</p><div className="footer-links"><a href="#" onClick={()=>setActive("Discover")}>Discover</a><a href="#" onClick={()=>setActive("Connect")}>Connect</a><a href="#about">Our purpose</a><a href="mailto:hello@nusakultur.id">Contact</a></div></div><div className="footer-bottom"><span>© 2026 NusaKultur. Made with respect for every story.</span><span>BUILT ON CULTURE. CONNECTED BY COMMUNITY.</span></div></footer>
    </main>
  );
}
