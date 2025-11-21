import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Tag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import blogPosts from '../data/blogPosts.json';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
  content: ContentBlock[];
}

interface ContentBlock {
  type: string;
  text?: string;
  level?: number;
  author?: string;
  items?: string[];
  data?: MetricData[];
  url?: string;
  alt?: string;
  caption?: string;
  title?: string;
  description?: string;
  primaryButton?: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
}

interface MetricData {
  label: string;
  value: string;
  description: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug) as BlogPost | undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post Not Found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const renderContent = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
            {block.text}
          </p>
        );

      case 'heading':
        if (block.level === 2) {
          return (
            <h2 key={index} className="mt-12 mb-6 text-3xl font-bold text-gray-900">
              {block.text}
            </h2>
          );
        } else if (block.level === 3) {
          return (
            <h3 key={index} className="mt-10 mb-4 text-2xl font-bold text-gray-900">
              {block.text}
            </h3>
          );
        }
        return null;

      case 'quote':
        return (
          <blockquote key={index} className="my-8 border-l-4 border-blue-600 bg-blue-50 pl-6 pr-6 py-6 italic rounded-r-lg">
            <p className="text-xl text-gray-800 mb-3">"{block.text}"</p>
            {block.author && (
              <footer className="text-base text-gray-600 not-italic">
                — {block.author}
              </footer>
            )}
          </blockquote>
        );

      case 'list':
        return (
          <ul key={index} className="mb-6 space-y-3 pl-6">
            {block.items?.map((item, i) => (
              <li key={i} className="text-lg text-gray-700 relative pl-2">
                <span className="absolute -left-4 text-blue-600">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        );

      case 'numbered-list':
        return (
          <ol key={index} className="mb-6 space-y-4 pl-6 list-decimal">
            {block.items?.map((item, i) => (
              <li key={i} className="text-lg text-gray-700 pl-2">
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ol>
        );

      case 'image':
        return (
          <figure key={index} className="my-10">
            <img
              src={block.url}
              alt={block.alt || ''}
              className="w-full rounded-xl shadow-lg"
            />
            {block.caption && (
              <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'metrics':
        return (
          <div key={index} className="my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.data?.map((metric, i) => (
              <div key={i} className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold">
                  {metric.value}
                </div>
                <div className="mb-2 text-lg font-semibold text-gray-900">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        );

      case 'cta':
        return (
          <div key={index} className="my-12 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{block.title}</h3>
            <p className="mb-6 text-lg text-gray-600">{block.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {block.primaryButton && (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.location.href = block.primaryButton!.url}
                >
                  {block.primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              {block.secondaryButton && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = block.secondaryButton!.url}
                >
                  {block.secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-lg sticky top-16 z-40">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      {/* Article Content - Medium Style */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="-mt-32 relative z-10 mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-lg">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="mb-8 text-xl sm:text-2xl text-gray-200">
              {post.subtitle}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="h-12 w-12 rounded-full border-2 border-blue-200"
              />
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300" />

            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="ml-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {post.content.map((block, index) => renderContent(block, index))}
        </div>

        {/* Tags */}
        <div className="mb-12 flex flex-wrap items-center gap-3 border-t border-b border-gray-200 py-6">
          <Tag className="h-5 w-5 text-gray-400" />
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mb-16 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-8">
          <div className="flex items-start gap-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="h-20 w-20 rounded-full border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Written by {post.author}
              </h3>
              <p className="mb-4 text-gray-600">
                The DealoAgent team shares insights on AI-powered sales intelligence, 
                real customer success stories, and best practices for modern B2B sales teams.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl text-white">
            Ready to Transform Your Sales?
          </h2>
          <p className="mb-8 text-xl text-blue-100/80">
            Join hundreds of teams using DealoAgent to close more deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => window.location.href = 'https://app.dealoagent.ai'}
              >
                Register Now - Get Free Credits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-blue-200/60 text-center">
                🎁 Limited time: Free credits + Referral rewards
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              onClick={() => navigate('/blog')}
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

