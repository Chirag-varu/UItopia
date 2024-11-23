import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Subscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-black border-white dark:bg-gray-800/50 border-2 rounded-xl p-6 md:p-12 w-full max-w-xl mx-auto">
      <form onSubmit={handleSubscribe} className="w-full">
        {!isSubscribed ? (
          <>
            <p className="text-white text-xl md:text-3xl mb-5 text-center">
              Get notified when new stuff drops.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Input
                type="email"
                className="rounded-full w-full bg-[#666565] text-white placeholder:text-white p-3 md:p-4"
                placeholder="Enter your email"
                required
              />
              <Button
                type="submit"
                className="group bg-white text-black rounded-full px-4 py-3 w-full sm:w-auto md:px-6 md:py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              >
                Subscribe
                <ArrowRight
                  className="ml-2 opacity-60 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </div>
          </>
        ) : (
          <p className="text-white text-xl md:text-3xl text-center">
            🎉 You will be notified when new stuff drops!
          </p>
        )}
      </form>
    </div>
  );
}
