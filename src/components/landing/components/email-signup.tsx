import { MailIcon, ArrowRightIcon, UserIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import { useEmailSignup } from '../hooks/useEmailSignup';
import SignupSuccess from './signup-success';

const EmailSignup = () => {
  const { formData, isLoading, message, isSubmitted, handleInputChange, handleSubmit } = useEmailSignup();

  // Show success component if form was successfully submitted
  if (isSubmitted) {
    return <SignupSuccess />;
  }

  return (
    <section className="px-4 py-16 bg-white/20 backdrop-blur-sm">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg">
          <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Be the First to Know
              </h2>
              <p className="text-gray-600">
                Join our exclusive waitlist for early access
              </p>
            </div>

            {/* Message */}
            {message && (
              <div className={`flex items-center gap-2 p-3 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <XCircleIcon className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-900" />
                  </div>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange('firstName')}
                    placeholder="First name"
                    required
                    disabled={isLoading}
                    className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 disabled:opacity-50"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange('lastName')}
                    placeholder="Last name"
                    required
                    disabled={isLoading}
                    className="block w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-900" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="Enter your email address"
                  required
                  disabled={isLoading}
                  className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-900 disabled:opacity-50"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-900 text-white font-medium py-4 px-6 rounded-2xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-sm text-gray-500 text-center">
              No spam, just the good stuff. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup; 