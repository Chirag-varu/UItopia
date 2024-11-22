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
    <div className="flex items-center justify-center gap-3 bg-black border-white border-2 rounded-xl p-12">
      <form onSubmit={handleSubscribe}>
        {!isSubscribed ? (
          <>
            <p className="text-white text-3xl mb-3">
              Get notified when new stuff drops.
            </p>
            <div
              className="space-y-2 flex"
              style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
            >
              <Input
                type="email"
                className="rounded-full w-[19rem] bg-[#666565] text-white p-3 mr-2 mt-2"
                placeholder="Enter your email"
                required
              />
              <Button
                type="submit"
                className="group bg-white text-black rounded-full p-3 w-[8rem] hover:bg-white hover:text-black transition-colors"
              >
                Subscribe
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:fill-white"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </div>
          </>
        ) : (
          <p className="text-white text-3xl">
            🎉 You will be notified when new stuff drops!
          </p>
        )}
      </form>
    </div>
  );
}
