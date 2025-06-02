import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-accent-cyan">Education</span>
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2 flex-shrink-0">
                <img 
                  src="/assets/logos/uoft-logo.png" 
                  alt="University of Toronto Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold text-white">
                    University of Toronto
                  </h3>
                  <span className="text-accent-green font-medium">
                    Toronto, ON
                  </span>
                </div>
                
                <div className="space-y-2 mt-2">
                  <p className="text-lg text-muted-foreground">
                    Bachelor of Science in Computer Science (Specialist) - Currently in Second Year
                  </p>
                  <p className="text-muted-foreground">
                    Expected Graduation - April 2028
                  </p>
                  <p className="text-accent-cyan font-medium">
                    GPA: 3.91/4.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 