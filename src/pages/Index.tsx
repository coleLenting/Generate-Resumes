
import React from 'react';
import { ResumeBuilder } from '@/components/ResumeBuilder';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Executive Resume Builder
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create professional, executive-level resumes with AI-powered content optimization. 
            Designed for leaders who demand excellence.
          </p>
          <div className="mt-6 text-sm text-slate-500">
          </div>
        </div>
        <ResumeBuilder />
      </div>
    </div>
  );
};

export default Index;
