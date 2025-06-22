import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Trophy, Star, ChevronRight, Gamepad2, Cpu, Zap, Award, MapPin, Clock, User, Play, Download, Share2, Heart, Eye, GitBranch, Terminal, Layers, Sparkles, ArrowRight, CheckCircle, Timer, Target, Rocket, Brain, Coffee, Medal, Sword, Shield, Crown, Flame, Headphones } from 'lucide-react';

const eventStats = [
  { label: 'Gamers', value: '180+', icon: Users, color: 'from-red-500 to-orange-500' },
  { label: 'Prize Pool', value: '₹75K', icon: Trophy, color: 'from-yellow-500 to-amber-500' },
  { label: 'Duration', value: '3 Days', icon: Clock, color: 'from-purple-500 to-pink-500' },
  { label: 'Teams', value: '45', icon: Shield, color: 'from-green-500 to-emerald-500' }
];

const timeline = [
  {
    time: 'Day 1 - 10:00 AM',
    title: 'Opening Ceremony',
    description: 'Grand opening with team registrations and tournament briefing',
    icon: Rocket,
    status: 'completed'
  },
  {
    time: 'Day 1 - 11:00 AM',
    title: 'Valorant Qualifiers',
    description: 'Intense 5v5 tactical shooter matches begin',
    icon: Sword,
    status: 'completed'
  },
  {
    time: 'Day 1 - 3:00 PM',
    title: 'FIFA 24 Tournament',
    description: 'Football simulation championship kicks off',
    icon: Trophy,
    status: 'completed'
  },
  {
    time: 'Day 2 - 10:00 AM',
    title: 'CS2 Championships',
    description: 'Counter-Strike 2 professional matches',
    icon: Target,
    status: 'completed'
  },
  {
    time: 'Day 2 - 4:00 PM',
    title: 'Mobile Gaming Arena',
    description: 'BGMI and Free Fire mobile tournaments',
    icon: Gamepad2,
    status: 'completed'
  },
  {
    time: 'Day 3 - 2:00 PM',
    title: 'Grand Finals',
    description: 'Championship matches across all games',
    icon: Crown,
    status: 'completed'
  },
  {
    time: 'Day 3 - 6:00 PM',
    title: 'Victory Ceremony',
    description: 'Champions crowned and prizes distributed',
    icon: Medal,
    status: 'completed'
  }
];

const games = [
  {
    title: 'Valorant',
    description: 'Tactical 5v5 character-based tactical shooter',
    icon: Sword,
    participants: 60,
    color: 'from-red-500 to-pink-600',
    prize: '₹25,000',
    teams: 12,
    format: '5v5 Elimination'
  },
  {
    title: 'Counter-Strike 2',
    description: 'Classic competitive FPS with strategic gameplay',
    icon: Target,
    participants: 50,
    color: 'from-orange-500 to-red-600',
    prize: '₹20,000',
    teams: 10,
    format: '5v5 Bomb Defusal'
  },
  {
    title: 'FIFA 24',
    description: 'Ultimate football simulation experience',
    icon: Trophy,
    participants: 32,
    color: 'from-green-500 to-emerald-600',
    prize: '₹15,000',
    teams: 32,
    format: '1v1 Tournament'
  },
  {
    title: 'Mobile Gaming',
    description: 'BGMI & Free Fire mobile battle royale',
    icon: Gamepad2,
    participants: 38,
    color: 'from-purple-500 to-indigo-600',
    prize: '₹15,000',
    teams: 8,
    format: 'Squad Battles'
  }
];

const winners = [
  {
    position: '1st Place',
    team: 'Phoenix Esports',
    game: 'Valorant Championship',
    members: ['Arjun "Phantom" Kumar', 'Rohit "Viper" Singh', 'Karan "Sage" Patel', 'Vikram "Jett" Sharma', 'Ankit "Omen" Gupta'],
    prize: '₹25,000',
    description: 'Dominated the Valorant tournament with exceptional teamwork and strategic gameplay. Their coordinated attacks and defensive setups were unmatched throughout the competition.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { 'K/D Ratio': '2.4', 'Win Rate': '87%', 'Rounds Won': '42/48' }
  },
  {
    position: '2nd Place',
    team: 'Cyber Wolves',
    game: 'Counter-Strike 2',
    members: ['Rahul "AWPer" Mehta', 'Siddharth "Rifler" Jain', 'Prateek "IGL" Agarwal', 'Harsh "Entry" Verma', 'Nikhil "Support" Shah'],
    prize: '₹20,000',
    description: 'Showcased incredible precision and tactical awareness in CS2. Their clutch plays and strategic rotations kept audiences on the edge of their seats.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { 'Headshot %': '68%', 'Clutch Rate': '45%', 'Maps Won': '12/15' }
  },
  {
    position: '3rd Place',
    team: 'Digital Gladiators',
    game: 'FIFA 24 Tournament',
    members: ['Aman "Striker" Kapoor', 'Varun "Midfielder" Reddy', 'Akash "Defender" Nair'],
    prize: '₹15,000',
    description: 'Demonstrated exceptional football gaming skills with creative plays and tactical formations. Their understanding of the game mechanics was truly impressive.',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { 'Goals Scored': '28', 'Pass Accuracy': '89%', 'Matches Won': '8/10' }
  }
];

const reviews = [
  {
    name: 'Ameetesh Awadh',
    role: 'Competitive Gamer',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'CSTC Esports Championship 2024 was absolutely phenomenal! The 3-day tournament was perfectly organized with top-tier gaming setups and an electric atmosphere. The competition level was insane and the prize pool made it even more exciting!',
    rating: 5,
    game: 'Valorant Semi-Finalist'
  },
  {
    name: 'Aditi Rajput',
    role: 'Gaming Enthusiast',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The energy at the esports championship was unmatched! Three days of non-stop gaming action with incredible players and amazing organization. The live streaming setup and commentary made it feel like a professional tournament.',
    rating: 5,
    game: 'FIFA 24 Quarter-Finalist'
  },
  {
    name: 'Keshav Mittal',
    role: 'Pro Gamer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'This was hands down the best esports event I\'ve participated in! The tournament structure, gaming equipment, and overall production quality rivaled professional esports events. Can\'t wait for next year!',
    rating: 5,
    game: 'CS2 Champion Runner-up'
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeGame, setActiveGame] = useState(0);
  const [currentWinner, setCurrentWinner] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinner((prev) => (prev + 1) % winners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Gaming-themed Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
        
        {/* Gaming particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-red-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  CSTC Esports
                </span>
                <p className="text-xs text-gray-400">Championship 2024</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors relative group">
                Overview
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-white transition-colors relative group">
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('champions')} className="text-gray-300 hover:text-white transition-colors relative group">
                Champions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-white transition-colors relative group">
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Flame className="h-4 w-4 text-red-400" />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                3-Day Gaming Marathon • March 22-24, 2024
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent">
                ESPORTS
              </span>
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">
                CHAMPIONSHIP
              </span>
              <span className="text-2xl md:text-4xl font-normal text-gray-400 block mt-4">
                2024
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              The ultimate gaming battleground. 180+ elite gamers, 3 days of intense competition, 
              and ₹75,000 in prizes. South Asian University's premier esports championship.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {eventStats.map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('champions')}
              className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
            >
              <span className="relative z-10 flex items-center">
                View Champions
                <Crown className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('games')}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <span className="flex items-center">
                Explore Games
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Tournament Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three days of non-stop gaming action across multiple competitive titles
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center ${index % 2 !== 0 ? 'order-2' : ''}`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className={index % 2 !== 0 ? 'order-1' : ''}>
                        <p className="text-sm text-red-400 font-medium">{item.time}</p>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                    <div className="flex items-center mt-3">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-sm text-green-400">Completed</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-4 border-black"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Tournament Games
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four competitive gaming titles that defined the championship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  activeGame === index ? 'ring-2 ring-red-500/50 bg-white/10' : ''
                }`}
                onClick={() => setActiveGame(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <game.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{game.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{game.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Prize Pool</span>
                      <span className="text-lg font-bold text-yellow-400">{game.prize}</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Teams</span>
                      <span className="text-lg font-bold text-white">{game.teams}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-400">{game.participants} players</span>
                  </div>
                  <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                    {game.format}
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${game.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section id="champions" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Gaming Champions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the elite gamers who dominated the competition and claimed victory
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 ${
                  index === 0 ? 'lg:scale-105 ring-2 ring-yellow-500/30' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={winner.image} 
                    alt={winner.game}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' :
                      'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                    }`}>
                      {winner.position}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{winner.team}</h3>
                    <p className="text-gray-200 text-sm">{winner.game}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-2xl font-bold text-yellow-400">{winner.prize}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-400">{winner.members.length} players</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{winner.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-2">Team Roster:</p>
                      <div className="space-y-1">
                        {winner.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-400">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-2">Tournament Stats:</p>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(winner.stats).map(([key, value], statIndex) => (
                          <div key={statIndex} className="bg-white/5 rounded-lg p-2 text-center">
                            <div className="text-xs text-gray-400">{key}</div>
                            <div className="text-sm font-bold text-white">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Player Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from the competitive gamers who experienced the thrill of championship gaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Gamepad2 className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white text-lg">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                    <p className="text-red-400 text-xs mt-1">{review.game}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 leading-relaxed italic relative">
                  <span className="text-4xl text-red-400/30 absolute -top-2 -left-2">"</span>
                  {review.review}
                  <span className="text-4xl text-red-400/30 absolute -bottom-4 -right-2">"</span>
                </blockquote>

                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    CSTC Esports Championship
                  </span>
                  <p className="text-sm text-gray-400">South Asian University</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Three days of competitive gaming excellence. Thank you to all the talented gamers 
                who made this championship an unforgettable esports experience.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>South Asian University, New Delhi</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Tournament Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Gamers</span>
                  <span className="text-white font-medium">180+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams</span>
                  <span className="text-white font-medium">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Matches Played</span>
                  <span className="text-white font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool</span>
                  <span className="text-white font-medium">₹75,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-3 text-gray-400">
                <p>Email: cstc@sau.ac.in</p>
                <p>Phone: +91 11 2653 7000</p>
                <div className="flex space-x-4 mt-6">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <Share2 className="h-4 w-4" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <Download className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 CSTC Esports Championship • Computer Science & Technology Club, South Asian University. 
              <span className="text-red-400 ml-2">Game on!</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;