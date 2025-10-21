import { useCallback, useEffect, useRef, useState } from "react";

export interface UseChatIndicatorOptions {
  enabled?: boolean;
  inactivityDelay?: number;
  isOpen?: boolean;
}

export const useChatIndicator = ({
  enabled = true,
  inactivityDelay = 5000,
  isOpen = false,
}: UseChatIndicatorOptions = {}) => {
  const [showIndicatorPopup, setShowIndicatorPopup] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const indicatorPopupShownRef = useRef(false);

  useEffect(() => {
    if (!enabled || isOpen || indicatorPopupShownRef.current) return;

    const resetTimer = () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      inactivityTimerRef.current = setTimeout(() => {
        if (!isOpen && !indicatorPopupShownRef.current) {
          setShowIndicatorPopup(true);
          indicatorPopupShownRef.current = true;
        }
      }, inactivityDelay);
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start timer on mount
    resetTimer();

    // Listen for user activity
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("mousedown", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [enabled, isOpen, inactivityDelay]);

  // Close popup when isOpen becomes true
  useEffect(() => {
    if (isOpen) {
      setShowIndicatorPopup(false);
    }
  }, [isOpen]);

  const closeIndicatorPopup = useCallback(() => {
    setShowIndicatorPopup(false);
  }, []);

  const resetIndicatorPopupShown = useCallback(() => {
    indicatorPopupShownRef.current = false;
  }, []);

  return {
    showIndicatorPopup,
    closeIndicatorPopup,
    resetIndicatorPopupShown,
  };
};
