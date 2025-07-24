import { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '@/firebase';
import type { User as FirebaseUser } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, User, Eye, EyeOff } from 'lucide-react';

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      // Optionally handle error
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <section id="login" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-primary to-transparent animate-gradient-shift"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-secondary to-transparent animate-gradient-shift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-accent to-transparent animate-gradient-shift" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Secure Defense Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access classified defense systems with military-grade security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Login Card */}
          <div className="animate-fade-in-left">
            <Card className="bg-gradient-card border-border/50 hover-lift shadow-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-glow-pulse">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">Defense Access</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Authenticate with your defense credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                {user ? (
                  <div className="flex flex-col items-center space-y-4">
                    <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-full border" />
                    <div className="text-lg font-semibold text-foreground">{user.displayName}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                    <Button onClick={handleSignOut} className="w-full bg-gradient-primary text-primary-foreground">Sign Out</Button>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-foreground">Username</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            className="pl-10 bg-input border-border text-foreground"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-foreground">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 bg-input border-border text-foreground"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:shadow-primary text-primary-foreground font-semibold py-3 text-lg transition-all duration-300 hover-scale hover-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                            <span>Authenticating...</span>
                          </div>
                        ) : (
                          'Access Defense Portal'
                        )}
                      </Button>

                      <div className="text-center">
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Forgot your credentials?
                        </a>
                      </div>
                    </form>
                    <div className="my-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm mx-2">or</span>
                    </div>
                    <Button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="w-full bg-white border text-foreground font-semibold py-3 text-lg flex items-center justify-center gap-2 shadow-sm hover:bg-gray-100"
                      disabled={googleLoading}
                    >
                      <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M43.611 20.083h-1.964V20H24v8h11.284C33.962 32.334 29.418 35 24 35c-6.065 0-11-4.935-11-11s4.935-11 11-11c2.507 0 4.81.857 6.654 2.278l6.084-6.084C33.527 6.537 28.973 4.5 24 4.5 12.954 4.5 4 13.454 4 24.5s8.954 20 20 20c9.94 0 19.5-7.5 19.5-20 0-1.341-.138-2.65-.389-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.163 19.01 13 24 13c2.507 0 4.81.857 6.654 2.278l6.084-6.084C33.527 6.537 28.973 4.5 24 4.5c-6.627 0-12.24 4.02-14.694 10.191z"/><path fill="#FBBC05" d="M24 44.5c5.418 0 9.962-2.666 13.284-7.001l-6.284-5.146C28.81 36.143 26.507 37 24 37c-5.01 0-9.365-3.163-11.123-7.51l-6.571 4.819C11.76 40.48 17.373 44.5 24 44.5z"/><path fill="#EA4335" d="M43.611 20.083h-1.964V20H24v8h11.284C34.62 31.334 29.418 35 24 35c-5.418 0-9.962-2.666-13.284-7.001l-6.571 4.819C11.76 40.48 17.373 44.5 24 44.5c9.94 0 19.5-7.5 19.5-20 0-1.341-.138-2.65-.389-3.917z"/></g></svg>
                      {googleLoading ? 'Signing in...' : 'Sign in with Google'}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Defense Features */}
          <div className="animate-fade-in-right space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Aatmanirbhar Defense Technology
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Military-Grade Security",
                  description: "End-to-end encryption with advanced threat protection"
                },
                {
                  icon: Lock,
                  title: "Multi-Factor Authentication",
                  description: "Biometric and token-based verification systems"
                },
                {
                  icon: User,
                  title: "Role-Based Access",
                  description: "Hierarchical permission system for classified data"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-card border border-border/50 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50">
              <div className="text-center">
                <div className="text-3xl mb-2 animate-bounce-gentle">🇮🇳</div>
                <p className="text-sm text-muted-foreground">
                  "Building a self-reliant India through indigenous defense innovation"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;