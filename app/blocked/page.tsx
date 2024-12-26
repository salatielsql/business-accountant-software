import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle } from "lucide-react";

export default async function Page() {
  const premiumFeatures = [
    "Advanced Analytics",
    "Unlimited Projects",
    "Priority Support",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6">
          {/* Lock Icon */}
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-red-600" />
          </div>

          {/* Main Content */}
          <CardHeader className="text-center px-0">
            <CardTitle className="text-2xl mb-2">Access Blocked</CardTitle>
            <p className="text-gray-600">
              Your current plan doesn&apos;t include access to this feature.
              Upgrade your subscription to unlock premium features and get more
              out of our platform.
            </p>
          </CardHeader>

          {/* Feature List */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-700 mb-3">
              What you&apos;ll get with Premium:
            </h2>
            <ul className="space-y-2">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
            Upgrade to Premium
          </Button>

          {/* Secondary Action */}
          <p className="mt-4 text-sm text-gray-500 text-center">
            Need help?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Contact support
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
