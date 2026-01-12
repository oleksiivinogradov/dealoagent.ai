import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from './ui/button';
import blogPosts from '../data/blogPosts.json';
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>DealoAgent Blog - AI Sales Insights & Case Studies</title>
        <meta name="description" content="Explore the latest insights on AI-powered sales intelligence, real customer success stories of recruiting agencies, venture capitals and software sales." />
        <link rel="canonical" href="https://dealoagent.ai/blog/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 backdrop-blur-sm">
            <Tag className="h-5 w-5 text-blue-400" />
            <span className="text-lg text-blue-100">Insights & Case Studies</span>
          </div>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl text-white">
            DealoAgent Blog
          </h1>

          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Real stories, proven strategies, and insights on AI-powered sales intelligence
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block rounded-full bg-purple-100 px-6 py-2 text-sm font-medium text-purple-700">
                Featured Story
              </span>
            </div>

            <Link to={`/blog/${featuredPost.slug}`} className="group">
              <div className="grid gap-8 lg:grid-cols-2 rounded-3xl border-2 border-blue-200 bg-white p-8 hover:border-blue-400 hover:shadow-2xl transition-all">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl lg:text-4xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="mb-6 text-lg text-gray-600">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all">
                    Read full story
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl text-gray-900">Latest Articles</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mb-4 text-gray-600 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl text-white">
            Stay Updated
          </h2>
          <p className="mb-8 text-xl text-blue-100/80">
            Get the latest insights on AI-powered sales delivered to your inbox
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.location.href = 'mailto:alex@dealoagent.ai?subject=Newsletter Signup'}
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
}

