import { Sparkles } from 'lucide-react';

const SignupSuccess = () => {
  return (
    <section className="px-4 py-16 bg-white/20 backdrop-blur-sm">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg">
          <div className="space-y-6 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                You&apos;re all set!
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Your response has been captured. You&apos;ll get early access to 
                Dryfto and be among the first to explore hidden gems before 
                everyone else.
              </p>
            </div>

            {/* Additional Info */}
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Keep an eye on your inbox for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSuccess; 