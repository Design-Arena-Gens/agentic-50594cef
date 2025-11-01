'use client';

import { useState } from 'react';
import { Search, Briefcase, Users, Star, TrendingUp, Code, Palette, BarChart, Megaphone, Video, Edit, Menu, X } from 'lucide-react';

interface Freelancer {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  skills: string[];
  avatar: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  skills: string[];
  posted: string;
  proposals: number;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'freelancers' | 'projects'>('freelancers');

  const categories = [
    { name: 'Development', icon: Code, count: 1234 },
    { name: 'Design', icon: Palette, count: 856 },
    { name: 'Marketing', icon: Megaphone, count: 642 },
    { name: 'Analytics', icon: BarChart, count: 421 },
    { name: 'Video', icon: Video, count: 389 },
    { name: 'Writing', icon: Edit, count: 512 },
  ];

  const freelancers: Freelancer[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Full Stack Developer',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      avatar: '👩‍💻',
      category: 'Development'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'UI/UX Designer',
      rating: 5.0,
      reviews: 94,
      hourlyRate: 75,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      avatar: '👨‍🎨',
      category: 'Design'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      title: 'Digital Marketing Specialist',
      rating: 4.8,
      reviews: 156,
      hourlyRate: 65,
      skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      avatar: '👩‍💼',
      category: 'Marketing'
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      title: 'Mobile App Developer',
      rating: 4.9,
      reviews: 83,
      hourlyRate: 90,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      avatar: '👨‍💻',
      category: 'Development'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      title: 'Content Writer',
      rating: 4.7,
      reviews: 211,
      hourlyRate: 50,
      skills: ['Copywriting', 'SEO Writing', 'Technical Writing', 'Editing'],
      avatar: '✍️',
      category: 'Writing'
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Data Analyst',
      rating: 4.9,
      reviews: 67,
      hourlyRate: 80,
      skills: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
      avatar: '📊',
      category: 'Analytics'
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      description: 'Looking for an experienced developer to build a modern e-commerce platform with payment integration and admin dashboard.',
      budget: '$5,000 - $10,000',
      skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      posted: '2 hours ago',
      proposals: 12
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      description: 'Need a creative designer to create mockups and prototypes for a fitness tracking mobile application.',
      budget: '$2,000 - $4,000',
      skills: ['Figma', 'Mobile Design', 'Prototyping', 'User Research'],
      posted: '5 hours ago',
      proposals: 8
    },
    {
      id: 3,
      title: 'SEO & Content Marketing Campaign',
      description: 'Seeking a marketing expert to develop and execute a comprehensive SEO strategy for our SaaS product.',
      budget: '$3,000 - $6,000',
      skills: ['SEO', 'Content Strategy', 'Google Analytics', 'Link Building'],
      posted: '1 day ago',
      proposals: 23
    },
    {
      id: 4,
      title: 'Video Editing for YouTube Channel',
      description: 'Looking for a talented video editor to create engaging content for our tech review channel.',
      budget: '$500 - $1,500',
      skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics'],
      posted: '3 hours ago',
      proposals: 15
    },
    {
      id: 5,
      title: 'Python Data Analysis Script',
      description: 'Need a Python developer to create automated data processing and visualization scripts for sales data.',
      budget: '$1,000 - $2,500',
      skills: ['Python', 'Pandas', 'Data Visualization', 'Automation'],
      posted: '6 hours ago',
      proposals: 19
    },
    {
      id: 6,
      title: 'Logo & Brand Identity Design',
      description: 'Startup looking for a designer to create a complete brand identity including logo, color palette, and style guide.',
      budget: '$800 - $2,000',
      skills: ['Illustrator', 'Branding', 'Logo Design', 'Typography'],
      posted: '4 hours ago',
      proposals: 31
    },
  ];

  const filteredFreelancers = freelancers.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">FreelanceHub</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition">Find Work</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition">Find Talent</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition">How It Works</a>
              <button className="text-gray-700 hover:text-primary-600 transition">Log In</button>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">Sign Up</button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-primary-600">Find Work</a>
              <a href="#" className="block text-gray-700 hover:text-primary-600">Find Talent</a>
              <a href="#" className="block text-gray-700 hover:text-primary-600">How It Works</a>
              <button className="block w-full text-left text-gray-700 hover:text-primary-600">Log In</button>
              <button className="block w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find The Perfect <span className="text-primary-600">Freelance</span> Services
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with talented freelancers or discover your next project. Join thousands of professionals in our thriving marketplace.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-xl shadow-lg">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search for freelancers or projects..."
                  className="w-full outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">50K+</div>
            <div className="text-gray-600 mt-2">Active Freelancers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">100K+</div>
            <div className="text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">98%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition cursor-pointer text-center"
                >
                  <Icon className="h-10 w-10 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.count} skills</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Freelancers & Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('freelancers')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'freelancers'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="inline h-5 w-5 mr-2" />
              Top Freelancers
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'projects'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Briefcase className="inline h-5 w-5 mr-2" />
              Latest Projects
            </button>
          </div>
        </div>

        {/* Freelancers Grid */}
        {activeTab === 'freelancers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFreelancers.map((freelancer) => (
              <div key={freelancer.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{freelancer.avatar}</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{freelancer.name}</h3>
                      <p className="text-gray-600 text-sm">{freelancer.title}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold ml-1">{freelancer.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({freelancer.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill) => (
                    <span key={skill} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${freelancer.hourlyRate}</span>
                    <span className="text-gray-500 text-sm">/hour</span>
                  </div>
                  <button className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl text-gray-900">{project.title}</h3>
                  <span className="text-primary-600 font-bold text-lg">{project.budget}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>{project.proposals} proposals</span>
                    <span className="mx-2">•</span>
                    <span>{project.posted}</span>
                  </div>
                  <button className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of freelancers and clients already growing their business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Find Freelancers
            </button>
            <button className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition text-lg border-2 border-white">
              Post a Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold text-white">FreelanceHub</span>
              </div>
              <p className="text-sm">The leading platform for freelancers and businesses to connect and collaborate.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Clients</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400 transition">Find Freelancers</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Post a Project</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400 transition">Find Work</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Create Profile</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
