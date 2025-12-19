import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { cosmicEvents } from '../constants/constants';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = cosmicEvents.find(
    (item) =>
      item.title.toLowerCase().replace(/ /g, '-').replace(/[?¿]/g, '') === slug
  );
  if (!article) return <Navigate to="/astrologia" />;

  return (
    <main className="container mx-auto px-6 py-20 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-violet-400">
        {article.title}
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={article.image}
          alt={article.title}
          className="rounded-2xl shadow-2xl border border-violet-900/50"
        />
        <div className="text-lg leading-relaxed text-gray-300">
          {article.content}
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
