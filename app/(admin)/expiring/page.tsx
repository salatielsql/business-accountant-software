"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, CreditCard, Calendar, AlertTriangle } from "lucide-react";

const ExpiringSubscription = () => {
  // Mock expiration date (3 days from now)
  const expirationDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = expirationDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg p-3">
      <span className="text-2xl font-bold text-blue-600">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
            <AlertTriangle className="h-6 w-6" />
            <CardTitle>Your Subscription is Expiring Soon</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          {/* Alert Banner */}
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              Your premium features will be disabled when your subscription
              expires. Renew now to maintain uninterrupted access.
            </AlertDescription>
          </Alert>

          {/* Countdown Timer */}
          <div className="mb-8">
            <h3 className="text-center text-gray-600 mb-4 flex items-center justify-center">
              <Clock className="mr-2 h-5 w-5" />
              Time Remaining Until Expiration
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          {/* Subscription Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-700 mb-4">
              Current Subscription Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                Expiration Date: {expirationDate.toLocaleDateString()}
              </div>
              <div className="flex items-center text-gray-600">
                <CreditCard className="h-5 w-5 mr-2" />
                Plan: Premium (Annual)
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
              Renew Subscription Now
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" className="w-1/2">
                Change Plan
              </Button>
              <Button variant="outline" className="w-1/2">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Help Text */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Questions about your subscription?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              View our FAQ
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpiringSubscription;
